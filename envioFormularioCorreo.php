<?php

$destino = "pridaingenieria@gmail.com";
$name = $_POST["name"];
$email = $_POST["email"];
$number = $_POST["number"];
$message = $_POST["message"];
$contenido = "Nombre: " . $name . "\nCorreo: " . $email . "\nNumero: " . $number . "\nMensaje: " . $message;
mail($destino,"Un usuario dejó este mensaje desde tu página web PRIDA", $contenido);
echo("Hemos recibido sus datos, pronto nos pondremos en contacto con usted.");
header("Location: index.html");

?>