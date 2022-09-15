import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import {  validationBook, validatePartialBook  } from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put(booksSlashId, validationBook, booksController.update);
router.patch(booksSlashId, validatePartialBook, booksController.partialUpdate);
router.delete(booksSlashId, booksController.remove);

export default router;
