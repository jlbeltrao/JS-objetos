const estudante = {
    nome: 'José Luiz Beltrão de Oliveira',
    idade: 25,
    cpf: '45196449841',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['+5519992268785', '5511987654321'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
       }
}

console.log(estudante.estaAprovado(7));