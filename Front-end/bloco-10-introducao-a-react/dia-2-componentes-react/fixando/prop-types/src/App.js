import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    const pessoas = [
      {
      id: 102,
      name: "João",
      lastName: "Pedro"
    },
    {
      id: 77,
      name: "Amélia",
      lastName: "Ruanda"
    }
  ]
    return (
      <div className="App">
        {pessoas.map((p) => {
          return (
            <div key={p.id}>
              <Greeting name={p.name} lastName={p.lastName} />
            </div> 
          )
        })
        }
      </div>
    );
  }
}

export default App;