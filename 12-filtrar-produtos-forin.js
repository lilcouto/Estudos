"use strict";
// 12-filtrar-produtos-forin.js
// Objetivo: Listar apenas produtos em estoque
let produtos = {
  notebook: { preco: 3000, estoque: 5 },
  mouse: { preco: 50, estoque: 0 },
  teclado: { preco: 150, estoque: 12 },
  monitor: { preco: 800, estoque: 0 },
  webcam: { preco: 200, estoque: 3 },
};
for (let nomeProduto in produtos) {
  if (produtos[nomeProduto].estoque === 0) {
    continue;
  }
  console.log(`${nomeProduto}: R$ ${produtos[nomeProduto].preco} (${produtos[nomeProduto].estoque} em estoque)`);
}
