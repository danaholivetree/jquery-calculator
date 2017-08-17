$(function(){

var clear = 0
// var txt = scr.html()

$(".buttons").click(function(){

  let scr = $('#screen')
  let key= $( event.target).text()
  if (clear === 1) {
    scr.text('')
    clear = 0
  }

  if (key==="C") {
    scr.text('')
  }
  else if (key==="x"){
    key = '*'
    scr.text(scr.text()+(key))
  }
  else if (key==="÷") {
    key = '/'
    scr.text(scr.text()+(key))
  }
  else if (key === "\=") {
    let res= eval(scr.text())
    scr.text(res)
    clear = 1
  }
  else {
  scr.text(scr.text()+(key))
  }
})




})
