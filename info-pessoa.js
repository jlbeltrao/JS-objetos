const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copia(pessoa) {
    pessoaCopiada = {... pessoa}
    pessoaCopiada.id += 1;
    pessoaCopiada.nome = 'José';
    pessoaCopiada.idade = 25
}


copia(pessoaOriginal)

console.log(pessoaOriginal);
console.log(pessoaCopiada);