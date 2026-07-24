"use strict"
const produto = {
  nome: "Notebook",
  preco: 4000,
  estoque: 8
}
function alteracao(estoqueMenos,aumentoPreco) {
  let cloneProduto = JSON.parse(JSON.stringify(produto))
  cloneProduto.estoque -= estoqueMenos
  cloneProduto.preco *= (aumentoPreco / 100) + 1
  return cloneProduto
}
console.log(produto)
console.log(alteracao(2,10))