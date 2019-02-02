<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Formularios PHP</title>
</head>
<body>
  <h1>Formularios PHP</h1>
  <h2>Formulario enviado por GET</h2>
  <form>
    <input type="text" name="nombre" required>
    <input type="email" name="email" required>
    <input type="submit" value="Enviar por GET">
  </form>
  <?php
    echo '<pre>';
      var_dump($_GET);
    echo '</pre>';

    if ( isset($_GET['nombre'], $_GET['email']) ) {
      echo '<p>El nombre es: <b>'.$_GET['nombre'].'</b></p>';
      echo '<p>El email es: <b>'.$_GET['email'].'</b></p>';
    }
  ?>
  <h2>Formulario enviado por POST</h2>
  <form method="post">
    <input type="text" name="nombre" required>
    <input type="email" name="email" required>
    <input type="submit" value="Enviar por POST">
  </form>
  <?php
    echo '<pre>';
      var_dump($_POST);
    echo '</pre>';

    if ( isset($_POST['nombre'], $_POST['email']) ) {
      echo '<p>El nombre es: <b>'.$_POST['nombre'].'</b></p>';
      echo '<p>El email es: <b>'.$_POST['email'].'</b></p>';
    }
  ?>
</body>
</html>
