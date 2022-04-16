import React from "react";
import PersonFieldset from "./PersonFieldset";
import JobFieldset from "./JobFieldset";

class Form extends React.Component {
  constructor() {
    super()
    this.state ={
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      estado: '',
      curriculum: '',
      office: '',
      description: '',
      erros: true,
      envio: false,
    }
  }

 erros = () => {
    const { name, email, cpf, adress, city, file } = this.state;

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
    });
  }

  criaDiv = () => {
    const { name, email, cpf, adress, city, estado, curriculum, office, description } = this.state;
    return (
      <div>
        <h3>{ name }</h3>
        <p>Email: { email }</p>
        <p>CPF: { cpf }</p>
        <div>
          <h4>Endereço:</h4>
          <p>{ adress }, { city } - { estado }</p>
        </div>
        <div>
          <h4>Último emprego:</h4>
          <p>{ curriculum }</p>
          <p>{ office }</p>
          <p>{ description }</p>
        </div>
      </div>
    )
  }

  render() {
    const { name, email, cpf, adress, city, curriculum, office, description } = this.state;
    return (
      <form>
        <PersonFieldset name={ name.toUpperCase() } email={ email } cpf={ cpf } adress={ adress } city={ city } changeF={ this.handleChange } />
        <JobFieldset curriculumValue={ curriculum } officeValue={ office } descriptionValue={ description } changeF={ this.handleChange } />
        <button disabled={}>Enviar</button>
      </form>
    )
  }
}

export default Form;
