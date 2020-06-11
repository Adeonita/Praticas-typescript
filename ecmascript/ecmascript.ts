//let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio){
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '1234235432453465'
console.log(cpf)

var segredo = 'externo'
function revelar(){
    var segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

for(let i = 0; i < 10; i++){
    console.log(i)
}    
//console.log(i)

//Arrow function
const somar = function(n1: number, n2:number): number {
    return n1 + n2;
}
console.log(somar(2,2))

const subitrair = (n1: number, n2: number) => n1 - n2
console.log(subitrair(3,1));

const saudacao = () => console.log('Olá!') //Função que não recebe nenhum parâmetro
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

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
function contagemRegressiva(inicio: number = 3):void{
    console.log(inicio)
    while(inicio > 0){
        console.log(inicio)
        inicio --
    }
    console.log('Fim')
}
contagemRegressiva() //Passada sem parâmetro
contagemRegressiva(5) //PAssada com parâmetro

//spread & rest
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers)) //três pontos (...) sendo utilizado como operador de espalhamento
                                //Espalha os elementos do array e os passa como parâmetro para função math.max()

const turmaA: string[] = ['João', 'Maria', 'Fernanda']  //(...) sendo utiizado como operador de junção
const turmaB: string[] = ['Miguel', 'Lorena', ...turmaA]  //Une os elementos e passa como parâmetro para o array turmaB
console.log(turmaB)     
                   