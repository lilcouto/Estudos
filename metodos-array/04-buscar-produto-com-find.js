// Objetivo: Encontrar produto pelo ID
let produtos = [
    {id: 1, nome: "Notebook", preco: 3000, estoque: 5},
    {id: 2, nome: "Mouse", preco: 50, estoque: 0},
    {id: 3, nome: "Teclado", preco: 150, estoque: 12},
    {id: 4, nome: "Monitor", preco: 800, estoque: 0},
    {id: 5, nome: "Webcam", preco: 200, estoque: 3},
]
let acharId = produtos.find((valor) => valor.id === 3)

if (acharId) {
    console.log( `Produto: ${acharId.nome} | Preço: ${acharId.preco} | Estoque: ${acharId.estoque}`)
} else {
    console.log(`Produto não encontrado`)
}
