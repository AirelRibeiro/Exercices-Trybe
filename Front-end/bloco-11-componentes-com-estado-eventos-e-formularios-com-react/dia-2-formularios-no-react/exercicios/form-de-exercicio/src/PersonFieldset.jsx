import React from 'react';
import Input from './Input';
import AdressFieldset from './AdressFieldset';

class PersonFieldset extends React.Component {
  render() {
    const { name, email, cpf, adress, city, changeF, cidade } = this.props;
    return (
      <fieldset>
        <legend>Informações pessoais </legend>
        <Input type="text" changeI={ changeF } name="name" value={ name } descriptor="Nome:" />
        <Input type="text" changeI={ changeF } name="email" value={ email } descriptor="Email:" />
        <Input type="text" changeI={ changeF } name="cpf" value={ cpf } descriptor="CPF:" />
        <br/><br/>
        <AdressFieldset adress={ adress } city={ city } changeF={ changeF } cdd={ cidade }/>
      </fieldset>
    )
  }
}

export default PersonFieldset;
