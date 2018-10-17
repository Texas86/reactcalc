import React from "react";
import startOfWeek from "date-fns/start_of_week";
import startOfMonth from "date-fns/start_of_month";
import endOfWeek from "date-fns/end_of_week";
import endOfMonth from "date-fns/end_of_month";
import isBefore from "date-fns/is_before";
import addDays from "date-fns/add_days";
import Month from "./Month";
import Week from "./Week";
import MonthSlider from "./MonthSlider";

const getWeeksArray = date => {
  const start = startOfWeek(startOfMonth(date));
  const end = endOfWeek(endOfMonth(date));

  let count = 0;
  let current = start;
  const nestedWeeks = [];

  while (isBefore(current, end)) {
    const weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    nestedWeeks[weekNumber].push(current);
    current = addDays(current, 1);
    count += 1;
  }

  return nestedWeeks;
};

const Calendar = ({ chooseDate, nextMonth, prevMonth, date }) => {
  const nestedWeeks = getWeeksArray(date);

  return (
    <div>
      <MonthSlider nextMonth={nextMonth} prevMonth={prevMonth} date={date} />
      <Week week={nestedWeeks[0]} format="ddd" />
      <Month chooseDate={chooseDate} nestedWeeks={nestedWeeks} date={date} />
    </div>
  );
}

export default Calendar;
