const connection = require('./connection');

async function findByCep(cep) {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const adress = await connection.execute(query, [cep]);
  if (!adress) return null;
  return adress;
}

// async function insertCep(cep, logradouro, bairro, localidade, uf) {
//   const query = `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) 
//   VALUES (?, ?, ?, ?, ?)`;

//   await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

//   return { cep, logradouro, bairro, localidade, uf };
// }

module.exports = {
  findByCep,
  // insertCep
}
