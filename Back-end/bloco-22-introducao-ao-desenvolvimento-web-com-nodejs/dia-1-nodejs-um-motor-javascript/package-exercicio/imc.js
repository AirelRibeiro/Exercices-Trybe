const { questionInt, questionFloat } = require('readline-sync');

const peso = questionInt('Digite seu peso em kg: ');
const altura = questionFloat('Digite sua altura em metros: ');

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  
  const alturaAoQuadrado = altura ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

function classificaIMC(imc) {
  switch (true) {
    case imc < 18.5:
      return "Pelo seu IMC, você está abaixo do peso"
      break;
    case imc >= 18.5 && imc <= 24.9:
      return "Pelo seu IMC, seu peso está normal"
      break;
    case imc >= 25 && imc <= 29.9:
      return "Pelo seu IMC, você está acima do peso"
      break;
    case imc >= 30 && imc <= 34.9:
      return "Pelo seu IMC, você está com Obesidade grau I"
      break;
    case imc >= 35 && imc <= 39.9:
      return "Pelo seu IMC, você está com Obesidade grau II"
      break;
    case imc >= 40:
      return "Pelo seu IMC, você está com Obesidade de grau III ou IV"
      break;
    default:
      return "Dado inválido"
      break;
  }
}

  const IMC = calculaImc(peso, altura)
  console.log(`IMC: ${IMC.toFixed(2)}. ${classificaIMC(IMC)}`);
