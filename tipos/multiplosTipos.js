"use strict";
//Recebendo mais de um tipo numa variavel
//Desta forma nota pode ser do tipo numvber ou string
var nota;
nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
//checando tipos
var valor = 30;
if (typeof valor === 'number') {
    console.log('é number');
}
else {
    console.log(typeof valor);
}
//tipo never
//Uma função que não termina corretamente
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('O nome não pode ser nulo');
        }
        if (this.preco <= 0) {
            falha('O preco não pode ser negativo');
        }
    }
};
produto.validarProduto();
var alturaOpcional;
alturaOpcional = null;
console.log(alturaOpcional);
var contato1 = {
    nome: 'Fulano',
    tel1: '71123456',
    tel2: null
};
console.log(contato1);
