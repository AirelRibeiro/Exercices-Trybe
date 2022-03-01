const myName = 'Airel';
const birthCity = 'Recife';
let birthYear = 1997;

console.log(myName, birthCity, birthYear );

birthYear = 2030

console.log(myName, birthCity, birthYear );

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);

const base = 5;
const height = 8;
const area = base * height;

console.log(area);

const perimeter = (base * 2) + (height * 2);

console.log(perimeter);

const nota = 69;

if (nota >= 80) {
  console.log('Parabéns, você foi aprovade!');
} else if (nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera.');
} else {
  console.log('Você foi reprovade!');
}

// Operadores lógicos: &&, ||, !

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida == 'cafézinho' && comida == 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);

const currentHour = 25;
let message = '';

if (currentHour >= 22 && currentHour < 24) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour > 11 && currentHour <= 14) {
  message = 'Hora do almoço!!!'
} else if (currentHour >= 4 && currentHour <= 11) {
  message = 'Hmmm, cheiro de café recém passado'
} else {
  message = 'Hora inválida!'
}

console.log(message);

let weekDay = 'Domingo';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}

/* Truthy and Falsy

Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

Fonte: "https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy" */

// Exercícios 

// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 
function adicao(a, b) {
  console.log(a + b);
}
function subtracao(a, b) {
  console.log(a - b);
}
function multiplicacao(a, b) {
  console.log(a * b);
}
function divisao(a, b) {
  console.log(a / b);
}
function resto(a, b) {
  console.log(a % b);
}

adicao(20, 5);
subtracao(20, 5);
multiplicacao(20, 5);
divisao(20, 5);
resto(20, 5);
