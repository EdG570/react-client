import React from 'react';

const CurrentDay = () => {

  const getCurrentDayIndex = () => {
    return new Date().getDay();
  };

  const convertIndexToDay = (index) => {
    const indexDayList = [
      'SUNDAY', 'MONDAY', 'TUESDAY',
      'WEDNESDAY', 'THURSDAY', 'FRIDAY',
      'SATURDAY'
    ];

    return indexDayList[index];
  };

  const currentDay = convertIndexToDay(getCurrentDayIndex());

  return (

    <h3>{currentDay}</h3>
  );
};

export default CurrentDay;