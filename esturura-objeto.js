
const estudante = {
    nome: 'José Silva',
    idade: 32,
    CPF: '23123123123',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);


console.log(estudante['nome']);
console.log(estudante['CPF']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'CPF'));