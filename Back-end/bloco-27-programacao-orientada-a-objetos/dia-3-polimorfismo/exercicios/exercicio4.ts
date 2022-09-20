// Exercício 4: Ótimo! Já evoluímos bastante nosso sistema escolar, mas ainda há algumas melhorias a serem feitas. Nossa classe de avaliação está carregando muita responsabilidade tendo que lidar com tipos diferentes de avaliação. Então, vamos refatorar nosso sistema pra que cada tipo de avaliação passe a ser uma especialização da nossa classe de avaliação e, assim como para nossa classe de pessoa, não faz sentido termos instâncias de avaliação no nosso sistema somente de suas especializações.

import Person from "./exercicio1-person";
import { Subject } from "./exercicio1-teacher";
import { Enrollable, Teacher } from "./exercicio2";


// `Abstract Class`: Evaluation
// `Attributes`:
//     - score: nota da avaliação
//     - teacher: pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a pontuação, a pessoa professora
// `Validations`:
//     - A pontuação não pode ser negativa

abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;

  constructor(teacher: Teacher, score: number) {
    if (score < 0) throw new Error('A nota não pode ser menor que 0!');
    this._score = score;
    this._teacher = teacher;
  }

  get score() {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('A nota não pode ser menor que 0!');

    this._score = newScore;
  }

  get teacher() {
    return this._teacher;
  }

}

// `Class`: Exam
// `Extends`: Evaluation
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a pontuação, a pessoa professora
// `Validations`:
//     - A pontuação não pode ser negativa
//     - A pontuação não pode passar de 25 pontos

class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }
    super.score = value;
  }
}

class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(value: number) {
    if (value > 50) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }
    super.score = value;
  }
}

class EvaluationResult {
  private _evaluation: Exam | Work;
  private _score: number;

  constructor(evaluation: Exam | Work, score: number) {
    if (score < 0) throw new Error('O score deve ser um valor maior que zero!');
    if (score > evaluation.score) throw new Error('O score deve ser um valor menor que o score da evaluation!');
    this._score = score;
    this._evaluation = evaluation;
  }

  get score() {
    return this._score;
  }

  get evaluation() {
    return this._evaluation;
  }
}

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment() {
    return this._enrollment;
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

  get evaluationsResults() {
    return this._evaluationsResults;
  }

  public sumGrades(): number{
    return [...this._evaluationsResults].reduce((acc, curr) => curr.score + acc, 0);
  }

  public sumAverageGrad(): number{
    return this.sumGrades() / this._evaluationsResults.length;
  }

  public addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50);
const examHistory = new Exam(joao, 25);
const workHistory = new Work(joao, 50);

carolina.addEvaluationResult(new EvaluationResult(examMath, 23));
carolina.addEvaluationResult(new EvaluationResult(workMath, 42));
carolina.addEvaluationResult(new EvaluationResult(examHistory, 25));
carolina.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.sumGrades());
console.log('Média das notas: ', carolina.sumAverageGrad());

lucas.addEvaluationResult(new EvaluationResult(examMath, 25));
lucas.addEvaluationResult(new EvaluationResult(workMath, 49));
lucas.addEvaluationResult(new EvaluationResult(examHistory, 20));
lucas.addEvaluationResult(new EvaluationResult(workHistory, 50));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Soma das notas: ', lucas.sumGrades());
console.log('Média das notas: ', lucas.sumAverageGrad());
