"use strict";
// 09-salarios-forin.js
// Objetivo: Listar salários maiores que 2000
let funcionarios = {
    joao: 1800,
    maria: 2500,
    pedro: 1900,
    ana: 3000,
    carlos:2200
}
for (let salario in funcionarios) {
    if (funcionarios[salario] <= 2000) {
        continue
    }
    console.log(`${salario}: ${funcionarios[salario]}`)
}