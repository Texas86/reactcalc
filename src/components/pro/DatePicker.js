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
      value: props.value
    }
  }

  componentDidMount() {
    
  }
  
  handleDateChange = (date) => {
    this.setState({ value: date });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.getValue && prevState.value !== this.state.value) {
      this.props.getValue(this.state.value);
    }
  }

  render() {
    const {
      allowKeyboardControl,
      autoOk,
      cancelLabel,
      children,
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
      value
    } = this.props;

    const clonedChildren = React.Children.map(this.props.children, child => {
      if(child.type === "input" || child.type.name === "Input") {
        return React.cloneElement(child , {
          onChange: (e) => this.handleDateChange(e.target.value),
          onClick: this.openPicker,
          value: this.state.value
        });
      }
      else {
        return child;
      }
    });

    return (
      <React.Fragment>
        {clonedChildren}
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
