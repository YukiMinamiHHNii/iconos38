<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Enviar email</title>
  <style>
    form > * { display: block; }
  </style>
</head>
<body>
  <h1>Enviar email</h1>
  <form method="post">
    <input type="text" name="nombre" placeholder="nombre" required>
    <input type="email" name="email" placeholder="email" required>
    <input type="text" name="asunto" placeholder="asunto a tratar" required>
    <textarea name="comentarios" cols="50" rows="5" placeholder="escribe tus comentarios" required></textarea>
    <input type="submit">
    <input type="hidden" name="send_form">
  </form>
  <?php
    /* echo '<pre>';
      var_dump($_SERVER);
    echo '</pre>'; */

    if ( isset($_POST['send_form']) ) {
      $name = $_POST['nombre'];
      $email = $_POST['email'];
      $subject = $_POST['asunto'];
      $comments = $_POST['comentarios'];
      $domain = $_SERVER['HTTP_HOST'];

      $to = "$name < $email >";
      $subject = "Contacto desde el sitio $domain: $subject";
      $message = "
        <html>
          <head>
            <title>Datos enviados desde el formulario del sitio $domain</title>
          </head>
          <body>
            <p>Datos enviados desde el formulario del sitio $domain</p>
            <ul>
              <li>Nombre: <b>$name</b></li>
              <li>Email: <b>$email</b></li>
              <li>Asunto: <b>$subject</b></li>
              <li>Comentarios: <b>$comments</b></li>
            </ul>
          </body>
        </html>
      ";

      $headers = "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=utf-8\r\n";
      $headers .= "From: Jonathan MirCha <hola@jonmircha.com>";

      $send_mail = mail($to, $subject, $message, $headers);

      if ($send_mail) {
        echo '<p>Tus datos han sido enviados</p>';
      } else {
        echo '<p>Error al enviar tus datos. Intenta nuevamente.</p>';
      }
    }
  ?>
</body>
</html>
