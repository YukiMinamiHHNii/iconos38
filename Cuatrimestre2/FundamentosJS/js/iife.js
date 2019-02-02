;

const perros = ['Husky', 'Boxer', 'Labrador']

console.log(perros);

(function (d, w, n, c) {
  const perros = ['Dálmata', 'Gran Danés', 'Doberman']

  c('hola')
  c(d)
  c(n)
  c(w)
  c(perros)
})(document, window, navigator, console.log);

console.log(perros);
