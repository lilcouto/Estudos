"use strict"
const pessoa = {
  nome: "Carlos",
  salario: 3000
}

function darAumento(funcionario, valor) {
  return funcionario.salario *= (valor /100)+1

}
console.log(darAumento(pessoa,10))