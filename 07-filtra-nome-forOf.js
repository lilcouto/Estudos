"use strict";
// Objetivo: Listar nomes que começam com 'A'
let nomes = ["Ana","Bruno","Alice","Carlos","Amanda"]
for (let nome of nomes) {
    if (nome[0] != "A") {
        continue
    }
    console.log(nome)
}