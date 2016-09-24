import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../../actions/index';

class WeatherDetail extends Component {
  componentWillMount() {
    this.props.fetchWeather('Northumberland');
  }

  render() {
    const temp = Math.round(this.props.weather.temp);
    let description = this.props.weather.description;
    description = description.charAt(0).toUpperCase() + description.slice(1);
    const iconID = this.props.weather.iconID;

    if (!this.props.weather) return <div>Loading...</div>;

    return (
      <div className="weather-detail">
        <div className="clearfix">
          <img src={`http://openweathermap.org/img/w/${iconID}.png`} alt="Weather image"/>
          <h2>{temp}°F</h2>
        </div>
        <h3>{description}</h3>
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