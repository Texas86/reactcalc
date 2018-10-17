import React from "react";
import format from "date-fns/format";
import isWithinRange from "date-fns/is_within_range";
import startOfMonth from "date-fns/start_of_month";
import endOfMonth from "date-fns/end_of_month";
import Button from "../../Button";

const Day = ({ day, date }) => {
  return (
    <Button
      disabled={!isWithinRange(day, startOfMonth(date), endOfMonth(date))}
      floating
    >
      {format(day, "D")}
    </Button>
  );
};

export default Day;
