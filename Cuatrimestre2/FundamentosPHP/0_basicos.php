<?php
  //comentario de una línea
  #otro comentario de una línea
  /*
  Comentario de
  varias
  líneas
  */

  //las variables empiezan con el '$'
  $nombre = 'Jonathan';
  $Nombre = 'Ulises';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Básicos PHP</title>
</head>
<body>
  <h1>Básicos PHP</h1>
  <h2>
    Hola mi nombre es
    <?php
      echo $nombre . ' ' . $Nombre . ' y mi edad es ' . ( date('Y') -1984 ) . ' años.';
    ?>
  </h2>
  <?php
    echo '<h3>Hola mi nombre es ' . $nombre . '</h3>';
    echo '<h3>Hola mi nombre es $nombre</h3>';
    echo "<h3>Hola mi nombre es $nombre</h3>";
    echo "<h3>El valor de la variable \$nombre es $nombre</h3>";

    function crear_encabezados () {
      for ($i=1; $i <= 6; $i++) {
        echo "<h$i>Encabezado de tipo $i</h$i>";
      }
    }

    crear_encabezados();

    //PHP - Hypertext Preprocessor  | Personal Home Pages

    function css_js_dinamico () {
      $nombre = 'jonmircha';
      $color = 'greenyellow';
      $bg_color = '#333';

      echo "
        <style>
          html {
            background-color: $bg_color;
            color: $color;
          }
        </style>
        <script>
          alert('Hola $nombre')
        </script>
      ";
    }

    css_js_dinamico();

    // las constantes se definen con la función define
    define('PI', 3.14159265);
    //define('PI', 3.1416);
    //PI = 3.1416;
    define('NOT_FOUND', 'Error 404 No encontrado');

    echo "<p>El valor de PI es " . PI . "</p>";
    echo '<p><mark>' . NOT_FOUND . '</mark></p>';

    echo '<h2>¿Objetos JS en PHP?</h2>';
    echo '<h3>Sí, con Arreglos Asociativos</h3>';

    $persona = array(
      'nombre' => 'Jonathan',
      'edad' => 34,
      'soltero' => false,
      'contacto' => array(
        'email' => 'jonamircha@gmail.com',
        'movil' => '5518388261',
        'web' => 'jonmircha.com'
      ),
      'pasatiempos' => ['Correr', 'Programar', 'Hacer Ejercicio']
    );

    echo '<pre>';
      var_dump($persona);
    echo '</pre>';

    echo "<p>" . $persona['nombre'] . "</p>";
    echo "<p>" . $persona['contacto']['email'] . "</p>";
    echo "<p>" . $persona['pasatiempos'][1] . "</p>";

    echo '<pre>';
      echo json_encode($persona);
    echo '</pre>';

    //información del servidor web y PHP
    #phpinfo();
  ?>
</body>
</html>
