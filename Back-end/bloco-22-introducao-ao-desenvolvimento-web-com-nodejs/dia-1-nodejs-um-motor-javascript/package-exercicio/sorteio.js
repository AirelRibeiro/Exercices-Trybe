const { questionInt, question } = require('readline-sync');

function verificaNumero(numero, resposta) {
  if (numero === resposta) {
    return 'Parabéns, número correto!';
  } else {
    return `Não foi dessa vez, o número era ${numero}`
  }
}

function advinheoNumero() {
  const numero = parseInt(Math.random() * 10);

  const resposta = questionInt(
  'Que número estou pensando?',
);

  verificaNumero(numero, resposta);

  const novamente = question(
    'Deseja jogar novamente? (Digite sim ou não)');

  if(novamente === "sim") {
    advinheoNumero();
  } else {
    console.log('Gratidão por jogar conosco, até a próxima!');
    return;
  }
}

advinheoNumero();
