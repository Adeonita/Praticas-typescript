"use strict";
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('bibi!!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
console.log('****Exercicio 1****');
const moto = new Moto('Fan', 10);
console.log(moto);
moto.buzinar();
moto.acelerar(30);
console.log(moto.velocidade);
///////////////////////////
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
console.log('****Exercicio 2****');
const ret = new Retangulo(2, 2);
console.log(ret.area());
////////////////////////
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
console.log('****Exercicio 3****');
const estagiario = new Estagiario();
estagiario.primeiroNome = 'Adeonita';
console.log(estagiario);
