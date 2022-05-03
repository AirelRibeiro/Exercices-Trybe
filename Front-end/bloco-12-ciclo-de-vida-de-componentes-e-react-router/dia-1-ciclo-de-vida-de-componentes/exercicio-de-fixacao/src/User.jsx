import React from 'react';

class User extends React.Component {
  render() {
    const { name, email, image, age } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <img src={ image } alt={ name }/>
        <h3>{ email }</h3>
        <h4>{ age }</h4>
      </div>
    )
  }
}

export default User;
