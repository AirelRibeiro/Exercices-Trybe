// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from "./exercicio1";

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  private generateEnrollment(): string{
    const caracteres =  'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
    let str = 'Student';
    for (let i = 0; i < 9; i += 1) {
      const position = Math.floor(Math.random() * 56);
      str = `${str}${caracteres[position]}`;
    }
    return str;
  }

  get enrollment() {
    return this._enrollment;
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

export default Student;
