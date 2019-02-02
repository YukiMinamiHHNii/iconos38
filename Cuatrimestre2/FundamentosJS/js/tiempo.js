;
((d, w, n, c) => {
  c('********** Tiempo en JavaScript **********')

  c('********** Objeto Date **********')

  c(
    new Date(),
    '\n',
    new Date(1984, 4, 23),
    '\n',
    new Date(1984, 4, 23, 3, 30, 19),
    '\n',
    new Date('May 23 1984 03:30:19'),
    '\n',
    new Date().getFullYear(),
    '\n',
    new Date().getMinutes(),
    '\n',
    new Date().getSeconds(),
    '\n',
    new Date().getDate(),
    '\n',
    new Date().getDay(),
    '\n',
    new Date().getMonth(),
    '\n',
    new Date().getTime(),
    '\n',
    new Date().getTimezoneOffset(),
    '\n',
    new Date().toLocaleString(),
    '\n',
    new Date().toLocaleDateString(),
    '\n',
    new Date().toLocaleTimeString()
  )

  c('********** Timers **********')

  const clock = d.getElementById('clock')

  let clockTimer,
    shakeTimer

  d.addEventListener('click', e => {
    if (e.target.matches('#start-clock')) {
      clockTimer = setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString()
      }, 1000)
      c('Lanzando setInterval')
    }

    if (e.target.matches('#stop-clock')) {
      clearInterval(clockTimer)
      c('Lanzando clearInterval')
    }

    if (e.target.matches('#start-shake')) {
      shakeTimer = setTimeout(() => {
        clock.classList.add('shake')
        setTimeout(() => clock.classList.remove('shake'), 1000)
      }, 3000)
      c('Lanzando setTimeout')
    }

    if (e.target.matches('#stop-shake')) {
      clearTimeout(shakeTimer)
      c('Lanzando clearTimeout')
    }
  })
})(document, window, navigator, console.log);

((d, w, n, c) => {
  c('********** Countdown **********')

  const countdown = (idEl, limitDate, finalMessage) => {
    const countdownEl = d.getElementById(idEl),
      countdownDate = new Date(limitDate).getTime()

    let countdownInterval = setInterval(() => {
      let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = ('0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        minutes = ('0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2)

      c(countdownDate, now, limitTime)
      c(`${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`)

      countdownEl.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`

      if (limitTime < 0) {
        clearInterval(countdownInterval)
        countdownEl.innerHTML = finalMessage
      }
    }, 1000)
  }

  countdown('countdown', 'Nov 03, 2018 14:01:00', 'Terminó el plazo')
})(document, window, navigator, console.log);
