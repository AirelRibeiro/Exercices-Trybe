const { questionInt } = require('readline-sync');

function exibeFibonacci() {
  const numero = questionInt(`Quantos números você quer?
  `);
  if(numero <= 0) {
    console.log(`
    Escolha um inteiro maior que 0!`);
    exibeFibonacci();
    return;
  }
  const numeros = [1, 1];
  for(let i = 2; numeros.length < numero; i += 1) {
    numeros.push(numeros[i - 2] + numeros[i-1]);
  }
  console.log(numeros);
}

exibeFibonacci();