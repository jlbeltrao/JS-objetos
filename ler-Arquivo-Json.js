const lerDados = require ("./dados.json");

console.log(lerDados);

const produto = {id: 3, nome: 'Tênis', preco: 99.90};

const stringProduto = JSON.stringify(produto);

console.log(stringProduto);

