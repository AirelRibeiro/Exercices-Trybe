// 1 - Dada uma matriz, transforme em um array.
/* Método concat utilizado foi encontrado na documenteção, fonte: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" */

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual),
    []
  );
}

console.log(flatten());
