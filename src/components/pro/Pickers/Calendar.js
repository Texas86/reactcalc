import React, { Component } from "react";
import Month from "./Month";
import addMonths from "date-fns/add_months";
import subMonths from 'date-fns/sub_months';

class Calendar extends Component {
  state = {
    date: this.props.startDate || new Date()
  }

  nextMonth = () => this.setState(prevState => {
    const date = addMonths(prevState.date, 1);
    return { date };
  });

  prevMonth = () => this.setState(prevState => {
    const date = subMonths(prevState.date, 1);
    return { date };
  });

  render() {
    return (
      <div>
        <Month nextMonth={this.nextMonth} prevMonth={this.prevMonth} date={this.state.date} />
      </div>
    );
  }
}

export default Calendar;
