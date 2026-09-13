<?php
include 'db_connect.php';

$service = $_POST['service'];
$area = $_POST['area'];

$sql = "INSERT INTO quotes (service, area) VALUES ('$service', '$area')";
if (mysqli_query($conn, $sql)) {
    echo "Quote request submitted successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
