import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentDetails extends Component {

  roundTemp(temp) {
    return Math.round(temp);
  }

  render() {
    const currentTemp = this.roundTemp(this.props.currentWeather.temp);
    const currentIconID = this.props.currentWeather.iconID;

    return (
      <div>
        <div className="clearfix current-weather">
          <img src={`http://icons.wxug.com/i/c/a/${currentIconID}.gif`} alt="Weather image"/>
          <h2>{currentTemp}°F</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  }
}

export default connect(mapStateToProps)(CurrentDetails);