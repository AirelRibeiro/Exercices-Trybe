/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
Dica: use parâmetro rest */

const sum = (...numbers) => numbers.reduce((acc, atual) => acc + atual, 0);

console.log(sum(1, 2, 3,4,5));
