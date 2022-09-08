const sinon = require('sinon');
const { expect } = require('chai');
const MoviesModel = require('../../models/MoviesModel');
const MoviesService = require('../../services/MoviesService');

describe('Teste o funcionamento do MoviesService', () => {
  describe('Testa quando o filme é encontrado', () => {
    const movie = {
      id: 10,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    before(async () => {
      sinon.stub(MoviesModel, 'getMovieById').resolves(movie);
    });
  
    after(async () => {
      MoviesModel.getMovieById.restore();
    });

    it('Testa se o retorno é um objeto', async () => {
      const response = await MoviesService.findMovieById(10);

      expect(response).to.be.an('object');
    });

    it('Testa se as chaves do retorno são id, title, directedBy e releaseYear', async () => {
      const item = await MoviesService.findMovieById(10);

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    });

    it('Testa se os valores do retorno são 10, Example Movie, Jane Dow, 1999', async () => {
      const response = await MoviesService.findMovieById(10);

      expect(response.id).to.be.equal(10);
      expect(response.title).to.be.equal('Example Movie');
      expect(response.directedBy).to.be.equal('Jane Dow');
      expect(response.releaseYear).to.be.equal(1999);
    });
});

  describe('Testa quando não existe um filme com o id informado', () => {
    const movie = {};
    before(async () => {
      sinon.stub(MoviesModel, 'getMovieById').resolves(movie);
    });
  
    after(async () => {
      MoviesModel.getMovieById.restore();
    });
    
    it('Testa se o retorno é null', async () => {
      const response = await MoviesService.findMovieById(20);

      expect(response).to.be.equal(null);
    });
  });
});
