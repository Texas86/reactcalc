import React, { Component } from "react";
import PropTypes from "prop-types";
import format from 'date-fns/format';
import addMonths from "date-fns/add_months";
import subMonths from 'date-fns/sub_months';
import Modal from "./../Modal";
import Calendar from "./Pickers/Calendar";

/* eslint-disable */
// import MomentUtils from 'material-ui-pickers/utils/moment-utils';
// import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// import DatePicker from 'material-ui-pickers/DatePicker';
// import moment from 'moment';

import './DatePicker.css';

export default class MDBDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPickerOpen: false,
      date: props.value || new DataCue(),
      pickerValue: props.value
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.getValue && prevState.pickerValue !== this.state.pickerValue) {
      this.props.getValue(this.state.pickerValue);
    }
  }
  
  handleDateChange = (e) => {
    this.setState({ pickerValue: e.target.value });
  }

  togglePicker = (isPickerOpen) => this.setState({ isPickerOpen });

  chooseDate = (date) => this.setState({ pickerValue: date });

  nextMonth = () => this.setState(prevState => {
    const date = addMonths(prevState.date, 1);
    return { date };
  });

  prevMonth = () => this.setState(prevState => {
    const date = subMonths(prevState.date, 1);
    return { date };
  });

  cloneChildren = () => React.Children.map(this.props.children, child => {
    if(child.type === "input" || child.type.name === "Input") {
      return React.cloneElement(child , {
        onChange: (e) => this.handleDateChange(e),
        onClick: () => this.togglePicker(true),
        value: format(this.state.pickerValue, this.props.format)
      });
    }
    else {
      return null;
    }
  });

  render() {
    const clonedInput = this.cloneChildren();
    
    return (
      <React.Fragment>
        {clonedInput}
        <Modal
          backdrop={true}
          isOpen={this.state.isPickerOpen}
          toggle={() => this.togglePicker(false)}
          centered
        >
          <Calendar
            date={this.state.date}
            chooseDate={this.chooseDate}
            nextMonth={this.nextMonth} 
            prevMonth={this.prevMonth}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

MDBDatePicker.propTypes = {
  allowKeyboardControl: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.object,
  disablePast: PropTypes.bool,
  format: PropTypes.string,
  getValue: PropTypes.func,
  initialFocusedDate: PropTypes.string,
  invalidDateMessage: PropTypes.string,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  showTodayButton: PropTypes.bool,
  todayLabel: PropTypes.string,
  value: PropTypes.string
};

MDBDatePicker.defaultProps = {
  getValue: () => {},
  format: "DD MMMM, YYYY",
  value: ""
};
