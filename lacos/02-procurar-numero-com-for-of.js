"use strict";
// 08-procura-numero-forof.js
// Objetivo: Procurar número 7 e parar
let numeros = [2,4,6,7,8,9,10]
let resultado = ""
for (let numero of numeros) {
    if (numero === 7) {
        resultado += `Encontrei ${numero}!`
        break
    }
    resultado += `Procurei ${numero}, `
}
console.log(resultado)