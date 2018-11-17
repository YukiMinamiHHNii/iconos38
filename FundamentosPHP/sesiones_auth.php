<?php
session_start();

function login () {
  if ( $_POST['user'] === 'admin' && $_POST['pass'] === 'qwerty' ) {
    $_SESSION['auth'] = true;
    $_SESSION['user'] = $_POST['user'];

    header('Location: ./sesiones_pagina_1.php');
  } else {
    header('Location: ./5_sesiones.php?error=1');
  }
}

function logout () {
  session_destroy();
  header('Location: ./5_sesiones.php');
}

function is_auth () {
  if ( !isset($_SESSION['auth']) || !$_SESSION['auth'] ) {
    logout();
  }
}

if ( isset($_POST['send_login']) ) {
  login();
}

if ( isset( $_GET['logout'] ) ) {
  logout();
}
