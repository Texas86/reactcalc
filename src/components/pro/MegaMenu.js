import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class MegaMenu extends Component {
  render() {
    const { children, className } = this.props;

    const classes = classNames(
      "dropdown-menu",
      "mega-menu",
      "py-5",
      "px-3",
      "z-depth-1",
      "show",
      className
    );

    return <div className={classes}>{children}</div>;
  }
}

MegaMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default MegaMenu;
export { MegaMenu as MDBMegaMenu };
