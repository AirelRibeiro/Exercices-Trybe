const express = require('express');
const MoviesController = require('./controllers/MoviesController');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/movies/:id', MoviesController.findMovieById);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
