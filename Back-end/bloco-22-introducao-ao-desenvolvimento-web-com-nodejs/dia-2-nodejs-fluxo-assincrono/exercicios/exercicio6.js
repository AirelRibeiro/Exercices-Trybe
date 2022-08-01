// 6 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
//      a - Pergunte à pessoa usuária qual arquivo ela deseja ler.
//      b - Leia o arquivo indicado.
//      c - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
//      d - Caso o arquivo exista, escreva seu conteúdo na tela.

const { question } = require('readline-sync');
const fs = require('fs/promises');

async function readSpecificFile() {
  const file = question(`Qual arquivo você deseja acessar?
  file1, file2, file3, file4, file5, fileAll
  `);
  try {
    const content = await fs.readFile(`./${file}.txt`, 'utf8');
    console.log(content);
  }
  catch(err) {
    console.log('Arquivo inexistente!');
  }
}

readSpecificFile();