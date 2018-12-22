((d, c) => {
  c.log('Hola KISS PHP')

  const btn = d.querySelector('.NavBar-btn'),
    panel = d.querySelector('.NavBar-panel')

  btn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    btn.classList.toggle('is-active')
  })
})(document, console);
