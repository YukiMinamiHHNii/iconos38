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

  const ball = d.querySelector('.ball')

  let x = 0,
    y = 0

  const moveBAll = e => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        y--
        break
      case 'ArrowDown':
        e.preventDefault()
        y++
        break
      case 'ArrowLeft':
        e.preventDefault()
        x--
        break
      case 'ArrowRight':
        e.preventDefault()
        x++
        break
    }

    ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
  }

  d.addEventListener('keydown', e => {
    //c(e.key)
    //c(e.keyCode)
    //c(e.ctrlKey)
    //c(e.altKey)

    if (e.key === 'a' && e.altKey) {
      alert('Has lanzado una alerta')
    } else if (e.key === 'c' && e.altKey) {
      confirm('Has lanzado una confirmación')
    } else if (e.key === 'p' && e.ctrlKey) {
      prompt('Has lanzado un aviso')
    }

    moveBAll(e)
  })


  const form = d.forms[0]

  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Enviando Form')

    if (e.target.user.value === 'admin' && e.target.pass.value === 'qwerty') {
      alert('Datos Correctos')
    } else {
      alert('Datos Incorrectos')
    }
  })

  d.addEventListener('DOMContentLoaded', e => {
    c('El DOM ha cargado')
  })

  w.addEventListener('load', e => {
    c('La ventana del navegador ha cargado')
    responsive()
  })

  const mq1024 = w.matchMedia('(min-width: 1024px)'),
    youtube = d.getElementById('youtube'),
    gmaps = d.getElementById('gmaps')

  function responsive() {
    if (mq1024.matches) {
      youtube.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EMrwaWroMhg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      gmaps.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6737010052343!2d-99.15426978543572!3d19.426499445910345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2c1d750941%3A0xe370e185e573f2fe!2sIconos%2C+Instituto+de+Investigaci%C3%B3n+en+Comunicaci%C3%B3n+Y+Cultura!5e0!3m2!1ses-419!2smx!4v1540068071595" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    } else {
      youtube.innerHTML = '<a href="https://www.youtube.com/watch?v=EMrwaWroMhg" target="_blank">Ver Video</a>'
      gmaps.innerHTML = '<a href="https://goo.gl/maps/DtqGmt4ybnu" target="_blank">Ver Mapa</a>'
    }
  }

  w.addEventListener('resize', e => {
    //c('El navegador se ha redimensionado')
    responsive()
  })

  const scrollBtn = d.querySelector('.scroll-top-btn')

  w.addEventListener('scroll', e => {
    //c('El navegador ha scrolleado')
    //c(w.pageXOffset, pageYOffset)

    if (w.pageYOffset > 200) {
      scrollBtn.classList.remove('u-hidden')
    } else {
      scrollBtn.classList.add('u-hidden')
    }
  })

  scrollBtn.addEventListener('click', e => {
    w.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })


  const boxes = d.querySelectorAll('.box')

  boxes.forEach(el => {
    el.addEventListener('click', e => {
      c('click')
      c(`click en el div ${e.target.id}`)
      e.stopPropagation()
    })
  })

  d.addEventListener('click', e => {
    if (e.target.matches('li')) {
      c(`click ${e.target.textContent}`)
    }

    if (e.target.matches('.card img')) {
      c(`click ${e.target.src}`)
    }
  })

})(document, window, console.log);

/*
  Tarea:
    Agregar Eventos al Curriculum creado con JS
    Crear un Menú de Hamburguesa
*/
