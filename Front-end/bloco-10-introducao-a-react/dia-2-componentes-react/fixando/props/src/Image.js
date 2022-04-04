/* Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-10-2 . Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito abaixo: */

import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

/* Uma vez feito isso tudo, responda:
Qual o nome do componente declarado acima? // Image?
Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada. */
