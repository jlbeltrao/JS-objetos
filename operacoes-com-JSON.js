const biblioteca = require ('./operacoes-com-JSON.json')

// const stringBiblioteca = JSON.stringify(biblioteca);

console.log(typeof biblioteca)


const addLivro = {titulo: 'A dança dos dragões', autor: 'George R.R. Martin', genero: 'Fantasia', ano_publicacao: 2018}

biblioteca.push(addLivro);

console.log(biblioteca)
