<?php
declare(strict_types=1);
require dirname(__DIR__, 2) . '/_common.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    tmx_json(405, ['error' => 'Method not allowed']);
}

try {
    $config = tmx_config();
    $origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
    $allowedOrigins = $config['allowed_origins'] ?? [];
    if ($origin !== '' && (!is_array($allowedOrigins) || !in_array($origin, $allowedOrigins, true))) {
        tmx_json(403, ['error' => 'Bu kaynaktan ödeme başlatılamaz.']);
    }

    $body = tmx_body();
    $products = [
        'yazilim:basic' => ['title' => 'Başlangıç', 'amount' => 19500],
        'yazilim:plus' => ['title' => 'Uzman', 'amount' => 27500],
        'yazilim:extreme' => ['title' => 'Üst Düzey', 'amount' => 35500],
        'egitim:pazaryeri' => ['title' => 'Pazaryeri Stoksuz E-Ticaret Kurulum Paketi', 'amount' => 12500],
        'egitim:sifir-sermaye' => ['title' => 'Sıfır Risk E-Ticaret Sitesi Paketi', 'amount' => 18500],
        'egitim:full-full' => ['title' => "Full + Full 2'si Bir Arada Paketi", 'amount' => 28500],
    ];
    $productKey = (string) ($body['productType'] ?? '') . ':' . (string) ($body['productSourceId'] ?? '');
    $product = $products[$productKey] ?? null;
    if (!is_array($product)) {
        tmx_json(400, ['error' => 'Geçersiz ürün seçimi.']);
    }

    $customer = is_array($body['customer'] ?? null) ? $body['customer'] : [];
    $acceptances = is_array($body['acceptances'] ?? null) ? $body['acceptances'] : [];
    $fullName = trim((string) ($customer['fullName'] ?? ''));
    $email = strtolower(trim((string) ($customer['email'] ?? '')));
    $phone = preg_replace('/[\s()-]/', '', trim((string) ($customer['phone'] ?? ''))) ?? '';
    $address = trim((string) ($customer['address'] ?? ''));
    if (mb_strlen($fullName) < 3 || mb_strlen($fullName) > 60) tmx_json(400, ['error' => 'Ad soyad 3-60 karakter arasında olmalıdır.']);
    if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) tmx_json(400, ['error' => 'Geçerli bir e-posta adresi girin.']);
    if (!preg_match('/^\+?[0-9]{10,15}$/', $phone)) tmx_json(400, ['error' => 'Geçerli bir telefon numarası girin.']);
    if (mb_strlen($address) < 10 || mb_strlen($address) > 400) tmx_json(400, ['error' => 'Fatura adresi 10-400 karakter arasında olmalıdır.']);
    foreach (['privacyNotice', 'preInformation', 'distanceSales', 'earlyPerformance'] as $acceptance) {
        if (($acceptances[$acceptance] ?? null) !== true) tmx_json(400, ['error' => 'Ödeme öncesi bilgilendirme ve sözleşme onayları eksik.']);
    }

    $orderId = 'TMX' . bin2hex(random_bytes(16));
    $orderToken = rtrim(strtr(base64_encode(random_bytes(24)), '+/', '-_'), '=');
    $paymentAmount = (int) round(((float) $product['amount']) * 100);
    $basket = base64_encode(json_encode([[$product['title'], number_format((float) $product['amount'], 2, '.', ''), 1]], JSON_UNESCAPED_UNICODE));
    $testMode = !empty($config['test_mode']) ? '1' : '0';
    $hashInput = $config['merchant_id'] . tmx_client_ip() . $orderId . $email . $paymentAmount . $basket . '00TL' . $testMode . $config['merchant_salt'];
    $paytrToken = base64_encode(hash_hmac('sha256', $hashInput, $config['merchant_key'], true));
    $createdAt = gmdate('c');
    $order = [
        'orderId' => $orderId,
        'publicToken' => $orderToken,
        'status' => 'token_requested',
        'createdAt' => $createdAt,
        'customer' => ['fullName' => $fullName, 'email' => $email, 'phone' => $phone, 'address' => $address],
        'product' => ['title' => $product['title'], 'amountTRY' => $product['amount']],
        'expectedAmount' => $paymentAmount,
        'acceptances' => ['privacyNotice' => true, 'preInformation' => true, 'distanceSales' => true, 'earlyPerformance' => true, 'version' => '2026-08-23', 'acceptedAt' => $createdAt, 'ip' => tmx_client_ip()],
    ];
    tmx_set_order($orderId, $order);

    $returnParams = ['siparis' => $orderId, 'anahtar' => $orderToken];
    $payload = [
        'merchant_id' => $config['merchant_id'], 'user_ip' => tmx_client_ip(), 'merchant_oid' => $orderId,
        'email' => $email, 'payment_amount' => (string) $paymentAmount, 'paytr_token' => $paytrToken,
        'user_basket' => $basket, 'debug_on' => !empty($config['debug_on']) ? '1' : '0',
        'no_installment' => '0', 'max_installment' => '0', 'user_name' => $fullName,
        'user_address' => $address, 'user_phone' => $phone,
        'merchant_ok_url' => tmx_return_url($config['ok_url'], $returnParams + ['durum' => 'kontrol']),
        'merchant_fail_url' => tmx_return_url($config['fail_url'], $returnParams + ['durum' => 'basarisiz']),
        'timeout_limit' => (string) ($config['timeout_limit'] ?? 30), 'currency' => 'TL',
        'test_mode' => $testMode, 'lang' => 'tr',
    ];

    $curl = curl_init('https://www.paytr.com/odeme/api/get-token');
    curl_setopt_array($curl, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => http_build_query($payload), CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 20, CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded']]);
    $rawResponse = curl_exec($curl);
    $httpCode = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    curl_close($curl);
    $response = is_string($rawResponse) ? json_decode($rawResponse, true) : null;
    if ($httpCode < 200 || $httpCode >= 300 || !is_array($response) || ($response['status'] ?? '') !== 'success' || empty($response['token'])) {
        $order['status'] = 'token_failed'; $order['updatedAt'] = gmdate('c'); tmx_set_order($orderId, $order);
        error_log('[paytr] Token request failed: ' . (string) ($response['reason'] ?? $httpCode));
        tmx_json(502, ['error' => 'Ödeme oturumu oluşturulamadı. Lütfen tekrar deneyin.']);
    }

    $order['status'] = 'pending'; $order['updatedAt'] = gmdate('c'); tmx_set_order($orderId, $order);
    tmx_json(200, ['token' => $response['token'], 'iframeUrl' => 'https://www.paytr.com/odeme/guvenli/' . $response['token'], 'orderId' => $orderId, 'orderToken' => $orderToken]);
} catch (Throwable $error) {
    error_log('[paytr] Token endpoint error: ' . $error->getMessage());
    tmx_json(500, ['error' => 'Ödeme başlatılırken beklenmeyen bir hata oluştu.']);
}

