/* 
1 => Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
2 => Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

*/
const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

const studentsInMathClass = (objeto) => {
  const chaves = Object.keys(objeto); // Um array com as chaves em forma de string
  let students = 0; // Variável para contar os estudantes
  for (let chave of chaves) { // For para percorrer o objeto relacionado a cada chave
    if (objeto[chave].materia === 'Matemática') { /* Verifica se o valor da chave matéria dentro do objeto (chave) que está sendo verificado é Matemática. */
      students += objeto[chave].numeroEstudantes; // Adiciona o número de estudantes do objeto que entrou na condicional a variável students.
    }
  } return students; // Retorna o valor final da variável students
}
console.log(studentsInMathClass(allLessons));

