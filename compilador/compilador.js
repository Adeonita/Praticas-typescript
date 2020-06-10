"use strict";
var canal = 'Gaveta';
var inscritos = 123;
//canal = inscritos;
console.log(canal);
//noImplicitAny
function soma(a, b) {
    return a + b;
}
function saudar(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Olá';
    }
    return saudacao;
}
