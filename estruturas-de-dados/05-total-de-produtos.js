"use strict"
const produtos = [
  {
    nome: "Mouse",
    preco: 80,
  },
  {
    nome: "Teclado",
    preco: 150,
  },
  {
    nome: "Monitor",
    preco: 900,
  },
];
let total = 0;
for( let i = 0; i < produtos.length; i++) {
  total = total + produtos[i].preco
}
console.log(`Total: R$ ${total}`)
