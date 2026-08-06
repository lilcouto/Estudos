"use strict";
let aluno = {
  nome: "Luiz",
  idade: 23,
  notas: [6.0,7.8,9.0,5.0]
}
let soma = 0
let media = 0
let nota = 0
function notas1() {
  for ( nota = 0; nota<aluno.notas.length;nota++) {
    console.log(soma,nota)
    soma = soma + aluno.notas[nota]
  }
  console.log(soma,nota)
  media = soma / aluno.notas.length
  return `Nome: ${aluno.nome}
Média: ${media} `
}
console.log(notas1())









