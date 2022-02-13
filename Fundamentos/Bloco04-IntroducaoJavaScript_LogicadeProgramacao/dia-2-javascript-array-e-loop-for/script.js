/*Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);
}



/*Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (index = 0; index < numbers.length; index+=1) {
    soma +=numbers[index];
}
    console.log(soma);





/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;*/
/*A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for (index = 0; index < numbers.length; index+=1) {
    soma +=numbers[index];
}
    media = soma / numbers.length;

    console.log(media);



/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for (index = 0; index < numbers.length; index+=1) {
    soma +=numbers[index];
}
    media = soma / numbers.length;
    if (media > 20) {
        console.log("Valor maior que 20")
    }   else {
        console.log("Valor menor ou igual a 20");
    }



/*Utilizando for , descubra qual o maior valor contido no array e imprima-o;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumber = numbers[0];

for (index = 1; index < numbers.length; index+=1) {
    
    if (numbers[index] > maiorNumber) {

        maiorNumber = numbers[index];

    }   

}   console.log(maiorNumber);






/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantoImpar = 0;

for (index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 !== 0) {

        quantoImpar += 1;
    }
}   if (quantoImpar < 1) {
    console.log("Nenhum valor ímpar encontrado");
}   else {
    console.log(quantoImpar);
}




/*Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumber = numbers[0];

for (index = 1; index < numbers.length; index+=1) {
    
    if (numbers[index] < menorNumber) {

        menorNumber = numbers[index];

    }   

}   console.log(menorNumber);



/*Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

    function maiorNumber (number) {

        let array = [];

        for (let index = 1; index <= number; index += 1) {

            array.push(index);

        } console.log(array);

    }

        maiorNumber(25);



/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 */
function maiorNumberPor2 (number) {

    let array = [];

    for (let index = 1; index <= number; index += 1) {
        array.push(index);
    } 

    let arrayDividido = [];
    

    for (let index = 0; index < array.length; index += 1) {
        arrayDividido.push(array[index] / 2);
    }
    return arrayDividido;
}
    console.log(maiorNumberPor2(25));
    


    