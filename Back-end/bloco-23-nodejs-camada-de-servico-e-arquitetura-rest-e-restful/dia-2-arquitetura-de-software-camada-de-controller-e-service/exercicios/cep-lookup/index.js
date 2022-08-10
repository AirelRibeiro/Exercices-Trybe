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
  const { error } = err;
  const { status, code } = ERROR[error];

  return res.status(status).json({ error: { code, message: ERROR[error].message } })
});

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`) });
