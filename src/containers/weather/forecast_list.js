import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showWeatherDetails } from '../../actions/index';

class ForecastList extends Component {
  constructor(props) {
    super(props);

  }

  forecastList() {

    const forecastDays = this.props.weather.days.map((day, index) => {

      return <li key={index} onClick={() => this.props.showWeatherDetails(day)}>
               <img src={`http://icons.wxug.com/i/c/a/${day.icon}.gif`} alt="Weather image" />
               <p>{day.title}</p>
            </li>;

    });

    return forecastDays;
  };

  render() {
    const list = this.forecastList();

    return (
      <ul>
        {list}
      </ul>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showWeatherDetails: showWeatherDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(ForecastList);