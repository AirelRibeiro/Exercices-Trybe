/* PARA FIXAR: spread operator
Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'manga', 'limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['kiwi', 'morango', 'ameixa'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
}

console.log(fruitSalad(specialFruit, additionalItens));

/* PARA FIXAR 
1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator */


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const conjunto = {...user, ...jobInfos};

console.log(conjunto);


/* 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic" */

const { name, age, nationality, profession, squadInitials, squad } = conjunto;

console.log(`Hi, my name is ${name}, i'm ${age} years old and i'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);


/* PARA FIXAR
1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. */

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [um, dois] = saudacoes;

dois(um);

/* 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis. */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const arrayErrado = [comida, animal, bebida];

const arrayCerto = [animal, bebida, comida] = arrayErrado;

console.log(arrayCerto);
console.log(animal);
console.log(bebida);
console.log(comida);

/* 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares */

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

/* // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationalit } = person;

console.log(nationalit);

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian */

/* Para Fixar
Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian */

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


/* PARA FIXAR
Agora é hora de praticar: altere a função getPosition utilizando a property shorthand */

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});

console.log(getPosition(-19.8157, -43.9542));

const getPosition1 = (latitude, longitude) => ({
  latitude,
  longitude,});

  console.log(getPosition1(-19.8157, -43.9542));

  const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

/* PARA FIXAR 
Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro */

const multiply = (number, value = 1) => number * value

console.log(multiply(8));
