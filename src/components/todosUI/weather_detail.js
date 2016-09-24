import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../../actions/index';

class WeatherDetail extends Component {

  componentWillMount() {
    this.props.fetchWeather('Northumberland');
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  roundTemp(temp) {
    return Math.round(temp);
  }

  render() {
    const temp = this.roundTemp(this.props.weather.temp);
    const description = this.capitalizeFirstLetter(this.props.weather.description);
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

WeatherDetail.propTypes = {
  weather: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);