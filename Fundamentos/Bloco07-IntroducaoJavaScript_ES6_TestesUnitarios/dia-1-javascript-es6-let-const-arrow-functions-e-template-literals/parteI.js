/* Agora você vai fazer alguns exercícios de fixação.
=> Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
=> Modifique a estrutura da função para que ela seja uma arrow function .
=> Modifique as concatenações para template literals .
*/

// Original
/* function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
*/

// Refeita
const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope}, ótimo, fui utilizada no escopo!`)
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}  
testingScope(true);

/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
=> Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
=> Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

Foi realizada consulta para enteder o uso do .sort()
Fonte: 'https://www.w3schools.com/jsref/jsref_sort.asp'
*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) =>{return a-b})} se encontram ordenados de forma crescente!`); 
