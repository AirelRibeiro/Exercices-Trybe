import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

class Pokemon extends React.Component {
  constructor() {
    super()
    this.state = {
        indexDoPokemon: 0
    }
    this.mudaEstado = this.mudaEstado.bind(this)
}

mudaEstado() {
    this.setState((indexAnterior, _props) => ({
        indexDoPokemon: indexAnterior.indexDoPokemon + 1
    }))
}
  render () {
    const { pokemons } = this.props;
    return (
      <div className='container-de-pokemons'>
        {pokemons.map(({ id, name, type, averageWeight, image }) => {
        return (<div key={id} className='pokemon'>
          <div className='infor'>
            <h3>{name}</h3>
            <h4>{type}</h4>
            <h4>{`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</h4>
          </div>
          <Image source={image} altternativeText={name}/>
        </div>)
      })}
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  })).isRequired,
};

export default Pokemon;
