# Exercícios de JavaScript

Repositório de exercícios resolvidos durante meus estudos de JavaScript.  
Cada arquivo trata um problema pequeno e independente, focado em prática de base.

Sou estudante de Ciência da Computação (2º período) e uso este espaço para registrar exercícios resolvidos durante a formação.  
Aqui há **prática de base**, não um produto final.

## Visão rápida

- Linguagem principal: **JavaScript** (com apoio de HTML em exercícios de DOM)
- Foco: resolução de problemas pequenos e objetivos
- Conteúdo atual: estruturas de controle, arrays, objetos, funções, métodos de array e manipulação de DOM

## Temas cobertos no código

- Variáveis, operadores, condicionais e operadores lógicos
- Funções, parâmetros, retorno e escopo
- Arrays e objetos (incluindo objetos aninhados)
- Laços (`for`, `for...of`, `for...in`) com `break` e `continue`
- Métodos de array (`forEach`, `map`, `filter`, `find`, `every`, `some`, `reduce`)
- Cópia/clonagem de objetos para evitar mutação acidental
- Manipulação de DOM: seleção de elementos, leitura e alteração de texto, criação dinâmica de elementos, atributos `data-*`
- Diferença prática entre `innerText`, `textContent` e `innerHTML` com foco em segurança de conteúdo

## Organização

Os exercícios estão agrupados por tema. Os nomes seguem o padrão
`número-descrição-do-exercício` e os exercícios de DOM ficam em diretórios
próprios, com seus arquivos `index.html`, `script.js` e `style.css` quando
necessário.

```text
fundamentos/
├── 01-media-do-aluno.js
└── 02-tabuada-do-cinco.js

estruturas-de-dados/
├── 01-cadastro-de-alunos.js
├── 02-fila-de-atendimento.js
├── 03-gerenciamento-de-mercado.js
├── 04-ranking-de-notas.js
├── 05-total-de-produtos.js
├── 06-menor-estoque.js
├── 07-total-do-carrinho.js
├── 08-clonar-pessoa.js
├── 09-aumento-funcionario-com-mutacao.js
├── 10-aumento-funcionario-sem-mutacao.js
└── 11-alterar-produto-sem-mutacao.js

lacos/
├── 01-filtrar-nomes-com-for-of.js
├── 02-procurar-numero-com-for-of.js
├── 03-filtrar-salarios-com-for-in.js
├── 04-buscar-nota-com-for.js
└── 05-filtrar-produtos-com-for-in.js

metodos-array/
├── 01-relatorio-de-vendas-com-foreach.js
├── 02-aumento-de-salarios-com-map.js
├── 03-alunos-aprovados-com-filter.js
├── 04-buscar-produto-com-find.js
├── 05-validar-usuarios-com-every.js
├── 06-verificar-servidores-com-some.js
├── 07-total-de-vendas-com-reduce.js
└── 08-relatorio-avancado-com-metodos.js

dom/
├── 01-selecao-e-estilos/
│   ├── index.html
│   └── script.js
└── 02-catalogo-da-livraria/
    ├── index.html
    ├── script.js
    └── style.css
```

## Exercícios em destaque

- **`estruturas-de-dados/07-total-do-carrinho.js`** — calcula o valor total de uma compra a partir de uma lista de itens com preços e quantidades.
- **`lacos/05-filtrar-produtos-com-for-in.js`** — identifica produtos com estoque disponível para exibição.
- **`metodos-array/07-total-de-vendas-com-reduce.js`** — consolida o faturamento total de vendas em um único resultado numérico.
- **`metodos-array/08-relatorio-avancado-com-metodos.js`** — gera um relatório de desempenho considerando vendedores ativos e total vendido por pessoa.
- **`dom/02-catalogo-da-livraria/script.js`** — resolve um fluxo completo de página: leitura de catálogo, atualização de dados em tela, criação de elementos e validação de saída de texto.

## Como executar

- **Exercícios de JavaScript**: execute o arquivo desejado com Node.js, por exemplo:
```bash
node estruturas-de-dados/07-total-do-carrinho.js
```

- **Exercícios de DOM**: abra `dom/01-selecao-e-estilos/index.html` ou
  `dom/02-catalogo-da-livraria/index.html` no navegador e acompanhe a execução
  pelo console do DevTools.

## Estudo atual

Atualmente estou estudando prática de JavaScript no navegador com foco em DOM e manipulação de dados.
