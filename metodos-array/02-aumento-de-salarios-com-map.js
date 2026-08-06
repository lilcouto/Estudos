"use strict"
// Objetivo: Dar aumento de 10%
let funcionarios = [
    {nome: "Ana", salario: 3000},
    {nome: "Bruno", salario: 4000},
    {nome: "Carlos", salario: 2500},
    {nome: "Diana", salario: 3500}
]
funcionarios.map((funcionario) => {
    funcionario.novoSalario = parseFloat(funcionario.salario * 1.1).toFixed(2)
    
})

console.log(funcionarios)
