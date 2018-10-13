;
(function (d, w, c) {
  c(
    '********** Elementos del Documento **********',
    d,
    '\n',
    d.doctype,
    '\n',
    d.documentElement,
    '\n',
    d.head,
    '\n',
    d.charset,
    '\n',
    d.title,
    '\n',
    d.body,
    '\n',
    d.links,
    '\n',
    d.images,
    '\n',
    d.forms,
    '\n',
    d.getSelection().toString(),
    '\n',
    d.scripts,
    '\n',
    d.styleSheets
  )

  c(
    '********** Selección de Nodos **********',
    '\n',
    d.getElementById('theory'),
    '\n',
    d.querySelector('figure'),
    '\n',
    d.querySelector('#theory'),
    '\n',
    d.querySelector('.card'),
    '\n',
    d.querySelector('#theory code'),
    '\n',
    d.querySelectorAll('#theory code'),
    '\n',
    d.querySelectorAll('#theory code')[4],
    '\n',
    d.querySelectorAll('.card').length
  )
})(document, window, console.log);
