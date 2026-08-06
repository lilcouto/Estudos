// Objetivo: Listar apenas alunos com nota >= 7
let alunos = [
    {nome: "Ana", nota: 8.5, turma: "A"},
    {nome: "Bruno", nota: 6.0, turma: "A"},
    {nome: "Carlos", nota: 9.0, turma: "B"},
    {nome: "Diana", nota: 5.5, turma: "B"},
    {nome: "Eduardo", nota: 7.5, turma: "A"}
]
let resultado = ""
let maiorIgual7 = alunos.filter((valor, separador) => {
    if (valor.nota >= 7) {
        resultado += `${valor.nome} (${valor.nota} - Turma ${valor.turma}) `
        if ( separador < alunos.length - 1) {
            resultado += ", "
        }
    }
})
console.log(resultado)
