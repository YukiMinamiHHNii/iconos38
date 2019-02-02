<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD con MySQL, PHP y AJAX</title>
  <link rel="stylesheet" href="./crud.css">
</head>
<body>
  <main class="CRUD">
    <header class="CRUD-header">
      <h1>CRUD con MySQL, PHP y AJAX</h1>
      <h2>Lista de Categorías</h2>
    </header>
    <aside class="CRUD-response">
      <div class="u-preload  u-hidden">
        <div class="spinner">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
      <div class="u-message  u-hidden">
        Mensaje del Servidor
      </div>
    </aside>
    <table class="CRUD-table  u-hidden">
      <tr>
        <th>cat_id</th>
        <th><a href="#" class="u-order">cat_nombre</a></th>
        <th colspan="2">
          <a href="#add" class="u-btn  u-add">agregar</a>
        </th>
      </tr>
    </table>
  </main>
  <section id="add" class="ModalWindow">
    <div class="ModalWindow-box">
      <h2>Agregar</h2>
      <form class="Form-add">
        <input type="text" name="cat_nombre" placeholder="Categoría" required>
        <input class="u-btn" type="submit">
      </form>
      <a class="u-btn u-right" href="#">cerrar</a>
    </div>
  </section>
  <section id="edit" class="ModalWindow">
    <div class="ModalWindow-box">
      <h2>Editar</h2>
      <form class="Form-edit">
        <input type="text" name="cat_nombre" placeholder="Categoría" required>
        <input type="hidden" name="cat_id">
        <input class="u-btn" type="submit">
      </form>
      <a class="u-btn u-right" href="#">cerrar</a>
    </div>
  </section>
  <section id="delete" class="ModalWindow">
    <div class="ModalWindow-box">
      <h2>Eliminar</h2>
      <form class="Form-delete">
        <p>¿Estas seguro de eliminar el registro <mark></mark>?</p>
        <input type="hidden" name="cat_id">
        <input class="u-btn" type="submit" name="yes" value="SI">
        <input class="u-btn" type="reset" name="no" value="NO">
      </form>
      <a class="u-btn u-right" href="#">cerrar</a>
    </div>
  </section>
  <template id="table-row">
    <tr>
      <td class="cat_id"></td>
      <td class="cat_nombre"></td>
      <td>
        <a href="#edit" class="u-btn  u-edit">editar</a>
      </td>
      <td>
        <a href="#delete" class="u-btn  u-delete">eliminar</a>
      </td>
    </tr>
  </template>
  <script src="./crud.js"></script>
</body>
</html>
