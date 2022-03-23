const moedas = async () => {
  try {
  const dados = await fetch('https://api.coincap.io/v2/assets');
  const dadosTraduzidos = await dados.json();
  console.log(dadosTraduzidos.data);
  return dadosTraduzidos.data;
  } catch(error) {
    console.log(error);
  }
};

const moedaBr = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
  const dados = await fetch(url);
  const dadosTraduzidos = await dados.json();
  console.log(dadosTraduzidos.usd.brl);
  return dadosTraduzidos.usd.brl;
}

const criaItens = async () => {
  const moeda = await moedas();
  moeda.forEach(async (element, index) => {
    if (index <= 9) {
      const priceNumber = Number(element.priceUsd);
      const priceBr = await moedaBr();
      const final = priceNumber * priceBr;
      const lista = document.querySelector('ol')
      const item = document.createElement('li');
      item.innerText = `${element.name} (${element.symbol}): ${final.toFixed(2)}`;
      lista.appendChild(item);
    }
  })
  
}

window.onload = criaItens;
