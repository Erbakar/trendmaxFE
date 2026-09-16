<?php
declare(strict_types=1);
require dirname(__DIR__) . '/_common.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    tmx_json(405, ['error' => 'Method not allowed']);
}
tmx_json(200, ['status' => 'ok', 'runtime' => 'php']);

