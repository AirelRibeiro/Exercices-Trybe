import Person from "./exercicio1-person";

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

export class Subject {
  constructor(public _name: string) {
    this.name = _name;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('Name deve ter no mínimo 3 caracteres');
    }
    this._name = newName;
  }
}

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
