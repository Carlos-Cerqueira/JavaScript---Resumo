function carregar() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()

  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

  if (hora >= 0 && hora < 12) {

    document.body.style.background = 'lightblue'
    img.src = "images/manha.jpg"

  } else if (hora >= 12 && hora <= 18) {
    
    document.body.style.background = 'lightyellow'
    img.src = "images/tarde.jpg"

  } else {

    document.body.style.background = 'blue'
    img.src = "images/noite.jpg"

  }
}