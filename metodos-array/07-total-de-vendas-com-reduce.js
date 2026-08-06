"use strict"
// Objetivo: Somar total de vendas do mês
let vendas = [
    {data:"01/01", produto: "Notebook", valor: 3000},
    {data:"02/01", produto: "Mouse", valor: 50},
    {data:"03/01", produto: "Teclado", valor: 150},
    {data:"04/01", produto: "Monitor", valor: 800},
    {data:"05/01", produto: "Webcam", valor: 200},

]
let totalVendas = vendas.reduce((total, preco) => {
    return total + preco.valor
},0)
console.log(`Total de vendas: R$ ${totalVendas} (${vendas.length} vendas)`)
