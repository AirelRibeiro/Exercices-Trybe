/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .

==> Crie uma função que receba um número e retorne seu fatorial.
==> Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
*/
const fatorial = (n) => (n <= 1)? 1: n*fatorial(n - 1);
console.log(fatorial(10));

/* Se utilizar algo diferente de 1 como retorno na condicional, como uma string com mensagem de erro, quando ele terminar a fatorial, em vez de voltar, ele vai ter um retorno indefinido; isso ocorre, no que entendi até aqui, porque, como a função está chamando a si mesma, ao não cumprir mais a condição que a executa, ela vai fazer todo o caminho inverso, para retornar um resultado*/

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */

//Função em bloco de código

 const aferidorDePalavras = (frase) => {
   const arrayDePalavras = frase.split(' ');
   console.log(arrayDePalavras);
   let contadorDeLetras = 0;
   let maiorPalavra = '';
   for (let palavra of arrayDePalavras) {
    //  console.log(palavra);
     if (palavra.length > contadorDeLetras) {
      //  console.log(palavra);
       maiorPalavra = palavra;
       contadorDeLetras = maiorPalavra.length
      //  console.log(maiorPalavra);
     }
   }  return maiorPalavra;
 }

 console.log(aferidorDePalavras('Antônio foi no banheiro e não sabemos o que aconteceu'));

//Função refatorada usando tudo que pareceu aplicável e eu pensei que nem daria certo, mas aparentemente é possível concatenar vários métodos

const aferePalavras = (frase) => frase.split(' ').sort((a, b) => {return b.length - a.length})[0];

console.log(aferePalavras('Antônio foi no banheiro e não sabemos o que aconteceu'));