// 4 - Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
//    a - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
//    b - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
//    c - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//    d - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
//    e - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
//    f - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs/promises');


// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

/* async function readFile() {
  const data = await fs.readFile('./simpson2.json', 'utf8');
  const characters = JSON.parse(data);
  characters.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

readFile();
*/

//    b - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function readCharacter(id) {
  try {
    const data = await fs.readFile('./simpson2.json', 'utf8');
    const characters = JSON.parse(data);
    const c = characters.find((character) => Number(character.id) === id);
    console.log(`${c.id} - ${c.name}`);
  }
  catch (err) {
    console.log('Id não encontrado!');
  }
}

// Como disparar o erro no retorno da Promise?

readCharacter(1);
readCharacter(11);



//    c - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

/* async function removeCharacters() {
  const data = await fs.readFile('./simpson2.json', 'utf8');
  const characters = JSON.parse(data);
  const newArrayOfCharacters = characters.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
  fs.writeFile('./simpson2.json', JSON.stringify(newArrayOfCharacters, null, '\n'));
}

removeCharacters();
*/


//    d - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

/* async function createNewFile() {
  const data = await fs.readFile('./simpson2.json', 'utf8');
  const characters = JSON.parse(data);
  characters.splice(4, 6);
  fs.writeFile('./simpson2Family.json', JSON.stringify(characters, null, '\t'));
}

createNewFile();
*/

//    e - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

/* async function addNelson() {
  const data = await fs.readFile('./simpson2Family.json', 'utf8');
  const characters = JSON.parse(data);
  characters.push({ id: '8', name: 'Nelson Muntz' });
  fs.writeFile('./simpson2Family.json', JSON.stringify(characters, null, '\t'));
}

addNelson();
*/

/* async function swapsNelsonForMaggie() {
  const data = await fs.readFile('./simpson2Family.json', 'utf8');
  const characters = JSON.parse(data);
  const newContent = characters.map((character) => character.id === '8' ? { id: '5', name: 'Maggie Simpson' } : character);
  fs.writeFile('./simpson2Family.json', JSON.stringify(newContent, null, '\t'));
}

swapsNelsonForMaggie();
*/