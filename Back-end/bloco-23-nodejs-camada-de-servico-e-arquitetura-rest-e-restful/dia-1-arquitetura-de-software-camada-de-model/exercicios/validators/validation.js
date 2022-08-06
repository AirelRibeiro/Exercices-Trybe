// Todos os campos são obrigatórios;
// O campo password deve ser uma string de 6 ou mais caracteres;
// Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
const Joi = require('joi');

// const userSchema = Joi.object({
// 	firstName: Joi.string().required(),
// 	lastName: Joi.string().required(),
// 	email: Joi.string().email().required(),
// 	password: Joi.string().min(6).required()});

const validateFields = (first_name, last_name, email, password) => {
  if(!first_name || !last_name || !email || !password) return 'Todos os campos devem ser preenchidos!';
  if(password.length < 6) return 'O campo de senha precisa ter 6 caracteres ou mais!';
  return null;
}

// function isValid(userData) {
// 	return userSchema.validate(userData);
// }

module.exports = {
  validateFields,
  // isValid
};