"use strict"
const funcionario = {
  nome: "Rizzo",
  salario: 15000
}
function darAumento(valor) {
  let cloneRizzo = JSON.parse(JSON.stringify(funcionario))
  cloneRizzo.salario *= (valor/100) + 1
  return cloneRizzo
}
console.log(funcionario)
console.log(darAumento(20))
