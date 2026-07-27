"use strict"
// 22-aumento-salarios-map.js
// Objetivo: Dar aumento de 10% e criar novo array
let funcionarios = [
    {nome: "Ana", salario: 3000},
    {nome: "Bruno", salario: 4000},
    {nome: "Carlos", salario: 2500},
    {nome: "Diana", salario: 3500}
]
let aumento = funcionarios.map((valor) => ({
    ...valor,
    novoSalario: parseFloat(valor.salario * 1.1).toFixed(2)
}))
console.log(aumento)