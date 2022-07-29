// Exercício 1: Fazendo uso de mocha e chai, estruture os testes para uma função que vai dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função vai receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes;
// Descreva todos os testes que serão feitos utilizando its;
// Crie as asserções validando se os retornos de cada cenário têm o tipo e o valor esperado.

// Exercício 2: Implemente a função apresentada no exercício 1, garantindo que ela vai passar em todos os testes que você escreveu.
// ⚠️ Lembre-se de adicionar o script de test no package.json e de instalar as dependências.

// Exercício 3 Adicione à função do exercício 1, um tratamento para casos em que o parâmetro informado não seja do tipo Number.
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

const whatIsThisNumber = (number) => {
  if(typeof number !== 'number') return 'O valor deve ser um número';
  if(number === 0) return 'neutro';
  if(number < 0) return 'negativo';
  if(number > 0) return 'positivo';
}

module.exports = whatIsThisNumber;