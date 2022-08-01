const express = require('express');
const fs = require('fs/promises');


const app = express();
app.use(express.json());

const PORT = 3002;

app.get('/simpsons', async (req, res) => {
  try {
    const text = await fs.readFile('./simpsons.json');
    const data = await JSON.parse(text);
    res.status(200).json(data);
  }
  catch(err) {
    res.status(500).json({ "message": `Internal Server Error` });
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const text = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(text);
  const character = data.find((c) => c.id === id);

  if(!character) return res.status(401).json({ "message": `Simpson Not Found` });

  res.status(200).json(character);
});

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
  
    const text = await fs.readFile('./simpsons.json');
    const data = await JSON.parse(text);
    const characterAlreadyExists = data.some((c) => c.id === id);
  
    if(characterAlreadyExists) return res.status(409).json({ "message": `Id lready exists` });
  
    const character = { id, name };
    data.push(character);
  
    fs.writeFile('./simpsons.json', JSON.stringify(data, null, '\t'));
  
    res.status(204).json({}).end();
  }
  catch(err) {
    res.status(500).json({ "message": `Internal Server Error` });
  }
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3002');
});