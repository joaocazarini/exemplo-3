// //DECLARAÇÕES E VARIÁVEIS

// var nome ="fiap";
// console.log(nome);

// let idade = 19;
// console.log(idade);

// const sobrenome="fiapinho";
// console.log(sobrenome);

// //declarando uma variável indefinida
// let nome1;
// console.log(nome1);

// //declando uma variavel nula
// let nome2=null;
// console.log(nome2)

// //TIPOS DE VARIÁVEIS

// let exemplo1=10;
// console.log(typeof exemplo1)

// let exemplo2 ="tecnologia";
// console.log(typeof exemplo2);

// let exemplo3=true;
// console.log(typeof exemplo3);

// let exemplo4 ={};
// console.log ={}

// let exemplo5 ={};
// console.log(typeof exemplo5)

// //CONVERSÕES

// let m=numFloat =123.456;
// console.log(parseInt(numFloat));

// let numString ="123.456";
// console.log(parsefloat(numstring));

// let numFloat =123.411

// //METODOS

// //lenght = verifica o tamanho da string
// let frase = "O mundo da tecnologia";
// console.log(frase.length);

// //indexOf -retorna um trechgo do texto
// let texto="a programação indomável e sustentável";
// comsole.log(texto.indexOf(""))

// //slice - retorna um trecho do texto com ínicio e fim
// let info="processamento de ponta";
// console.log(info.slice(2,6))

// //OPERADORES ARITMÉTICOS

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

//OPERADORES LÓGICOS

// const num3=10;
// const num4=20;

// console.log(num3 < num4);
// console.log(num3> num4 && num4 < num3);
// console.log (num3 < num4 || num4 < num3);

// //operadores de comparação

// console.log(num3 == num4);

//ESTRUTURA CONDICIONAL

//if

if(true){
    console.log("é verdadeiro")
}

//if/else

let usuario="teste"
if (usuario =="teste"){
    console.log("usuario correto")
}else{
    console.log("usuario errado")
}

// if encadeado / aninhado

let idade =15

if(idade < 15){
    console.log("menor de idade")
}else if(idade >15 && idade < 18){
    console.log("nao é maior mas pode entrar")
}else{
    console.log("pode entrar,é maior")
}

// switch

let time="palmeiras"

switch(time){
    case "palmeiras":
        console.log("melhor time")
        break;
    case "corinthians":
        console.log("nao é o melhor time")
        break;
    case "santos":
        console.log("pelé")
        break;
    default:
        console.log("nenhuma das opções") 
}

//ternario

let valor = 100;

let resultado = valor == 100 ? "certo" :"errado"
console.log(resultado)

//ternario encadeado
let produto ="notebook"
const preço=produo ="notebook" ? desconto ? 100 :200 :produto ==="mouse" ? 30:100;
console.log(preço)

//estrutura de repetição

//FOR

for(let i=0; i<=10;i++){
     console.log("o valor de I é :" ,i)
}





