;
((d, w, n, c, j) => {
  c('********** JSON **********')

  c('********** JSON.stringify() **********')

  c(
    j.stringify({}),
    '\n',
    j.stringify(19),
    '\n',
    j.stringify(true),
    '\n',
    j.stringify('foo'),
    '\n',
    j.stringify([1, 'hola', false]),
    '\n',
    j.stringify({ x: 5, y: 6 }),
    '\n',
    j.stringify(null)
  )

  c('********** JSON.parse() **********')

  c(
    j.parse('{}'),
    '\n',
    j.parse('19'),
    '\n',
    j.parse('true'),
    '\n',
    j.parse('"foo"'),
    '\n',
    j.parse('[1, "hola", false]'),
    '\n',
    j.parse('{"x": "5", "y": "6"}'),
    '\n',
    j.parse('null')
  )
})(document, window, navigator, console.log, JSON);
