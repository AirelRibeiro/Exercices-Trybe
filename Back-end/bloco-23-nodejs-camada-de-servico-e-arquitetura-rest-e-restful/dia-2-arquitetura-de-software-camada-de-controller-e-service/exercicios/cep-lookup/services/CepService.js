const cepValidation = require('./validation/cepValidation');

async function findAByCep(cep) {
  const validCep = await cepValidation.validateCep(cep);
  const adress = await cepValidation.existingCep(validCep);
  return adress;
}

// async function insertCepAdress(cep, logradouro, bairro, localidade, uf) {

// }

module.exports = {
  findAByCep
}
