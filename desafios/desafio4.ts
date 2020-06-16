class Moto {
    constructor(public nome:string, public velocidade: number = 0){
    }

    public buzinar(): void{
        console.log('bibi!!');
    }

    public acelerar(delta: number): void{
        this.velocidade = this.velocidade + delta
    }
}

console.log('****Exercicio 1****')
const moto = new Moto('Fan', 10)
console.log(moto)
moto.buzinar()
moto.acelerar(30)
console.log(moto.velocidade) 

///////////////////////////

abstract class Objeto2D {
    constructor(public base: number = 0, public altura: number = 0){
    }

    abstract area(): number
}

class Retangulo extends Objeto2D {
    
    public area(): number{
        return this.base * this.altura
    }
}

console.log('****Exercicio 2****')
const ret = new Retangulo(2,2)
console.log(ret.area())

////////////////////////

class Estagiario {
    protected _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(nome: string){
        if(nome.length >= 3){
            this._primeiroNome = nome
        }else{
            this._primeiroNome = ''
        }
    }
}

console.log('****Exercicio 3****')
const estagiario = new Estagiario()
estagiario.primeiroNome = 'Adeonita'
console.log(estagiario)