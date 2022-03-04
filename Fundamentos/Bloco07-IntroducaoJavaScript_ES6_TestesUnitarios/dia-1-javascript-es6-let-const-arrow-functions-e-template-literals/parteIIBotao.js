/* Crie uma página que contenha:
==> Um botão ao qual será associado um event listener ;
==> Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
==> Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

const botao = document.querySelector('#button');
let vezes = 0
let clickCount = document.querySelector('#contador');

botao.addEventListener('click', () => clickCount.innerHTML = vezes += 1);