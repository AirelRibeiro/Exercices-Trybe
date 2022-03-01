/* Exercício Bônus, bloco 4, dia 2:

Fontes: 
==> "https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/f93175b8-64ca-4d6a-b702-55fbbb579341/bonus/ac2ab0aa-3f26-48e7-818a-956b56ca3f97?use_case=side_bar" 
==> "http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/"

Execução de Bubble Sort, explicado abaixo linha por linha: */

let numbers = [9, 5, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) { //For para percorrero array,note que ele começa da posição 1
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { //Segundo For, note que ele começana posição 0
    if (numbers[index] < numbers[secondIndex]) { //Condicional executada caso o valor do item na posição index (primeiro for) seja menor que o item na posição secondIndex (segundo for)
      let position = numbers[index]; // Variável para guardar o item do indice do primeiro for
      numbers[index] = numbers[secondIndex]; // Aqui então o item do indice do primeiro for passa a ser o item do indice do segundo for
      numbers[secondIndex] = position; // Aqui o item do indice do segundo for passa a ser o que está guardado na variável position 
      // console.log(numbers);
    }
  } // Esse processo vai ser repetir até finalizar o primeiro for e, cada vez que a condicional for verdadeira, os números comparados serão reorganizados, de forma que o menor esteja em uma posição anterior ao maior no array.
}  console.log(numbers);


let numbers = [9, 5, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) { //For para percorrero array,note que ele começa da posição 1
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { //Segundo For, note que ele começana posição 0
    if (numbers[index] > numbers[secondIndex]) { //Condicional executada caso o valor do item na posição index (primeiro for) seja MAIOR que o item na posição secondIndex (segundo for)
      let position = numbers[index]; // Variável para guardar o item do indice do primeiro for
      numbers[index] = numbers[secondIndex]; // Aqui então o item do indice do primeiro for passa a ser o item do indice do segundo for
      numbers[secondIndex] = position; // Aqui o item do indice do segundo for passa a ser o que está guardado na variável position 
      // console.log(numbers);
    }
  } /* Esse processo vai ser repetir até finalizar o primeiro for e, cada vez que a condicional for verdadeira, os números comparados serão reorganizados, de forma que o MAIOR esteja em uma posição anterior ao menor no array. Esse bloco de código segue a mesma lógica do anterior, tendo sido repetida até a estrutura, a única diferenção reside na condicional que, aqui, será executada para ordenar de forma decrescente */
}  console.log(numbers);

/* Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrayFinal = []; // Array para que os números multiplicados sejam incluídos

for (let item = 0; item < numbers.length; item += 1) { //For para percorrer o array
  if (item === numbers.length - 1) {  // Condicional para que o item entrará se for o último do array
    let nN = numbers[item] * 2; // Aqui uma variável vai receber esse item multiplicado por 2
    arrayFinal.push(nN); // E irá colocá-lo dentro do array
  } else { // O restante do código vai ser executado se aquelacondição não for verdadeira, ou seja, se o item não tiver a última posição do array.
    for (let item2 = 1; item2 < numbers.length; item2 += 1) { //Um For para percorrer o array, note que esse for inicia na posição 1, o que é proposital, visto que devemos multiplicaqr o número do item pelo posterior.
      if (item === item2 - 1) { // Esse if existe porque não queremos que todos os números sejam multiplicados, mas apenas os posteriores; assim essa condição verifica "se a posição item é igual a posição item2 - 1", ou seja a posição imediatamente anterior.
        let numeroNovo = numbers[item] * numbers[item2]; // Aqui é armazenado o valor do item multiplicado pelo item2
        arrayFinal.push(numeroNovo); // Aqui esse valor é colocado dentro do array
      } // Fecha o if do segundo for
    } // Fecha o segundo for para repetir o processo enquanto item2 formenor que numbers.length
  } // Fecha o if do primeiro for
} // Fecha o primeiro for, para repetir o processo item formenor que numbers.length
console.log(arrayFinal);


//arrayFin al deve ser igual a:  [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
