<?php
include 'db_connect.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
if (mysqli_query($conn, $sql)) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
