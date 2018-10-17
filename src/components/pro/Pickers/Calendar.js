import React, { Component } from "react";
import Month from "./Month";

class Calendar extends Component {
  render() {
    return (
      <div>
        <Month date={new Date()} />
      </div>
    );
  }
}

export default Calendar;
