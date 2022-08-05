const express = require('express');
const Author = require('./model/Author');
const Books = require('./model/Books');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/author/:id', async (req, res) => {
  const {id} = req.params;

  const author = await Author.findById(id);

  if(!author) return res.status(404).json({ message: 'Author Not Found' });

  return res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  const books = await Books.getByAuthorId(author_id);

  res.status(200).json(books);
});

app.post('/author', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValidName(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	};

  await Author.insertAuthor(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;3
  const isBook = await Books.isABook(title, author_id)

  if (!isBook) {
		return res.status(400).json({ message: 'Dados inválidos' });
	};

  await Books.insertBook(title, author_id);

	res.status(201).json({ message: 'Livro adicionado com sucesso!' });
});


app.listen(PORT, () => console.log(`Ouvindon na porta ${PORT}!`))