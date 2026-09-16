<?php
declare(strict_types=1);

header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

const TMX_ORDER_ID_PATTERN = '/^TMX[0-9a-f]{32}$/i';

function tmx_config(): array
{
    static $config;
    if (is_array($config)) {
        return $config;
    }

    $configPath = dirname((string) ($_SERVER['DOCUMENT_ROOT'] ?? __DIR__)) . '/.paytr-config.php';
    if (!is_file($configPath)) {
        throw new RuntimeException('PAYTR config missing');
    }

    $loaded = require $configPath;
    if (!is_array($loaded)) {
        throw new RuntimeException('PAYTR config invalid');
    }

    foreach (['merchant_id', 'merchant_key', 'merchant_salt', 'ok_url', 'fail_url'] as $key) {
        if (!isset($loaded[$key]) || !is_string($loaded[$key]) || $loaded[$key] === '') {
            throw new RuntimeException('PAYTR config incomplete');
        }
    }

    $config = $loaded;
    return $config;
}

function tmx_json(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function tmx_text(int $status, string $payload): never
{
    http_response_code($status);
    header('Content-Type: text/plain; charset=utf-8');
    echo $payload;
    exit;
}

function tmx_body(): array
{
    $raw = file_get_contents('php://input');
    if (!is_string($raw) || strlen($raw) > 16384) {
        tmx_json(413, ['error' => 'İstek çok büyük.']);
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        tmx_json(400, ['error' => 'Geçersiz istek.']);
    }
    return $decoded;
}

function tmx_client_ip(): string
{
    return preg_replace('/^::ffff:/', '', (string) ($_SERVER['REMOTE_ADDR'] ?? '127.0.0.1')) ?: '127.0.0.1';
}

function tmx_order_directory(): string
{
    $directory = dirname((string) ($_SERVER['DOCUMENT_ROOT'] ?? __DIR__)) . '/.paytr-orders';
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Order store unavailable');
    }
    return $directory;
}

function tmx_order_path(string $orderId): ?string
{
    if (!preg_match(TMX_ORDER_ID_PATTERN, $orderId)) {
        return null;
    }
    return tmx_order_directory() . '/' . $orderId . '.json';
}

function tmx_get_order(string $orderId): ?array
{
    $path = tmx_order_path($orderId);
    if ($path === null || !is_file($path)) {
        return null;
    }
    $decoded = json_decode((string) file_get_contents($path), true);
    return is_array($decoded) ? $decoded : null;
}

function tmx_set_order(string $orderId, array $order): void
{
    $path = tmx_order_path($orderId);
    if ($path === null) {
        throw new RuntimeException('Invalid order id');
    }
    $temporary = $path . '.' . bin2hex(random_bytes(6)) . '.tmp';
    $json = json_encode($order, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if (!is_string($json) || file_put_contents($temporary, $json, LOCK_EX) === false) {
        throw new RuntimeException('Order write failed');
    }
    chmod($temporary, 0600);
    if (!rename($temporary, $path)) {
        @unlink($temporary);
        throw new RuntimeException('Order commit failed');
    }
}

function tmx_return_url(string $base, array $params): string
{
    $separator = str_contains($base, '?') ? '&' : '?';
    return $base . $separator . http_build_query($params, '', '&', PHP_QUERY_RFC3986);
}

