// Crie uma rota GET /ping
//      Sua rota deve retornar o seguinte JSON: { message: 'pong' }
// Crie uma rota POST /hello
//      Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
//      Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
// Crie uma rota POST /greetings 🚀
//      Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
//      Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
//      Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.
// Crie uma rota PUT /users/:name/:age. 🚀
//      Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
const express = require('express');


const app = express();
app.use(express.json());

const PORT = 3001;


// Crie uma rota GET /ping
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});


// Crie uma rota POST /hello
app.post('/hello', (req, res) => {
  console.log('REQ AQUI', req);
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}` });
});


//Crie uma rota POST /greetings
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}` });
  res.status(401).json({ "message": `Unauthorized` });
});


//Crie uma rota PUT /users/:name/:age.
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3001');
});