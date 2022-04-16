import React from "react";

class Input extends React.Component {
  render() {
    const { type, change, name, value, descriptor } = this.props;
    return (
      <label htmlFor={ name }>
        { descriptor }
        <input type={ type } onChange={ change } name={ name } value={ value }/>
        { type === "email" && !value.match(/^\S+@\S+$/i) && value.length ? <span>Insira um email válido</span> : null }
        {name === "name" && !value.length ? <span>Um nome deve ser inserido</span> : null}
      </label>
    )
  }
}

export default Input;
