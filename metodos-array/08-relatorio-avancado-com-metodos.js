"use strict"
// Objetivo: Criar relatório complexo combinando métodos
let vendedores = [
  { nome: "Ana", vendas: [1000, 1500, 2000], ativo: true },
  { nome: "Bruno", vendas: [500, 600, 700], ativo: false },
  { nome: "Carlos", vendas: [2000, 2500, 3000], ativo: true },
  { nome: "Diana", vendas: [1500, 1800, 2200], ativo: true },
];
let apenasAtivo = vendedores.filter((valor) => valor.ativo)
vendedores.map((valor) => {
  valor.totalVendas = valor.vendas.reduce((total, venda) => total + venda, 0)
  return valor
})
apenasAtivo.forEach((valor) => {
  function verifica() {
    if (valor.ativo) {
      return `${valor.nome}: R$ ${valor.totalVendas}`
    }
  }
  console.log(verifica())
})
