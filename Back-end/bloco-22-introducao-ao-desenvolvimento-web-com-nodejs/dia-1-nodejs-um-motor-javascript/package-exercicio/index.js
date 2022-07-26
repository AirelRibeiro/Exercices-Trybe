const { questionInt } = require('readline-sync');

const scripts = ['./imc.js', './velocidade.js', './sorteio.js', './fatorial.js', './fibonacci.js'];

function escolhaSeuScript(script) {
  if(script < 0 || script > scripts.length - 1) {
    console.log('Opção inválida. Tente novamente e selecione uma das opções oferecidas.');
    return;
  }
  console.log(script);
  require(scripts[script]);
}

const script = questionInt(`
    Escolha na opções abaixo:

    Para Calcular IMC, digite 0;
    Para Calcular velocidade, digite 1;
    Para Advinhar o número, digite 2;
    Para Calcular fatorial, digite 3;
    Para ver a Sequência Fibonacci, digite 4.

    `);

escolhaSeuScript(script);