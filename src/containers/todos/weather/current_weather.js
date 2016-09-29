import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCurrentWeather } from '../../../actions/index';

import CurrentHeader from './current_header';
import CurrentDetails from './current_detail';

class CurrentWeather extends Component {
  componentWillMount() {
    this.props.fetchCurrentWeather();
  }

  render() {
    return (
      <div>
        <CurrentHeader />
        <CurrentDetails />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentWeather: fetchCurrentWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrentWeather);