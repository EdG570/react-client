import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDetail extends Component {
  render() {
    return (
      <div className="weather-detail">
        <img src="" alt="Weather image"/>
        <h3>Rain</h3>
        {console.log(this.props.weather)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect (mapStateToProps)(WeatherDetail);