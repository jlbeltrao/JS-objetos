const estudante = {
    nome: 'José Luiz Beltrão deOliveira',
    idade: 25,
    cpf: '45196449841',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['+5519992268785', '5511987654321'],
    endereco: [{
        rua: 'Avenida de Cillo',
        numero: 1722,
        complemento: 'BL 4 APTO 34'
    }]
}

estudante.endereco.push ({
    rua: 'Rua Guaianazes',
    numero: 673,
    complemento: null
});


const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);

