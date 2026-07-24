"use strict"
const notas = [9,5,10,8,7,6]
console.log(notas.sort((a,b) => a-b))
console.log(notas.sort((a,b) => b-a))
console.log(Math.max(...notas))
console.log(Math.min(...notas))