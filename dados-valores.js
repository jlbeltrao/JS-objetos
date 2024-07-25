const estudante = {
    nome: 'José Luiz Beltrão deOliveira',
    idade: 25,
    cpf: '45196449841',
    turma: 'JavaScript',
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

for (let chave in estudante) {
    console.log(chave)
}