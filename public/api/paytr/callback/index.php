<?php
declare(strict_types=1);
require dirname(__DIR__, 2) . '/_common.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') tmx_text(405, 'method not allowed');
try {
    $config = tmx_config();
    $orderId = (string) ($_POST['merchant_oid'] ?? '');
    $status = (string) ($_POST['status'] ?? '');
    $totalAmount = (string) ($_POST['total_amount'] ?? '');
    $hash = (string) ($_POST['hash'] ?? '');
    if (!preg_match(TMX_ORDER_ID_PATTERN, $orderId) || !in_array($status, ['success', 'failed'], true) || !ctype_digit($totalAmount) || $hash === '') tmx_text(400, 'invalid callback');
    $calculated = base64_encode(hash_hmac('sha256', $orderId . $config['merchant_salt'] . $status . $totalAmount, $config['merchant_key'], true));
    if (!hash_equals($calculated, $hash)) tmx_text(400, 'invalid hash');
    $order = tmx_get_order($orderId);
    if ($order === null) tmx_text(404, 'order not found');
    if (in_array($order['status'] ?? '', ['success', 'failed'], true)) tmx_text(200, 'OK');
    $order['status'] = $status;
    $order['paidAmount'] = (int) $totalAmount;
    $order['failedReasonMessage'] = $status === 'failed' ? mb_substr((string) ($_POST['failed_reason_msg'] ?? ''), 0, 250) : null;
    $order['updatedAt'] = gmdate('c');
    tmx_set_order($orderId, $order);
    tmx_text(200, 'OK');
} catch (Throwable $error) {
    error_log('[paytr] Callback error: ' . $error->getMessage());
    tmx_text(500, 'callback error');
}

