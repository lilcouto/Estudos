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

## Próxima organização

Atualmente os arquivos estão na raiz do repositório; o próximo passo é agrupá-los por tema nas pastas abaixo.

- `fundamentos/`  
  Exercícios de variáveis, condicionais, operadores e lógica básica.
- `estruturas-de-dados/`  
  Arrays, objetos e transformações/manipulações diretas.
- `lacos/`  
  Exercícios com `for`, `for...of`, `for...in`, `break` e `continue`.
- `metodos-array/`  
  Prática de `forEach`, `map`, `filter`, `find`, `every`, `some`, `reduce`.
- `dom/`  
  Exercícios com HTML + JavaScript para manipulação do DOM.

## Exercícios em destaque

- **`05-total-carrinho.js`** — calcula o valor total de uma compra a partir de uma lista de itens com preços e quantidades.  
- **`12-filtrar-produtos-forin.js`** — identifica produtos com estoque baixo para priorizar reposição.  
- **`total-vendas-reduce.js`** — consolida o faturamento total de vendas em um único resultado numérico.  
- **`relatorio-avancado-combinado.js`** — gera um relatório de desempenho considerando vendedores ativos e total vendido por pessoa.  
- **`Dom2atividade.js`** — resolve um fluxo completo de página: leitura de catálogo, atualização de dados em tela, criação de elementos e validação de saída de texto.

## Como executar

- **Exercícios de lógica, arrays e objetos**: execute com Node.js.
```bash
node nome-do-arquivo.js
```

- **Exercícios de DOM**: abra o arquivo `.html` no navegador e acompanhe a execução pelo console do DevTools.

## Estudo atual

Atualmente estou estudando prática de JavaScript no navegador com foco em DOM e manipulação de dados.
