import React from 'react';
import Input from './Input';
import Estados from './Estados';

class AdressFieldset extends React.Component {
  render() {
    const { adress, city, changeF, cdd } = this.props;
    return (
      <fieldset>
        <legend>Endereço </legend>
        <Input type="text" changeI={ changeF } name="adress" value={ adress } descriptor="Rua:" />
        <Input type="text" changeI={ changeF } name="city" value={ city } descriptor="Cidade:" cidade={ cdd } />
        <label>
        <h3>Estado:</h3> 
          <Estados changeE={ changeF } />
        </label>
      </fieldset>
    )
  }
}

export default AdressFieldset;
