const express = require('express');
const BooksControllers = require('../controllers/BooksController');

const BooksRoutes = express.Router();

BooksRoutes.get('/:id', BooksControllers.getWithId);

BooksRoutes.get('/', BooksControllers.getAll);

BooksRoutes.post('/', BooksControllers.insertBook);

BooksRoutes.put('/:id', BooksControllers.updateBook);

BooksRoutes.delete('/:id', BooksControllers.deleteBook);

module.exports = BooksRoutes;
