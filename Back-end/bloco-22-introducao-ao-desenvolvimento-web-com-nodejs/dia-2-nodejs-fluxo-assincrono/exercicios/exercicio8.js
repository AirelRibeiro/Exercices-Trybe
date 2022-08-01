/* Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
Caso contrário, rejeite a Promise com o valor do número.
*/

function fizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if(number % 3 === 0 && number % 5 !== 0) {
      resolve('Fizz');
    }
    if(number % 5 === 0 && number % 3 !== 0) {
      resolve('Buzz');
    }
    if(number % 3 === 0 && number % 5 === 0) {
      resolve('FizzBuzz');
    }
    reject(number);
  })
}

async function verifyNumber(number) {
  try {
    const retorno = await fizzBuzz(number);
    console.log(retorno);
  }
  catch(err) {
    console.log(`Erro: número ${err} não é múltiplo de 3 nem de 5`);
  }
}

verifyNumber(9);
verifyNumber(10);
verifyNumber(15);
verifyNumber(8);
verifyNumber(4);