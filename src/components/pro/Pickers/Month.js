import React from "react";
import * as DateFns from "date-fns";
import Day from "./Day";

const getWeeksArray = date => {
  const start = DateFns.startOfWeek(DateFns.startOfMonth(date));
  const end = DateFns.endOfWeek(DateFns.endOfMonth(date));

  let count = 0;
  let current = start;
  const nestedWeeks = [];

  while (DateFns.isBefore(current, end)) {
    const weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    nestedWeeks[weekNumber].push(current);
    current = DateFns.addDays(current, 1);
    count += 1;
  }

  return nestedWeeks;
};

const Month = ({ date }) => {
  return (
    <div>
      {getWeeksArray(date).map((week, index) => (
        <div key={`week-${week[index].toString()}`} className="d-flex">
          {week.map(day => (
            <Day key={day.toString()} day={day} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Month;
