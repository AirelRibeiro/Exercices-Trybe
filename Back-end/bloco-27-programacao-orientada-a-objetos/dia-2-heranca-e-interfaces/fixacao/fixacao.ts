// Para fixar:
// Com base no exemplo do exercício anterior:

// Comente a criação da instância da Superclass.

// Comente a chamada da função que recebe o objeto do tipo Superclass como argumento.

// Faça a função receber não mais um objeto da Superclass, mas sim da Subclass.

// Crie, na Subclass, um método público chamado sayHello2.

// Chame o método sayHello dentro do método sayHello2.

// Mude a visibilidade do método sayHello de public para protected.

// Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método sayHello2.

// Mude a visibilidade do método sayHello de protected para private. O que acontece?


class Superclass {					
  public isSuper: boolean;				
  constructor() {
    this.isSuper = true;
  }

  protected sayHello(): void{
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }

  public sayHello2() {
    this.sayHello();
  }
}

function myFunc(objeto: Subclass) {
  objeto.sayHello2();
}

class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date()); // Referência ao construtor da SuperClass
  }
}

// Para fixar:
// Crie uma interface chamada MyInterface.

// MyInterface deve possuir um atributo myNumber do tipo number.

// MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.

// Crie uma classe MyClass que implementa MyInterface.

// Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.

// Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.

// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.

interface MyInterface {
  myNumber: number;
  myFunc(param: number): string;
}

class MyClass implements MyInterface {
  
  constructor(public myNumber: number) {}

  myFunc(param: number): string {
    return `${this.myNumber + param}`;
  }

}

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));

// Para fixar:
// Crie uma interface Logger.

// Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).

interface Logger {
  log(param: string): void; 
}

// Crie uma classe ConsoleLogger que implementa Logger. Você deve imaginar como o método log deve ser implementado, né? 😁.

class ConsoleLogger implements Logger {
  // constructor() {}

  public log(param: string): void{
    console.log(param);  
  }
}

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.

class ConsoleLogger2 {
  // constructor() {}

  public log(param: string): void{
    console.log(`param: ${param}`);
  }
}

// No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger.

// Crie uma interface Database.

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

// Database deve possuir um atributo do tipo Logger.

// Database deve possuir um método save, que recebe dois parâmetros, key e value, ambos strings, e não retorna nada (void).

// Crie uma classe ExampleDatabase que implementa Database.
class ExampleDatabase implements Database {
  public logger: Logger;
  constructor(logger: Logger = new ConsoleLogger()) {
    this.logger = logger;
  }

  save(key: string, value: string) {
    this.logger.log(`${key}: ${value}`);
  }
}

// ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger.

// Dentro do método save, chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save.

// Crie um objeto de cada um dos Loggers.

const newLogger = new ConsoleLogger();
const newLogger2 = new ConsoleLogger2();

// Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum.
const example = new ExampleDatabase(newLogger);
const example2 = new ExampleDatabase(newLogger2);
const exampleVoid = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.

example.save('chave 1', 'valor 1');
example2.save('chave 2', 'valor 2');
exampleVoid.save('chave 3', 'valor 3');
