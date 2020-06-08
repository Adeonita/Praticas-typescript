"use strict";
var contaBancaria = {
    saldo: 500,
    depositar: function (valor) {
        this.saldo = this.saldo + valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
contaBancaria.depositar(100);
console.log(correntista);
