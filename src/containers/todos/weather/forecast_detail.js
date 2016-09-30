import React, { Component } from 'react';

import { connect } from 'react-redux';

class ForecastDetail extends Component {

  render() {

    return (
      <div className="forecast-details">
        <p>{ this.props.weatherDetails.day.fcttext }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forecastWeather: state.forecastWeather,
    weatherDetails: state.weatherDetails
  }
}

export default connect(mapStateToProps)(ForecastDetail);