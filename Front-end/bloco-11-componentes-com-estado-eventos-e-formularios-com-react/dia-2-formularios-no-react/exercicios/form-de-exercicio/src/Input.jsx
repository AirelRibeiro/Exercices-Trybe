import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, changeI, name, value, descriptor, cidade } = this.props;
    return (
      <label>
      <h3>{ descriptor }</h3>
        <input type={ type } onChange={ changeI } name={ name } value={ value } onBlur={ cidade }/>
        {name === 'name' && value.length > 40 ? <h4>Máximo de 40 caracteres!</h4> : null}
        {name === 'email' && value.length > 50 ? <h4>Máximo de 50 caracteres!</h4> : null}
        {name === 'cpf' && value.length > 11 ? <h4>Digite apenas os números!</h4> : null}
        {name === 'adress' && value.length > 200 ? <h4>Máximo de 200 caracteres!</h4> : null}
      </label>
    )
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired
}

export default Input;
