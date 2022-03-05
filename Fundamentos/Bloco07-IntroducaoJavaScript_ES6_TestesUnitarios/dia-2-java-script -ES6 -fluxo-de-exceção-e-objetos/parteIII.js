/* 
1 => Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2 => Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3 => Crie uma função para mostrar o tamanho de um objeto.
4 => Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5 => Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
6 => Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7 => Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

8 => Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adicionaEmObjeto = (object, key, value) => object[key] = value;
adicionaEmObjeto(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro

const keyList = (objeto) => Object.keys(objeto);
console.log(keyList(lesson1));
console.log(keyList(lesson2));
console.log(keyList(lesson3));

/* Crie uma função para mostrar o tamanho de um objeto. 
Na impossibilidade de usar objeto.length, por retornar undefined, estabeleci para a função retornar o total que pares chave-valor contidos no objeto, visto que isso retornaria um array, sendo assim possível de usar o .length.
*/

const objectSize = (objeto) => Object.entries(objeto).length;
console.log(objectSize(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueList = (objeto) => Object.values(objeto);
console.log(valueList(lesson1));
console.log(valueList(lesson2));
console.log(valueList(lesson3));

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
  Esta saída só é possível englobando todos os objetos copiados em um único par de chaves, do contrário, eles vão sobrescrevendo um ao outro, sobando apenas os dados do lesson3.
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const studentsNumber = (objeto) => {
  const studentsLesson1 = objeto.lesson1.numeroEstudantes;
  const studentsLesson2 = objeto.lesson2.numeroEstudantes;
  const studentsLesson3 = objeto.lesson3.numeroEstudantes;
  return studentsLesson1 + studentsLesson2 + studentsLesson3;
}
console.log(studentsNumber(allLessons));

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
*/
const getValueByNumber = (objeto, posicao) => Object.values(objeto)[posicao];
console.log(getValueByNumber(lesson1, 0));

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
*/

const checkEntries = (objeto, chave, valor) => {
  const entries = Object.entries(objeto);
  let check = false;
  for (let entrie of entries) {
    entrie[0] === chave && entrie[1] === valor ? check = true : check;
  }
  return check;
}
console.log(checkEntries(lesson1, 'turno', 'noite'));
console.log(checkEntries(lesson3, 'turno', 'noite'));