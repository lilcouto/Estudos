// 25-validar-ativos-every.js
// Objetivo: Verificar se todos usuários estão ativos
let usuarios = [
    {nome: "Ana", ativo: true, premium: true},
    {nome: "Bruno", ativo: true, premium: false},
    {nome: "Carlos", ativo: true, premium: true},
]
let todosAtivos = usuarios.every((valor) => valor.ativo === true)
function verifica() {
    if (todosAtivos) {
        return `Todos os usuários estão ativos!`
    }else {
        return `Existem usuários inativos`
}}
console.log(verifica())