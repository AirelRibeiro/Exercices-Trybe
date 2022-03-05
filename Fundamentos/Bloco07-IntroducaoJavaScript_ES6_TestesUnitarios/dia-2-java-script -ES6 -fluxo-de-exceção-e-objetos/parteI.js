// function sum() {
//   const value1 = document.getElementById('value1').value;
//   const value2 = document.getElementById('value2').value;
//   const result = parseInt(value1) + parseInt(value2);
//   document.getElementById('result').innerHTML = `Resultado: ${result}`;
//   document.getElementById('value1').value = '';
//   document.getElementById('value2').value = '';
// }


/* 1 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
Utilize o throw new Error e o bloco try/catch .
Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
Evite funções que tenham muitas responsabilidades distintas.
2 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.
Você pode fazer essa verificação utilizando a função isNan() .
3 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?
*/
// Funçãoabaixo verifica se os dois campos estão preenchidos

const verificaValores = (valor1, valor2) => { 
  if (valor1 === '' || valor2 === '') {
    throw new Error('É necessário fornecer dois valores!');
  }
}
/* Função abaixo erifica se os valores que preenchem os campos são numéricos. Primeiro uso da função isNaN;
Fontes: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NaN"
        "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN"
 */
const verificaTipo = (valor1, valor2) => { 
  if (isNaN(valor1)!== false || isNaN(valor2)!== false) {
    throw new Error('Os valores fornecidos devem ser numéricos!');
  }
}
// Função para soma refatorada.
const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verificaValores(value1, value2);
    verificaTipo(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error) {
    alert(error.message);
    document.getElementById('result').innerHTML = '';
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
