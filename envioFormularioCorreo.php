<?php

$destino = "pridaingenieria@gmail.com";
$primerNombre = $_POST["primerNombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$contenido = "Primer nombre: " . $primerNombre . "\nApellido: " . $apellido . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
mail($destino,"Mensaje desde tu página web", $contenido);
header("Location: index.html");

?>