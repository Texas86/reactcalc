import React from "react";
import Day from "./Day";

const Month = ({ date, chooseDate, nestedWeeks }) => {
  return (
    <React.Fragment>
      {nestedWeeks.map((week, index) => (
        <div key={`week-${week[index].toString()}`} className="d-flex">
          {week.map(day => (
            <Day key={day.toString()} day={day} date={date} chooseDate={chooseDate} />
          ))}
        </div>
      ))}

    </React.Fragment>
  );
};

export default Month;
