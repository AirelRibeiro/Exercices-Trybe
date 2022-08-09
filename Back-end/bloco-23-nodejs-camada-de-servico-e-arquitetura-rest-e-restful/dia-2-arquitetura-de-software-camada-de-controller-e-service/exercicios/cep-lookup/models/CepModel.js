const connection = require('./connection');

async function findByCep(cep) {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const adress = await connection.execute(query, [cep]);
  if (!adress) return null;
  return adress;
}

module.exports = {
  findByCep
}
