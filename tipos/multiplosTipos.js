"use strict";
//Recebendo mais de um tipo numa variavel
//Desta forma nota pode ser do tipo numvber ou string
let nota;
nota = 10;
console.log(`Minha nota é ${nota}!`);
//checando tipos
let valor = 30;
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
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('O nome não pode ser nulo');
        }
        if (this.preco <= 0) {
            falha('O preco não pode ser negativo');
        }
    }
};
produto.validarProduto();
let alturaOpcional;
alturaOpcional = null;
console.log(alturaOpcional);
const contato1 = {
    nome: 'Fulano',
    tel1: '71123456',
    tel2: null
};
console.log(contato1);
