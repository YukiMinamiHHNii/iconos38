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
  })
})(document, window, navigator, console.log);



((d, w, n, c) => {

})(document, window, navigator, console.log);

((d, w, n, c) => {

})(document, window, navigator, console.log);



((d, w, n, c) => {

})(document, window, navigator, console.log);
