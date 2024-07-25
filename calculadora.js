const  
calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        return (b !== 0) ?  (a / b) : 'Divisão por zero não é permitida';
    }
},
numeros = [5,3];

console.log((`Soma: ${calculadora.soma(3,6)}`));
console.log((`Subtração: ${calculadora.subtracao(3,6)}`));
console.log((`Multiplicação: ${calculadora.multiplicacao(3,6)}`));
console.log((`Divisão: ${calculadora.divisao(3,6)}`));

calculadora.calcularMedia = function calcularMedia(numeros) {
    return numeros.reduce((acc, num) => acc + num , 0) / numeros.length;
};

console.log((`Média: ${calculadora.calcularMedia(numeros)}`));
