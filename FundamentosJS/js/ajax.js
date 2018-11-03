;
((d, w, n, c) => {
  fetch('./js/movies.json')
    .then(res => {
      c(res)
    })
    .catch(err => {
      c(err)
    })
})(document, window, navigator, console.log);


((d, w, n, c) => {

})(document, window, navigator, console.log);


((d, w, n, c) => {

})(document, window, navigator, console.log);
