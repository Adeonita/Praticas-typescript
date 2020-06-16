class Car{
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200){

        }

    private acelera(delta: number): number {
        if(delta > this.velocidadeMaxima){ //Não deixo ultrapassar a velocidade máxima e atribuo a velocidade atual a velocidade máxima
            console.log(`Não é possivel ultrapassar a Velocidade Máxima de ${this.velocidadeMaxima} km/h`)
            this.velocidadeAtual = this.velocidadeMaxima;
        }else
            if(delta < 0 ){
                console.log('A velocidade não pode ser menor que zero');
            }
        else{
            this.velocidadeAtual = this.velocidadeAtual + delta;
        }
        return this.velocidadeAtual;
    }

    private desacelera(delta: number): number{
        let velocidadeAtual = this.velocidadeAtual - delta;
        if(velocidadeAtual < 0){
            velocidadeAtual = 0;
        }
        return velocidadeAtual;
    }

    public acelerar(delta: number): number{
        return this.acelera(delta);
    }

    public desacelerar(delta: number): number{
        return this.desacelera(delta);
    }
}

let carro1 = new Car('Ford', 'Ka');
console.log(`Velocidade Atual ${carro1.acelerar(200)} km/h`)
console.log(`Velocidade Atual ${carro1.desacelerar(100)} km/h`)


//Heranca

class Ferrari extends Car{
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
}

const ferrari = new Ferrari('F40', 324)
console.log(`${ferrari.marca}, ${ferrari.modelo}`)
console.log(`Acelera Ferrari: ${ferrari.acelerar(300)}`)

//get e set 
class Person {
    private _idade: number = 0;

    get idade(): number{
        return this._idade;
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 120){
            this._idade = valor;
        }
    }
}

const pessoa1 = new Person();
pessoa1.idade = 10
console.log(pessoa1)
pessoa1.idade = -3 //Não atribui o valor
console.log(pessoa1)


//Atributos e metodos estáticos
class Matematica {
    static PI: number = 3.1416;

    static areaCirc(raio: number): number{
        return Matematica.PI * raio * raio;
    }
}
//Uso do metodo e atributo estático
console.log(Matematica.areaCirc(4)) 



//Classes abstratas

abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]):void;

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {
    public executar(...numeros:number[]): void{
        let reducer = (accumulator: number, correntValue: number) => accumulator + correntValue
        this.resultado = numeros.reduce(reducer)
    }
}

class Multiplicacao extends Calculo {
    public executar(...numeros: number[]): void{
        let reducer = (accumulator: number, correntValue: number) => accumulator * correntValue
        this.resultado = numeros.reduce(reducer)
    }
}

const some = new Soma();
some.executar(1,2,3)
console.log(some.getResultado())

const mult = new Multiplicacao();
mult.executar(5,2)
console.log(mult.getResultado())


// Somente Leitura
class Aviao {
    public readonly modelo: string //Propriedade somente para leitura
    
    constructor(modelo: string, public readonly prefixo: string){
        console.log(modelo)
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'teste' Erro, porquê o atributo foi setado para ser utilizado apenas como leitura
console.log(turboHelice)