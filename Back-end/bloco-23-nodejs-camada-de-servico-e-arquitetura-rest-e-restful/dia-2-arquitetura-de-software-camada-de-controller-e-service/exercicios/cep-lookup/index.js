const express = require('express');
require('express-async-errors');
const pingRouter = require('./routes/pingRouter');
const cepRouter = require('./routes/cepRouter');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use((err, _req, res, _next) => {
  const { error } = err;
  // const { status, code } = ERROR[message];
  return res.status(error.status).json({ error: { code: error.code, message: error.message } })
});

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`) });
