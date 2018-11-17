<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sesiones</title>
</head>
<body>
   <h1>Sesiones</h1>
   <form action="./sesiones_auth.php" method="post">
    <input type="text" name="user" placeholder="usuario" required>
    <input type="password" name="pass" placeholder="password" required>
    <input type="submit">
    <input type="hidden" name="send_login">
   </form>
   <?php
   if (isset($_GET['error'])) {
    echo "<p><mark>Tu usuario y / o password son incorrectos.</mark></p>";
   }

    session_start();

    echo '<pre>';
      var_dump($_SESSION);
    echo '</pre>';
   ?>
</body>
</html>
