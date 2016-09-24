import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../../actions/index';

class WeatherDetail extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);