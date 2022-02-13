const myName = "Airel";
const birthCity = "Recife";
let birthYear = 1997;

console.log (myName);
console.log (birthCity);
console.log (birthYear);

birthYear = 2030;

console.log (birthYear);

birthCity = "Não Recife";

console.log (birthCity);

// Você vai notar ao rodar esse código que o console.log após reatribuir um valor a birthCity, ele informará um erro nessa seção; isso ocorre porque birthCity é uma 'const', logo, seu valor não pode ser mudados ao longo do código.

/*Função para testar operador &&*/

const currentHour = 15;

let message = "";

    if(currentHour >= 22) {
        message = "Não deveríamos comer nada, é hora de dormir";
    } else if (currentHour >= 18 && currentHour < 22) {
        message = "Rango da noite, vamos jantar :D";
      } else if (currentHour >= 14 && currentHour < 18) {
          message = "Vamos fazer um bolo pro café da tarde?"
         } else if (currentHour >= 11 && currentHour < 14) {
             message = "Hora do almoço!!!";
           } else {
               message = "Hmmm, cheiro de café recém passado";
             }

    console.log(message);

// ////////////////////////////////////////////////////////////////////////////////////////////////


/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 10;
const b = 20;

//SOMA
    let triangulo = a + b;
        console.log(triangulo);

//SUBTRAÇÃO
    let triangulo = a - b;
        console.log(triangulo);

//MULTIPLICAÇÃO
    let triangulo = a * b;
        console.log(triangulo);

//DIVISÃO
    let triangulo = a / b;
        console.log(triangulo);

//RESTO
    let triangulo = a % b;
        console.log(triangulo);

// ////////////////////////////////////////////////////////////////////////////////////////////////


/* 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const c = 18;
const d = 21;

    if(c > d) { 
        console.log(c);

    } else { console.log(d);
      }
  
// ////////////////////////////////////////////////////////////////////////////////////////////////

/* 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const e = 21;
const f = 35;
const g = 18;


    if(e > f && e > g) { 
        console.log(e);

    } else if(f > e && f > g) { 
        console.log(f);

    } else {console.log(g);
      }
  
// ////////////////////////////////////////////////////////////////////////////////////////////////


/* 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

const h = 76;

    if (h > 0) {
        console.log("positive");
    } else if ( h < 0) {
        console.log("negative");
      }  else {
            console.log("Zero");
      } 

// ////////////////////////////////////////////////////////////////////////////////////////////////

/* 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
    • Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    • Um ângulo será considerado inválido se não tiver um valor positivo.*/

const angulo1 = -40;
const angulo2 = -60;
const angulo3 = 80;

let triangulo = null;

  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    triangulo = "O ângulo inserido é inválido";
  } else if (angulo1 + angulo2 + angulo3 == 180) {
      triangulo = true;
    } else if (angulo1 + angulo2 + angulo3 != 180) {
        triangulo = false;
      }
console.log(triangulo);

// ////////////////////////////////////////////////////////////////////////////////////////////////

/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

function xadrez(peca) {

  let resultado = "";

  switch (peca.toUpperCase()) {
    case ("PEÃO"):
      resultado = "Os peões se movem somente para frente, uma casa por vez";
      break;
    case ("BISPO"):
      resultado = "O bispo se move em uma linha reta diagonalmente no tabuleiro";
      break;
    case ("CAVALO"):
      resultado = "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
      break;
    case ("TORRE"):
      resultado = "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
      break;
    case ("RAINHA"):
      resultado = "Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.";
      break
    case ("REI"):
      resultado = "O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente."
      break;
    default: 
      resultado = "Peça não existe";
      break;
    
    }

    return resultado;
}

    console.log(xadrez("rEi"));

   /* O uso do (peca.toUpperCase()) como entrada do switch é para que, qualquer string adicionada passe para caracteres maiúsculo, assim, independente de como forem escritas as strings (com letras maiúsculas ou minúsculas), a função vai rodar.*/

// ////////////////////////////////////////////////////////////////////////////////////////////////

/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

Somar dois números*/

// Entrada: number1 e number2
let number1 = 5;
let number2 = 10;

// Processamento: soma number + number2
let soma = number1 + number2;

// Saída: resultado da soma
console.log(soma);

function somaDeDoisNumeros (number1, number2) {
  let soma = number1 * number2;
  return soma;
}

