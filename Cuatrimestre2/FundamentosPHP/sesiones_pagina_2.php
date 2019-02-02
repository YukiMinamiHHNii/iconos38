<?php
//include 'ruta/del/archivo'; // es opcional, si el archivo no existe manda warning
//require 'ruta/del/archivo'; // es requerido, si el archivo no existe manda fatal error
require './sesiones_auth.php';
is_auth();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sesiones</title>
</head>
<body>
  <h1>Página DOS protegida con Sesiones</h1>
  <p>
    Hola <mark><?php echo $_SESSION['user']; ?></mark> bienvenid@.
  </p>
  <p>
    Este archivo está protegido con una sesión PHP.
  </p>
  <p>
    Ir a otra <a href="./sesiones_pagina_1.php">página protegida</a>
  </p>
  <p>
    <a href="./sesiones_auth.php?logout">Salir</a>
  </p>
  <?php
    echo '<pre>';
      var_dump($_SESSION);
    echo '</pre>';
  ?>
</body>
</html>
