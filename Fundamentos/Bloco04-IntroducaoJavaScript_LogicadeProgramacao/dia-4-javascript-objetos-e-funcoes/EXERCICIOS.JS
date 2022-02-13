let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function welcome () {
  console.log("Welcome " + info.personagem);
}
welcome();

info.recorrente = "Sim";

for (let key in info) {
  console.log(key);
}

for (let key in info) {
  console.log(info[key]);
}


let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}


for (let key in info, info2) {
  if (key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos são recorrentes")
  } else console.log(info[key] + " e " + info2[key]);
}

// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
  {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
  },
]
};

console.log("O livro favorito de " + leitor["nome"] + " " + leitor["sobrenome"] + " se chama " + leitor.livrosFavoritos[0]["titulo"]);


// Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },);


// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".  

console.log(leitor.nome + " tem " + leitor["livrosFavoritos"].length + " livros favoritos");


// Exercícios Parte 2

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function isPalindrome (palavra) {
  let invertida = "";
  let palindrome = false;

  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    invertida += palavra[index];
  } if (palavra === invertida) {
    palindrome = true;
    }
  return palindrome;  
} 



  console.log(isPalindrome("arara"));
  console.log(isPalindrome("trybe"));

//Gabarito:

  //Duas formas de resolver o exercício
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    } console.log(word[index]);
    console.log(word[(word.length - 1) - index]);
  }
  return true;
}
// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false





function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      
      return false;
    // } console.log(word[index]);
    //   console.log(word[(word.length - 1)]);
    //   console.log(word[(word.length - 1) - index]);
  }
  return true;
  }
}
// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

function biggerValue (array) {

  let biggerNumber = 0;

  for (let index in array) {
    
    if (array[biggerNumber] < array[index]) {
      
      biggerNumber = index;
    
  } 
    }  return biggerNumber
    
  
}
 console.log(biggerValue([2, 3, 6, 7, 10, 1]));
 console.log(biggerValue([20, 32, 63, 7, 105, 150]));
 console.log(biggerValue([2, 3, 6, 755, 10, 150,1100]));
 console.log(biggerValue([2000, 3, 6, 78, 10, 150]));
 console.log(biggerValue([2, 3, 690, 607, 105, 150]));


 /* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .*/

function lowerValue (array) {

  let lowerNumber = 0;

  for (let index in array) {
    
    if (array[lowerNumber] > array[index]) {
      
      lowerNumber = index;
    
  } 
    }  return lowerNumber
    
  
}
 console.log(lowerValue([2, 3, 6, 7, 10, 1]));
 console.log(lowerValue([20, 32, 63, 7, 105, 150]));
 console.log(lowerValue([2, 3, 6, 755, 10, 150,1100]));
 console.log(lowerValue([2000, 3, 6, 78, 10, 150]));
 console.log(lowerValue([2, 3, 690, 607, 105, 150]));


 function somatorio(n) {
  let valorFinal = 0

  for (let i = 1; i <= n; i += 1) {
    valorFinal += i;
  } 
    return valorFinal
 }

  console.log(somatorio(5));