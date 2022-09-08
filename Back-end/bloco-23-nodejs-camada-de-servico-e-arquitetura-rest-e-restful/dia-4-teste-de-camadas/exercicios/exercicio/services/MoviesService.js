const MoviesModel = require('../models/MoviesModel');

const MoviesService = {
  findMovieById: async (id) => {
    const movieData = await MoviesModel.getMovieById(id);
  
    if (movieData.id) return movieData;
  
    return null;
  },
}

module.exports = MoviesService;