import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/* eslint-disable */
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';
import moment from 'moment';

import './DatePicker.css';

export default class MDBDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: props.value
    }
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date ? date : this.props.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.getValue && prevState.selectedDate !== this.state.selectedDate) {
      this.props.getValue(this.state.selectedDate);
    }
  }

  render() {
    const {
      allowKeyboardControl,
      autoOk,
      cancelLabel,
      className,
      clearable,
      clearLabel,
      disableFuture,
      disablePast,
      format,
      getValue,
      initialFocusedDate,
      invalidDateMessage,
      invalidLabel,
      keyboard,
      keyboardIcon,
      mask,
      maxDate,
      maxDateMessage,
      minDate,
      minDateMessage,
      okLabel,
      showTodayButton,
      todayLabel,
      value,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'md-form',
      className
    );

    return (
      <Tag className={classes}>
        <input
          type="date"
          onChange={(e) => this.handleDateChange(e.target.value)}
          value={this.state.selectedDate}
          {...attributes}
        />
      </Tag>
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
  value: PropTypes.instanceOf(Date),
  tag: PropTypes.node
};

MDBDatePicker.defaultProps = {
  getValue: () => {},
  format: "DD MMMM, YYYY",
  tag: 'div',
  value: new Date()
};
