/* 9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
Dica : use object destructuring e spread operator .
OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte */

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const retornaArray = ({spring, summer, autumn, winter}) => [...spring, ... summer, ...autumn, ...winter];

console.log(retornaArray(yearSeasons));
