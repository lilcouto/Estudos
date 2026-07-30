"use strict";
const h1 = document.querySelector("h1")
const p = document.querySelector(".paragrafo")
let timer = 300
const title = document.querySelector("title")
setInterval(() => {
  let minutos = Math.floor(timer/60)
  let segundos = timer % 60
  let tempoFormatado = ` ${minutos}:${segundos < 10 ? '0' : ''}${segundos}`
  p.innerText = `Faltam ${tempoFormatado} para acabar a oferta`
  timer--
},1000)