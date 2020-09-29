<?php 

$admin_email = "test@gmail.com";

$user_name = htmlspecialchars(trim($_POST["username"]));
$user_phone  = htmlspecialchars(trim($_POST["phone"]));
$user_mail = htmlspecialchars(trim($_POST["email"]));
$description = htmlspecialchars(trim($_POST["description"]));

$message = "Name: ".$user_name."<br>Phone: ".$user_phone."<br>Email: ".$user_mail."<br>Details ".$description;


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers .= "From:".$admin_email;


mail($admin_email, 'Test Order', $message, $headers);
?>