// import estudante from './estudante.json'
const estudante = require ('./estudante.json')

console.log(estudante);
console.log(typeof estudante);

const chave = Object.keys(estudante);
console.log(chave);