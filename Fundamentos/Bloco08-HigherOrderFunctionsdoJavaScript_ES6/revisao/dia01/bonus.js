// PARTE I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const calculaDanoDragao = (personagem) => {
  const poderTotal = personagem.strength;
  const danoMinimo = 15;
  return Math.floor(Math.random() * (poderTotal - danoMinimo + 1) + danoMinimo);
}

/* const revelaDano = (funcao, nomeDePersonagem, personagem, danoMinimo) => console.log(`O dano do ${nomeDePersonagem} é ${funcao(personagem, danoMinimo)}`);

revelaDano(calculaDanoDragao, 'Dragão', dragon, 15); */

/* 2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const calculaDanoDoGuerreiro = (personagem) => {
  const danoMinimo = personagem.strength;
  const danoMaximo = danoMinimo * personagem.weaponDmg;
  return Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
}

/* revelaDano(calculaDanoGurerreiro, 'Guerreiro', warrior); */

/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/

const calculaDanoDoMago = (personagem) => {
  const mana = personagem.mana;
  const danoMinimo = personagem.intelligence;
  const danoMaximo = personagem.intelligence * 2;
  if (mana < 15) {
    return ({dano: 'Não possui mana suficiente', mana: 0,});
  } else {
    return ({dano: Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo), mana: mana,});
  }
}

console.log(calculaDanoDoMago(mage));

// PARTE II

/* 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
*/

// const gameActions = {
//   turnoDoGuerreiro: (callback) => {
//     const danoDoGuerreiro = callback(warrior);
//     dragon.healthPoints -= danoDoGuerreiro;
//     warrior.damage = danoDoGuerreiro;
//   }
// };

// gameActions.turnoDoGuerreiro(calculaDanoDoGuerreiro);

/* 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
*/

// const gameActions = {
//   turnoDoGuerreiro: (callback) => {
//     const danoDoGuerreiro = callback(warrior);
//     dragon.healthPoints -= danoDoGuerreiro;
//     warrior.damage = danoDoGuerreiro;
//   },
//   turnoDoMago: (callback) => {
//     const danoDoMago = callback(mage);
//     dragon.healthPoints -= danoDoMago;
//     mage.damage = danoDoMago;
//   },
// };

/* 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
*/ 

// const gameActions = {
//   turnoDoGuerreiro: (callback) => {
//     const danoDoGuerreiro = callback(warrior);
//     dragon.healthPoints -= danoDoGuerreiro;
//     warrior.damage = danoDoGuerreiro;
//   },
//   turnoDoMago: (callback) => {
//     const danoDoMago = callback(mage);
//     dragon.healthPoints -= danoDoMago;
//     mage.damage = danoDoMago;
//   },
//   turnoDoDragao: (callback) => {
//     const danoDoDragao = callback(dragon);
//     mage.healthPoints -= danoDoDragao;
//     warrior.healthPoints -= danoDoDragao;
//     dragon.damage = danoDoDragao;
//   }
// };

/* 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno. */

const gameActions = {
  turnoDoGuerreiro: (callback) => {
    const danoDoGuerreiro = callback(warrior);
    dragon.healthPoints -= danoDoGuerreiro;
    warrior.damage = danoDoGuerreiro;
  },
  turnoDoMago: (callback) => {
    const danoDoMago = callback(mage).dano;
    dragon.healthPoints -= danoDoMago;
    mage.damage = danoDoMago;
  },
  turnoDoDragao: (callback) => {
    const danoDoDragao = callback(dragon);
    mage.healthPoints -= danoDoDragao;
    warrior.healthPoints -= danoDoDragao;
    dragon.damage = danoDoDragao;
  },
  resultadoDoTurno: () => battleMembers,
};

gameActions.turnoDoGuerreiro(calculaDanoDoGuerreiro);
gameActions.turnoDoMago(calculaDanoDoMago);
gameActions.turnoDoDragao(calculaDanoDragao);
console.log(gameActions.resultadoDoTurno());
