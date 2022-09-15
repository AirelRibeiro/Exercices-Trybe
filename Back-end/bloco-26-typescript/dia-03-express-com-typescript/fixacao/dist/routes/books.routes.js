"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = require("../middlewares/books.middleware");
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
const booksSlashId = '/books/:id';
router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books/', books_middleware_1.validationBook, booksController.create);
router.put(booksSlashId, books_middleware_1.validationBook, booksController.update);
router.patch(booksSlashId, books_middleware_1.validatePartialBook, booksController.partialUpdate);
router.delete(booksSlashId, booksController.remove);
exports.default = router;
