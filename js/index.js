$(function() {

  var clear = 0
  // var txt = scr.html()

  $("span").click(function() {

    let scr = $('#screen')
    let key = $(event.target).text()
    if (clear === 1) {
      scr.text('')
      clear = 0
    }

    if (key === "C") {
      scr.text('')
    } else if (key === "x") {
      key = '*'
      scr.text(scr.text() + (key))
    } else if (key === "÷") {
      key = '/'
      scr.text(scr.text() + (key))
    } else if (key === "\=") {
      clear = 1
      try {
        eval(scr.text());
      } catch (e) {
        if (e instanceof SyntaxError) {
          scr.text('ERROR')
        } else {
          throw (e);
        }

      }
      let res = eval(scr.text())
      scr.text(res)
    } else {
      scr.text(scr.text() + (key))
    }
  })
})
