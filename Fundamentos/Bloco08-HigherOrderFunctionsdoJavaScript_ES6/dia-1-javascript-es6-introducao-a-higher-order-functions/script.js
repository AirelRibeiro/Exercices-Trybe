const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());

/* Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
*/

const retornaAcordar = () => 'Acordando!!!';
const retornaCafe = () => 'Bora tomar café!!!';
const retornaDormir = () => 'Partiu dormir!!!';

const doingThings = (callBack) => console.log(callBack());

doingThings(retornaAcordar);
doingThings(retornaCafe);
doingThings(retornaDormir);