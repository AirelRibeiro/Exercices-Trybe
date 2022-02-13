let diasDaSemana = {
 1 : 'domingo',
 2 : 'segunda',
 3 : 'terça',
 4 : 'quarta',
 5 : 'quinta',
 6 : 'sexta',
 7 : 'sábado',
  };
  
  // diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo


  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4



  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque



  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey


  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let player = {
    name : "Marta",
    lastName : "Silva",
    age : 34,
    medals : { golden: 2, silver: 3 },
    bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
  }

  console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor jogadora do mundo 6 vezes em " + player.bestInTheWorld + " e possui " + player["medals"]["golden"] + " medalhas de ouro e " + player["medals"]["silver"] + " medalahs de prata.");


  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}



let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}


let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let nome in names) {
  console.log("Olá, " + names[nome]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

  for (let date in car) {
    console.log(date, car[date]);
  }

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo


function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia!


let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado


// Com função
function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7


let fruta = "banana";
let invertida = "";

for (let index = fruta.length - 1; index >= 0; index -= 1) {
  invertida += fruta[index];
}
  console.log(invertida);