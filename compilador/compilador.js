"use strict";
let canal = 'Gaveta';
let inscritos = 123;
//canal = inscritos;
console.log(canal);
//noImplicitAny
function soma(a, b) {
    return a + b;
}
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Olá';
    }
    return saudacao;
}
