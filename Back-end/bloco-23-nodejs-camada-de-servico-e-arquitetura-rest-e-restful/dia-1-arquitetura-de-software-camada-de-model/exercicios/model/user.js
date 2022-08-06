const connection = require('./connection');

const insertUser = async(firstName, lastName, email, password) => connection.execute(
	'INSERT INTO user (first_name, last_name, email, password) VALUES (?,?, ?, ?)',
	[firstName, lastName, email, password],
);

const getAllUsers = async() => {
  const [users] = await connection.execute('SELECT * FROM user');

  return users;
}

const getUserById = async(id) => {
  const query = 'SELECT * FROM user WHERE id = ?'
	const [ user ] = await connection.execute(query, [id]);

  return user;
}

const updateUser = async (id, firstName, lastName, email, password) => {
	const query = `UPDATE user SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}', password = '${password}' WHERE id = ${id}`;

	await connection.execute(query);
  
	return getUserById(id);
}

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
  updateUser
}