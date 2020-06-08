/**
 * Criar um objeto funcionario com:
 *  -Array de strings com nomes dos supervisores
 *  -Funcao bater ponto if(<=8) return pontoNormal 
 *      if(>8) return Fora do horário
 */ 

 /**
  * caso precise utilizar o mesmo tipo diversas vezes
  * é possivel fazê-lo declarando um novo tipo
  */

/**Declaração do tipo funcionario */
type Funcionario = {
    supervisores : string[], 
    baterPonto: (horas: number) => string
}

var baterPonto = function (horario: number): string 
{
    if(horario <= 8){
        return 'Ponto Normal'
    }else{
        return 'Fora do horário!'
    }
};

let funcionario: Funcionario = {  
    supervisores : [ 'supervisor1', 'supervisor2', 'supervisor3' ],
    baterPonto
}

let funcionario2: Funcionario = {
    supervisores: ['supervisor4'],
    baterPonto
}



console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(7));
