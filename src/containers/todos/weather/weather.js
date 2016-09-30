import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CurrentWeather from './current_weather';
import CurrentDay from './current_day';
import ForecastWeather from './forecast_weather';

import { fetchCurrentWeather } from '../../../actions/index';
import { fetchForecastWeather } from '../../../actions/index';

class Weather extends Component {

  componentWillMount() {
    this.props.fetchCurrentWeather();
    this.props.fetchForecastWeather();
  }

  render() {

    if (this.props.forecastWeather.isFetching || this.props.currentWeather.isFetching) {
      return (
        <div id="weather-spinner">
          <img src="../../src/assets/loading.gif" alt="Loading image" />
        </div>
      );

    }

    return (
      <div className="weather-box">
        <CurrentDay />
        <CurrentWeather />
        <ForecastWeather />
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    forecastWeather: state.forecastWeather,
    currentWeather: state.currentWeather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCurrentWeather: fetchCurrentWeather,
    fetchForecastWeather: fetchForecastWeather
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
