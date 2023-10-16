import React from 'react';

const Day = ({
  day,
  isSelectedDay,
  selectFunc,
  firstValue,
  className /* , secondClassName  */,
}) => {
  return (
    <p
      className={`${className} ${isSelectedDay.includes(day) ? 'active' : ''}`}
      onClick={() => selectFunc(day)}>
      {firstValue}
    </p>
  );
};

export default Day;
