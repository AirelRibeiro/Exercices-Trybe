const GenericError = require("./GenericError");

const runSchema = (schema, errorKey) => async (data) => {
  console.log('Cheguei no schema de erros');
  const { error, value } = await schema.validate(data);
  if (error) {
    throw new GenericError(errorKey);
  }
  return value;
};

module.exports = { runSchema };