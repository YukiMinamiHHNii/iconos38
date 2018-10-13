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

  c(
    '********** Manejo de Atributos **********',
    '\n',
    d.documentElement.getAttribute('lang'),
    '\n',
    d.documentElement.lang
  )

  d.documentElement.setAttribute('lang', 'es-CL')
  c(d.documentElement)

  d.documentElement.lang = 'es-MX'
  c(d.documentElement)

  d.body.setAttribute('name', 'cuerpo')

  const linkDoc = d.getElementById('link-doc')

  c(
    linkDoc.id,
    '\n',
    linkDoc.href,
    '\n',
    linkDoc.style
  )

  linkDoc.style.display = 'block'
  linkDoc.style.maxWidth = '50%'
  linkDoc.style.margin = 'auto'
  linkDoc.style.textAlign = 'center'
  linkDoc.style.borderRadius = '.25rem'
  linkDoc.href = 'https://developer.mozilla.org/es/docs/DOM'
  linkDoc.setAttribute('target', '_blank')

  const theory = d.getElementById('theory')

  c(
    '********** Manejo de Clases **********',
    '\n',
    theory.className,
    '\n',
    theory.classList,
    '\n',
    theory.classList.contains('blog'),
    '\n',
    theory.classList.contains('post')
  )

  theory.classList.add('blog')
  c(theory.className)
  theory.classList.remove('blog')
  c(theory.className)
  theory.classList.toggle('blog')
  c(theory.className)
  theory.classList.toggle('blog')
  c(theory.className)

  c('********** Manejo de Contenido **********')

  const whatIsDOM = d.getElementById('what-is-dom')

  //whatIsDOM.textContent = `

  //whatIsDOM.outerHTML = `
  whatIsDOM.innerHTML = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y
      XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación
      visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `

  c('********** Recorrer Elementos **********')

  const cards = d.getElementById('cards')

  c(
    cards,
    '\n',
    cards.children,
    '\n',
    cards.children[2],
    '\n',
    cards.parentElement,
    '\n',
    cards.firstElementChild,
    '\n',
    cards.lastElementChild,
    '\n',
    cards.previousElementSibling,
    '\n',
    cards.nextElementSibling
  )

  c('********** Crear Elementos **********')

  const figure = d.createElement('figure')

  figure.innerHTML = `
    <img src="https://placeimg.com/400/400/nature" alt="Nature">
    <figcaption>Nature</figcaption>
  `

  figure.classList.add('card')

  cards.appendChild(figure)

  c('********** Transformar Elementos **********')

  const figure2 = d.createElement('figure')

  /* figure2.insertAdjacentText('afterbegin', `
    <img src="https://placeimg.com/400/400/any" alt="Any">
    <figcaption>Any</figcaption>
  `) */

  figure2.classList.add('card')

  figure2.insertAdjacentHTML('afterbegin', `
    <img src="https://placeimg.com/400/400/any" alt="Any">
    <figcaption>Any</figcaption>
  `)

  cards.insertAdjacentElement('beforeend', figure2)

  cards.removeChild(cards.firstElementChild)

  c('********** CSSOM **********')

  //Propiedades CSS del atributo style
  c(linkDoc.style)
  c(linkDoc.style.padding)
  //Propiedades CSS computadas en los navegadores
  c(w.getComputedStyle(linkDoc))
  c(w.getComputedStyle(linkDoc).getPropertyValue('padding'))
  c(linkDoc.getBoundingClientRect())

  c('********** Media Queries con JS **********')

  const mqDesktop = w.matchMedia('(min-width: 1024px)')

  c(mqDesktop)
  c(mqDesktop.matches)

  if (mqDesktop.matches) {
    d.body.style.backgroundColor = '#000'
    d.body.style.color = '#FFF'
  }

  /*
    Tarea:
      Crear un Curriculum con HTML y CSS dinámico, generado con JS
  */

})(document, window, console.log);
