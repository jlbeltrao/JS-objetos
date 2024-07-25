const contaBancaria = {titular: 'José Luiz Beltrão', saldo: 2000.00, 
    depositar: function depositar(valor) {
        this.saldo += valor;
    }, 
    sacar: function sacar(valor) {
        valor > this.saldo ? console.log('Saldo insuficiente para saque.') : this.saldo -= valor;
    }
};

const cliente = {nome: 'Anna Julia', conta: contaBancaria};

contaBancaria.sacar(3600);

function mostraSaldo(codigoCliente) {
    console.log(`O saldo de ${codigoCliente.nome} é de R${codigoCliente.conta.saldo}`);
}



mostraSaldo(cliente)