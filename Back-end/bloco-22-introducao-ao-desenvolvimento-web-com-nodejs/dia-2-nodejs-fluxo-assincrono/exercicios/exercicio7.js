/* Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
Leia o arquivo.
Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
Caso o arquivo exista, solicite a palavra a ser substituída.
Solicite a nova palavra, que substituirá a palavra anterior.
Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
Pergunte o nome do arquivo de destino.
Salve o novo arquivo no caminho de destino.
Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra).
*/

const { question } = require('readline-sync');
const fs = require('fs/promises');

async function replaceWord() {
  const file = question(`Qual arquivo você deseja acessar?
  file1, file2, file3, file4, file5, fileAll
  `);
  try {
    const content = await fs.readFile(`./${file}.txt`, 'utf8');
    const word = question(`Qual palavra você deseja substituir?
    `);
    const newWord = question(`Qual palavra você deseja colocar no lugar dela?
    `);
    const newContent = content.replace(new RegExp(word, 'g'), newWord);
    console.log(newContent);
    const newFile = question(`Qual o nome do seu novo arquivo?
    `);
    fs.writeFile(`./${newFile}.txt`, newContent);
    return;
  }
  catch (err) {
    console.log('Arquivo inexistente!');
  }
}

replaceWord();