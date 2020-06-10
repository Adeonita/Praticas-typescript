
let canal: string = 'Gaveta';
let inscritos: number = 123;

//canal = inscritos;

console.log(canal)

//noImplicitAny
function soma(a: any, b: any)
{
    return a + b;
}

function saudar(isManha : boolean){
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia!'
    }else{
        saudacao = 'Olá'
    }
    return saudacao
}