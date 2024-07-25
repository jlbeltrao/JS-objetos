let carro = {
    marca: 'Hyundai',
    modelo: 'HB20s',
    ano: 2022,
    cor: 'Branco',
    ligado: false,
    placa: 'RTW3A83',

    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log('Carro ligado.\n');
        } else {
            console.log('Carro já está ligado.\n')
        }
    },

    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('Carro desligado.\n');
        } else {
            console.log('Carro já está desligado.\n')
        }
    },

    obterDetalhes: function () {
        console.log('Propriedades do carro:')
        for (chave in carro) {
            if (typeof carro[chave] !== 'function') console.log([chave] + ': ' + carro[chave]);
        }

    }

};

Object.defineProperties(
    carro, {
        'placa': {
            enumerable: false
        },
        'ligar': {
            enumerable: false
        },
        'desligar': {
            enumerable: false
        },
        'obterDetalhes': {
            enumerable: false
        }
    })

console.log(`Propriedades enumeráveis do carro:`);
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}



carro.ligar()
carro.ligar()
carro.desligar()
carro.desligar()
carro.ligar()

carro.obterDetalhes()