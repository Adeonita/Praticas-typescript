"use strict";
//string
let nome = 'Esse é um texto de teste, vou salvar e testar';
console.log(nome);
//number
let idade = 27;
//tuplas
let endereco = ['Alameda das Pedreiras', 8];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
console.log(Cor.Cinza);
//any
let carro = 'fusca';
console.log(carro);
carro = {
    marca: 'Fusca',
    ano: 1998
};
console.log(carro);
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//tipar uma funcao
let calculo;
calculo = multiplicar;
console.log(multiplicar(5, 6));
//objetos
let usuario = {
    nome: "Ade",
    idade: 23
};
console.log(usuario);
usuario = {
    idade: 23,
    nome: "Junior"
};
console.log(usuario);
