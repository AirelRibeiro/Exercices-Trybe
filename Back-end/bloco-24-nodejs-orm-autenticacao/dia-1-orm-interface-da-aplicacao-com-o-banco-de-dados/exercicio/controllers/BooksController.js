const { getWithId } = require('../services/BooksService');
const BooksService = require('../services/BooksService');

const BooksControllers = {
  getAll: async(req, res) => {
    const { author } = req.query;
    if(author) {
      const books = await BooksService.getByAuthor(author);
      return res.status(200).json(books);
    }
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  },

  getWithId: async(req, res) => {
    const { id } = req.params;
    const book = await BooksService.getWithId(id);

    if(book.message) return res.status(404).json({ message: book.message });

    return res.status(200).json(book);
  },

  insertBook: async(req, res) => {
    const bookToInsert = req.body;
    const book = await BooksService.insertBook(bookToInsert);

    return res.status(201).json(book);
  },

  updateBook: async(req, res) => {
    const { id } = req.params;
    const bookToUpdate = req.body;
    const [book] = await BooksService.updateBook(id, bookToUpdate);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated' });
  },

  deleteBook: async(req, res) => {
    const { id } = req.params;
    const book = await BooksService.deleteBook(id);

    if(!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book deleted' });
  },
}

module.exports = BooksControllers;
