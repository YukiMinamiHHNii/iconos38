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
  $options = array( PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' );

  try {
    $db = new PDO($dsn, $user, $pass, $options);
    //echo '<p>Conectado</p>';
    return $db;
  } catch ( PDOException $e ) {
    return '<p>Error: <mark>' . $e->getMessage() . '</mark></p>';
    die();
  }
}

function db_create () {
  $db = db_connect();
  $sql = 'INSERT INTO categorias (cat_nombre) VALUES ( ? )';
  $data = array( $_POST['cat_nombre'] );

  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);
  $db = null;

  $result = ($query)
    ? array ( 'err' => false, 'msg' => 'Operación Exitosa' )
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  return json_encode($result);
}

function db_read () {
  $db = db_connect();
  $sql = 'SELECT * FROM categorias';

  $mysql = $db->prepare($sql);
  $query = $mysql->execute();

  $result = ($query)
    ? $mysql->fetchAll(PDO::FETCH_ASSOC)
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  $db = null;

  //return json_encode($result);
  return $result;
}

function db_read_one () {
  $db = db_connect();
  $sql = 'SELECT * FROM categorias WHERE cat_id = ?';
  $data = array( $_GET['cat_id'] );

  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);

  $result = ($query)
    ? $mysql->fetch(PDO::FETCH_ASSOC)
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  $db = null;

  //return json_encode($result);
  return $result;
}

function db_update () {
  $db = db_connect();
  $sql = 'UPDATE categorias SET cat_nombre = ? WHERE cat_id = ?';
  $data = array(
    $_POST['cat_nombre'],
    $_POST['cat_id']
  );

  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);
  $db = null;

  $result = ($query)
    ? array ( 'err' => false, 'msg' => 'Operación Exitosa' )
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  return json_encode($result);
}

function db_delete () {
  $db = db_connect();
  $sql = 'DELETE FROM categorias WHERE cat_id = ?';
  $data = array($_POST['cat_id']);

  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);
  $db = null;

  $result = ($query)
    ? array ( 'err' => false, 'msg' => 'Operación Exitosa' )
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  return json_encode($result);
}

if ( isset($_POST['action']) and $_POST['action'] === 'create' ) {
  db_create();
  /* echo '<pre>';
    var_dump(db_create());
  echo '</pre>'; */
} else if ( isset($_POST['action']) and $_POST['action'] === 'update' ) {
  db_update();
  /* echo '<pre>';
    var_dump(db_update());
  echo '</pre>'; */
} else if ( isset($_POST['action']) and $_POST['action'] === 'delete' ) {
  db_delete();
  /* echo '<pre>';
    var_dump(db_delete());
  echo '</pre>'; */
}
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
        <input type="hidden" name="action" value="create">
        <input type="submit">
      </form>
    </article>
    <article class="Read">
      <h3>Read</h3>
      <table>
        <tr>
          <th>cat_id</th>
          <th>cat_name</th>
          <th colspan="2">
            <a href="<?=$_SERVER['PHP_SELF']?>">Limpiar CRUD</a>
          </th>
        </tr>
        <?php
          $to_read = db_read();
          foreach ($to_read as $row) {
        ?>
          <tr>
            <td><?=$row['cat_id']?></td>
            <td><?=$row['cat_nombre']?></td>
            <td>
              <a href="?action=edit&cat_id=<?=$row['cat_id']?>">Editar</a>
            </td>
            <td>
              <a href="?action=delete&cat_id=<?=$row['cat_id']?>">Eliminar</a>
            </td>
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
      <?php
        if ( isset($_GET['action']) and $_GET['action'] === 'edit' ) {
          $to_edit = db_read_one();
          echo '<pre>';
            var_dump(db_read_one());
          echo '</pre>';
      ?>
        <form method="post">
          <input type="text" name="cat_nombre" placeholder="nombre de categoría" value="<?=$to_edit['cat_nombre']?>" required>
          <input type="hidden" name="cat_id" value="<?=$to_edit['cat_id']?>">
          <input type="hidden" name="action" value="update">
          <input type="submit">
        </form>
      <?php } ?>
    </article>
    <article class="Delete">
      <h3>Delete</h3>
      <?php
        if ( isset($_GET['action']) and $_GET['action'] === 'delete' ) {
          $to_delete = db_read_one();
          echo '<pre>';
            var_dump(db_read_one());
          echo '</pre>';
      ?>
        <form method="post">
          <p>
            ¿Estas seguro de eliminar la categoría <mark><?=$to_delete['cat_nombre']?></mark>?
          </p>
          <input type="submit" value="SI">
          <input type="button" value="NO" onclick="window.location.href='<?=$_SERVER['PHP_SELF']?>'">
          <input type="hidden" name="cat_id" value="<?=$to_delete['cat_id']?>">
          <input type="hidden" name="action" value="delete">
        </form>
      <?php } ?>
    </article>
  </main>
</body>
</html>
