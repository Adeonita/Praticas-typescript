type ContaBancaria = {
    saldo: number,
    depositar: (valor:number) => void
} 

type Correntista =  {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
} 

let contaBancaria : ContaBancaria = {
    saldo: 500,
    depositar(valor: number){
        this.saldo = this.saldo + valor;
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

contaBancaria.depositar(100)
console.log(correntista)