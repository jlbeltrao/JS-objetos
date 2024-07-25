const pessoas = [
    {nome: 'José Luiz', idade: 25, cidade: "Santa Bárbara d'Oeste" },
    {nome: 'Anna Julia', idade: 23, cidade: "Sumaré" }, 
    {nome: 'João Paulo', idade: 21, cidade: 'São Paulo' }];

// function mostrarListaPessoas(pessoa) {
//         console.log(`Informações da Pessoa:
// Nome: ${pessoas[pessoa].nome}.
// Idade: ${pessoas[pessoa].idade}.
// Cidade: ${pessoas[pessoa].cidade}.`)
//     }

function mostrarListaPessoas(apessoas) {
    console.log('Lista de Pessoas:');
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
    })
}

function filtrarPorCidade(listaPessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}
    
mostrarListaPessoas(pessoas);

pessoas.push({nome: 'Ludmila', idade: 21, cidade: 'Sumaré'});

mostrarListaPessoas(pessoas);

const pessoasSumare = filtrarPorCidade(pessoas, 'Sumaré');

console.log(`Pessoas em Sumaré:`);
console.log(pessoasSumare);

