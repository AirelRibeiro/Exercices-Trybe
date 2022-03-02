/* Exercício bônus bloco 4, dia 3 
Foi realizada consulta aos gabaritos:
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
  inputLine = inputLine + symbol; /* O acréscimo do esterisco na linha para que, na próxima vez que imprimir, a inputLine tenha um a mais, formando um triângulo. */
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
  for (let line = 0; line < n; line += 1) {
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
formaTres(5);

/* Depois, faça uma pirâmide com n asteriscos de base. Exemplo:
n = 5

  *
 ***
*****

É importante notar que, diferente dos casos anteriores, onde havia sequencias de espaços em branco e de asteristicos uma após as outras, o que marca a construção dessa pirâmide é o asterístico do meio, sempre presente, e o fato de que é a partir dele que vão ser colocados asteristicos a esquerda e a direita para formar a pirâmide.
*/


let n = 5; // Variável para a base, que será o número oferecido
let symbol = '*'; // O que será usado para construir o triângulo
let inputLine = ''; // Variável que vai armazenar a linha

let midOfMatrix = (n + 1) / 2; /* Variável que guarda o meio da pirâmide, que é justamente a posição correspondente ao número de asteristicos na base mais 1 (n + 1) dividido ao meio (n + 1) / 2. */
let controlLeft = midOfMatrix; // Variável para o lado esquerdo do centro da pirâmide
let controlRight = midOfMatrix; // Variável para o lado direito do centro da pirâmide

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) { /*For para percorrer de 0 até o meio da pirâmide, já que agora o númerode linhas, de acordo com o exemplo, corresponde não ao n oferecido, mas ao midOfMatrix */
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) { // For para percorrer de 0 a n para PREENCHER cada posição (coluna) da linha
    if (columnIndex > controlLeft && columnIndex < controlRight) { /* Condicional para verificar se o columnIndex está na posição correta para ser preenchida com asteristico, ou seja, maior que a margem de controle esquerda e menor que a margem de controle direita; como controlLeft será decrecido e controlRight será acrescido a cada rodada do for, será incluído um asteristico a mais de cada aldo. */
      inputLine = inputLine + symbol; /* O que será executado na condicional, que é incluir na linha, na posição (columnIndex) que entrou no if um asteristico */
    } else { /* Será executado sempre que a columnIndex não entrar no if, o que corresponde as vezes em que ela não forma um triângulo partindo do meio da pirâmide */
      inputLine = inputLine + ' '; // Adiciona naquela posição do columnIndex um espaço
    }
  }
  console.log(inputLine); // Imprime a linha
  inputLine = ''; // Esvazia a linha para que ela seja refeita quando o for rodar novamente
  controlRight += 1; // Acrescenta um ao lado direito da pirâmide
  controlLeft -= 1 // Retira um do lado esquerdo da pirâmide
};

function formaQuatro(n) {
  const simbolo = '*';
  let linha = '';
  const meio = (n + 1) / 2;
  let ladoEsquerdo = meio;
  let ladoDireito = meio;
  for (let l = 0; l <= meio; l += 1) {
    for (let c = 0; c <= n; c += 1) {
      if (c > ladoEsquerdo && c < ladoDireito) {
        linha += simbolo;
      } else {
        linha += ' ';
      }
    } console.log(linha);
      linha = '';
      ladoEsquerdo -= 1;
      ladoDireito += 1;
  }
}
formaQuatro(5);

/* Faça uma pirâmide com n asteriscos de base, que seja vazia no meio.Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

let n = 7; // Variável para a base, que será o número oferecido
let middle = (n + 1) / 2; /* Variável que guarda o meio da pirâmide, que é justamente a posição correspondente ao número de asteristicos na base mais 1 (n + 1) dividido ao meio (n + 1) / 2. */
let controlLeft = middle; // Variável para o lado esquerdo do centro da pirâmide
let controlRight = middle; // Variável para o lado direito do centro da pirâmide
let symbol = '*'; // O que será usado para construir o triângulo
for (let line = 1; line <= middle; line += 1) { /*For para percorrer de 0 até o meio da pirâmide, já que agora o númerode linhas, de acordo com o exemplo, corresponde não ao n oferecido, mas ao middle */
  let outputLine = ''; // Variável que armazena linha, declarada aqui para ser reiniciada a cada for de linha
  for (let col = 1; col <= n; col += 1) { // For para percorrer de 1 a n para PREENCHER cada posição (coluna) da linha
    if (col == controlLeft || col == controlRight || line == middle) { /* Condicional para garantir que o triângulo seja vazio no meio; o for só entrará nesse if se a posição corresponder ao controle esquerdo, ao controle direito ou se for a última linha */
      outputLine += symbol; /* O que será executado na condicional, que é incluir na linha, na posição (col) que entrou no if um asteristico */
    } else { /* Será executado sempre que a col não entrar no if, o que corresponde as vezes em que ela não forma um triângulo partindo do meio da pirâmide ou for um preenchimento de dentro dela. */
      outputLine += ' '; // Adiciona naquela posição do col um espaço
    }
  }
  controlLeft -= 1; // Decrementa lado esquerdo
  controlRight += 1; // Acrescenta lado direito
  console.log(outputLine); // Imprime a linha
}
  
function formaCinco(n) {
  let numero = n;
  if (n % 2 === 0) {
    numero = n - 1
  } 
  const meio = (numero + 1) / 2;
  let ladoDireito = meio;
  let ladoEsquerdo = meio;
  const simbolo = '*';
  for (let l = 1; l <= meio; l += 1) {
    let linha = '';
    for (let c = 1; c <= numero; c += 1) {
      if (c === ladoDireito || c === ladoEsquerdo || l === meio) {
        linha += simbolo;
      } else {
        linha += ' ';
      }
    } ladoDireito += 1;
      ladoEsquerdo -= 1;
      console.log(linha);
  }
}
formaCinco(8);

/* 6- Faça um programa que diz se um número definido numa variável é primo ou não.

==> Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
==> Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/
let numero = 3; // Variável para armazenar o número que será verificado

let divisores = []; // Array pa guardar os divisores

for (let n = 1; n <= numero; n += 1) { // For para percorrer todos os números de um até o número verificado
  if (numero % n === 0) { // Condicional para verificar se o número é divisível por n (ou seja,se o resto de sua divisão é igual a 0)
    divisores.push(n); // Inclui n no array de ele for um divisor válido
  }
}
if (divisores.length > 2) {
  console.log('Esse número não é primo');
} else {
  console.log('Esse número é primo');
}

function ePrimo(n) {
  let divisores = [];
  for (let num = 1; num <= n; num += 1) {
    if (n % num === 0) {
      divisores.push(num)
    }
  } if (divisores.length < 2) {
    console.log('Esse número não é primo');
    } else {
  console.log('Esse número é primo');
    }
}

ePrimo(15);