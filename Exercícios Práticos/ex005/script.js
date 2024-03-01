let num = document.querySelector('#num')
let tab = document.querySelector('#seltab')
let res = document.querySelector('#res')
let valores = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    
    valores.push(Number(num.value))

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    tab.appendChild(item)
    res.innerHTML = ''

  } else {

    window.alert('[ERRO] Valor Inválido ou já encontrado na lista')

  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {

    window.alert('Adicione valores antes de finalizar!') 

  } else {
    
    let total = valores.length
    let maiorValor = valores[0]
    let menorValor = valores[0]
    let soma = 0
    let media = 0
  
    for (let i in valores) {
      if (valores[i] > maiorValor) {
        maiorValor = valores[i]
      }
      if (valores[i] < menorValor) {
        menorValor = valores[i]
      }
      soma += valores[i]
  
      media = soma / total
    }
  
    res.innerHTML = ''

    res.innerHTML += `Ao todo temos ${total} números cadastrados. <br><br>`
    res.innerHTML += `O maior valor informado foi ${maiorValor}. <br><br>`
    res.innerHTML += `O menor valor informado foi ${menorValor}. <br><br>`
    res.innerHTML += `Somando todos os valores temos ${soma}. <br><br>`
    res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}.`
  }
}