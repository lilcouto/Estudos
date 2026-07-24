"use strict"
let alunos = [
    "Ana", "Carlos", "Luiz"
]
function adicionarFinal(nome) {
    alunos.push(nome)
    return alunos
}
console.log(adicionarFinal("Rizzo"))
function adicionarComeco(nome) {
    alunos.unshift(nome)
    return alunos
}
console.log(adicionarComeco("Alice"))
function removeUltimo() {
    alunos.pop()
    return alunos
}
console.log(removeUltimo())
function removePrimeiro() {
    alunos.shift()
    return alunos
}
console.log(removePrimeiro())