import React from 'react';

class JobFieldset extends React.Component {
  render() {
    const { changeF, curriculumValue, officeValue, descriptionValue } = this.props;
    return (
      <fieldset>
        <legend>Informações sobre último emprego</legend>
        <label>
          <h4>Resumo do currículo</h4>
          <textarea name="curriculum" onChange={ changeF } value={ curriculumValue } rows="20" cols="40"></textarea>
          {curriculumValue.length > 1000 ? <h4>Máximo de 1000 caracteres!</h4> : null}
        </label>
        <label>
          <h4>Cargo</h4>
          <textarea name="office" onChange={ changeF } value={ officeValue }></textarea>
          {officeValue.length > 40 ? <h4>Máximo de 40 caracteres!</h4> : null}
        </label>
        <label>
          <h4>Descrição do cargo</h4>
          <textarea name="description" onChange={ changeF } value={ descriptionValue } rows="10" cols="30"></textarea>
          {descriptionValue.length > 500 ? <h4>Máximo de 500 caracteres!</h4> : null}
        </label>
        
      </fieldset>
    )
  }
}

export default JobFieldset;
