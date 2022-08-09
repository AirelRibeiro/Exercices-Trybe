const CepModel = require('../../models/CepModel');
const Joi = require('joi');
const ERROR = require('./errorsObject');

class GenericError extends Error {
  constructor(message) {
    super(message);
    this.error = message;
  }
}

function validateCep(cep) {
  const CEP_REGEX = /^\d{5}-?\d{3}$/;
  if (!CEP_REGEX.test(cep)) {
    throw new GenericError('INVALID_CEP');
  }
  const validCep = cep.replace('-', '');
  return validCep;
}

async function existingCep(cep) {
  console.log('cep existe?');
  const adress = await CepModel.findByCep(cep);
  if(!adress) {
    console.log('entrei aqui');
    throw new GenericError('NOT_FOUND_CEP');
  }
  return adress;
}

// Joi.object({
//   cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
//   logradouro: requiredNonEmptyString,
//   bairro: requiredNonEmptyString,
//   localidade: requiredNonEmptyString,
//   uf: requiredNonEmptyString.length(2),
// })

module.exports = {
  validateCep,
  existingCep,
  GenericError
}
