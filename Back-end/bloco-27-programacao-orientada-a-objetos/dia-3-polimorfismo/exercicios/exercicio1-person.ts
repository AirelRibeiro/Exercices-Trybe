// Exercício 1: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.


abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O name oferecido deve ter três caracteres ou mais!')
    }
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  private pastDate(value: Date): void | Error{
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data futura.');
  }

  private personAge(value: Date): void | Error{
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    if (Math.floor(diff / yearMs) > 120) throw new Error('A pessoa não deve ter mais de 120 anos');
  }

  set birthDate(value: Date) {
    this.pastDate(value);
    this.personAge(value);
    this._birthDate = value;
  }

}

export default Person;
