<?php
require_once 'config.php';

// Get the content after the question mark
$shortCode = $_SERVER['QUERY_STRING'];



// Extract the short code from the query string
// $shortCode = isset($_GET['short_code']) ? trim($_GET['short_code']) : null;
// $shortCode = 'https://claude.ai/chat/59cb05ec-3ad3-403f-bd26-b3e4a6a6eb2b';
// $shortCode = 'p3fHJU';
if ($shortCode) {
    // Look up the short code in the database
    $stmt = $conn->prepare("SELECT url FROM urls WHERE short_code = ?");
    $stmt->bind_param("s", $shortCode);
    $stmt->execute();
    $stmt->bind_result($url);
    $stmt->fetch();

    if ($url) {
        // Redirect to the original URL
        header("Location: $url");
        exit;
    } else {
        // If the code is not found, show a 404 error or custom error page
        http_response_code(404);
        echo "URL not found";
    }

    $stmt->close();
} else {
    // If no short code is provided in the query string
    echo "No URL specified";
    exit;
}
?>
