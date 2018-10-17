import React from 'react';
import * as formatFn from 'date-fns/format'

const Week = ({ week, format, locale }) => {
  return (
    <div>
      {week.map(day => (
        <span key={day.toString()}>{formatFn(day, format)}</span>
      ))}
    </div>
  );
}

export default Week;
