;
//(function () { })();

/*
Arrow Functions
  https://ed.team/blog/arrow-functions-en-javascript
  () => {}
*/

((d, w, c) => {
  const btnHello = d.getElementById('btn-hello')

  //Función declarada
  function helloWorld(e) {
    alert('Hola Mundo')
    c(e)
    c(e.type)
    c(e.target)

    //e.target.style.fontSize = '2rem'
  }

  btnHello.addEventListener('click', helloWorld)

  const btnHi = d.getElementById('btn-hi')

  /*
    Diferencias entre función declarada y expresada
    http://www.etnassoft.com/2011/09/02/funciones-declaradas-vs-funciones-expresadas-en-javascript/
  */

  //Función expresada con Arrow Functions
  const sayHi = (name = 'Extrañ@') => {
    alert(`Hola ${name}`)
  }

  btnHi.addEventListener('click', e => {
    sayHi('Eventos')
    sayHi()
    c(e)
    c(e.type)
    c(e.target)
  })

  const btnRemove = d.getElementById('btn-remove')

  const removeEvent = e => {
    alert('Removiendo el manejador de Eventos')
    e.target.removeEventListener('dblclick', removeEvent)
    e.target.disabled = true
    c(e)
  }

  btnRemove.addEventListener('dblclick', removeEvent)

  const btnLightTheme = d.getElementById('btn-light-theme'),
    btnDarkTheme = d.getElementById('btn-dark-theme'),
    btnJSTheme = d.getElementById('btn-js-theme')

  btnLightTheme.addEventListener('click', e => {
    d.body.style.backgroundColor = '#FFF'
    d.body.style.color = '#000'
  })

  btnDarkTheme.addEventListener('click', e => {
    d.body.style.backgroundColor = '#000'
    d.body.style.color = '#FFF'
  })

  btnJSTheme.addEventListener('click', e => {
    d.body.style.backgroundColor = getComputedStyle(d.documentElement).getPropertyValue('--main-color')
    d.body.style.color = getComputedStyle(d.documentElement).getPropertyValue('--second-color')
  })

  const btnCards = d.getElementById('btn-cards'),
    cards = d.querySelectorAll('.card'),
    cardsContainer = d.getElementById('cards')

  btnCards.addEventListener('click', e => {
    c(cards)

    cards.forEach(el => el.classList.toggle('card'))
    cardsContainer.classList.toggle('cards')

    if (e.target.textContent === 'Cambiar a figuras') {
      e.target.textContent = 'Cambiar a tarjetas'
    } else {
      e.target.textContent = 'Cambiar a figuras'
    }
  })

  const contextMenu = e => {
    const menu = d.createElement('div')

    menu.id = 'context-menu'
    menu.innerHTML = '<b>Menú Contextual Personalizado 😀</b>'
    menu.style.padding = '1rem'
    menu.style.backgroundColor = '#EEE'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`

    const existMenu = d.getElementById('context-menu')

    if (existMenu) d.body.removeChild(existMenu)

    d.body.appendChild(menu)
  }

  d.addEventListener('contextmenu', e => {
    //alert('Menú contextual deshabilitado')
    e.preventDefault()
    c(e.pageX, e.pageY)
    contextMenu(e)
  })

  d.addEventListener('click', e => {
    const existMenu = d.getElementById('context-menu')
    if (existMenu) d.body.removeChild(existMenu)
  })

})(document, window, console.log);
