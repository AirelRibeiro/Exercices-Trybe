import Person from "./exercicio1-person";

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
