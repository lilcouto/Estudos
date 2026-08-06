"use strict"
const mercado = [
    {
        nome: "Arroz",
        preco: 30
    },
    {
        nome:"Feijão",
        preco: 12
    },
    {
        nome: "Macarrão",
        preco: 8
    }
]
function adicionarProduto(nome, preco) {
    mercado.push({
        nome: nome,
        preco: preco
    })
    return mercado
}
console.log(adicionarProduto("Café", 32))

function removeUltimo() {
    mercado.pop()
    return mercado
}
console.log(removeUltimo())
function removePrimeiro() {
    mercado.shift()
    return mercado
}
console.log(removePrimeiro())
console.log(mercado.sort((a,b) => a.nome.localeCompare(b.nome)))
