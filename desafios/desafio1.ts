/**
 * Criar um objeto funcionario com:
 *  -Array de strings com nomes dos supervisores
 *  -Funcao bater ponto if(<=8) return pontoNormal 
 *      if(>8) return Fora do horário
 */ 

 /**
  * caso precise utilizar o mesmo tipo diversas vezes
  * é possivel fazê-lo declarando um novo tipo
  * Segue abaixo o tipo funcionario
  */
let funcionario: {
    supervisores : string[], 
    baterPonto: (horas: number) => string 
} = {
        supervisores : [ 'supervisor1', 'supervisor2', 'supervisor3' ],
        baterPonto(horario: number): string{
            if(horario <= 8){
                return 'Ponto Normal'
            }else{
                return 'Fora do horário!'
            }
        }
    }

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
