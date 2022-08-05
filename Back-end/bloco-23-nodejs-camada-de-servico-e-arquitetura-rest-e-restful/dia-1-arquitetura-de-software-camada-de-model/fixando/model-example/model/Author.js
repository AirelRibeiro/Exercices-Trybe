const connection = require('./connection');

const newFormat = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name,
  nationality: authorData.authorData
});

const getFullNameForAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');
  
    return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
    };
  };

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name, nationality FROM authors');

  return authors.map(newFormat).map(getFullNameForAuthor);
}

const findById = async (id) => {
  // Da forma como está escrito, com a interrogação, o MySQL vai substituir a interrogação na query pelo id fornecido
	const query = 'SELECT first_name, middle_name, last_name FROM authors WHERE id = ?'
	const [ authorData ] = await connection.execute(query, [id]);

	if (authorData.length === 0) return null;

  return authorData.map(newFormat).map(getFullNameForAuthor);
};

const isValidName = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;

	return true;
};

const insertAuthor = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValidName,
  insertAuthor
};