// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Person from "./exercicio1";
import Employee from "./exercicio3";
import Subject from "./exercicio4";

class Teacher extends Person implements Employee{
  private _registration: string;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
    this._subject = subject;
    this.salary = _salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary < 0) throw new Error('O salário deve ser um valor maior que zero');

    this._salary = newSalary;
  }

  get registration() {
    return this._registration;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  generateRegistration(): string{
    const caracteres =  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
    let str = 'Reg';
    for (let i = 0; i < 13; i += 1) {
      const position = Math.floor(Math.random() * 56);
      str = `${str}${caracteres[position]}`;
    }
    return str;
  }
}

export default Teacher;
