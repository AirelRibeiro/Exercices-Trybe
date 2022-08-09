const CepModel = require('../../models/CepModel');
const ERROR = require('./errorsObject');

class GenericError extends Error {
  constructor(message) {
    super(message);
    this.error = ERROR[message];
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
  const adress = await CepModel.findByCep(cep);
  if(!adress) {
    throw new GenericError('NOT_FOUND_CEP');
  }
  return adress;
}

module.exports = {
  validateCep,
  existingCep
}
