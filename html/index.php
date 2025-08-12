<?php
$BASE = ''; // ← корень, если сайт в подпапке — укажи типа '/react'

// Vite 5+/7 кладёт манифест сюда:
$manifestCandidates = [
    __DIR__ . '/dist/.vite/manifest.json', // Vite 5+/7
    __DIR__ . '/dist/manifest.json',       // запасной вариант
];

$manifestPath = null;
foreach ($manifestCandidates as $p) {
    if (file_exists($p)) { $manifestPath = $p; break; }
}

if (!$manifestPath) {
    http_response_code(500);
    echo 'Build not found. Run <code>npm run build</code>.';
    exit;
}

$manifest = json_decode(file_get_contents($manifestPath), true);
$entry = $manifest['src/main.tsx'] ?? null;
if (!$entry || empty($entry['file'])) {
    http_response_code(500);
    echo 'Entry not found in manifest.json';
    exit;
}

$cssLinks = '';
if (!empty($entry['css'])) {
    foreach ($entry['css'] as $css) {
        $cssLinks .= '<link rel="stylesheet" href="'. $BASE .'/dist/' . htmlspecialchars($css) . '">' . PHP_EOL;
    }
}

$preloads = '';
if (!empty($entry['imports'])) {
    foreach ($entry['imports'] as $imp) {
        if (!empty($manifest[$imp]['file'])) {
            $preloads .= '<link rel="modulepreload" href="'. $BASE .'/dist/' . htmlspecialchars($manifest[$imp]['file']) . '">' . PHP_EOL;
        }
    }
}

$jsFile = $BASE . '/dist/' . $entry['file'];
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React app</title>
    <?= $cssLinks ?>
    <?= $preloads ?>
</head>
<body>
<div id="root"></div>
<script type="module" src="<?= htmlspecialchars($jsFile) ?>"></script>
</body>
</html>
