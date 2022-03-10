/* Construção da função a partir dos testes e das premissas abaixo:
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
*/

const hydrate = (string) => {
  const glassesOfWater = string.match(/\d/g);
  let total = 0;
  for (glass of glassesOfWater) {
    total += parseInt(glass);
  }
  if (total === 1) {
    return `${total} copo de água`
  } else {
    return `${total} copos de água`
  }
}

module.exports = hydrate;