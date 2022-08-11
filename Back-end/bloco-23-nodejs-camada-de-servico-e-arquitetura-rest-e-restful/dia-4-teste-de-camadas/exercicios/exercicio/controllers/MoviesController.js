const MoviesService = require('../services/MoviesService');

const MoviesController = {
  findMovieById: async (req, res) => {
      const { id } = req.params;
      const movie = await MoviesService.findMovieById(id);
      if (!movie) {
        return res.status(404).send('Filme não encontrado!');
      }
      res.status(200).json(movie);
  }
}

module.exports = MoviesController;