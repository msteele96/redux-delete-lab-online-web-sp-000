import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.delete(this.props.band.id)
  }

  render() {
    return(
      <li>
        <span>{this.props.band.name}</span><button onClick={this.handleDelete}>DELETE</button>
      </li>
    );
  }
};

export default Band;
