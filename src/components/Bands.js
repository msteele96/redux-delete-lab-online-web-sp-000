import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  renderBands = () => this.props.bands.map(band => <Band key={band.id} delete={this.props.delete} band={band}/>)

  render() {
    return(
        <ul className="band-list">
            {this.renderBands()}
        </ul>
    );
  }
};


export default Bands;