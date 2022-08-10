const connection = require('./connection');

const MoviesModel = {
  getMovieById: async (id) => {
    const [result] = await connection
      .execute(
        'SELECT * FROM movies WHERE id = ?',
        [id],
      );
    
      return result[0];

  }
}

module.exports = MoviesModel;