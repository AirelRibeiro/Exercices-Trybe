/* 4 - Para as funções encode e decode crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

function encode(thread) {
  let newThread = "";
  for (let letter of thread) {
    if (letter == "a") {
      newThread += "1";
    } else if (letter == "e") {
        newThread += "2";
      } else if (letter == "i") {
          newThread += "3";
      } else if (letter == "o") {
          newThread += "4";
        } else if (letter == "u") {
            newThread += "5";
        } else {
            newThread += letter;
        }
  }
  return newThread;
}


function decode(newThread) {

    newNewThread = "";

  for (let number of newThread) {
    if (number == "1") {
      newNewThread += "a";
    } else if (number == "2") {
        newNewThread += "e";
      } else if (number == "3") {
          newNewThread += "i";
      } else if (number == "4") {
          newNewThread += "o";
        } else if (number == "5") {
            newNewThread += "u";
        } else {
            newNewThread += number;
          }  
  }
  return newNewThread;
}

module.exports = {encode,decode};