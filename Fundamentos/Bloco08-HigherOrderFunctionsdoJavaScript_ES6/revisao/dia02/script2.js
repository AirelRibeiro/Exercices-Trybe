/* Estrutur das funções: 
.forEach
.find
.some
.every
.sort
array.HOF((elemento) => {})
*/


/* PARA FIXAR forEach
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails: 
*/

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
 emailListInData.forEach(showEmailList);

/* 2 - Leia e entenda este exemplo do forEach feito no CodePen.
https://codepen.io/pen/?template=LYZPEwV
*/

/* PARA FIXAR
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
*/

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
};

console.log(findDivisibleBy3And5());

/* 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());

/* 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista: */

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((musica) => musica.id === id);
  };
  
  console.log(findMusic('31031685'));

  /* PARA FIXAR: some
1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
*/

const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name);
}

console.log(hasName(nomes, 'Ana'));

/* PARA FIXAR: every
2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
*/

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));

/* PARA FIXAR: sort
1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
*/
const listOfPeople = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
listOfPeople.sort((personA, personB) => personA.age - personB.age);
  
  console.log(listOfPeople);

  /* 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas */

listOfPeople.sort((personA, personB) => personB.age - personA.age);

  console.log(listOfPeople);
