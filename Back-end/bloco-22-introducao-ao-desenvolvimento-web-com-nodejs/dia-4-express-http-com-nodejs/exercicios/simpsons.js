// Crie uma API de dados das personagens de Simpsons 🚀
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman, Insomnia ou httpie.
// Crie um endpoint GET /simpsons 🚀
// O endpoint deve retornar um array com todos os simpsons.
// Crie um endpoint GET /simpsons/:id 🚀
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
// Crie um endpoint POST /simpsons. 🚀
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.


const express = require('express');
const fs = require('fs/promises');


const app = express();
app.use(express.json());

const PORT = 3002;

// Crie um endpoint GET /simpsons
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

// Crie um endpoint GET /simpsons/:id 
app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const text = await fs.readFile('./simpsons.json');
  const data = await JSON.parse(text);
  const character = data.find((c) => c.id === id);

  if(!character) return res.status(401).json({ "message": `Simpson Not Found` });

  res.status(200).json(character);
});

//Crie um endpoint POST /simpsons.
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