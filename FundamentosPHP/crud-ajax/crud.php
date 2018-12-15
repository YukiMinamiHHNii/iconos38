<?php
require_once './db.php';

$action = ( isset($_GET['action']) ) ? $_GET['action'] : 'read';

switch ($action) {
  case 'create':
    $sql = 'INSERT INTO categorias (cat_nombre) VALUES ( ? )';
    $data = array( $_POST['cat_nombre'] );
    $res = db_affect($sql, $data);
    break;

  case 'read':
    $sql = 'SELECT * FROM categorias';
    $data = db_search($sql);
    $res = array(
      'err' => false,
      'data' => $data,
      'numRows' => count($data)
    );
    break;

  case 'update':
    $sql = 'UPDATE categorias SET cat_nombre = ? WHERE cat_id = ?';
    $data = array(
      $_POST['cat_nombre'],
      $_POST['cat_id']
    );
    $res = db_affect($sql, $data);
    break;

  case 'delete':
    $sql = 'DELETE FROM categorias WHERE cat_id = ?';
    $data = array($_POST['cat_id']);
    $res = db_affect($sql, $data);
    break;

  case 'orderByName':
    $sql = 'SELECT * FROM categorias ORDER BY cat_nombre';
    $data = db_search($sql);
    $res = array(
      'err' => false,
      'data' => $data,
      'numRows' => count($data)
    );
    break;

  default:
    $res = array(
      'err' => true,
      'msg' => 'Acción no permitida'
    );
    break;
}

header( 'Content-type: application/json' );
echo json_encode($res);
