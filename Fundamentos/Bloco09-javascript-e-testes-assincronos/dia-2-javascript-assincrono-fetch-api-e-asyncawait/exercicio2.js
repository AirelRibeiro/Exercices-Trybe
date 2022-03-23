const criaItens = ({ name, symbol, priceUsd }) => {
  const lista = document.querySelector('ol')
  const item = document.createElement('li');
  item.innerText = `${name} (${symbol}): ${priceUsd}`;
  lista.appendChild(item);
}

const moedas = async () => {
  try {
  const dados = await fetch('https://api.coincap.io/v2/assets');
  const dadosTraduzidos = await dados.json();
  dadosTraduzidos.data.filter((element, index) => index <= 10 ? criaItens(element) : 0);
  } catch(error) {
    console.log(error);
  }
};


window.onload = moedas;
