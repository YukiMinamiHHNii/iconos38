<?php
/*
  Documentación PDO
  http://php.net/manual/es/book.pdo.php
  http://php.net/manual/es/intro.pdo.php
  http://php.net/manual/es/pdo.connections.php
  http://php.net/manual/es/class.pdostatement.php
  http://php.net/manual/es/pdo.prepared-statements.php
*/

function db_connect () {
  $dsn = 'mysql:host=localhost;dbname=portafolio_web';
  $user = 'root';
  $pass = 'qwerty';
  $options = null;

  try {
    $db = new PDO($dsn, $user, $pass, $options);
    //echo '<p>Conectado</p>';
    return $db;
  } catch ( PDOException $e ) {
    return '<p>Error: <mark>' . $e->getMessage() . '</mark></p>';
    die();
  }
}

function db_create () {}

function db_read () {
  $db = db_connect();
  $sql = 'SELECT * FROM categorias';

  $mysql = $db->prepare($sql);
  $mysql->execute();
  $result = $mysql->fetchAll(PDO::FETCH_ASSOC);
  $db = null;

  return$result;
}

function db_read_one () {}

function db_update () {}

function db_delete () {}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CRUD MySQL con PDO</title>
  <style>
    html { font-family: sans-serif; }

    .CRUD-Header { text-align: center; }

    .CRUD-Content {
      display: flex;
      justify-content: space-evenly;
    }
  </style>
</head>
<body>
  <header class="CRUD-Header">
    <h1>CRUD MySQL con PDO</h1>
    <small>(PHP Data Objects)</small>
    <h2>Conectarse a MySQL</h2>
    <?php db_connect(); ?>
  </header>
  <hr>
  <main class="CRUD-Content">
    <article class="Create">
      <h3>Create</h3>
      <form method="post">
        <input type="text" name="cat_nombre" placeholder="nombre de categoría" required>
        <input type="submit">
      </form>
    </article>
    <article class="Read">
      <h3>Read</h3>
      <table>
        <tr>
          <th>cat_id</th>
          <th>cat_name</th>
        </tr>
        <?php
          $to_read = db_read();
          foreach ($to_read as $row) {
        ?>
          <tr>
            <td><?=$row['cat_id']?></td>
            <td><?=$row['cat_nombre']?></td>
          </tr>
        <?php } ?>
      </table>
      <?php
        echo '<pre>';
          var_dump(db_read());
        echo '</pre>';
      ?>
    </article>
    <article class="Update">
      <h3>Update</h3>
    </article>
    <article class="Delete">
      <h3>Delete</h3>
    </article>
  </main>
</body>
</html>
