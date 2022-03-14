// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const contagem = names.reduce((acc, atual) => {
    return acc + atual.split('').reduce((acc2, atual2) => {
      if (atual2.toLowerCase() === 'a') {
        return acc2 + 1
      } else {
        return acc2;
      }
    }, 0);
  }, 0);
  return contagem;
}

console.log(containsA());
