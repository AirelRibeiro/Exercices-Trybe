import React from 'react';
import estados from './estados';

class Estados extends React.Component {
  render() {
    const { changeE } = this.props
    const ests = estados.map((estado) => Object.entries(estado));
    return (
      <select name="estado" onChange={ changeE }>
        {ests.map((est) => <option key={ est[0][0] } value={ est[0][0] }>{ est[0][1] }</option>)}
      </select>
    )
  }
}

export default Estados;
