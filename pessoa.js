const pessoa = {
    nome: 'José', 
    notas: ['8', '7', '9', '10'], 

    calcularMediaNotas: function(){
        const somaNotas = this.notas.reduce((acc, nota) => acc + Number(nota), 0);
        const media = (somaNotas / this.notas.length).toFixed(2);
        console.log(`A média de ${pessoa.nome} é: ${media}.`);
        return media
    },

    classificarDesempenho: function () {
        const media = this.calcularMediaNotas();
        let desempenho;
        if (media >= 9) {
            desempenho = 'Desempenho excelente.';
        } else if (media >= 7.5 && media < 9) {
            desempenho = 'Bom desempenho.';
        } else if (media >= 6 && media < 7.5){
            desempenho = 'Desempenho regular.';
        } else {
            desempenho = 'Desempenho insuficiente.';
        }
        console.log(`${pessoa.nome} possui ${desempenho}.`);
        return desempenho;
    }
}


pessoa.classificarDesempenho();
