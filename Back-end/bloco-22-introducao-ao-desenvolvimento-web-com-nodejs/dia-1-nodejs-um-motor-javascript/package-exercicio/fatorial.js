const { questionInt } = require('readline-sync');

// const numero = questionInt('Escolha um número ');

function fatorial() {
  const numero = questionInt('Qual seu número? ');
  if(numero <= 0) {
    console.log(`
    Escolha um inteiro maior que 0!`);
    fatorial();
    return;
  }
  let resultado = numero;
  for(let i = numero - 1; i >= 1; i -= 1) {
    resultado *= i
  }
  console.log(resultado);
}

fatorial();