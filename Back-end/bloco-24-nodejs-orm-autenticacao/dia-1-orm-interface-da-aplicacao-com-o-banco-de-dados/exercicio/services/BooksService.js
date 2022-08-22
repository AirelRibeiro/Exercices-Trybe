const { Book } = require('../models');
const { Op } = require('sequelize');

const BooksService = {
  getAll: async () => {
    const books = await Book.findAll({
      order: [['title', 'ASC']]
    });
    return books;
  },

  getWithId: async (id) => {
    const book = await Book.findByPk(id);
    if(book === null) {
      return { message: 'Book not found' }
    }
    return book;
  },

  insertBook: async (bookToInsert) => {
    const book = await Book.create(bookToInsert);
    return book;
  },

  updateBook: async (id, bookToUpdate) => {
    const book = await Book.update(bookToUpdate, { where: { id } });
    return book;
  },

  deleteBook: async (id) => {
    const deletedBook = await Book.destroy({ where: { id } });
  
    return deletedBook;
  },

  getByAuthor: async (author) => {
    const books = await Book.findAll({
      where: { author: { [Op.like]: `%${author}%` } },
      order: [['title', 'ASC']]
    });
    // const books = await Book.findAll({ where: { author } })
    return books;
  }
}

module.exports = BooksService;
