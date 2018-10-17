import React, { Component } from "react";
import Month from "./Month";

class Calendar extends Component {
  state = {
    date: this.props.startDate || new Date()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.startDate !== nextProps.startDate) {
      return { 
        date: nextProps.startDate
      }
    }

    return null;
  }

  render() {
    return (
      <div>
        <Month date={this.state.date} />
      </div>
    );
  }
}

export default Calendar;
