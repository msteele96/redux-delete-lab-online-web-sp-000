import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'
import Bands from './Bands';

class BandsContainer extends Component {
  render() {
    return (
      <div className="bands-container">
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} delete={this.props.delete} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name: name }),
  delete: id => dispatch({ type: "DELETE_BAND", id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
