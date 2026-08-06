"use strict"
const pessoa = {
  nome: "Luiz",
  idade: 24
}
let clonePessoa = JSON.stringify(pessoa)
clonePessoa = JSON.parse(clonePessoa)
clonePessoa.nome = "Carlos"
console.log(pessoa)
console.log(clonePessoa)
