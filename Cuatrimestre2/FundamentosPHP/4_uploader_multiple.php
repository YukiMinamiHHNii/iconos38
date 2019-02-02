<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Subir múltiples archivos al servidor</title>
</head>
<body>
  <h1>Subir múltiples archivos al servidor</h1>
  <form method="post" enctype="multipart/form-data">
    <input type="file" name="archivo" required>
    <input type="submit">
  </form>
  <?php
    echo '<pre>';
      var_dump($_FILES);
    echo '</pre>';

    if ( isset($_FILES['archivo']) ) {
      $filename = $_FILES['archivo']['tmp_name'];
      $destination = './files/' . $_FILES['archivo']['name'];

      $upload = move_uploaded_file($filename, $destination);

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
            <mark>".$_FILES['archivo']['error']."</mark>
          </p>
        ";
      }
    }

  ?>
</body>
</html>
