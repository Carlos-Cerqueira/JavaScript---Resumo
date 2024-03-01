function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.getElementById('anoNasc')
  var res = document.querySelector('#res')

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert('Verifique os dados e tente novamente')
  } else {
    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
      if (fSex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
          // Criança
          img.setAttribute('src', './images/bebe_m.jpg')
        } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', './images/jovem_m.jpg')
        } else if (idade < 50) {
          // Adulto
          img.setAttribute('src', './images/adulto_m.jpg')
        } else {
          // Idoso
          img.setAttribute('src', './images/idoso_m.jpg')
        }
      } else if (fSex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          // Criança
          img.setAttribute('src', './images/bebe_f.jpg')
        } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', './images/jovem_f.jpg')
        } else if (idade < 50) {
          // Adulto
          img.setAttribute('src', './images/adulto_f.jpg')
        } else {
          // Idoso
          img.setAttribute('src', './images/idoso_f.jpg')
        }
      }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}