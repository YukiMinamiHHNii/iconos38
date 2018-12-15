((d, w, c) => {
  const preload = d.querySelector('.u-preload'),
    message = d.querySelector('.u-message'),
    table = d.querySelector('.CRUD-table'),
    tr = d.getElementById('table-row').content,
    fragment = d.createDocumentFragment()

  d.addEventListener('DOMContentLoaded', e => {
    preload.classList.add('is-active')

    fetch(`./crud.php`, { method: 'get' })
      .then(res => {
        preload.classList.remove('is-active')
        message.classList.add('is-active')
        c(res.ok)
        return (res.ok)
          ? res.json()
          : Promise.reject({ status: res.status, statusText: res.statusText })
      })
      .then(res => {
        if (res.numRows === 0) {
          message.innerHTML = 'No existen datos para la consulta ejecutada'
        } else {
          message.classList.remove('is-active')
          table.classList.add('is-active')

          res.data.forEach(row => {
            //c(row)
            tr.querySelector('.cat_id').textContent = row.cat_id
            tr.querySelector('.cat_nombre').textContent = row.cat_nombre
            tr.querySelector('.u-edit').dataset.id = row.cat_id
            tr.querySelector('.u-edit').dataset.name = row.cat_nombre
            tr.querySelector('.u-delete').dataset.id = row.cat_id

            let clone = d.importNode(tr, true)
            fragment.appendChild(clone)
          })

          table.appendChild(fragment)
        }
      })
      .catch(err => {
        c(err)
        preload.classList.remove('is-active')
        message.classList.add('is-active')
        message.innerHTML = `
            <p>
              Parece que hay un problema.
              <b>Error ${err.status}:</b>
              <mark>${err.statusText}</mark>.
            </p>
          `
      })
  })

  d.addEventListener('submit', e => {
    if (e.target.matches('form')) {
      let action
      e.preventDefault()

      if (e.target.matches('.Form-add')) {
        action = 'create'
      } else if (e.target.matches('.Form-edit')) {
        action = 'update'
      } else if (e.target.matches('.Form-delete')) {
        action = 'delete'
      } else {
        action = 'read'
      }

      fetch(`./crud.php?action=${action}`, {
        body: new FormData(e.target),
        method: 'post'
      })
        .then(res => {
          preload.classList.add('is-active')
          c(res.ok)
          return (res.ok)
            ? res.json()
            : Promise.reject({ status: res.status, statusText: res.statusText })
        })
        .then(res => {
          w.location.hash = '#'
          preload.classList.remove('is-active')
          message.classList.add('is-active')
          message.innerHTML = res.msg
          setTimeout(() => w.location.reload(), 1500)
        })
        .catch(err => {
          c(err)
          preload.classList.remove('is-active')
          message.classList.add('is-active')
          message.innerHTML = `
            <p>
              Parece que hay un problema.
              <b>Error ${err.status}:</b>
              <mark>${err.statusText}</mark>.
            </p>
          `
        })
    }
  })

  d.addEventListener('click', e => {

  })
})(document, window, console.log);
