const pessoas = [];

const pessoa = {
    nome: null,
    idade: null,
    solteiro: null,
    hobbies: null
}

pessoa.nome = 'José Luiz';
pessoa.idade = 25;
pessoa.solteiro = false;
pessoa.hobbies = ['Assistir séries', 'Ouvir audiobooks', 'Estudar programação'];


pessoa.endereco = {
    rua: null,
    cidade: null,
    estado: null,
}

pessoa.endereco.rua = "Avenida de Cillo, 1722";
pessoa.endereco.cidade = "Santa Bárbara d'Oeste";
pessoa.endereco.estado = "São Paulo";

function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}
Idade: ${pessoa.idade}
Solteiro: ${pessoa.solteiro}
Hobbies: ${pessoa.hobbies.join(", ")}
Endereço: ${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado}`);
}

mostrarInfoPessoa(pessoa)
