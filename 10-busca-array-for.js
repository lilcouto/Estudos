"use strict";
// 10-busca-array-for.js
// Objetivo: Buscar primeira nota maior que 8 em um array
let notas = [6.5,7.0,5.5,8.2,9.0,7.8]
for (let i = 0;i< notas.length;i++) {
    if (notas[i] < 7.9) {
        continue
    } else if (notas[i] > 8) {
        console.log(`Encontrou a nota ${notas[i]} na posição ${[i]}`)
        break
    }
}