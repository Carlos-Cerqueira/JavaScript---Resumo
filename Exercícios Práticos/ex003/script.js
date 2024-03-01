function contar() {
  var inicio = document.querySelector('#inicio')
  var fim = document.querySelector('#fim')
  var passo = document.querySelector('#passo')
  var res = document.querySelector('#res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {

    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível Contar!'

  } else {

    res.innerHTML = "Contando: <br>"

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0 ) {
      window.alert('Passo Inválido! Considerando PASSO 1')
      p = 1
    }

    if (i < f) {
      // Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} 👉 `
      }
    } else {
      // Contagem Decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} 👉 `
      }
    }
    res.innerHTML += `🏁`
  }
}