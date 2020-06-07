//string
let nome: string = 'Esse é um texto de teste, vou salvar e testar'
console.log(nome)

//number
let idade: number = 27;

//tuplas
let endereco: [string, number] = ['Alameda das Pedreiras', 8]
console.log(endereco)

//enums
enum Cor {
    Cinza,
    Verde,
    Azul
}

console.log(Cor.Cinza)

//any
let carro: any = 'fusca';
console.log(carro);
carro = {
            marca: 'Fusca',
            ano: 1998
        }
console.log(carro)

function retornaMeuNome(): string{
    return nome;
}

console.log(retornaMeuNome());

function multiplicar(numA: number, numB: number): number{
    return numA * numB;
}

console.log(multiplicar(2,2));


//tipar uma funcao
let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(multiplicar(5,6));

//objetos
let usuario: {nome: string, idade: number} = {
    nome : "Ade",
    idade: 23
}

console.log(usuario);

usuario = {
    idade: 23,
    nome : "Junior"
}

console.log(usuario)