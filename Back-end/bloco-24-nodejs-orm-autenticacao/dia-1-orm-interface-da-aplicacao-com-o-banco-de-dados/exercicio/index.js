const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksRoutes = require('./routes/BooksRoutes');

app.use(express.json());

app.use('/books', BooksRoutes)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
