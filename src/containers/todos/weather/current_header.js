import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentHeader extends Component {

  render() {
    const currentDescription = this.props.currentWeather.description.toUpperCase();
    const city = this.props.currentWeather.location.toUpperCase();

    return (
      <p className="clearfix"><span>{city}</span><span>{currentDescription}</span></p>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  }
}

export default connect(mapStateToProps)(CurrentHeader);