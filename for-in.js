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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
    const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
    }
}
