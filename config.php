<?php
$host = 'localhost';
$db   = 'url_shortener';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset
if (!$conn->set_charset($charset)) {
    printf("Error loading character set utf8mb4: %s\n", $conn->error);
    exit();
}

// Example of handling an error
try {
    // Your SQL query or operations here
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
