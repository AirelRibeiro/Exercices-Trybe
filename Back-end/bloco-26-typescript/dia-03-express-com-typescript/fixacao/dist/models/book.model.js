"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM books');
            const [rows] = result;
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM books WHERE id=?', [id]);
            const [rows] = result;
            const [book] = rows;
            return book;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const result = yield this.connection.execute('INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)', [title, price, author, isbn]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, book);
        });
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            yield this.connection.execute('UPDATE books SET title=?, price=?, author=?, isbn=? WHERE id=?', [title, price, author, isbn, id]);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute('DELETE FROM books WHERE id=?', [id]);
        });
    }
    partialUpdate(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE books SET ';
            const queryUpdate = Object.keys(book).map(field => `${field}=?`).join(", ");
            console.log(queryUpdate);
            const queryValues = Object.values(book);
            console.log(queryValues);
            yield this.connection.execute(`${query} ${queryUpdate} WHERE id=?`, [...queryValues, id]);
        });
    }
}
exports.default = BookModel;
