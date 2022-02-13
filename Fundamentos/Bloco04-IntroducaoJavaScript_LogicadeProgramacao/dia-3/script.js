/ 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é: '
let number = 50;
let sum = 0;


    for (let index = 1; index <= number; index+=1) {
        sum +=index;
        }

        console.log("A soma total é:" + sum);








//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let number = 150;
let counter = 0;

    for (let index = 2; index <= number; index+=1) {
        if (index % 3 === 0) {
            counter+=1;
        }
    }   if (counter === 50) {
        console.log("Deu certo!")
    }



// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra";
let player2 = "pedra";

if (player1 === "pedra" && player2 === "papel") {
    console.log("Player 2 won!")
}   else if (player1 === "pedra" && player2 === "tesoura") {
    console.log("Player 1 won!")
}   else if (player1 === "papel" && player2 === "tesoura") {
    console.log("Player 2 won!")
}   else if (player1 === "papel" && player2 === "pedra") {
    console.log("Player 1 won!")
}   else if (player1 === "tesoura" && player2 === "papel") {
    console.log("Player 1 won!")
}   else if (player1 === "tesoura" && player2 === "pedra") {
    console.log("Player 2 won!")
}   else {
    console.log("A Ties!")
}


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let age = 19;

let situation = age >= 18 ? "A pessoa é maior de idade" : "A pessoa é menor de idade";

    console.log(situation);

// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let ageCarolzita = 15;
let ageMurilo = 20;
let ageBaeta = 20;

    if (ageCarolzita < ageMurilo && ageCarolzita < ageBaeta) {

        if (ageMurilo < ageBaeta) {
            console.log("Carolzita é a mais nova,tem" + ageCarolzita +  "anos seguida por Murilo com" + ageMurilo + "anos e por Baeta com" + ageBaeta + "anos");
        } else if (ageMurilo > ageBaeta) {
            console.log("Carolzita é a mais nova, seguida por Baeta com" + ageBaeta + "anos e por Murilo com" + ageMurilo + "anos");
        } else {
            console.log("Carolzita é a mais nova, enquanto Baeta e Murilo tem a mesma idade");
        }
    } else if (ageMurilo < ageCarolzita && ageMurilo < ageBaeta) {
        if (ageCarolzita < ageBaeta) {
            console.log("Murilo é a mais novo,tem" + ageMurilo +  "anos seguido por Carolzita com" + ageCarolzita + "anos e por Baeta com" + ageBaeta + "anos");   
        } else if (ageCarolzita > ageBaeta) {
            console.log("Murilo é a mais novo,tem" + ageMurilo +  "anos seguido por Baeta com" + ageBaeta + "anos e por Carolzita com" + ageCarolzita + "anos");
        }   else {
            console.log("Murilo é a mais novo, enquanto Baeta e Carolzita tem a mesma idade");
        }
    } else if (ageBaeta < ageMurilo && ageBaeta < ageCarolzita) {
        if (ageMurilo < ageCarolzita) {
            console.log("Baeta é a mais nova,tem" + ageBaeta +  "anos seguida por Murilo com" + ageMurilo + "anos e por Carolzita com" + ageCarolzita + "anos");
        }  else if (ageMurilo > ageCarolzita) {
            console.log("Baeta é a mais nova,tem" + ageBaeta +  "anos seguida por Carolzita com" + ageCarolzita + "anos e por Murilo com" + ageMurilo + "anos");
        } else { 
            console.log("Baeta é a mais nova, enquanto Murilo e Carolzita tem a mesma idade");     
    }  
        }else { 
        console.log("Todes tem a mesma idade");
    }







