<?php
require_once 'config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $url = filter_var($input['url'], FILTER_VALIDATE_URL);

    // if (!$url) {
    //     echo json_encode(['success' => false, 'message' => 'Invalid URL']);
    //     exit;
    // }

    $shortCode = generateUniqueCode();
    $stmt = $conn->prepare("INSERT INTO urls (url, short_code) VALUES (?, ?)");
    $stmt->bind_param("ss", $url, $shortCode);

    if ($stmt->execute()) {
        $shortUrl = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . "/$file_name/?" . $shortCode;
        echo json_encode(['success' => true, 'shortUrl' => $shortUrl]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to shorten URL']);
    }

    $stmt->close();
}

function generateUniqueCode($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $code = '';

    for ($i = 0; $i < $length; $i++) {
        $code .= $characters[rand(0, strlen($characters) - 1)];
    }

    return $code;
}
?>
