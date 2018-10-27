;
((d, w, n, c) => {
  c('********** Atributos de la ventana **********')

  const form = d.getElementById('responsive-tester')
  let responsiveTester

  d.addEventListener('click', e => {
    if (e.target.matches('[name="itest"]')) {
      //c(form.iurl.value)
      responsiveTester = w.open(
        form.iurl.value,
        'responsiveTester',
        `innerWidth=${form.iwidth.value}, innerHeight=${form.iheight.value}`
      )
    }

    if (e.target.matches('[name="iclose"]')) {
      responsiveTester.close()
    }
  })
})(document, window, navigator, console.log);



((d, w, n, c) => {
  c('********** Atributos de la URL **********')

  const form = d.getElementById('url-tester')

  d.addEventListener('click', e => {
    if (e.target.matches('[name="ireload"]')) {
      location.reload()
    }

    if (e.target.matches('[name="iredirect"]')) {
      //location.replace(form.iurl.value)
      //location.assign(form.iurl.value)
      location.href = form.iurl.value
    }
  })

  c('********** Historial **********')
})(document, window, navigator, console.log);



((d, w, n, c) => {
  c('********** Navegador **********')

  c(n.userAgent)

  d.addEventListener('DOMContentLoaded', e => {
    const ua = n.userAgent,
      isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
          return (this.android() || this.ios() || this.windows())
        }
      },
      isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
          return (this.linux() || this.mac() || this.windows())
        }
      },
      isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function () {
          return (this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera())
        }
      },
      bUserAgent = d.getElementById('user-agent'),
      bPlatform = d.getElementById('platform'),
      bBrowser = d.getElementById('browser')

    c(
      isMobile,
      '\n',
      isMobile.android(),
      '\n',
      isDesktop.any(),
      '\n',
      isMobile.any()
    )

    bUserAgent.textContent = ua
    bPlatform.textContent = (isMobile.any()) ? isMobile.any() : isDesktop.any()
    bBrowser.textContent = isBrowser.any()
  })
})(document, window, navigator, console.log);



((d, w, n, c) => {
  const networkStatus = (status) => {
    const div = d.createElement('div'),
      h2Status = d.getElementById('network-status')

    h2Status.insertAdjacentElement('afterend', div)

    if (status) {
      div.textContent = 'Conexión Reestablecida'
      div.classList.add('online')
      div.classList.remove('offline')
    } else {
      div.textContent = 'Conexión Perdida'
      div.classList.remove('online')
      div.classList.add('offline')
    }

    setTimeout(() => d.body.removeChild(div), 2000)
  }

  d.addEventListener('DOMContentLoaded', e => {
    c('********** Detección de la conexión **********')

    if (n.onLine) {
      c('Sitio online al cargar el DOM')
    } else {
      c('Sitio offline al cargar el DOM')
    }
  })

  w.addEventListener('online', e => {
    c('Sitio online')
    networkStatus(n.onLine)
  })

  w.addEventListener('offline', e => {
    c('Sitio offline')
    networkStatus(n.onLine)
  })
})(document, window, navigator, console.log);

((d, w, n, c) => {
  d.addEventListener('DOMContentLoaded', e => {
    c('********** Webcam **********')

    const video = d.getElementById('webcam')

    c(n.mediaDevices.getUserMedia)

    if (n.mediaDevices.getUserMedia) {
      n.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          video.srcObject = stream
          video.play()
        })
        .catch(err => c(`Sucedio el siguiente error: ${err}`))
    }
  })
})(document, window, navigator, console.log);



((d, w, n, c) => {
  d.addEventListener('DOMContentLoaded', e => {
    c('********** Geolocalización **********')

    const bLatitude = d.getElementById('latitude'),
      bLongitude = d.getElementById('longitude'),
      bAccuracy = d.getElementById('accuracy'),
      options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

    const success = position => {
      let coords = position.coords
      c(position)

      bLatitude.textContent = coords.latitude
      bLongitude.textContent = coords.longitude
      bAccuracy.textContent = coords.accuracy
    }

    const error = err => c(`Error ${err.code}: ${err.message}`)

    n.geolocation.getCurrentPosition(success, error, options)
  })

  d.addEventListener('click', e => {
    if (e.target.matches('#map')) {
      let latitude = d.getElementById('latitude').textContent,
        longitude = d.getElementById('longitude').textContent,
        zoom = '20z'

      w.open(`https://www.google.com/maps/@${latitude},${longitude},${zoom}`)
    }
  })
})(document, window, navigator, console.log);
