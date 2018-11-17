<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Subir archivos al servidor</title>
</head>
<body>
  <h1>Subir archivos al servidor</h1>
  <form method="post" enctype="multipart/form-data">
    <input type="file" name="archivo" required>
    <input type="submit">
  </form>
  <?php
    echo '<pre>';
      var_dump($_FILES);
    echo '</pre>';

    /* subir sólo .jgp .pdf y .txt y no más de 1MB */

    if ( isset($_FILES['archivo']) ) {
      $filename = $_FILES['archivo']['tmp_name'];
      $destination = './files/' . $_FILES['archivo']['name'];
      $type = $_FILES['archivo']['type'];
      $size = $_FILES['archivo']['size'];
      $upload = false;

      if (
        (
          $type === 'image/jpeg' ||
          $type === 'application/pdf' ||
          $type === 'text/plain'
        ) && $size <= 1024000
      ) {
        $upload = move_uploaded_file($filename, $destination);
      } else {
        $error = 'Sólo se permiten subir imágenes jpg y documentos pdf y txt que no rebasen 1MB de peso';
      }

      if ($upload) {
        echo "
          <p>El archivo se ha subido con éxito</p>
          <p>
            Lo puedes ver en el siguiente
            <a href=\"$destination\" target=\"_blank\">enlace</a>
          </p>
        ";
      } else {
        echo "
          <p>
            Ocurrió un error al subir el archivo
            <mark>$error</mark>
          </p>
        ";
      }
    }

  ?>
</body>
</html>
