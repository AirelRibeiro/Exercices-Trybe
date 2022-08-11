const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/MoviesModel');

describe('Testa o funcionamento do movieModel', () => {
  describe('Testa quando o id do filme existe no banco de dados', () => {
    const movie = [{
      id: 10,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }];
    before(async () => {
      sinon.stub(connection, 'execute').resolves(movie);
    });
  
    after(async () => {
      connection.execute.restore();
    });

    it('Testa se o retorno é um objeto', async () => {
      const response = await MoviesModel.getMovieById(10);

      expect(response).to.be.an('object');
    });
    it('Testa se as chaves do retorno são id, title, directedBy e releaseYear', async () => {
      const response = await MoviesModel.getMovieById(10);

      expect(response).to.be.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });
    it('Testa se os valores do retorno são 10, Example Movie, Jane Dow, 1999', async () => {
      const response = await MoviesModel.getMovieById(10);

      expect(response.id).to.be.equal(10);
      expect(response.title).to.be.equal('Example Movie');
      expect(response.directedBy).to.be.equal('Jane Dow');
      expect(response.releaseYear).to.be.equal(1999);
    });
  });

  describe('Testa quando o id passado não existe no banco de dados', () => {
    const movie = [{}];
    before(async () => {
      sinon.stub(connection, 'execute').resolves(movie);
    });
  
    after(async () => {
      connection.execute.restore();
    });
    it('Testa se o retorno é um objeto', async () => {
      const response = await MoviesModel.getMovieById(20);

      expect(response).to.be.an('object');
    });
    it('Testa se o objeto retornado está vazio', async () => {
      const response = await MoviesModel.getMovieById(20);

      expect(response).to.be.eql({});
    });
  });
});