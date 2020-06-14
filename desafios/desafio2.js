"use strict";
let contaBancaria = {
    saldo: 500,
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
contaBancaria.depositar(100);
console.log(correntista);
