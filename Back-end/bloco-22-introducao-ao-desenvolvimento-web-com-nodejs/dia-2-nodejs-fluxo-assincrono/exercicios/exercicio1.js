// 1 - Crie uma função que receba três parâmetros e retorna uma Promise.
//      a - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
//      b - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
//      c - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
//      d - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function main(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números')); 
    }
    const resultado = (a + b) * c;

    if(resultado < 50) {
      return reject(new Error('Valor muito baixo')); 
    }

    resolve(resultado);
  });
}

async function execute(a, b, c) {
  try {
    const result = await main(a, b, c);
    console.log(result);
  }
  catch (err){
    console.log(err.message)
  }
}

// execute('a', 10, 11);
// execute(10, 10, 1);
// execute(20, 30, 20);
console.log('A vida é uma mentira!');

module.exports = main;