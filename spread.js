const estudante = {
    nome: 'José Luiz Beltrão deOliveira',
    idade: 25,
    cpf: '45196449841',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['19992268785', '1934555419'],
    enderecos: [{
        rua: 'Avenida de Cillo',
        numero: 1722,
        complemento: 'BL 4 APTO 34'
    },
    {
        rua: 'Rua Guaianazes',
        numero: 673,
        complemento: 'Fundos'
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio =  {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
};

console.log(dadosEnvio);