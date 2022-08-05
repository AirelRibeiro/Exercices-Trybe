const connection = require('./connection');
const Author = require('./Author');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT title FROM books');

  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(`SELECT title FROM books WHERE author_id LIKE ${id}`);

  return books;
}

// Título não pode ser vazio;
// Título precisa ter pelo menos três caracteres;
// O campo author_id não pode ser vazio;
// O campo author_id só é válido se existir uma pessoa autora com esse id;

const isABook = async(title, author_id) => {
  if(!title || title.length < 3) return false;
  if(!author_id) return false;
  const author = await Author.findById(author_id);
  if(!author) return false;

  return true;
}

const insertBook = async (title, author_id) => connection.execute(
	'INSERT INTO books (title, author_id) VALUES (?,?)',
	[title, author_id],
);

module.exports = {
  getAllBooks,
  getByAuthorId,
  isABook,
  insertBook
};