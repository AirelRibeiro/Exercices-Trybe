import readline from 'readline-sync';
import monthsOfYear from './exercicio2';
import seasons from './exercicio3';

const months = Object.keys(monthsOfYear);

const month = readline.keyInSelect(months, 'Escolha um mês do ano:');

const monthsForSeasons = {
  [seasons.Verao]: [monthsOfYear[11], monthsOfYear[0], monthsOfYear[1], monthsOfYear[2]],
  [seasons.Primavera]: [monthsOfYear[8], monthsOfYear[9], monthsOfYear[10], monthsOfYear[11]],
  [seasons.Outono]: [monthsOfYear[2], monthsOfYear[3], monthsOfYear[4], monthsOfYear[5]],
  [seasons.Inverno]: [monthsOfYear[5], monthsOfYear[6], monthsOfYear[7], monthsOfYear[8]]
};

const 