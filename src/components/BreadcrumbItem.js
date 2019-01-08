import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from './Fa';
import "./Breadcrumb.css";

const BreadcrumbItem = props => {

  const { active, appendIcon, children, className, bold, iconBrand, icon, iconClassName, iconLight, iconRegular, ...attributes } = props;

  const classes = classNames(
    active ? "active" : false,
    icon && "bc-icons",
    "breadcrumb-item",
    className
  );

  const iconClasses = classNames(
    appendIcon ? "mx-2" : "mr-2",
    iconClassName
  )

  const WithBold = ({ children }) => (bold ?
    <strong>
      {children}
    </strong>
    : children
  )

  const WithIcon = () => {
    if (icon) {
      return (
        <Fragment>
          {
            appendIcon && children
          }
          <Fa
            brand={iconBrand}
            className={iconClasses}
            icon={icon}
            light={iconLight}
            regular={iconRegular}
          />
          {
            !appendIcon && children
          }
        </Fragment>
      );
    }
    return children;
  }

  return (
    <li {...attributes} className={classes}>
      <WithBold>
        <WithIcon />
      </WithBold>
    </li>
  );
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default BreadcrumbItem;
export { BreadcrumbItem as MDBBreadcrumbItem };
