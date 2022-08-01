const express = require('express');
const errorMiddleware = require('./errorMiddleware');
const { validateProductName, validateInfos } = require('./validation');
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const PORT = 3001;

app.post('/sales', validateProductName, validateInfos, (req, res) => {
  res.status(201).json({ "message": "Venda cadastrada com sucesso" });
})

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
