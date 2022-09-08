const sinon = require('sinon');
const { expect } = require('chai');
const MoviesService = require('../../services/MoviesService');
const MoviesController = require('../../controllers/MoviesController');

describe('Testa o funcionamento de MoviesController', () => {
  describe('Testa quando não existe o filme no banco de dados', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = {
        id: 20,
      };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(MoviesService, 'findMovieById').resolves(null);
    });

    after(() => {
      MoviesService.findMovieById.restore();
    });

    it('Testa se o status respondido é 404', async () => {
      await MoviesController.findMovieById(req, res);

      expect(res.status.calledWith(404)).to.be.true;
    });

    it('Testa se é chamado send contendo a mensagem Filme não encontrado', async () => {
      await MoviesController.findMovieById(req, res);

      expect(res.send.calledWith('Filme não encontrado!')).to.be.true;
    });

  });

  describe('Testa quando existe o filme no banco de dados', async () => {
    const movie = {
      id: 10,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    const res = {};
    const req = {};

    before(() => {
      req.params = {
        id: 10,
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'findMovieById').resolves(movie);
    });

    after(() => {
      MoviesService.findMovieById.restore();
    });

    it('Testa se o status respondido é 200', async () => {
      await MoviesController.findMovieById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.findMovieById(req, res);

      expect(res.json.calledWith(movie)).to.be.true;
    });
  });
});
