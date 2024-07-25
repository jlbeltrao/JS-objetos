const carro = {marca: 'Hyundai', modelo: 'HB20s', ano: 2022, cor: 'Branco'};

console.log(`Propriedades iniciais do carro:`);
for (chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}

carro.cambio = 'Manual';
carro.opcionais = ['AC', 'Direção elétrica', 'ABS', 'AirBag', 'Multimidia']

console.log(`Propriedades atualizadas do carro:`);
for (chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
} 
