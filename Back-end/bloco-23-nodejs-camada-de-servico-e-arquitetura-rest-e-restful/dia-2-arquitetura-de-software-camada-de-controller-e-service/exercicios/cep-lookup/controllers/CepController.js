const CepService = require('../services/CepService');

function formatAdress(adress) {
  console.log(adress);
  const CEP_REGEX = /^\d{5}-\d{3}$/;
  let cep = CEP_REGEX.test(adress.cep) ? adress.cep : adress.cep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return { cep, ...adress };
}

async function findAdressByCep(cep) {
  const [adress] = await CepService.findAByCep(cep);
  console.log(adress);
  return formatAdress(adress);
}

async function insertCepInDataBase(cep, logradouro, bairro, localidade) {
  const Cep = CepService.insertCepAdress(cep, logradouro, bairro, localidade);
  return Cep;
}

module.exports = {
  findAdressByCep,
  insertCepInDataBase
}
