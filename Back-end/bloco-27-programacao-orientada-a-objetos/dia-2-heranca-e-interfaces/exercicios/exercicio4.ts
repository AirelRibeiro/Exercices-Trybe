// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

class Subject {
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

export default Subject;
