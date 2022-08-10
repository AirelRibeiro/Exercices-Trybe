const ERROR = {
  INVALID_CEP: { code: 'invalidData', status: 400, message: 'CEP inválido' },
  NOT_FOUND_CEP: { code: 'notFound', status: 404, message: 'CEP não encontrado' },
  ALL_FIELDS_ARE_REQUIRED: { code: 'notFound', status: 404, joi: true, message: 'Joi message' },
}

module.exports = ERROR;
