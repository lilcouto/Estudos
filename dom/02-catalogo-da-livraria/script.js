"use strict"
//Bloco 1 de atividades: encontrando coisas na loja
//1.1 Imprima o texto do título da loja. É o <h1> com id titulo-loja.
const tituloLoja = document.getElementById("titulo-loja")
console.log(tituloLoja.textContent)
//1.2 Conte quantos livros existem no catálogo (classe livro) e quantos aparecem na tela.
const livros = document.querySelectorAll(".livro")
console.log(livros.length)
const livroOculto = document.getElementsByClassName("livro oculto")
console.log(livros.length - livroOculto.length)
//1.3 Imprima o título de cada livro. Dentro de cada div de livro existe um <h3 class="titulo-livro">.
const nomesLivros = document.querySelectorAll(".titulo-livro")
for (const titulo of nomesLivros) {
    console.log(titulo.textContent)
}
//1.4 Imprima os títulos dos livros de ficção. Cada livro tem um atributo data-genero — use ele no seletor.
const ficcao = document.querySelectorAll(".livro[data-genero='ficcao'] .titulo-livro")
console.log("")
console.log("Livros de ficção:")
ficcao.forEach((item) => {
    console.log(item.textContent)
})
//1.5 Selecione o livro esgotado. Ele tem duas classes ao mesmo tempo: livro e esgotado.
const livroEsgotado = document.querySelector("section .livro.esgotado .titulo-livro")
console.log("")
console.log("Livro esgotado:")
console.log(livroEsgotado.textContent)
//1.6 Encontre o livro de data-id="102" e imprima o nome do autor (o <p class="autor"> dentro dele).
const autorLivro102 = document.querySelector(".livro[data-id='102'] .autor")
console.log("")
console.log("Autora do livro 102:")
console.log(autorLivro102.textContent)
//1.7 Conte quantas linhas de dados a tabela de vendas tem. O <thead> também tem uma linha, então contar todos os <tr> da página dá o número errado — busque a partir do <tbody>.
const tabelaLinhas = document.querySelectorAll("#secao-vendas tbody tr")
console.log(`A tabela de vendas tem ${tabelaLinhas.length} linhas`)
//1.8 Selecione a mesma coleção de livros com querySelectorAll e depois com getElementsByClassName. Imprima os dois e observe: os tipos retornados são iguais? Um deles aceita forEach?
const colecao1 = document.querySelectorAll(".livro")
const colecao2 = document.getElementsByClassName("livro")
console.log(colecao1)
console.log(colecao2)
// a variável colecao 1 retornou uma Nodelist enquanto colecao 2 retornou uma HTMLcollection, apenas a colecao 1 aceita forEach
//Bloco 2 de atividades: Lendo e alterando texto
//2.1 Existe uma anotação interna escondida dentro do <p id="subtitulo">. Descubra o que ela diz — uma das duas propriedades de texto mostra, a outra não.
const subtituloOculto = document.querySelector("#subtitulo")
console.log(subtituloOculto.innerText)//não mostra parte oculta
console.log(subtituloOculto.textContent)//mostra parte oculta sem ir na classe oculta do html
//2.2 Faça o mesmo com o <p id="descricao-destaque">.
const destaqueOculto = document.querySelector("#descricao-destaque")
console.log("")
console.log(destaqueOculto.innerText)
console.log(destaqueOculto.textContent)
//2.3 Pegue a seção #catalogo inteira e compare textContent com innerText. Qual traz o livro escondido?
const catalogoInteiro = document.querySelector("#catalogo")
console.log(catalogoInteiro.innerText)
console.log("")
console.log("")
console.log(catalogoInteiro.textContent)
//o textContent mostra todo o conteúdo, inclusive a parte oculta, enquanto o innerText esconde o que estiver oculto
//2.4 Mude o título da loja para "Livraria Aurora — Edição Especial". A mudança deve aparecer na tela.
const novoTitulo = document.querySelector("#titulo-loja")
novoTitulo.textContent = "Livraria Aurora — Edição Especial"
//2.5 Calcule quanto custaria comprar um exemplar de cada livro. Cada <p class="preco"> tem um atributo com o valor limpo — use ele em vez do texto formatado. O resultado precisa ser número.
const precoLivros = document.querySelectorAll(".preco")
let total = 0
precoLivros.forEach((preco) => {
    total += Number(preco.dataset.valor)
})
console.log(total.toFixed(2))
//2.6 O rodapé tem um <span id="total-livros"> com o número escrito à mão. Faça esse número vir da contagem real de livros.
const livrosTotal1 = document.querySelectorAll(".livro")
const livrosRodape = document.querySelector("#total-livros")
livrosRodape.textContent = livrosTotal1.length
//Bloco 3 — Criando conteúdo
//3.1 A #lista-desejos está vazia. Coloque um <li> com "Dom Casmurro" nela, usando createElement e appendChild.
const livroDesejo = document.querySelector("#lista-desejos")
const livroNovoDom = document.createElement("li")
const livroNovoSertao = document.createElement("li")
const livroNovoCortico = document.createElement("li")
const livroNovoVidas = document.createElement("li")
livroDesejo.appendChild(livroNovoDom)
//3.2 Acrescente estes três, sem apagar o anterior:
//["Grande Sertão: Veredas", "O Cortiço", "Vidas Secas"]
livroDesejo.appendChild(livroNovoSertao)
livroDesejo.appendChild(livroNovoCortico)
livroDesejo.appendChild(livroNovoVidas)
livroNovoDom.textContent = "Dom Casmurro"
livroNovoSertao.textContent = "Grande Sertão: Veredas"
livroNovoCortico.textContent = "O Cortiço"
livroNovoVidas.textContent = "Vidas Secas"
//3.3 Faça o #contador-desejos mostrar a quantidade certa, contando os <li> que existem de fato na lista. Deve dizer "1 livro" no singular e "4 livros" no plural.
const quantidadeLivrosDesejo = document.querySelector("#contador-desejos")
const quantosLi = livroDesejo.querySelectorAll("li").length
if(quantosLi > 1 || quantosLi === 0) {
    quantidadeLivrosDesejo.textContent = `${quantosLi} livros na lista`
}else if (quantosLi === 1) {
    quantidadeLivrosDesejo.textContent = `${quantosLi} livro na lista`
}
//3.4 Adicione um livro novo ao catálogo, com a mesma estrutura dos outros: uma div contendo um h3, um p de autor e um p de preço. As classes você define com setAttribute. Coloque também um data-valor no preço.
const criaDiv = document.createElement("div")
criaDiv.setAttribute("class", "livro")
criaDiv.setAttribute("data-id", "105")
criaDiv.setAttribute("data-genero", "cientifica")
criaDiv.setAttribute("data-estoque", "6")
const criaH3 = document.createElement("h3")
criaH3.setAttribute("class", "titulo-livro")
criaH3.textContent = "A Origem das Espécies"
const criaP1 = document.createElement("p")
criaP1.setAttribute("class", "autor")
const criaP2 = document.createElement("p")
criaP2.setAttribute("class", "preco")
criaP2.setAttribute("data-valor", "20.71")
criaP1.textContent = "Charles Darwin"
criaP2.textContent = "R$ 20,71"
const criaBadge = document.createElement("span")
criaBadge.setAttribute("class", "badge")
criaBadge.textContent = "Novo"
criaDiv.appendChild(criaH3)
criaDiv.appendChild(criaP1)
criaDiv.appendChild(criaP2)
criaDiv.appendChild(criaBadge)
const novoCatalogo = document.querySelector("#catalogo")
novoCatalogo.appendChild(criaDiv)
//Criar função para criar livro
let ultimoId = 105
function criarLivro(titulo, autor, preco, genero, estoque, badge) {
  ultimoId += 1;
  const div = document.createElement("div");
  div.setAttribute("class", "livro");
  div.setAttribute("data-id", ultimoId);
  div.setAttribute("data-genero", genero);
  div.setAttribute("data-estoque", estoque);
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "titulo-livro");
  h3.textContent = titulo;
  const pAutor = document.createElement("p");
  pAutor.setAttribute("class", "autor");
  pAutor.textContent = autor;
  const pPreco = document.createElement("p");
  pPreco.setAttribute("class", "preco");
  pPreco.setAttribute("data-valor", preco);
  pPreco.textContent = `R$ ${preco.toFixed(2).replace(".", ",")}`;
  const span = document.createElement("span");
  span.setAttribute("class", "badge");
  span.textContent = badge;
  div.appendChild(h3);
  div.appendChild(pAutor);
  div.appendChild(pPreco);
  div.appendChild(span);
  document.querySelector("#catalogo").appendChild(div);
  return div;
}
criarLivro("Sagarana", "João Guimarães Rosa", 52, "ficcao", 3, "usado")
//3.5 Imprima o innerHTML do primeiro livro e depois o textContent dele. Explique em comentário a diferença.
const primeiroLivro = document.querySelector(".livro")
console.log(primeiroLivro.innerHTML)
console.log(primeiroLivro.textContent)
//a diferença é que o innerHTML mostra a div inteira com as tags e as classes, enquanto o textContent mostra apenas o conteúdo
//3.6 Um usuário digitou isto no campo de sinopse:
//<img src=x onerror="alert('invadido')">
// Coloque esse texto no #saida-cadastro de duas formas — uma com innerHTML, outra com textContent. Uma delas dispara o alerta. Explique qual, por quê, e qual você usaria num sistema real.
const sinopseSaida = document.querySelector("#saida-cadastro")
//sinopseSaida.textContent = `<img src=x onerror="alert('invadido')">`
//sinopseSaida.innerHTML = `<img src=x onerror="alert('invadido')">`
//o innerHTML permite que o navegador trate a mensagem como código HTML e a interpreta, enquanto o textContent apenas vira texto literal
//Bloco 4 — Formulário
//4.1 
