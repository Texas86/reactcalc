import React, { Component } from "react";
import * as DateFns from "date-fns";
import Button from "./../../Button";

class Calendar extends Component {
  state = {
    nestedWeeks: []
  };

  componentDidMount() {
    this.setState({ nestedWeeks: this.getWeeksArray(this.props.startDay) });
  }

  getWeeksArray = date => {
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

  render() {
    return (
      <div>
        {this.state.nestedWeeks.map(week => (
          <div key={`week-${week[0].toString()}`} className="d-flex">
            {week.map(day => (
              <Button floating key={day.toString()}>
                {DateFns.format(day, "D")}
              </Button>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;
