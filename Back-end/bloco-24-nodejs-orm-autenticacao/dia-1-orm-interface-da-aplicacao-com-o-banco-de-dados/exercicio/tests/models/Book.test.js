const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('../../node_modules/sequelize-test-helpers/src/index');

const Book = require('../../models/Book');

describe('Testa o model de Book', () => {
  const BookModel = Book(sequelize, dataTypes);
  const book = new BookModel();

  context('Nome do model', () => {
    checkModelName(BookModel)('Book');
  });

    context('Propriedades do model', () => {
      const propertys =  ['title', 'author', 'pageQuantity', 'publisher'];
  
      propertys.forEach(checkPropertyExists(book));
    });
  });
