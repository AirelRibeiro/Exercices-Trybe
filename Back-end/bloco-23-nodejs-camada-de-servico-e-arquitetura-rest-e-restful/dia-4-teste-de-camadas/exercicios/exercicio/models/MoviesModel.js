const connection = require('./connection');

const MoviesModel = {
  getMovieById: async (id) => {
    const [result] = await connection
      .execute(
        'SELECT * FROM movies WHERE id = ?',
        [id],
      );
    
      return result;

  }
}

module.exports = MoviesModel;