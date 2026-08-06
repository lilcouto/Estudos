"use strict";
// mudar cor do header, da borda, contar quantidade de li em listas-frutas
const header = document.getElementById("cabecalho")
header.style.color = "red"
const div1 = document.querySelector(".card")
div1.style.border = "2px solid red"
const allDiv = document.querySelectorAll(".card h3")
for (const titulo of allDiv) {
  console.log(titulo.textContent)
}
let quantidadeLi = 0
const frutas = document.querySelector("#lista-frutas")
for (const listas of frutas.children) {
  quantidadeLi += 1
}
console.log(quantidadeLi)
const fundoFruta = document.querySelectorAll(".fruta")
fundoFruta.forEach((valor) => {
  valor.style.background = "yellow"
})
let frutaDestaque = document.querySelector("#secao-frutas #lista-frutas .destaque")
frutaDestaque.innerText = "Melância"