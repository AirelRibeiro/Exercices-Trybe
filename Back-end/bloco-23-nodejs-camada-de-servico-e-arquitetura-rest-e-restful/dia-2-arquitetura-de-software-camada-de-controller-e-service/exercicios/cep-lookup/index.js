const express = require('express');
require('express-async-errors');
const pingRouter = require('./routes/pingRouter');
const cepRouter = require('./routes/cepRouter');
const ERROR = require('./errors/errorsObject');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);

app.use((err, _req, res, _next) => {
  console.log('Cheguei no tratamento de erros');
  const { error } = err;
  const { status, code, message } = ERROR[error];

  return res.status(status).json({ error: { code, message } })
});

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`) });
