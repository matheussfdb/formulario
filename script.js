let numero = 0

function aumentar() {
  numero = numero + 1
  alterarNumero()
  //console.log(numero)
}

function diminuir() {
  numero = numero - 1
  alterarNumero()
  //console.log(numero)
}

function alterarNumero() {
  const p = document.querySelector('#resultado')
  p.innerText = numero
}

alterarNumero()

document.querySelector('form').addEventListener('submit', event => {
  alert('Compra realizada com sucesso!')
})
