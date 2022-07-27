const { questionInt } = require('readline-sync');

function calculaVelocidadeMed(distancia, tempo) {
  const velocidadeMedia = (distancia / tempo);

  return velocidadeMedia;
}

const distancia = questionInt('Distância percorrida (m): ');
const tempo = questionInt('Tempo gasto (s): ');

const velocidadeMed = calculaVelocidadeMed(distancia, tempo);

console.log(`Velocidade média: ${velocidadeMed.toFixed(2)} m/s`);
