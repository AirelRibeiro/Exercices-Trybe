const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(2));

const repeat1 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat1(5, console.log);

const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(6, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

/* Para fixar
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. */

const wakeUp = () => 'Acordando!!!';
const coffee = () => 'Bora tomar café!!!';
const sleep = () => 'Partiu dormir!!!';

const doingThings = (funcao) => console.log(funcao());

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);

/* Agora a prática
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
Copiar */


const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmployeeEmail = (nome) => ({Nome: nome, email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`});

console.log(newEmployees(generateEmployeeEmail));

/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/


const result = (funcao, numero) => {
  const number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return funcao(number, numero);
}

const compara = (numeroSorteado, numeroEscolhido) => numeroSorteado === numeroEscolhido ? 'Parabéns você ganhou!!! :D' : 'Tente novamente. :(';

console.log(result(compara, 5));

/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (arrayStudent, arrayAnswers) => {
  let count = 0;
  arrayStudent.forEach((element, posicao) => {
    if (element === 'N.A') {
      console.log(element);
      count = count;
    } else if (element === arrayAnswers[posicao]) {
        console.log(element);
        count += 1;
    } else {
          count -= 0.5;
    }
  }); 
  return count;
}

const divulgaResultado = (funcao, arrayDoAluno, arrayDeRespostas) => console.log(`O estudante alcançou ${funcao(arrayDoAluno, arrayDeRespostas)} pontos no teste.`); 

divulgaResultado(compareAnswers, STUDENT_ANSWERS, RIGHT_ANSWERS);
