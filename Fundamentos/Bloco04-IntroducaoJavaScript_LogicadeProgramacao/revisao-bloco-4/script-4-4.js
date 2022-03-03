/* 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
Dicas:
Uma string é um array de caracteres, então cada elemento do array é uma letra.
O valor de cada numeral romano é:

| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |

Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
*/

//Objeto que servirá como "Pedra de Roseta"

let roseta = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

console.log(roseta);
/* O processo de conversão é bastante simples, considerando que se recebe uma string tendo como carecteres algarismos romanos, passou-se a comparar cada caractere com as chaves do objeto roseta e, quando forem correspondentes, trocar pelo valor dessa chave; por exemplo:
Ao receber a seguinte string: */
let numeroRomano = 'XXXVIII'
// Será declarado um array para guardar os números depois de convertidos
let numeroDecimal = [];
//Um for para percorrer todos os caracteres da string
for (let letra = 0; letra < numeroRomano.length; letra += 1) {
  for (let chave in roseta) { // Um for in para acessar as chaves do objeto de tradução
    if (chave == numeroRomano[letra]) { // Uma condicional para verificar se a letra é igual a chave que está sendo acessada
      numeroDecimal.push(parseInt(roseta[chave])); // Ao entrar, será adicionado ao array o valor correspondente a chave, sendo assim feita a conversão.
    }
  }
} console.log(numeroDecimal); // Ao imprimir aqui o numeroDecimal ele deve conter os números correspondentes ao I e ao X nas posições 0 e 1 do array, respectivamente.

let inicio = numeroDecimal.length - 1; // Variável para a posição que será comparada
let resultado = numeroDecimal[inicio] // Resultado da conversão, que já começa como sendo o último número do array
for (let n = inicio - 1; n >= 0; n -= 1) { // For para percorrer, começando do penúltimo número do array
  if (numeroDecimal[n] < numeroDecimal[inicio]) { // Condicional para verificar se o número do lado esquerdo (correspondente a posição n) é menor que o do lado direito (correspoondente a posição inicio)
    resultado -= numeroDecimal[n]; // Entrando na condicional, será decrescido o valor da posição n no resultado
  } else { // Se o número do lado esquerdo (correspondente a posição n) é maior ou igual ao do lado direito (correspoondente a posição inicio), será executado o else
    resultado += numeroDecimal[n]; // Será acrescido o valor da posição n no resultado
  }
  inicio = n; // Aqui início passa a ser a posição de n, para que, quando o for rodar novamente, o número dessa posição possa ser comparado com o número do lado esquerdo.
}
console.log(resultado); // Imprime o número convertido

// Transformação em função
let pedraRoseta = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function traduzRomanos(numero) {
  let numeroDecimal = [];
  for (let letra = 0; letra < numero.length; letra += 1) {
    for (let chave in pedraRoseta) { 
      if (chave == numero[letra]) {
      numeroDecimal.push(parseInt(pedraRoseta[chave]))
      }  
    }
  } return numeroDecimal;
}

function transformaEmDecimais(string) {
  let arrayDeNumeros = traduzRomanos(string);
  let inicio = arrayDeNumeros.length - 1; 
  let resultado = arrayDeNumeros[inicio]
  for (let n = inicio - 1; n >= 0; n -= 1) { 
    if (arrayDeNumeros[n] < arrayDeNumeros[inicio]) { 
    resultado -= arrayDeNumeros[n]; 
    } else { 
    resultado += arrayDeNumeros[n]; 
  inicio = n;
    }
  }
  return resultado;
}

console.log(transformaEmDecimais('XXVIII'));
