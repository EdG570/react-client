import React, { Component } from 'react';
import { connect } from 'react-redux';

const CurrentHeader = ({ weather }) => {

  const currentDescription = weather.description.toUpperCase();
  const city = weather.location.toUpperCase();

  return (
    <p className="clearfix"><span>{city}</span><span>{currentDescription}</span></p>
  );

};

export default CurrentHeader;