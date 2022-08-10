const Joi = require('joi');
const cepValidation = require('./validation/cepValidation');

const validations = {
  validLogBarAndLoc: Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required().messages({'string.pattern.base': 'O baguio é doido!|400'}),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    }),
}

async function findAByCep(cep) {
  const validCep = await cepValidation.validateCep(cep);
  const adress = await cepValidation.existingCep(validCep);
  return adress;
}

async function insertCepAdress(cep, logradouro, bairro, localidade, uf) {
  const validAdress = validations.validLogBarAndLoc.validate({ cep, logradouro, bairro, localidade });

  
  return validAdress;
}

module.exports = {
  findAByCep,
  insertCepAdress
}
