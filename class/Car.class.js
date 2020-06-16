"use strict";
class Car {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    acelera(delta) {
        if (delta > this.velocidadeMaxima) { //Não deixo ultrapassar a velocidade máxima e atribuo a velocidade atual a velocidade máxima
            console.log(`Não é possivel ultrapassar a Velocidade Máxima de ${this.velocidadeMaxima} km/h`);
            this.velocidadeAtual = this.velocidadeMaxima;
        }
        else if (delta < 0) {
            console.log('A velocidade não pode ser menor que zero');
        }
        else {
            this.velocidadeAtual = this.velocidadeAtual + delta;
        }
        return this.velocidadeAtual;
    }
    desacelera(delta) {
        let velocidadeAtual = this.velocidadeAtual - delta;
        if (velocidadeAtual < 0) {
            velocidadeAtual = 0;
        }
        return velocidadeAtual;
    }
    acelerar(delta) {
        return this.acelera(delta);
    }
    desacelerar(delta) {
        return this.desacelera(delta);
    }
}
let carro1 = new Car('Ford', 'Ka');
console.log(`Velocidade Atual ${carro1.acelerar(200)} km/h`);
console.log(`Velocidade Atual ${carro1.desacelerar(100)} km/h`);
//Heranca
class Ferrari extends Car {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
}
const ferrari = new Ferrari('F40', 324);
console.log(`${ferrari.marca}, ${ferrari.modelo}`);
console.log(`Acelera Ferrari: ${ferrari.acelerar(300)}`);
//get e set 
class Person {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Person();
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -3; //Não atribui o valor
console.log(pessoa1);
//Atributos e metodos estáticos
let Matematica = /** @class */ (() => {
    class Matematica {
        static areaCirc(raio) {
            return Matematica.PI * raio * raio;
        }
    }
    Matematica.PI = 3.1416;
    return Matematica;
})();
//Uso do metodo e atributo estático
console.log(Matematica.areaCirc(4));
//Classes abstratas
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        let reducer = (accumulator, correntValue) => accumulator + correntValue;
        this.resultado = numeros.reduce(reducer);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        let reducer = (accumulator, correntValue) => accumulator * correntValue;
        this.resultado = numeros.reduce(reducer);
    }
}
const some = new Soma();
some.executar(1, 2, 3);
console.log(some.getResultado());
const mult = new Multiplicacao();
mult.executar(5, 2);
console.log(mult.getResultado());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        console.log(modelo);
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'teste' Erro, porquê o atributo foi setado para ser utilizado apenas como leitura
console.log(turboHelice);
