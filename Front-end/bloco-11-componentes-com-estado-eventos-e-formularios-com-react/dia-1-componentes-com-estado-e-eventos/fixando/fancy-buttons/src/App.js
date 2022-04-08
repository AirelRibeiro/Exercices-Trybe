import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0
    }
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
    this.click3 = this.click3.bind(this)
  }
  click1() {
    this.setState((clickAnterior, _props) => ({
      botao1: clickAnterior.botao1 + 1
    }))
  }
  
  click2() {
    this.setState((clickAnterior, _props) => ({
      botao2: clickAnterior.botao2 + 1
    }))
  }
  
  click3() {
    this.setState((clickAnterior, _props) => ({
      botao3: clickAnterior.botao3 + 1
    }))  
  }

  checaNumero(numero) {
    if (numero % 2 === 0 && numero !== 0) {
      return 'green';
    } else {
     return '';
    }
  }

  render() { 
    return (
      <>
        <button style={{ backgroundColor: this.checaNumero(this.state.botao1) }} onClick={this.click1}>{this.state.botao1}</button>
        <button style={{ backgroundColor: this.checaNumero(this.state.botao2) }} onClick={this.click2}>{this.state.botao2}</button>
        <button style={{ backgroundColor: this.checaNumero(this.state.botao3) }} onClick={this.click3}>{this.state.botao3}</button>
      </>
    );
  }

}

export default App;
