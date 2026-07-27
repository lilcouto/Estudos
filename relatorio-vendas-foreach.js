"use strict"
// 21-relatorio-vendas-foreach.js
// Objetivo: Exibir relatório de cada venda com cálculo
let vendas = [
  { produto: "Notebook", preco: 3000, quantidade: 2 },
  { produto: "Mouse", preco: 50, quantidade: 5 },
  { produto: "Teclado", preco: 150, quantidade: 3 },
];
vendas.forEach((nome) => {
  console.log(
    `Produto: ${nome.produto} | Quantidade: ${nome.quantidade} | Preço Unit: R$ ${nome.preco} | Total: R$ ${nome.preco * nome.quantidade}`,
  );
});