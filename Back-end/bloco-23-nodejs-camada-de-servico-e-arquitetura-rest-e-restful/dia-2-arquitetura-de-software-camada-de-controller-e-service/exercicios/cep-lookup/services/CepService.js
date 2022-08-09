const cepValidation = require('./validation/cepValidation');

async function findAByCep(cep) {
  const validCep = await cepValidation.validateCep(cep);
  const adress = await cepValidation.existingCep(validCep);
  return adress;
}

module.exports = {
  findAByCep
}
