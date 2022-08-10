const Joi = require("joi");
const GenericError = require("./GenericError");

const runSchema = (schema, errorKey) => async (data) => {
  const teste = await schema.validate(data);
  const { error, value } = teste;
  if (error) {
    throw new GenericError(errorKey);
  }
  return value;
};

module.exports = { runSchema };