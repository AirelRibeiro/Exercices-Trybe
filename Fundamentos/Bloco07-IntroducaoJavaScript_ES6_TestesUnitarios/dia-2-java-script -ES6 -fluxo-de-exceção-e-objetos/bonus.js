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
  const chaves = Object.keys(objeto);
  let students = 0;
  for (let chave in chaves) {
    if (objeto[chaves[chave]].materia === 'Matemática') {
      students += objeto[chaves[chave]].numeroEstudantes;
    }
  } return students;
}
console.log(studentsInMathClass(allLessons));
