;
//(function () { })();

/*
Arrow Functions
  https://ed.team/blog/arrow-functions-en-javascript
  () => {}
*/

((d, w, c) => {
  const btnHello = d.getElementById('btn-hello')

  function helloWorld(e) {
    alert('Hola Mundo')
    c(e)
    c(e.type)
    c(e.target)

    //e.target.style.fontSize = '2rem'
  }

  btnHello.addEventListener('click', helloWorld)
})(document, window, console.log);
