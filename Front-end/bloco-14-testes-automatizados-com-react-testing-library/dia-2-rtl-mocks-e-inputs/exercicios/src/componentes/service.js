// Função recolhida do código dos conteúdos do dia

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

console.log(retornaNumeroAleatorio());

const fazMaiusculas = (a) => a.toUpperCase();

console.log(fazMaiusculas('airel'));

const retornaPrimeira = (p) => p[0];

console.log(retornaPrimeira('coelho'));

const concatena = (s1, s2) => `${s1}${s2}`;

console.log(concatena('eu', 'nuco'));

 async function catchDog() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data
}

module.exports = { 
  retornaNumeroAleatorio,
  fazMaiusculas,
  retornaPrimeira,
  concatena,
  catchDog
};
