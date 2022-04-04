import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render () {
    return (
      <div className='pokedex'>
        <h1>POKEDEX</h1>
        <Pokemon pokemons={pokemons} />
      </div>
    )
  }
}

export default Pokedex;
