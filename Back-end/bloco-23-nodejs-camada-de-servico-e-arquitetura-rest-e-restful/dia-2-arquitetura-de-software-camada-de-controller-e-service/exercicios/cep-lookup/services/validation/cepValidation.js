const CepModel = require('../../models/CepModel');
const Joi = require('joi');
const GenericError = require('../../errors/GenericError');
const { runSchema } = require('../../errors/errorSchema');

function validateCep(cep) {
  const CEP_REGEX = /^\d{5}-?\d{3}$/;
  if (!CEP_REGEX.test(cep)) {
    throw new GenericError('INVALID_CEP');
  }
  const validCep = cep.replace('-', '');
  return validCep;
}

async function existingCep(cep) {
  const [adress] = await CepModel.findByCep(cep);
  if(adress.length === 0) {
    throw new GenericError('NOT_FOUND_CEP');
  }
  return adress;
}

const validations = {
  validdCep: runSchema(Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    }), 'INVALID_CEP'),
  validLogBarAndLoc: runSchema(Joi.object({
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    }), 'ALL_FIELDS_ ARE_REQUIRED'),
}

// async function validAdress(cep) {
//   return runSchema(Joi.object({
//     cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
//   }), 'NOT_FOUND_CEP')
// }

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
  validations
}
