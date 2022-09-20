import Person from "./exercicio1-person";
import Student from "./exercicio1-student";
import Teacher, { Subject } from "./exercicio1-teacher";

// const pessoa = new Person('Carolina da Silva', new Date('2005/03/17')); 
// Linha 5 gera erro: Não é possível criar uma instância de uma classe abstrata.

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);