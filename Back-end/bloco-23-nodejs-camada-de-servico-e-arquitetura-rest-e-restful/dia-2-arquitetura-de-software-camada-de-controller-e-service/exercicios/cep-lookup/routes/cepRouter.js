const express = require('express');
const CepController = require('../controllers/CepController');

const router = express.Router();

router.get('/:cep', async (req, res) => {
  const { cep } = req.params;
  const adress = await CepController.findAdressByCep(cep);
  res.status(200).json(adress);
});

module.exports = router;
