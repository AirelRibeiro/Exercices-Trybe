// Exercício 2: Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:

import Person from "./exercicio1-person";
import { Subject } from "./exercicio1-teacher";

// A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.

// B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.

// C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

// `Interface`: Enrollable
// `Attributes`:
//     - enrollment: identificador único da matrícula
// `Methods`:
//     - generateEnrollment: retorna uma string única gerada como matrícula

export interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

// `Class`: Student
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos

class Student extends Person implements Enrollable{
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
  }

  generateEnrollment(): string{
    const caracteres =  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
    let str = 'STU';
    for (let i = 0; i < 13; i += 1) {
      const position = Math.floor(Math.random() * 56);
      str = `${str}${caracteres[position]}`;
    }
    return str;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(enrollment: string) {
    if (enrollment.length < 16 || enrollment.length > 16) throw new Error('A matrícula deve ter 16 caracteres.')
    this._enrollment = enrollment;
  }

  set examsGrades(notes: number[]) {
    if (notes.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas para prova.');

    this._examsGrades = notes;
  }

  set worksGrades(notes: number[]) {
    if (notes.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas para trabalho.');

    this._worksGrades = notes;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  public sumGrades(): number{
    return [...this._examsGrades, ...this._examsGrades].reduce((acc: number, curr: number)=> acc += curr);
  }

  public sumAverageGrad(): number{
    return this.sumGrades() / [...this._examsGrades, ...this._examsGrades].length;
  }
}

// `Class`: Employee
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro
  
class Employee extends Person implements Enrollable {
  private _admissionDate: Date;
  private _enrollment: string = '';

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    ) {
    super(name, birthDate);
    this._admissionDate = new Date();
    this.salary = _salary;
    this.enrollment = this.generateEnrollment();
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary < 0) throw new Error('O salário deve ser um valor maior que zero');

    this._salary = newSalary;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(enrollment: string) {
    if (enrollment.length < 16 || enrollment.length > 16) throw new Error('A matrícula deve ter 16 caracteres.')
    this._enrollment = enrollment;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  generateEnrollment(): string{
    const caracteres =  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
    let str = 'EMP';
    for (let i = 0; i < 13; i += 1) {
      const position = Math.floor(Math.random() * 56);
      str = `${str}${caracteres[position]}`;
    }
    return str;
  }
}

// `Class`: Teacher
// `Extends`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

export class Teacher extends Employee {
  private _subject: Subject

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
  ) {
    super(name, birthDate, salary);
    this.enrollment = this.generateEnrollment();
    this._subject = subject;
  }

  generateEnrollment(): string{
    const caracteres =  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
    let str = 'TEA';
    for (let i = 0; i < 13; i += 1) {
      const position = Math.floor(Math.random() * 56);
      str = `${str}${caracteres[position]}`;
    }
    return str;
  }
}

console.log('Testes a partir daqui');


const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);