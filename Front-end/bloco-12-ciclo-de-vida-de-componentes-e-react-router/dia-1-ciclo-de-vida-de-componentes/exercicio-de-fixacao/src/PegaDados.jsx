import React from 'react';
import User from './User';

class PegaDados extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: {},
    }
  }

  pegaDados = async () => {
    const url = `https://api.randomuser.me/`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      user: data.results,
      loading: false
    })
  }

  shouldComponentUpdate(_nextProps, { user }) {
    const age = user[0].dob.age;
    console.log(age);
    return age <= 50;
  }

  componentDidMount() {
   this.pegaDados();
    
  }

  render() {
    const { loading, user } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        {loading ? loadingElement : <p>{ user
          .map(({ name, picture, dob, email, login }) => {
            return <User 
              key={ login.uuid }
              name={ `${name.first} ${name.last}`  }
              image={ picture.large }
              email={ email }
              age={ dob.age }
            />
          }) }</p> }
      </div>
    )
  }
}

export default PegaDados;
