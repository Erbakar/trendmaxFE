<?php
declare(strict_types=1);
require dirname(__DIR__, 2) . '/_common.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') tmx_json(405, ['error' => 'Method not allowed']);
try {
    $orderId = (string) ($_GET['order_id'] ?? '');
    $token = (string) ($_GET['anahtar'] ?? '');
    $order = tmx_get_order($orderId);
    if ($order === null || !isset($order['publicToken']) || !hash_equals((string) $order['publicToken'], $token)) tmx_json(404, ['error' => 'Sipariş bulunamadı.']);
    tmx_json(200, [
        'orderId' => $order['orderId'], 'status' => $order['status'],
        'product' => ['title' => $order['product']['title'], 'amountTRY' => $order['product']['amountTRY']],
        'createdAt' => $order['createdAt'], 'updatedAt' => $order['updatedAt'] ?? null,
        'failedReasonMessage' => ($order['status'] ?? '') === 'failed' ? ($order['failedReasonMessage'] ?? null) : null,
    ]);
} catch (Throwable $error) {
    error_log('[paytr] Order status error: ' . $error->getMessage());
    tmx_json(500, ['error' => 'Sipariş durumu alınamadı.']);
}

