<?php
if (isset($_POST['name'], $_POST['email'], $_POST['password'])) {

    $name     = htmlspecialchars($_POST['name']);
    $email    = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    echo "<h2>Subscription Successful</h2>";
    echo "Name: $name <br>";
    echo "Email: $email <br>";

} else {
    echo "No data received";
}
?>