// Exercício 3: Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma unica lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.

import Person from "./exercicio1-person";
import { Enrollable, Teacher } from "./exercicio2";

// `Class`: Evaluation
// `Attributes`:
//     - score: nota da avaliação
//     - teacher: pessoa professora
//     - type: tipo da avaliação
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
// `Validations`:
//     - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
//     - A pontuação não pode ser negativa
//     - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
//     - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos

class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: string;

  constructor(score: number, teacher: Teacher, type: string) {
    if (type !== 'prova' && type !== 'trabalho') throw new Error('Type deve ser prova ou trabalho!');
    if (type === 'prova' && score > 25) throw new Error('A nota da prova não deve passar de 25 pontos!');
    if (type === 'trabalho' && score > 50) throw new Error('A nota de trabalho não deve passar de 50 pontos!');

    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score() {
    return this._score;
  }

  get teacher() {
    return this._teacher;
  }

  get type() {
    return this._type;
  }
}

// `Class`: EvaluationResult
// `Attributes`:
//     - evaluation: a avaliação
//     - score: a nota da pessoa estudante
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a avaliação e a nota da pessoa estudante
// `Validations`:
//     - A pontuação não pode ser negativa
//     - A pontuação não pode ser maior que a pontuação da avaliação.

export class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    if (score < 0) throw new Error('O score deve ser um valor maior que zero!');
    if (score > evaluation.score) throw new Error('O score deve ser um valor menor que o score da evaluation!');
    this._score = score;
  }

  get score() {
    return this._score;
  }

  get evaluation() {
    return this._evaluation;
  }
}

// `Class`: Student
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - evaluationsResults: lista de resultados de avaliações
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrades: retorna a média das notas da pessoa estudante
//     - addEvaluationResult: adiciona um novo resultado de avaliação a lista
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres

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
