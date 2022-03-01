/* Exercício bônus bloco 4, dia 3 
Foi realizada consulta aos gabaritos, não compreendi como estruturar da questão 2 em diante;
Fonte: 
==> https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar
*/

/* 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
*****
*/

function formaUm(n) {
  let linha = '';
  for (let num = 1; num <= n; num += 1) {
    linha += '*';
  }
  for (let numero = 1; numero <= n; numero += 1) {
    console.log(linha) ;
  }
}
formaUm(10);

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****
*/

let size = 5; // Variável para a base, que será o número oferecido
let symbol = '*'; // O que será usado para construir o triângulo
let inputLine = ''; // Começa vazio para que no zero não imprima nada

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) { // For para percorrer de zero até size
  console.log(inputLine); // A primeira impressão que é uma string vazia
  inputLine = inputLine + symbol; /* O acréscimo do esteristico na para que, na próxima vez que imprimir, a inputLine tenha um a mais, formando um triângulo. */
};

function formaDois(n) {
  const simbolo = '*';
  let linha = '';
  for (let i = 0; i <= n; i += 1) {
    console.log(linha);
    linha += simbolo;
  }
}

formaDois(10);

/* 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também
*/


let n = 5; // Variável para a base, que será o número oferecido
let symbol = '*'; // O que será usado para construir o triângulo
let inputLine = ''; // Começa vazio para que no zero não imprima nada
let inputPosition = n; // Variável para controlar a partir de que coluna passará a ser impresso o asteristico

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) { // For para percorrer de zero até n e FORMAR as linhas
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) { // For para percorrer de 0 a n para PREENCHER cada posição (coluna) da linha
    if (columnIndex < inputPosition) { /* Condicional para verificar se o columnIndex já chegou no valor da inputPosition, entrando no if se for menor */
      inputLine = inputLine + ' ';  /* Adiciona naquela posição do columnIndex um espaço vazio e será adicionado um espaço a cada vez que o for das colunas rodar e o columnIndex entrar nessa condicional */
    } else { // Esse else será executado a partir do momento em que columnIndex for igual ou maior que o inputPosition
      inputLine = inputLine + symbol; /* Adiciona naquela posição do columnIndex um asteristico; é interessante destacar que:
      A cada vez que ele ficou no if, foi adcionado um espaço em branco, ou seja, nada é sobrescrito, por isso que será feito um triângulo invertido;
      Embaixo será visto que, cada vez que o for rodar, será decrecido 1 da variável inputPosition, de forma que sendo ela um númnero menor, o if será executado 1 vez menos e o else 1 vez mais, ficando assim um espaço amenos e um asteristico a mais */
    }
  }
  console.log(inputLine); // Imprime a linha
  inputLine = ''; // Esvazia a linha para que ela seja refeita quando o for rodar novamente
  inputPosition -= 1; // Decresce o inputPosition para que o columnIndex entre no else uma coluna antes da linha anterior
};

function formaTres(n) {
  const simbolo = '*';
  let linha = '';
  let coluna = n;
  for (let line = 0; line <= n; line += 1) {
    for (let column = 0; column <= n; column += 1) {
      if (column < coluna) {
        linha += ' ';
      } else {
        linha += simbolo
      }
    } console.log(linha);
      linha = '';
      coluna -= 1;
  } 
}
formaTres(6);