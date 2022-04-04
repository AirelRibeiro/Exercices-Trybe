import React from 'react';

class Image extends React.Component {
  render () {
    return <img src={this.props.source} alt={this.props.alternativeText} className='image'/>;
  }
}

export default Image;
