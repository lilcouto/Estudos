"use strict"
const estoque = [
  { produto: "Caneta", quantidade: 20 },
  { produto: "Lápis", quantidade: 15 },
  { produto: "Borracha", quantidade: 8 },
  { produto: "Borracha", quantidade: 9 },
  { produto: "Borracha", quantidade: 46 },
];
function acharMenor(estoque) {
  let menor = estoque[0];
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].quantidade < menor.quantidade) {
    menor = estoque[i]
    }
  }
  return menor
  
}
console.log(acharMenor(estoque));