console.log(somaDeDoisNumeros(5,2));
console.log(somaDeDoisNumeros(5,7));
console.log(somaDeDoisNumeros(8,2));
console.log(somaDeDoisNumeros(15,12));
console.log(somaDeDoisNumeros(25,32));
/*Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

function porcentagemParaNota(valor) {
  let nota = "";  

    if (valor <= 100 && valor >= 90) {
      nota = "A";
    } else if (valor < 90 && valor >= 80) {
      nota = "B";
      } else if (valor < 80 && valor >= 70) {
        nota = "C";
        } else if (valor < 70 && valor >= 60) {
          nota = "D";
          } else if (valor < 60 && valor >= 50) {
            nota = "E";
            } else if (valor < 50) {
              nota = "F;"
            } else if (valor <= 0 || valor > 100) {
              nota = "Nota passada é inválida";
            }
  
            return nota;
}

  console.log(porcentagemParaNota(75));

// ////////////////////////////////////////////////////////////////////////////////////////////////  

  /*Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

  function parOuNao(number1, number2, number3) {

      let resultado = false;

    if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
      resultado = true;
    }
    return resultado;
  }

    console.log(parOuNao(9,8,9));

// ////////////////////////////////////////////////////////////////////////////////////////////////

    /* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if. */

function imparOuNao(number1, number2, number3) {

  let resultado = false;

if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  resultado = true;
}
return resultado;
}

console.log(imparOuNao(8,8,8));

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


console.log(getRandomIntInclusive(1, 10000));


// ////////////////////////////////////////////////////////////////////////////////////////////////

/*Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
    • Atente que, sobre o custo do produto, incide um imposto de 20%.
    • Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    • O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        ◦ valorCustoTotal = valorCusto + impostoSobreOCusto
        ◦ lucro = valorVenda - valorCustoTotal (lucro de um produto) */

        function numero10 (original, venda) {
          if (original < 0 || venda < 0) {
              console.log("Algum dos valores é inválido");
          } else {
              let porcentagem = 0.20;
              let imposto = original * porcentagem;
              let produto = original + imposto;
              let lucro = venda - produto;
              let lucroMil = lucro * 1000;
      
                  console.log(lucroMil);
             }  
      }
      
      /* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
          • A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
              ◦ INSS (Instituto Nacional do Seguro Social)
                  ▪ Salário bruto até R$ 1.556,94: alíquota de 8%
                  ▪ Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
                  ▪ Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
                  ▪ Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
              ◦ IR (Imposto de Renda)
                  ▪ Até R$ 1.903,98: isento de imposto de renda
                  ▪ De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
                  ▪ De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
                  ▪ De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
                  ▪ Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
      Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
          • O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
          • Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
          • Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
              ◦ R$ 2.670,00: salário com INSS já deduzido;
              ◦ 7.5%: alíquota de imposto de renda;
              ◦ R$ 142,80 parcela a se deduzir do imposto.
          • Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
          • O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
      Resultado: R$ 2.612,55. */
      
      
      
      function salario (salarioBruto) {
        let aliquotaINSS = 0;
        let salarioBase = 0;
      
          if (salarioBruto <= 1556.94) {
            aliquotaINSS = salarioBruto * 0.08;
          } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
              aliquotaINSS = salarioBruto * 0.09;
            } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
                aliquotaINSS = salarioBruto * 0.11;
              } else {
                  aliquotaINSS = 570.88;
                }
              salarioBase = salarioBruto - aliquotaINSS;

        let valorIR = 0;      
      
          if (salarioBase < 1903.98) {
            valorIR = 0;
          } else if (salarioBase >=1903.99 && salarioBase <= 2826.65) { 
              valorIR = (0.075 * salarioBase) - 142.80;
            } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
              valorIR = (0.15 * salarioBase) - 354.80;
              } else if (salarioBase >=3751.06 && salarioBase <= 4664.68) {
                  valorIR = (0.225 * salarioBase) - 636.13;
                } else {
                    valorIR = (0.227 * salarioBase) - 869.36;
                  }

               return salarioBase - valorIR;   

          }

          console.log(salario(1100));
      
      


          let car = ["40 libras", "reclinável e macia", "8 válvulas", "automática"];

          let carro = {
            pneus: "40 libras",
            cadeira: "macia e reclinável",
            motor: "8 válvulas",
            marcha: "automática"
          };

          console.log(carro);
