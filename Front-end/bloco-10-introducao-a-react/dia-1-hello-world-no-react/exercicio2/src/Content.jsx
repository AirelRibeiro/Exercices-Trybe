import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
  render() {
    return (
      <div>
        {conteudos.map((c) => (
          <div key={c.conteudo} className='card'>
            <h4>{`O conteudo é: ${c.conteudo}`}</h4>
            <p>{`Status: ${c.status}`}</p>
            <p>{`Bloco: ${c.bloco}`}</p>
          </div>
        ))}
            </div>
    )
  }
}

export default Content;