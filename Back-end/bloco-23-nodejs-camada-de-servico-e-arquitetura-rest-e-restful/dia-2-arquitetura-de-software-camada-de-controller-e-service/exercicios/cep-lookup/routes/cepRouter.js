const express = require('express');
const CepController = require('../controllers/CepController');

const router = express.Router();

router.get('/:cep', async (req, res) => {
  const { cep } = req.params;
  const adress = await CepController.findAdressByCep(cep);
  res.status(200).json(adress);
});

router.post('/', async (req, res) => {
  const { cep, logradouro, bairro, localidade, UF } = req.body;
  const adress = CepController.insertCepInDataBase(cep, logradouro, bairro, localidade, UF);
  res.status(200).json(adress);
});

module.exports = router;
