const express = require('express');
const errorMiddleware = require('./errorMiddleware');
const crypto = require('crypto');
const { validateProductName, validateInfos, validatePersonalInfors } = require('./validation');
const authorizationMiddle = require('./authorMiddleware');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const PORT = 3001;

app.post('/signup', validatePersonalInfors, (req, res) => {
  res.status(200).json({ "token": crypto.randomBytes(8).toString('hex') });
});

app.use(authorizationMiddle);

app.post('/sales', validateProductName, validateInfos, (req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
