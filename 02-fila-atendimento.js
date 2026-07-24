"use strict"
const fila = [
  "Maria",
  "João",
  "Pedro"
];
function adicionarPessoa(nome){
    fila.push(nome)
    return fila
}
console.log(adicionarPessoa("Rizzo"))
function atenderPessoa() {
    fila.shift()
    return fila
}
console.log(atenderPessoa())
function proximoFila() {
    return `O próximo da fila é: ${fila[0]}`
}
console.log(proximoFila())