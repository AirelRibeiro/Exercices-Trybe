import React from 'react';
import Input from './Input';

class Formulario extends React.Component {
  constructor() {
    super()
    this.state = {
      options: '',
      name: '',
      email: '',
      nascimento: '',
      text: '',
      check: false,
      file: '',
      formularioComErros: true
    }
    this.fileInput = React.createRef();
  }
  
  handleError = () => {
    const { options, name, email, nascimento, text, check, file } = this.state;

      const errors = [
        !options.length,
        !name.length,
        !email.match(/^\S+@\S+$/i),
        !nascimento.length,
        !text.length,
        !check,
        !file.length
      ];

      const formularioPreenchido = errors.some((error) => error === true);
      console.log(formularioPreenchido);

      this.setState({
        formularioComErros: formularioPreenchido,
      });
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [key]: value
    },
    () => this.handleError());
  }

  handleChangeFile = (event) => {
    const key = event.target.name;
    const value = this.fileInput.current.files[0].name;
    this.setState({
      [key]: value
    },
    () => this.handleError());
  }


  render() {
    return (
      <section>
        <h1>Meu formulário</h1>
        <form>
          <select onChange={this.handleChange} name="options" value={this.state.options}>
            <option value="">Selecione uma opção</option>
            <option value="Opção 1">Opção 1</option>
            <option value="Opção 2">Opção 2</option>
            <option value="Opção 3">Opção 3</option>
          </select>
          <fieldset>
            <legend>Informações pessoais:</legend>
            <Input type="text" change={this.handleChange} name="name" descriptor="Name: " value={this.state.name} />
            <br/>
            <Input type="email" change={this.handleChange} name="email" descriptor="Email: " value={this.state.email} />
            <br/>
            <Input type="date" change={this.handleChange} name="nascimento" descriptor="Data de nascimento: " value={this.state.nascimento} />
            </fieldset>
          <textarea onChange={this.handleChange} name="text" value={this.state.text} ></textarea>
          {this.state.text.length > 120 ? <span>Número máximo de caracteres é 120</span> : null}
          <input type="checkbox" onChange={this.handleChange} name="check" value={this.state.check} />
          <label>
           File:
            <input type="file" onChange={this.handleChangeFile} name="file" ref={this.fileInput} />
          </label>
          <br/>
          { this.state.formularioComErros ? <span>Todos os campos precisam ser preenchidos!!!</span> : <h2>Tudo feito. Pode enviar seu formulário!!!</h2> }
          <br/>
          <button disabled={this.state.formularioComErros}>Enviar</button>
        </form>
      </section>
    )
  }
}

export default Formulario;
