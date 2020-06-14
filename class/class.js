"use strict";
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        //  this.preco = preco - (preco * desconto) 
    }
    resumoProduto() {
        return `
        Produto: ${this.nome} está com ${this.desconto * 100}% off
        De: R$ ${this.preco} 
        Por: R$ ${this.setDesconto()}`;
    }
    setDesconto() {
        return this.preco = this.preco - (this.preco * this.desconto);
    }
}
let produto1 = new Produto('Sutia', 10);
let produto2 = new Produto('Calcinha', 5);
let produto3 = new Produto('Sutiã na promocao', 10, 0.50);
let produto4 = new Produto('Calcinha na promocao', 5, 0.50);
let produto5 = new Produto('Conjunto na promocao', 30, 0.50);
console.log(produto3.resumoProduto());
