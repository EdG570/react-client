import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchForecastWeather } from '../../../actions/index';

import ForecastList from './forecast_list';
import ForecastDetail from './forecast_detail';


class ForecastWeather extends Component {
  componentWillMount() {
    this.props.fetchForecastWeather();
  }

  render() {
    return (
      <div>
        <ForecastList />
        <ForecastDetail />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchForecastWeather: fetchForecastWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(ForecastWeather);