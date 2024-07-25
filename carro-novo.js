const carroNovo = {
    marca: 'Hyundai',
    modelo: 'HB20s',
    ano: 2022,
    cor: 'Branco'
};

const carroComNovosDetalhes = {
    ...carroNovo
};

console.log(carroNovo);
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.marca = 'VW';
carroComNovosDetalhes.modelo = 'Polo';
carroComNovosDetalhes.ano = '2003';
carroComNovosDetalhes.cor = 'Prata';

console.log(carroNovo);
console.log(carroComNovosDetalhes);