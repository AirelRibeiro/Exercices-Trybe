// 4 - Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
//    a - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
//    b - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
//    c - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//    d - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
//    e - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
//    f - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises;

// a - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// async function read() {
//   const readedFile = await fs.readFile('./simpsons.json', 'utf-8');
//   const text = JSON.parse(readedFile);
//   text.forEach(({ id, name }) => {
//     console.log(`${id} - ${name}`);
//   });
// }

// read();


// b - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// async function readSpecificCharacter(id) {
//   const readedFile = await fs.readFile('./simpsons.json', 'utf-8');
//   const text = JSON.parse(readedFile);
//   const character = text.find((character) => Number(character.id)  === id);
//   if(!character) throw new Error('id não encontrado');
//   return character;
// }

// async function main(id) {
//   try {
//   const simpson = await readSpecificCharacter(id);
//   console.log(`${simpson.id} - ${simpson.name}`);
//   }
//   catch (err){
//     console.log(err.message)
//   }
// }

// main(1);




// c - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// async function readAndWrite() {
//   const readedFile = await fs.readFile('./simpsons.json', 'utf-8');
//   const text = JSON.parse(readedFile);
//   const newText = text.filter(({ id }) => id !== "10" && id !== "6");
//   await fs.writeFile('./simpsons.json', JSON.stringify(newText));
// }

// readAndWrite();




// d - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// async function readAndCreate() {
//   const readedFile = await fs.readFile('./simpsons.json', 'utf-8');
//   const text = JSON.parse(readedFile);
//   const newText = text.filter(({ id }) => Number(id) >= 1 && (id) <= 4);
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(newText));
// }

// readAndCreate();




// e - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// async function readAndAdd() {
//     const readedFile = await fs.readFile('./simpsonFamily.json', 'utf-8');
//     const text = JSON.parse(readedFile);
//     text.push({ id: '5', name: 'Nelson Muntz' });
//     await fs.writeFile('./simpsonFamily.json', JSON.stringify(text));
//   }

// readAndAdd();




// f - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

async function readAndReplace() {
    const readedFile = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const text = JSON.parse(readedFile);
    const newText = text.map((character) => character.name === 'Nelson Muntz' ? { id: '5', name: 'Maggie Simpson' } : character);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newText));
  }

  readAndReplace();