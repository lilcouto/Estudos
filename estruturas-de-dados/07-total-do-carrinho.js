"use strict"
const cliente = {
  nome: "Luiz",
  carrinho: [
    {
      produto: "Notebook",
      preco: 3500,
      quantidade: 1
    },
    {
      produto: "Mouse",
      preco: 120,
      quantidade: 2
    },
    {
      produto: "Headset",
      preco: 250,
      quantidade: 1
    }
  ]
}
function percorreCarrinho(objeto) {
  let total = 0
  for (let i = 0; i < objeto.carrinho.length; i++ ) {
    total += objeto.carrinho[i].preco * objeto.carrinho[i].quantidade
  }
  return `${JSON.stringify(objeto)}
  ${total}`
}
console.log(percorreCarrinho(cliente))