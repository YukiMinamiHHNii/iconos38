;
((d, w, n, c) => {
  const movies = d.getElementById('movies'),
    template = d.getElementById('movies-template').content

  fetch('./js/movies.json')
    .then(res => {
      c(res)
      return (res.ok)
        ? res.json()
        : Promise.reject({ status: res.status, statusText: res.statusText })
    })
    .then(res => {
      c(res)
      res['movies'].forEach(el => {
        template.querySelector('h2').textContent = el.title
        template.querySelector('b').textContent = el.year
        template.querySelector('i').textContent = el.genres
        template.querySelector('img').src = el.poster
        template.querySelector('img').alt = el.title

        let clone = d.importNode(template, true)
        movies.appendChild(clone)
      })
    })
    .catch(err => {
      c(err)
      movies.innerHTML = `
        <p>
          Parece que hay un problema.
          <b>Error ${err.status}:</b>
          <mark>${err.statusText}</mark>
        </p>
      `
    })
})(document, window, navigator, console.log);


((d, w, n, c) => {
  const shows = d.getElementById('shows'),
    template = d.getElementById('shows-template').content,
    fragment = d.createDocumentFragment()

  d.addEventListener('DOMContentLoaded', e => {
    fetch('http://api.tvmaze.com/shows')
      .then(res => {
        c(res)
        return (res.ok)
          ? res.json()
          : Promise.reject({ status: res.status, statusText: res.statusText })
      })
      .then(res => {
        c(res)
        res.forEach(el => {
          template.querySelector('.Show-title').textContent = el.name
          template.querySelector('.Show-description').innerHTML = el.summary
          template.querySelector('.Show-image').src = el.image.original
          template.querySelector('.Show-image').alt = el.name
          template.querySelector('.Show-url').href = el.url

          let clone = d.importNode(template, true)
          fragment.appendChild(clone)
        })

        shows.appendChild(fragment)
      })
      .catch(err => {
        c(err)
        shows.innerHTML = `
          <p>
            Parece que hay un problema.
            <b>Error ${err.status}:</b>
            <mark>${err.statusText}</mark>
          </p>
        `
      })
  })
})(document, window, navigator, console.log);


((d, w, n, c) => {
  const shows = d.getElementById('shows-query'),
    template = d.getElementById('shows-template').content,
    fragment = d.createDocumentFragment()

  d.addEventListener('keyup', e => {
    if (e.target.matches('#search')) {
      c(e.key)
      if ( e.key === 'Enter' ) {
        c(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then(res => {
            c(res)
            return (res.ok)
              ? res.json()
              : Promise.reject({ status: res.status, statusText: res.statusText })
          })
          .then(res => {
            c(res)
            shows.innerHTML = null

            res.forEach(el => {
              template.querySelector('.Show-title').textContent = el.show.name
              template.querySelector('.Show-description').innerHTML = el.show.summary
              template.querySelector('.Show-image').src = el.show.image.medium
              template.querySelector('.Show-image').alt = el.show.name
              template.querySelector('.Show-url').href = el.show.url

              let clone = d.importNode(template, true)
              fragment.appendChild(clone)
            })

            shows.appendChild(fragment)
          })
          .catch(err => {
            c(err)
            shows.innerHTML = `
              <p>
                Parece que hay un problema.
                <b>Error ${err.status}:</b>
                <mark>${err.statusText}</mark>
              </p>
            `
          })
      } else {
        return false
      }
    }
  })
})(document, window, navigator, console.log);
