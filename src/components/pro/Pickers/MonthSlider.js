import React from 'react';
import format from 'date-fns/format';
import Button from './../../Button';

const MonthSlider = ({ nextMonth, prevMonth, date }) => {
  return (
    <div>
      <Button onClick={prevMonth}>&lt;</Button>
        <span>{format(date, "MMMM YYYY")}</span>
      <Button onClick={nextMonth}>&gt;</Button>
    </div>
  );
}

export default MonthSlider;
