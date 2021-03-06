"use strict";
//let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '1234235432453465';
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)
//Arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subitrair = (n1, n2) => n1 - n2;
console.log(subitrair(3, 1));
const saudacao = () => console.log('Olá!'); //Função que não recebe nenhum parâmetro
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('João');
//No contexto de uma função normal o this varia
//function normalComThis(){
//    console.log(this)
//}
//const normalComThisEspecial = normalComThis.bind({nome: 'Ana'})
//normalComThisEspecial()
//No contexto de uma arrow function o this nunca varia
//const arrowComThis = () => console.log(this)
//arrowComThis()
//Parâmetro padrão numa função
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        console.log(inicio);
        inicio--;
    }
    console.log('Fim');
}
contagemRegressiva(); //Passada sem parâmetro
contagemRegressiva(5); //PAssada com parâmetro
//spread & rest
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers)); //três pontos (...) sendo utilizado como operador de espalhamento
//Espalha os elementos do array e os passa como parâmetro para função math.max()
const turmaA = ['João', 'Maria', 'Fernanda']; //(...) sendo utiizado como operador de junção
const turmaB = ['Miguel', 'Lorena', ...turmaA]; //Une os elementos e passa como parâmetro para o array turmaB
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
console.log(retornaArray(1, 2, 3, 4, 5, 6));
//spread  (tuplas)
const tupla = [1, 'teste', false]; //Os valores estão agrupados como array
/*A função espera receber os parâmetros separados, então na chamada da função
faz-se necessário passar o operador de espalhamento*/
function tuplaParams(a, b, c) {
    console.log(`1) ${a}, ${b}, ${c}`);
}
tuplaParams(...tupla); //spread
/*Neste caso ele espera receber os params espalhados como um array
também chamo a função de maneira espalhada, pois ele espera receber parâmetros quebrados
*/
function tuplaparams2(...params) {
    console.log(`2) ${params[1]}`);
}
tuplaparams2(...tupla); //spread
//destructuring (array) 
//Serve para quebrar um array de maneira mais simples
const pessoa = ['Adeonita', 1996];
//const nomeExemplo = pessoa[0]
//const anoNascimento = pessoa[1]
const [nomeExemplo, anoNascimento] = pessoa; //É uma sintaxe simplificada para o que foi escrito acima
console.log(nomeExemplo, anoNascimento);
//destructuring (objeto) 
const item = {
    nome: 'tv',
    preco: 500
};
//const nomeItem = item.nome
//const precoItem = item.preco
const { nome: n, preco } = item; //A sintaxe acima pode ser resumida ao utilizar o operador de destructuring para objeto
console.log(n, preco);
//Removendo caracteristicas aninhadas
const product = {
    Produto1: {
        descricao: 'Produto1'
    },
    Produto2: {
        descricao: 'Produto2'
    }
};
const { Produto1: { descricao } } = product;
console.log(descricao);
//Promisses
//com callback
//function esperar3s(){
/*SetTimeOut recebe uma funço como parâmetro e um tempo em ms
    passado o tempo estabelecido a função é chamada
*/
//    setTimeout(() => {console.log('Sem promisse')}, 1000)
//}
//esperar3s()
/*com promisse
Essa função retorna uma promisse que recebe como parâmetro a funcao resolve
que é chamada caso a promessa seja concluída com sucesso
caso contrário é chamado o método reject

function esperarPromisse(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Com promisse')
        }, 1000)
        }
    )
}

esperarPromisse()
    .then(dado => console.log(dado))

*/
//usando fetch
console.log('****SWAPI****');
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => {
    console.log(`Personagem: ${personagem.name}`);
    console.log('Filmes: ');
    for (let value of personagem.films) {
        fetch(value)
            .then(filme => filme.json())
            .then(title => console.log(`    ${title.title}`));
    }
}).catch(err => console.log(`Error: ${err}`)); //O catch representa o erro da promisse 
