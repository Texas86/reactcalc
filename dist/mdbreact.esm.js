import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes, { PropTypes as PropTypes$1 } from 'prop-types';
import classNames from 'classnames';
import { Transition, CSSTransition } from 'react-transition-group';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Popper, Target, Manager, Arrow } from 'react-popper';
import NumericInput from 'react-numeric-input';
import { NavLink } from 'react-router-dom';
import outy from 'outy';
export { cssTransition, toast, ToastContainer } from 'react-toastify';
import Autosuggest from 'react-autosuggest';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import moment from 'moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import PerfectScrollbar from 'perfect-scrollbar';
import raf from 'raf';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;

      if (windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) && scroll < _this.getOffset(_this.elemRef.current) || windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight && scroll < _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(_this.elemRef.current) + 100 > docHeight) {
        // if the predicate is true, change state
        _this.setState({
          isVisible: true
        });
      } else {
        //  was the "revealing" fired at least once?
        if (_this.state.revealed) {
          return;
        } else {
          // if it wasn't, hide
          _this.setState({
            isVisible: false,
            revealed: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIteration", function (e) {
      if (_this.props.onAnimationIteration) {
        _this.setState({
          countIterations: _this.state.countIterations + 1
        });

        _this.props.onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnd", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationEnd && _this.props.count === _this.state.countIterations) {
        _this.props.onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    _this.state = {
      isVisible: _this.props.reveal ? false : true,
      revealed: _this.props.reveal ? false : true,
      countIterations: 0
    };
    _this.elemRef = React.createRef();
    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add EL on window if the animation is to "reveal"
      if (this.props.reveal) {
        window.addEventListener("scroll", this.updatePredicate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.reveal) {
        window.removeEventListener("scroll", this.updatePredicate);
      }
    } // the function to judge whether the animation should be started

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          type = _this$props.type,
          duration = _this$props.duration,
          delay = _this$props.delay,
          count = _this$props.count,
          reveal = _this$props.reveal,
          infinite = _this$props.infinite,
          style = _this$props.style,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "type", "duration", "delay", "count", "reveal", "infinite", "style", "children"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? "visible" : "hidden",
        animationName: type
      };
      var hiddenStyles = {
        animationName: "none",
        visibility: "hidden"
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(this.state.isVisible && "animated", // will this work?
      type && type, infinite && "infinite", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: isVisible && revealed ? getAllStyles : hiddenStyles,
        ref: this.elemRef,
        onAnimationStart: this.handleStart,
        onAnimationIteration: this.handleIteration,
        onAnimationEnd: this.handleEnd
      }), children);
    }
  }]);

  return Animation;
}(Component);

Animation.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  type: PropTypes.string,
  delay: PropTypes.string,
  count: PropTypes.number,
  onAnimationEnd: PropTypes.func,
  onAnimationStart: PropTypes.func
};
Animation.defaultProps = {
  tag: "div",
  reveal: false,
  duration: 1,
  count: 1
};

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeAlert", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExit", function (node) {
      node.classList.add("fade");
      _this.props.onClose && _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExited", function (node) {
      _this.props.onClosed && _this.props.onClosed();
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          dismiss = _this$props.dismiss;
      var alertClasses = classNames("alert", color && "alert-".concat(color), className);
      var alertComponent;

      if (dismiss) {
        alertComponent = React.createElement(Transition, {
          in: this.state.isOpen,
          timeout: 150,
          unmountOnExit: true,
          onExit: function onExit(node) {
            return _this2.handleOnExit(node);
          },
          onExited: function onExited(node) {
            return _this2.handleOnExited(node);
          }
        }, React.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children, React.createElement("button", {
          onClick: this.closeAlert,
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, React.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"))));
      } else {
        alertComponent = React.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children);
      }

      return alertComponent;
    }
  }]);

  return Alert;
}(Component);

Alert.defaultProps = {
  color: "primary"
};
Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func
};

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          pill = _this$props.pill,
          attributes = _objectWithoutProperties(_this$props, ["tag", "className", "children", "color", "pill"]);

      var classes = classNames("badge", color, "badge-" + color, pill ? "badge-pill" : false, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Badge;
}(React.Component);

Badge.defaultProps = {
  tag: "span",
  color: "default",
  pill: false
};
Badge.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};
var returnAttributes = function returnAttributes(attributes) {
  var newAttributesObject = Object.keys(attributes).reduce(function (previousValue, currentElement) {
    if (attributes[currentElement]) previousValue[currentElement] = attributes[currentElement];
    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(" ");
  var specialColors = ["danger", "warning", "success", "info", "default", "primary", "secondary", "elegant", "stylish", "unique", "special"];
  var colorClasses = "";
  colorArray.forEach(function (color) {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += "".concat(color, " ");
      } else {
        colorClasses += "".concat(color, "-color");
      }
    } else {
      colorClasses += "".concat(color, " ");
    }
  });
  return colorClasses;
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames("breadcrumb", uppercase && "text-uppercase", bold && "font-up-bold", light && "white-text", color && getColorClass(color), className);
  var children;

  if (bold) {
    children = React.Children.map(props.children, function (child) {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React.createElement("nav", null, React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool
};

var Fa =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fa, _React$Component);

  function Fa() {
    _classCallCheck(this, Fa);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fa).apply(this, arguments));
  }

  _createClass(Fa, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          border = _this$props.border,
          brand = _this$props.brand,
          className = _this$props.className,
          fab = _this$props.fab,
          fal = _this$props.fal,
          far = _this$props.far,
          fixed = _this$props.fixed,
          flip = _this$props.flip,
          icon = _this$props.icon,
          inverse = _this$props.inverse,
          light = _this$props.light,
          list = _this$props.list,
          pull = _this$props.pull,
          pulse = _this$props.pulse,
          regular = _this$props.regular,
          rotate = _this$props.rotate,
          size = _this$props.size,
          spin = _this$props.spin,
          stack = _this$props.stack,
          attributes = _objectWithoutProperties(_this$props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

      var iconPrefix = brand || fab ? "fab" : light || fal ? "fal" : regular || far ? "far" : "fa";
      var classes = classNames(iconPrefix, list ? "fa-li" : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? "fa-fw" : false, pull ? "fa-pull-".concat(pull) : false, border ? "fa-border" : false, spin ? "fa-spin" : false, pulse ? "fa-pulse" : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? "fa-inverse" : false, stack ? "fa-".concat(stack) : false, className);
      return React.createElement("i", _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Fa;
}(React.Component);

Fa.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.string,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  spin: PropTypes.bool,
  size: PropTypes.string,
  stack: PropTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: "",
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: "",
  inverse: "",
  light: false,
  list: false,
  pull: "",
  pulse: false,
  regular: false,
  rotate: "",
  spin: false,
  size: "",
  stack: ""
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".bc-icons.breadcrumb-item::before,\n.bc-icons.breadcrumb-item::after {\n  content: none;\n}\n\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\n  content: none;\n}\n\n.bc-icons.breadcrumb-item.active {\n  color: #eeeeee;\n}\n";
styleInject(css);

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      appendIcon = props.appendIcon,
      children = props.children,
      className = props.className,
      bold = props.bold,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClassName = props.iconClassName,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      attributes = _objectWithoutProperties(props, ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"]);

  var classes = classNames(active ? "active" : false, icon && "bc-icons", "breadcrumb-item", className);
  var iconClasses = classNames(appendIcon ? "mx-2" : "mr-2", iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React.createElement(Fragment, null, appendIcon && children, React.createElement(Fa, {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }

    return children;
  };

  return React.createElement("li", _extends({}, attributes, {
    className: classes
  }), React.createElement(WithBold, null, React.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  bold: PropTypes.bool,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string
};
BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: "",
  bold: false,
  icon: "",
  iconBrand: false,
  iconClassName: "",
  iconLight: false,
  iconRegular: false,
  iconSize: ""
};

var css$1 = ".Ripple {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  opacity: 1;\n  transform: scale(0);\n}\n\n.Ripple-outline {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.Ripple.is-reppling {\n  animation: ripple 0.5s linear;\n}\n\n.Ripple-parent {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    transform: scale(3);\n  }\n}\n";
styleInject(css$1);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves(props) {
    var _this;

    _classCallCheck(this, Waves);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Waves).call(this, props));
    _this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.cursorPos.time !== this.props.cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: this.props.cursorPos
          }, function () {
            _this2.reppling();
          });
        } else this.reppling();
      }
    }
  }, {
    key: "reppling",
    value: function reppling() {
      // Get the element
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight; // Make a Square Ripple

      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth); // Make Ripple Position to be center

      var centerize = rippleWidthShouldBe / 2;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: this.state.cursorPos.top - buttonPos.top - centerize,
        left: this.state.cursorPos.left - buttonPos.left - centerize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: 'Ripple ' + (this.props.outline || this.props.flat || this.props.dark ? 'Ripple-outline ' : '') + (this.state.animate ? 'is-reppling' : ''),
        style: {
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      });
    }
  }]);

  return Waves;
}(React.Component);

Waves.propTypes = {
  outline: PropTypes.bool,
  flat: PropTypes.bool,
  animate: PropTypes.bool,
  cursorPos: PropTypes.object,
  children: PropTypes.node
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };

      _this.setState({
        cursorPos: cursorPos
      });
    });

    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          disabled = _this$props.disabled,
          download = _this$props.download,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          social = _this$props.social,
          action = _this$props.action,
          Tag = _this$props.tag,
          target = _this$props.target,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"]);

      var classes = classNames(floating ? "btn-floating btn" : "btn", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? "-outline" : "", "-").concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, circle && "btn-circle", block ? "btn-block" : false, social ? "btn-" + social : false, action ? "btn-action" : false, "Ripple-parent", className, {
        active: active,
        disabled: disabled
      });

      if (attributes.href && Tag === "button") {
        Tag = "a";
      }

      return React.createElement(Tag, _extends({
        type: Tag === "button" && !type ? "button" : type,
        target: target,
        role: Tag === "a" && !role ? "button" : role,
        className: classes,
        ref: innerRef,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick
      }, attributes, {
        download: download,
        disabled: disabled
      }), this.props.children, this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      }));
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  color: "default",
  tag: "button"
};
Button.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  social: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string
};

var css$2 = ".btn-group-vertical>.btn,\n.btn-group-vertical>.btn+.btn-group,\n.btn-group-vertical>.btn-group+.btn,\n.btn-group-vertical>.btn-group+.btn-group {\n  margin-left: 0px;\n}\n\n.btn-group-lg>.btn {\n  font-size: 0.9rem;\n  padding: 1rem 2.4rem;\n}\n\n.btn-group-sm>.btn {\n  font-size: 0.6rem;\n  padding: 0.5rem 1.6rem;\n}\n\n.btn-floating.btn.btn-sm,\n.btn-floating.btn.btn-lg {\n  padding: 0;\n}\n";
styleInject(css$2);

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroup).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          vertical = _this$props.vertical,
          attributes = _objectWithoutProperties(_this$props, ["className", "size", "vertical"]);

      var classes = classNames(className, size ? "btn-group-" + size : false, vertical ? "btn-group-vertical" : "btn-group");
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonGroup;
}(React.Component);

ButtonGroup.propTypes = {
  "aria-label": PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
  role: "group"
};

var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    _classCallCheck(this, ButtonToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonToolbar).apply(this, arguments));
  }

  _createClass(ButtonToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["className"]);

      var classes = classNames(className, "btn-toolbar");
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonToolbar;
}(React.Component);

ButtonToolbar.propTypes = {
  "aria-label": PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  role: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: "toolbar"
};

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          cascade = _this$props.cascade,
          wide = _this$props.wide,
          narrow = _this$props.narrow,
          reverse = _this$props.reverse,
          testimonial = _this$props.testimonial,
          ecommerce = _this$props.ecommerce,
          collection = _this$props.collection,
          pricing = _this$props.pricing,
          personal = _this$props.personal,
          news = _this$props.news,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

      var classes = classNames("card", cascade && "card-cascade", wide && "card-cascade wider", narrow && "card-cascade narrower", reverse && "card-cascade wider reverse", testimonial && "testimonial-card", ecommerce && "card-ecommerce", collection && "collection-card", pricing && "pricing-card", personal && "card-personal", news && "news-card", color && color, text && text + "-text", border && "border-" + border, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Card;
}(Component);

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
};
Card.defaultProps = {
  tag: "div"
};

var CardBody =
/*#__PURE__*/
function (_Component) {
  _inherits(CardBody, _Component);

  function CardBody() {
    _classCallCheck(this, CardBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardBody).apply(this, arguments));
  }

  _createClass(CardBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          cascade = _this$props.cascade,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "cascade"]);

      var classes = classNames("card-body", cascade && "card-body-cascade", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardBody;
}(Component);

CardBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cascade: PropTypes.bool
};
CardBody.defaultProps = {
  tag: "div"
};

var CardFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(CardFooter, _Component);

  function CardFooter() {
    _classCallCheck(this, CardFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardFooter).apply(this, arguments));
  }

  _createClass(CardFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          transparent = _this$props.transparent,
          small = _this$props.small,
          muted = _this$props.muted,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "color", "text", "border", "transparent", "small", "muted"]);

      var classes = classNames("card-footer", color && color, text && text, color && !text && " white-text", border && "border-" + border, transparent && "bg-transparent", muted && "text-muted", className);
      var component = React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        component = React.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React.createElement("small", null, " ", this.props.children, " "));
      }

      return component;
    }
  }]);

  return CardFooter;
}(Component);

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool
};
CardFooter.defaultProps = {
  tag: "div"
};

var CardGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(CardGroup, _Component);

  function CardGroup() {
    _classCallCheck(this, CardGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardGroup).apply(this, arguments));
  }

  _createClass(CardGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          deck = _this$props.deck,
          column = _this$props.column,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "deck", "column"]);

      var classes = classNames(deck ? "card-deck" : column ? "card-columns" : "card-group", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardGroup;
}(Component);

CardGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  deck: PropTypes.bool,
  column: PropTypes.bool
};
CardGroup.defaultProps = {
  tag: "div"
};

var CardHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CardHeader, _Component);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardHeader).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "color", "text", "border", "transparent"]);

      var classes = classNames("card-header", color && color, text && text, color && !text && " white-text", border && "border-" + border, transparent && "bg-transparent", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardHeader;
}(Component);

CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool
};
CardHeader.defaultProps = {
  tag: "div"
};

var Mask =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mask, _React$Component);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mask).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          overlay = _this$props.overlay,
          pattern = _this$props.pattern,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "overlay", "pattern", "tag"]);

      var classes = classNames("mask", pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Mask;
}(React.Component);

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string
};
Mask.defaultProps = {
  className: "",
  overlay: "",
  pattern: "",
  tag: "div"
};

var View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(View, _React$Component);

  function View(props) {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(View, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cascade = _this$props.cascade,
          children = _this$props.children,
          className = _this$props.className,
          hover = _this$props.hover,
          rounded = _this$props.rounded,
          src = _this$props.src,
          Tag = _this$props.tag,
          waves = _this$props.waves,
          zoom = _this$props.zoom,
          attributes = _objectWithoutProperties(_this$props, ["cascade", "children", "className", "hover", "rounded", "src", "tag", "waves", "zoom"]);

      var classes = classNames("view", rounded && "rounded", zoom && "zoom", hover && "overlay", cascade && "view-cascade", waves ? "Ripple-parent" : false, className);
      var viewStyle = src ? {
        backgroundImage: "url(\"".concat(src, "\")"),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh"
      } : {};
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        style: viewStyle
      }), children, waves && React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return View;
}(React.Component);

View.defaultProps = {
  cascade: false,
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
  waves: false,
  zoom: false
};
View.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};

var CardImage =
/*#__PURE__*/
function (_Component) {
  _inherits(CardImage, _Component);

  function CardImage(props) {
    var _this;

    _classCallCheck(this, CardImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardImage).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(CardImage, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          overlay = _this$props.overlay,
          top = _this$props.top,
          waves = _this$props.waves,
          hover = _this$props.hover,
          cascade = _this$props.cascade,
          tag = _this$props.tag,
          zoom = _this$props.zoom,
          attributes = _objectWithoutProperties(_this$props, ["className", "overlay", "top", "waves", "hover", "cascade", "tag", "zoom"]);

      var classes = classNames(top && "card-img-top", className);
      var Tag = tag;
      var innerContent = React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);

      if (this.props.src) {
        return React.createElement(View, {
          zoom: zoom,
          hover: this.props.hover,
          cascade: this.props.cascade
        }, React.createElement("div", {
          className: "Ripple-parent",
          onMouseDown: this.handleClick.bind(this),
          onTouchStart: this.handleClick.bind(this)
        }, innerContent, React.createElement(Mask, {
          overlay: overlay
        }), this.props.waves && React.createElement(Waves, {
          cursorPos: this.state.cursorPos
        })));
      } else {
        return React.createElement("div", null, innerContent);
      }
    }
  }]);

  return CardImage;
}(Component);

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  zoom: PropTypes.bool,
  waves: PropTypes.bool,
  className: PropTypes.string,
  cascade: PropTypes.bool,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  top: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.node
};
CardImage.defaultProps = {
  tag: "img",
  overlay: "white-slight",
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText =
/*#__PURE__*/
function (_Component) {
  _inherits(CardText, _Component);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardText).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          muted = _this$props.muted,
          small = _this$props.small,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "muted", "small"]);

      var classes = classNames("card-text", muted && "text-muted", className);
      var text = React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        text = React.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React.createElement("small", null, " ", this.props.children, " "));
      }

      return text;
    }
  }]);

  return CardText;
}(Component);

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool
};
CardText.defaultProps = {
  tag: "p"
};

var CardTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(CardTitle, _Component);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardTitle).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          sub = _this$props.sub,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "sub"]);

      var classes = classNames(sub ? "card-subtitle" : "card-title", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardTitle;
}(Component);

CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sub: PropTypes.bool,
  className: PropTypes.string
};
CardTitle.defaultProps = {
  tag: "h4",
  sub: false
};

var Control =
/*#__PURE__*/
function (_Component) {
  _inherits(Control, _Component);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, _getPrototypeOf(Control).apply(this, arguments));
  }

  _createClass(Control, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          className = _this$props.className,
          onClick = _this$props.onClick,
          Tag = _this$props.tag,
          iconLeft = _this$props.iconLeft,
          iconRight = _this$props.iconRight,
          testimonial = _this$props.testimonial,
          multiItem = _this$props.multiItem;
      var text;

      if (direction === "prev") {
        text = "Previous";
      } else if (direction === "next") {
        text = "Next";
      }

      var classes = classNames("carousel-control-" + direction, className);
      var caretClasses = classNames("carousel-control-" + direction + "-icon");

      if (testimonial) {
        var arrow = direction === "prev" ? "left" : "right";
        classes = classNames("carousel-control-" + direction, arrow, "carousel-control", className);
        caretClasses = classNames("icon-" + direction);
      }

      if (multiItem) {
        classes = classNames("btn-floating");
      }

      return React.createElement(Tag, {
        className: classes,
        "data-slide": direction,
        onClick: onClick
      }, iconLeft ? React.createElement(Fa, {
        icon: "chevron-left"
      }) : iconRight ? React.createElement(Fa, {
        icon: "chevron-right"
      }) : React.createElement("div", null, React.createElement("span", {
        className: caretClasses,
        "aria-hidden": "true"
      }), React.createElement("span", {
        className: "sr-only"
      }, text)));
    }
  }]);

  return Control;
}(Component);

Control.propTypes = {
  onClick: PropTypes.any,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  testimonial: PropTypes.bool,
  multiItem: PropTypes.bool
};
Control.defaultProps = {
  tag: "a"
};

var CarouselIndicators =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselIndicators, _Component);

  function CarouselIndicators() {
    _classCallCheck(this, CarouselIndicators);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselIndicators).apply(this, arguments));
  }

  _createClass(CarouselIndicators, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["children", "className"]);

      var classes = classNames("carousel-indicators", className);
      return React.createElement("ol", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselIndicators;
}(Component);

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CarouselIndicators.defaultProps = {
  className: ""
};

var CarouselIndicator =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselIndicator, _Component);

  function CarouselIndicator() {
    _classCallCheck(this, CarouselIndicator);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselIndicator).apply(this, arguments));
  }

  _createClass(CarouselIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          img = _this$props.img,
          alt = _this$props.alt,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "img", "alt"]);

      var classes = classNames(this.props.active ? "active" : "", className);
      return React.createElement("li", _extends({}, attributes, {
        className: classes
      }), this.props.img && React.createElement("img", {
        src: this.props.img,
        alt: this.props.alt,
        className: "img-fluid"
      }), children);
    }
  }]);

  return CarouselIndicator;
}(Component);

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};
CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: ""
};

var css$3 = ".carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.carousel-fade .carousel-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block !important;\n  opacity: 0;\n  z-index: 0;\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\n}\n\n.carousel-fade .carousel-item.active {\n  position: relative;\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-multi-item .carousel-item {\n  display: inline-block !important;\n}\n\n.carousel .carousel-slide-item {\n  transition: left 0.5s;\n}\n\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\n  z-index: 2;\n}\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "restartInterval", function () {
      if (_this.props.interval !== false) {
        clearInterval(_this.cycleInterval);
        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "next", function () {
      var nextItem = _this.state.activeItem + 1;

      if (nextItem > _this.state.length) {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: 1
        }));
      } else {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: nextItem
        }));
      }

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prev", function () {
      var prevItem = _this.state.activeItem - 1;

      if (prevItem < 1) {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: _this.state.length
        }));
      } else {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: prevItem
        }));
      }

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (_this.props.interval === false) {
        return;
      }

      _this.cycleInterval = setInterval(_this.next, _this.props.interval); // get images src atr

      if (_this.props.thumbnails) {
        var CarouselItemsArray = _this.carouselRef.current.querySelectorAll('.carousel-item img');

        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });

        _this.setState(_objectSpread({}, _this.state, {
          srcArray: srcArray
        }));
      }
    });

    _this.state = {
      activeItem: _this.props.activeItem,
      length: _this.props.length,
      slide: _this.props.slide,
      srcArray: []
    };
    _this.carouselRef = React.createRef();
    return _this;
  }

  _createClass(Carousel, [{
    key: "goToIndex",
    value: function goToIndex(item) {
      if (this.state.activeItem !== item) {
        this.setState(_objectSpread({}, this.state, {
          activeItem: item
        }));
      }

      this.restartInterval();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.interval === false) {
        return;
      }

      clearInterval(this.cycleInterval);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItem: this.state.activeItem,
        length: this.state.length,
        slide: this.state.slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeItem = _this$props.activeItem,
          children = _this$props.children,
          className = _this$props.className,
          multiItem = _this$props.multiItem,
          slide = _this$props.slide,
          thumbnails = _this$props.thumbnails,
          interval = _this$props.interval,
          testimonial = _this$props.testimonial,
          Tag = _this$props.tag,
          length = _this$props.length,
          showControls = _this$props.showControls,
          showIndicators = _this$props.showIndicators,
          attributes = _objectWithoutProperties(_this$props, ["activeItem", "children", "className", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators"]);

      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(React.createElement(CarouselIndicator, {
          img: thumbnails ? _this2.state.srcArray[i - 1] : null,
          key: i,
          active: _this2.state.activeItem === i ? true : false,
          onClick: function onClick() {
            _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= this.state.length; i++) {
        _loop(i);
      }

      return React.createElement(Tag, _extends({
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel
      }), showControls && multiItem && React.createElement("div", {
        className: "controls-top"
      }, React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React.createElement(React.Fragment, null, React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "next",
        role: "button",
        onClick: this.next
      })), React.createElement(CarouselIndicators, null, showIndicators && CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(Component);

Carousel.propTypes = {
  activeItem: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  multiItem: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  thumbnails: PropTypes.bool,
  testimonial: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  length: PropTypes.number
};
Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true
};
Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var CarouselCaption =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselCaption, _Component);

  function CarouselCaption() {
    _classCallCheck(this, CarouselCaption);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselCaption).apply(this, arguments));
  }

  _createClass(CarouselCaption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("carousel-caption", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselCaption;
}(Component);

CarouselCaption.propTypes = {
  active: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
CarouselCaption.defaultProps = {
  tag: "div"
};

var CarouselInner =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselInner, _Component);

  function CarouselInner(props) {
    var _this;

    _classCallCheck(this, CarouselInner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselInner).call(this, props));
    _this.state = {
      childrenCount: React.Children.count(_this.props.children)
    };
    return _this;
  }

  _createClass(CarouselInner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          childrenCount = _this$props.childrenCount,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "childrenCount", "className", "tag"]);

      var classes = classNames("carousel-inner", active ? "active" : "", className);
      childrenCount = React.Children.count(this.props.children);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselInner;
}(Component);

CarouselInner.propTypes = {
  childrenCount: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node
};
CarouselInner.defaultProps = {
  tag: "div"
};
CarouselInner.contextTypes = {
  childrenCount: PropTypes.any
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem(props) {
    var _this;

    _classCallCheck(this, CarouselItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselItem).call(this, props));
    _this.moveForward = _this.moveForward.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveBackwards = _this.moveBackwards.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.makeVisible = _this.makeVisible.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CarouselItem, [{
    key: "moveForward",
    value: function moveForward() {
      this.style = {
        position: "absolute",
        left: "100%"
      };
    }
  }, {
    key: "moveBackwards",
    value: function moveBackwards() {
      this.style = {
        position: "absolute",
        left: "-100%"
      };
    }
  }, {
    key: "makeVisible",
    value: function makeVisible() {
      this.style = {
        left: "0"
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      itemId = parseInt(itemId, 10);
      var classes = classNames("carousel-item", this.context.slide ? "active carousel-slide-item" : itemId === this.context.activeItem ? "active" : false, className);
      var slideIndex = this.context.activeItem - itemId;

      if (this.context.slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      }

      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(Component);

CarouselItem.propTypes = {
  active: PropTypes.bool,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
CarouselItem.defaultProps = {
  tag: "div"
};
CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var Col =
/*#__PURE__*/
function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          top = _this$props.top,
          bottom = _this$props.bottom,
          middle = _this$props.middle,
          size = _this$props.size,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

      var classes = classNames(size && "col-" + size, xs && "col-xs-" + xs, sm && "col-sm-" + sm, md && "col-md-" + md, lg && "col-lg-" + lg, xl && "col-xl-" + xl, !size && !xs && !sm && !md && !lg && !xl ? "col" : "", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Col;
}(Component);

Col.propTypes = {
  size: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = "SHOW";
var SHOWN = "SHOWN";
var HIDE = "HIDE";
var HIDDEN = "HIDDEN";
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCollapse", function () {
      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.transitionTag = setTimeout(function () {
          _this.setState({
            collapse: SHOWN,
            height: null
          }, _this.props.onOpened());
        }, _this.getDelay("show"));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeCollapse", function () {
      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });

      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: HIDDEN,
          height: null
        }, _this.props.onClosed());
      }, _this.getDelay("hide"));
    });

    _this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var collapse = prevState.collapse;
      var willOpen = typeof this.props.isOpen !== "boolean" ? this.props.isOpen === prevState.id : this.props.isOpen;

      if (willOpen && this.state.collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (_typeof(delay) === "object") {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navbar = _this$props.navbar,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          delay = _this$props.delay,
          onOpened = _this$props.onOpened,
          onClosed = _this$props.onClosed,
          attributes = _objectWithoutProperties(_this$props, ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"]);

      var _this$state = this.state,
          collapse = _this$state.collapse,
          height = _this$state.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = "collapsing";
          break;

        case SHOWN:
          collapseClass = "collapse show";
          break;

        case HIDE:
          collapseClass = "collapsing";
          break;

        case HIDDEN:
          collapseClass = "collapse";
          break;

        default:
          // HIDDEN
          collapseClass = "collapse";
      }

      var classes = classNames(collapseClass, navbar ? "navbar-collapse" : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement("div", _extends({}, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(Component);

Collapse.propTypes = {
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.node,
  navbar: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
Collapse.defaultProps = {
  isOpen: "",
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fluid = _this$props.fluid,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["fluid", "className", "tag"]);

      var classes = classNames(fluid ? "container-fluid" : "container", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Container;
}(Component);

Container.propTypes = {
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
Container.defaultProps = {
  tag: "div",
  fluid: false
};

var css$4 = ".table-wrapper-scroll-y {\n  display: block;\n  max-height: 200px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n";
styleInject(css$4);

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          btn = _this$props.btn,
          children = _this$props.children,
          dark = _this$props.dark,
          fixed = _this$props.fixed,
          theadColor = _this$props.theadColor,
          hover = _this$props.hover,
          maxHeight = _this$props.maxHeight,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          scrollY = _this$props.scrollY,
          small = _this$props.small,
          striped = _this$props.striped,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "fixed", "theadColor", "hover", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "scrollY", "small", "striped", "className"]);

      var tableClasses = classNames("table", {
        "w-auto": autoWidth,
        "table-bordered": bordered,
        "table-borderless": borderless,
        "btn-table": btn,
        "table-fixed": fixed,
        "table-hover": hover,
        "table-sm": small,
        "table-striped": striped
      }, className);
      var wrapperClasses = classNames({
        "table-dark": dark,
        "table-responsive": responsive,
        "table-responsive-sm": responsiveSm,
        "table-responsive-md": responsiveMd,
        "table-responsive-lg": responsiveLg,
        "table-responsive-xl": responsiveXl,
        "table-wrapper-scroll-y": scrollY
      });
      var wrapperStyles = {
        maxHeight: maxHeight ? "".concat(maxHeight) : null
      };
      return React.createElement("div", {
        className: wrapperClasses,
        style: wrapperStyles
      }, React.createElement("table", _extends({}, attributes, {
        className: tableClasses
      }), children));
    }
  }]);

  return Table;
}(React.Component);

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  theadColor: PropTypes.string,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string
};

var DataTableHead = function DataTableHead(props) {
  var color = props.color,
      columns = props.columns,
      handleSort = props.handleSort,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      sortable = props.sortable,
      textWhite = props.textWhite;
  var theadClasses = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), textWhite && "text-white");
  return React.createElement(Fragment, null, (scrollY || scrollX) && React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement("thead", {
    className: theadClasses || undefined
  }, React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.attributes), col.label, sortable && col.sort !== 'disabled' && React.createElement(Fa, {
      icon: "sort",
      className: "float-right",
      "aria-hidden": "true"
    }));
  }))));
};

DataTableHead.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  textWhite: PropTypes.bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};

var TableBody = function TableBody(props) {
  var children = props.children,
      color = props.color,
      rows = props.rows,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "rows", "textWhite"]);

  var classes = classNames(color, {
    "text-white": textWhite
  });
  return React.createElement("tbody", _extends({}, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React.createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;

      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? React.createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return React.createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableBody.defaultProps = {
  textWhite: false
};

var TableFoot = function TableFoot(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var classes = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), {
    "text-white": textWhite
  });
  return React.createElement("thead", _extends({}, attributes, {
    className: classes || undefined
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableFoot.defaultProps = {
  textWhite: false
};

var DataTableTable = function DataTableTable(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      small = props.small,
      sortable = props.sortable,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable
  }), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), React.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
};

var DataTableTableScroll = function DataTableTableScroll(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      handleTableBodyScroll = props.handleTableBodyScroll,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      small = props.small,
      sortable = props.sortable,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      translateScrollHead = props.translateScrollHead,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "handleTableBodyScroll", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement("div", {
    className: "dataTables_scroll"
  }, React.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, React.createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: "relative",
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: "content-box",
      paddingRight: "15px",
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    }
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable
  })))), React.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, React.createElement(Table, _extends({
    style: {
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    },
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    maxHeight: maxHeight,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    scrollY: scrollY,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  translateScrollHead: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  maxHeight: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool
};

var ControlledSelectInput = function ControlledSelectInput(_ref) {
  var value = _ref.value;
  return React.createElement("input", {
    type: "text",
    readOnly: true,
    value: value,
    className: "select-dropdown"
  });
};

ControlledSelectInput.propTypes = {
  value: PropTypes.string
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onChange && _this.props.onChange(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInput", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onInput && _this.props.onInput(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          size = _this$props.size,
          group = _this$props.group,
          getValue = _this$props.getValue,
          type = _this$props.type,
          tag = _this$props.tag,
          id = _this$props.id,
          hint = _this$props.hint,
          validate = _this$props.validate,
          value = _this$props.value,
          label = _this$props.label,
          error = _this$props.error,
          success = _this$props.success,
          disabled = _this$props.disabled,
          labelClass = _this$props.labelClass,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          inputRef = _this$props.inputRef,
          filled = _this$props.filled,
          gap = _this$props.gap,
          valueDefault = _this$props.valueDefault,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "containerClass", "size", "group", "getValue", "type", "tag", "id", "hint", "validate", "value", "label", "error", "success", "disabled", "labelClass", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "inputRef", "filled", "gap", "valueDefault"]);

      var isNotEmpty = !!this.state.innerValue || !!hint || this.state.isFocused;
      var Tag = "";
      var formControlClass = "";

      if (type === "textarea") {
        formControlClass = "md-textarea form-control";
        Tag = "textarea";
      } else {
        formControlClass = "form-control";
        Tag = "input";
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? "validate" : false, filled ? "filled-in" : false, gap ? "with-gap" : false, type === "checkbox" ? gap ? false : "form-check-input" : false, type === "radio" ? "form-check-input" : false, className);
      var containerClassFix = classNames(type === "checkbox" || type === "radio" ? "form-check my-3" : "md-form", group ? "form-group" : false, size ? "form-".concat(size) : false, containerClass);
      var iconClassFix = classNames(isNotEmpty && this.state.isFocused ? "active" : false, iconClass, "prefix");
      var labelClassFix = classNames(isNotEmpty ? "active" : false, disabled ? "disabled" : false, type === "checkbox" ? "form-check-label mr-5" : false, type === "radio" ? "form-check-label mr-5" : false, labelClass);
      return React.createElement("div", {
        className: containerClassFix
      }, icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClassFix,
        onClick: this.setFocus
      }), React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        id: id,
        placeholder: hint,
        ref: this.inputElementRef,
        value: this.state.innerValue,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onInput: this.onInput,
        onFocus: this.onFocus
      })), label && React.createElement("label", {
        className: labelClassFix,
        htmlFor: id,
        "data-error": error,
        "data-success": success,
        id: id,
        onClick: this.setFocus
      }, label), children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  containerClass: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  filled: PropTypes.bool,
  gap: PropTypes.bool,
  getValue: PropTypes.func,
  group: PropTypes.bool,
  hint: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelClass: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  size: PropTypes.string,
  success: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  validate: PropTypes.bool,
  value: PropTypes.string,
  valueDefault: PropTypes.string
};
Input.defaultProps = {
  className: "",
  containerClass: "",
  disabled: false,
  error: "",
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  label: "",
  labelClass: "",
  size: "",
  success: "",
  tag: "input",
  type: "text",
  validate: false,
  valueDefault: ""
};

var ControlledSelectOption = function ControlledSelectOption(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      icon = _ref.icon,
      multiple = _ref.multiple,
      selectOption = _ref.selectOption,
      text = _ref.text,
      value = _ref.value;
  var classes = classNames(disabled && "disabled", checked && "active");
  return React.createElement("li", {
    "data-multiple": multiple,
    className: classes,
    onClick: function onClick() {
      return selectOption(value);
    }
  }, icon && React.createElement("img", {
    src: icon,
    alt: "",
    className: "rounded-circle"
  }), React.createElement("span", {
    "data-multiple": multiple,
    className: "filtrable"
  }, multiple && React.createElement(React.Fragment, null, React.createElement("input", {
    type: "checkbox",
    value: value,
    className: "form-check-input",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  }), React.createElement("label", {
    style: {
      height: "10px"
    },
    "data-multiple": multiple
  })), text ? text : value));
};

ControlledSelectOption.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  multiple: PropTypes.bool,
  selectOption: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string
};

var ControlledSelectOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(ControlledSelectOptions, _Component);

  function ControlledSelectOptions(props) {
    var _this;

    _classCallCheck(this, ControlledSelectOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlledSelectOptions).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (value) {
      var filteredOptions = _this.state.options.filter(function (option) {
        if (option.text) {
          return option.text.toLowerCase().match(value.toLowerCase());
        } else {
          return option.value.toLowerCase().match(value.toLowerCase());
        }
      });

      _this.setState({
        filteredOptions: filteredOptions
      });
    });

    _this.state = {
      filteredOptions: _this.props.options || [],
      options: _this.props.options || [],
      searchValue: ""
    };
    return _this;
  }

  _createClass(ControlledSelectOptions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options !== this.props.options) {
        this.setState({
          filteredOptions: this.props.options,
          options: this.props.options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          multiple = _this$props.multiple,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          selected = _this$props.selected,
          selectOption = _this$props.selectOption;
      var classes = classNames("dropdown-content", "select-dropdown", "fadeElement");
      return React.createElement("ul", {
        className: classes
      }, search && React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      }), React.createElement(ControlledSelectOption, {
        checked: false,
        disabled: true,
        icon: null,
        value: selected
      }), this.state.filteredOptions.map(function (option, index) {
        return React.createElement(ControlledSelectOption, {
          key: "".concat(option.value, "-").concat(index),
          checked: option.checked,
          disabled: option.disabled,
          multiple: multiple,
          icon: option.icon,
          text: option.text,
          value: option.value,
          selectOption: selectOption
        });
      }));
    }
  }]);

  return ControlledSelectOptions;
}(Component);

ControlledSelectOptions.propTypes = {
  selected: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string
  })),
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string
};
ControlledSelectOptions.defaultProps = {
  multiple: false,
  options: [],
  search: false,
  searchLabel: "Search",
  searchId: "selectSearchInput"
};

var SelectContext = React.createContext();

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeValuesAndText", function (options) {
      var checkedOptions = options.filter(function (option) {
        return option.checked;
      }).map(function (option) {
        return {
          value: option.value,
          text: option.text
        };
      });
      var checkedValues = checkedOptions.map(function (opt) {
        return opt.value;
      });
      var checkedTexts = checkedOptions.map(function (opt) {
        return opt.text ? opt.text : opt.value;
      });
      return {
        selectValue: checkedValues,
        selectTextContent: checkedTexts.length ? checkedTexts.join(", ") : _this.props.selected,
        options: options
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPreselectedOptions", function () {
      return _this.setState(function (prevState) {
        return _this.computeValuesAndText(_toConsumableArray(prevState.options));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "triggerOptionChange", function (value, text) {
      Array.isArray(text) && (text = text.join(", "));

      _this.setState({
        selectValue: value,
        selectTextContent: text
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (e.target.dataset.multiple === "true" || e.target.dataset.search === "true") return;

      _this.closeDropdowns();

      e.target.nextElementSibling && e.target.nextElementSibling.classList.add("fadeIn");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeDropdowns", function () {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        return dropdown.classList.contains("fadeIn") && dropdown.classList.remove("fadeIn");
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOneOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = true;
        options.forEach(function (option, index) {
          return index !== optionIndex ? option.checked = false : false;
        });
        return {
          selectValue: [options[optionIndex].value],
          selectTextContent: options[optionIndex].text,
          options: options
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectMultipleOptions", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = !prevState.options[optionIndex].checked;
        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function (value) {
      if (_this.props.multiple) {
        _this.selectMultipleOptions(value);
      } else {
        _this.selectOneOption(value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "returnComponentContent", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          getTextContent = _this$props.getTextContent,
          getValue = _this$props.getValue,
          multiple = _this$props.multiple,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          selected = _this$props.selected,
          attributes = _objectWithoutProperties(_this$props, ["className", "color", "children", "getTextContent", "getValue", "multiple", "search", "searchLabel", "searchId", "selected"]);

      var classes = classNames("select-wrapper md-form", _this.props.color ? "colorful-select dropdown-" + _this.props.color : "", className);

      if (!_this.props.children) {
        return React.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React.createElement("span", {
          className: "caret"
        }, "\u25BC"), React.createElement(ControlledSelectInput, {
          value: _this.state.selectTextContent
        }), React.createElement(ControlledSelectOptions, {
          multiple: multiple,
          options: _this.state.options,
          search: search,
          searchLabel: searchLabel,
          selected: selected,
          selectOption: _this.selectOption
        }));
      } else {
        return React.createElement(SelectContext.Provider, {
          value: {
            state: _this.state,
            multiple: _this.props.multiple,
            triggerOptionChange: _this.triggerOptionChange
          }
        }, React.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React.createElement("span", {
          className: "caret"
        }, "\u25BC"), children));
      }
    });

    _this.state = {
      selectValue: [],
      selectTextContent: "",
      options: _this.props.options || []
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.onClick);

      if (this.state.options.length) {
        this.renderPreselectedOptions();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selectValue !== this.state.selectValue) {
        if (typeof this.props.getValue === "function") {
          this.props.getValue(this.state.selectValue);
        }

        if (typeof this.props.getTextContent === "function") {
          this.props.getTextContent(this.state.selectTextContent);
        }
      }

      if (this.props.options !== prevProps.options) {
        this.setState({
          options: this.props.options
        }, this.renderPreselectedOptions);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.onClick);
    }
  }, {
    key: "render",
    value: function render() {
      return this.returnComponentContent();
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string
  })),
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string,
  selected: PropTypes.string
};

var selectContextHOC = function selectContextHOC(Component$$1) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(HOC, _React$Component);

      function HOC() {
        _classCallCheck(this, HOC);

        return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
      }

      _createClass(HOC, [{
        key: "render",
        value: function render() {
          var _this = this;

          return React.createElement(SelectContext.Consumer, null, function (context) {
            return React.createElement(Component$$1, _extends({}, _this.props, {
              context: context
            }));
          });
        }
      }]);

      return HOC;
    }(React.Component)
  );
};

var SelectInput = function SelectInput(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      context = _ref.context,
      selected = _ref.selected;
  var classes = classNames("select-dropdown", className);
  return React.createElement("input", _extends({
    type: "text",
    readOnly: true,
    value: context.state.selectTextContent ? context.state.selectTextContent : selected
  }, attributes, {
    className: classes
  }));
};

SelectInput.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SelectInput.defaultProps = {
  className: "",
  selected: "Choose your option"
};
var SelectInput$1 = SelectInput = selectContextHOC(SelectInput);

var css$5 = ".fadeElement {\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  -o-transition: 0.5s;\n  transition: 0.5s;\n  display: block;\n  width: 100%;\n  top: 0;\n  opacity: 0;\n  transform-origin:top;\n  transform:scaleY(0.7);\n  visibility: hidden;\n  pointer-events: none;\n}\n.fadeElement.fadeIn {\n  transform:scaleY(1);\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n}\n";
styleInject(css$5);

var Options =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (value) {
      _this.state.options.forEach(function (option) {
        if (!option.children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
          option.style.display = 'none';
        } else {
          option.style.display = 'block';
        }
      });
    });

    _this.state = {
      options: [],
      searchValue: ""
    };
    _this.optionsRef = React.createRef();
    return _this;
  }

  _createClass(Options, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.search) {
        var options = Array.from(this.optionsRef.current.children).filter(function (child) {
          return child.tagName === 'LI';
        });
        this.setState({
          options: options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "search", "searchLabel", "searchId"]);

      var classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement', className);
      return React.createElement("ul", _extends({}, attributes, {
        className: classes,
        ref: this.optionsRef
      }), search && React.createElement("div", {
        className: "mx-2"
      }, React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      })), children);
    }
  }]);

  return Options;
}(React.Component);

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchId: PropTypes.string
};
Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function () {
      if (!_this.props.disabled) {
        var selectedOption = _this.optionRef.current;
        var value = [];
        var text;
        var options = selectedOption.parentNode.children;

        if (_this.state.multiple) {
          text = [];

          if (selectedOption.classList.contains("active")) {
            selectedOption.classList.remove("active");

            _this.setState({
              checked: false
            });
          } else {
            selectedOption.classList.add("active");

            _this.setState({
              checked: true
            });
          } // iterate throught child nodes options and add checked to arr


          Array.from(options).forEach(function (option) {
            if (option.classList.contains("active")) {
              text.push(option.textContent);
              option.getElementsByTagName("input")[0].value ? value.push(option.getElementsByTagName("input")[0].value) : value.push(option.textContent);
            }
          });

          if (text.length === 0) {
            text = "Choose your option";
          }
        } else {
          Array.from(selectedOption.children).forEach(function (child) {
            if (child.nodeName === "SPAN") {
              text = child.textContent;
              _this.props.value ? value.push(_this.props.value) : value.push(text);
            }
          });
          Array.from(options).forEach(function (option) {
            return option.classList.remove("active");
          });
          selectedOption.classList.add("active");
        }

        _this.props.context.triggerOptionChange(value, text);
      }
    });

    _this.state = {
      multiple: _this.props.context.multiple || false,
      checked: _this.props.selected || false
    };
    _this.optionRef = React.createRef();
    return _this;
  }

  _createClass(Option, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.multiple) {
        this.state.checked && this.optionRef.current.click();
      } else {
        if (!this.props.disabled) {
          !this.state.checked && this.optionRef.current.classList.add("active");
          this.selectOption();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          triggerOptionClick = _this$props.triggerOptionClick,
          value = _this$props.value,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "disabled", "icon", "triggerOptionClick", "value"]);

      var classes = classNames(disabled ? "disabled" : "", className);
      var input = null;
      var label = null;

      if (this.state.multiple) {
        if (!disabled) {
          input = React.createElement("input", {
            type: "checkbox",
            value: value,
            onChange: function onChange() {
              return false;
            },
            className: "form-check-input",
            checked: this.state.checked
          });
          label = React.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        } else {
          input = React.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            disabled: true
          });
          label = React.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        }
      }

      return React.createElement("li", _extends({
        ref: this.optionRef
      }, attributes, {
        "data-multiple": this.state.multiple,
        className: classes,
        onClick: this.selectOption
      }), icon && React.createElement("img", {
        src: this.props.icon,
        alt: "icon",
        className: "rounded-circle"
      }), React.createElement("span", {
        "data-multiple": this.state.multiple,
        className: "filtrable"
      }, input, label, children));
    }
  }]);

  return Option;
}(React.Component);

Option.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  triggerOptionClick: PropTypes.func,
  value: PropTypes.any
};
Option.defaultProps = {
  children: "span",
  checked: false,
  className: "",
  disabled: false,
  icon: "",
  triggerOptionClick: function triggerOptionClick() {},
  value: ""
};
var SelectOption = Option = selectContextHOC(Option);

var DataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      entries = _ref.entries,
      label = _ref.label;
  return React.createElement("div", {
    className: "dataTables_length d-flex flex-row"
  }, React.createElement("label", {
    className: "mt-4"
  }, label), React.createElement(Select, {
    getValue: onChange
  }, React.createElement(SelectInput$1, {
    selected: value
  }), React.createElement(Options, null, entries.map(function (entry, index) {
    return React.createElement(SelectOption, {
      checked: index === 0,
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

/*
// PRO-END
import DataTableSelect from './DataTableSelect';
// PRO-START
*/
// PRO-END

var DataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
      entries = props.entries,
      entriesArr = props.entriesArr,
      paging = props.paging,
      label = props.label;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && React.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label
  }));
};

DataTableEntries.propTypes = {
  handleEntriesChange: PropTypes.func.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  paging: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label;
  return React.createElement("div", {
    className: "dataTables_filter md-form"
  }, React.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  }));
};

DataTableInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

/*
// PRO-END
import DataTableInput from './DataTableInput';
// PRO-START
*/
// PRO-END

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && React.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label
  }));
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  label: PropTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      pages = props.pages,
      label = props.label;
  return React.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && React.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};
DataTableInfo.defaultProps = {
  label: ["Showing", "to", "of", "entries"]
};

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          Tag = _this$props.tag,
          size = _this$props.size,
          attributes = _objectWithoutProperties(_this$props, ["children", "circle", "className", "color", "tag", "size"]);

      var classes = classNames("pagination", circle && "pagination-circle", color && "pg-" + color, size ? "pagination-".concat(size) : false, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Pagination;
}(Component);

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['lg', 'sm'])
};
Pagination.defaultProps = {
  circle: false,
  className: "",
  color: "",
  tag: "ul"
};

var PageItem =
/*#__PURE__*/
function (_Component) {
  _inherits(PageItem, _Component);

  function PageItem() {
    _classCallCheck(this, PageItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageItem).apply(this, arguments));
  }

  _createClass(PageItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "className", "children", "disabled", "tag"]);

      var classes = classNames("page-item", disabled ? "disabled" : "", active ? "active" : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageItem;
}(Component);

PageItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  tag: "li"
};

var PageLink =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLink, _Component);

  function PageLink() {
    _classCallCheck(this, PageLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageLink).apply(this, arguments));
  }

  _createClass(PageLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("page-link", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageLink;
}(Component);

PageLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
PageLink.defaultProps = {
  tag: "a"
};

var DataTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTablePagination, _Component);

  function DataTablePagination(props) {
    var _this;

    _classCallCheck(this, DataTablePagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTablePagination).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps) {
      if (prevProps.pages !== _this.props.pages) {
        _this.setState({
          pages: _this.props.pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pagesIndexify", function () {
      var mutablePages = _toConsumableArray(_this.state.pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, _this.props.pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "choosePagesGroup", function () {
      var pGroupNumber = Math.floor(_this.props.activePage / _this.props.pagesAmount);
      return _this.state.pGroups.length ? _this.state.pGroups[pGroupNumber] : [];
    });

    _this.state = {
      pages: props.pages,
      pGroups: []
    };
    return _this;
  }

  _createClass(DataTablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.groupPages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activePage = _this$props.activePage,
          changeActivePage = _this$props.changeActivePage,
          pages = _this$props.pages,
          label = _this$props.label;
      return React.createElement("div", {
        className: "col-sm-12 col-md-7"
      }, React.createElement("div", {
        className: "dataTables_paginate"
      }, React.createElement(Pagination, null, React.createElement(PageItem, {
        disabled: activePage === 0
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, " ", page.index === activePage && React.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React.createElement(PageItem, {
        disabled: activePage === pages.length - 1
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(Component);

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired
};

var ExportToCSV =
/*#__PURE__*/
function (_Component) {
  _inherits(ExportToCSV, _Component);

  function ExportToCSV(props) {
    var _this;

    _classCallCheck(this, ExportToCSV);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExportToCSV).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeDataToLink", function () {
      _this.setState(function (prevState) {
        return {
          href: encodeURI("data:text/csv;charset=utf-8," + [prevState.columns.map(function (col) {
            return col.field;
          }).join(","), [].concat.apply([], prevState.data).map(function (row) {
            return Object.values(row).join(",");
          }).join("\n")].join("\n"))
        };
      });
    });

    _this.state = {
      columns: _this.props.columns,
      data: _this.props.data,
      href: ""
    };
    return _this;
  }

  _createClass(ExportToCSV, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.computeDataToLink();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.props.data || prevState.columns !== this.props.columns) {
        this.setState({
          columns: this.props.columns,
          data: this.props.data
        }, this.computeDataToLink());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "circle", "className", "color", "children", "outline", "size", "rounded", "gradient", "floating", "flat"]);

      return React.createElement(Button, _extends({
        active: active,
        block: block,
        circle: circle,
        className: className,
        color: color,
        outline: outline,
        size: size,
        rounded: rounded,
        gradient: gradient,
        floating: floating,
        flat: flat,
        role: "button",
        type: "link"
      }, attributes, {
        href: this.state.href,
        download: "export.csv"
      }), children);
    }
  }]);

  return ExportToCSV;
}(Component);

ExportToCSV.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData", function (link) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "paginateRowsInitialy", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.rows.length / _this.state.entries);

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * _this.state.entries;

        _this.state.pages.push(_this.state.rows.slice(pageEndIndex - _this.state.entries, pageEndIndex));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSort", function (field, sort) {
      if (sort !== "disabled") {
        _this.setState(function (prevState) {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? -1 : 1;
              });
              break;

            default:
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? 1 : -1;
              });
          }

          prevState.columns[prevState.columns.findIndex(function (column) {
            return column.field === field;
          })].sort = sort === "asc" ? "desc" : "asc";
          return {
            rows: prevState.rows,
            columns: prevState.columns
          };
        }, function () {
          return _this.filterRows();
        });
      } else return;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterRows", function () {
      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              var stringValue = row[key] !== null ? row[key].toString() : '';
              if (stringValue.toLowerCase().match(_this.state.search.toLowerCase())) return true;
            }
          }

          return false;
        });
        if (filteredRows.length === 0) filteredRows.push({
          message: 'No matching records found',
          colspan: prevState.columns.length
        });
        return {
          filteredRows: filteredRows,
          activePage: 0
        };
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "paginateRows", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.filteredRows.length / _this.state.entries);

      _this.setState(function (prevState) {
        prevState.pages = [];

        if (_this.props.paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * prevState.entries;
            prevState.pages.push(prevState.filteredRows.slice(pageEndIndex - prevState.entries, pageEndIndex));
          }

          prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1;
        } else {
          prevState.pages.push(prevState.filteredRows);
          prevState.activePage = 0;
        }

        return _objectSpread({}, prevState);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeActivePage", function (page) {
      _this.setState({
        activePage: page
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });

    _this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: '',
      translateScrollHead: 0,
      order: props.order || []
    };

    if (_this.props.paging) {
      _this.paginateRowsInitialy();
    } else {
      _this.state.pages.push(_this.state.rows);
    }

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.data === 'string') {
        this.fetchData(this.props.data);
      }

      this.state.order.length && this.handleSort(this.state.order[0], this.state.order[1]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.data !== this.props.data) {
        if (typeof this.props.data === 'string') {
          this.fetchData(this.props.data);
        } else {
          this.setState({
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          });
        }
      }

      if (prevState.pages !== this.state.pages || prevState.rows !== this.state.rows) {
        this.paginateRows();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          btn = _this$props.btn,
          children = _this$props.children,
          dark = _this$props.dark,
          data = _this$props.data,
          entriesOptions = _this$props.entriesOptions,
          entriesLabel = _this$props.entriesLabel,
          exportToCSV = _this$props.exportToCSV,
          fixed = _this$props.fixed,
          hover = _this$props.hover,
          info = _this$props.info,
          infoLabel = _this$props.infoLabel,
          maxHeight = _this$props.maxHeight,
          order = _this$props.order,
          pagesAmount = _this$props.pagesAmount,
          paging = _this$props.paging,
          paginationLabel = _this$props.paginationLabel,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          searching = _this$props.searching,
          searchLabel = _this$props.searchLabel,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY,
          small = _this$props.small,
          sortable = _this$props.sortable,
          striped = _this$props.striped,
          tbodyColor = _this$props.tbodyColor,
          tbodyTextWhite = _this$props.tbodyTextWhite,
          theadColor = _this$props.theadColor,
          theadTextWhite = _this$props.theadTextWhite,
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "data", "entriesOptions", "entriesLabel", "exportToCSV", "fixed", "hover", "info", "infoLabel", "maxHeight", "order", "pagesAmount", "paging", "paginationLabel", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "searching", "searchLabel", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

      var _this$state = this.state,
          columns = _this$state.columns,
          entries = _this$state.entries,
          filteredRows = _this$state.filteredRows,
          pages = _this$state.pages,
          activePage = _this$state.activePage,
          search = _this$state.search,
          translateScrollHead = _this$state.translateScrollHead;
      return React.createElement("div", {
        className: "dataTables_wrapper dt-bootstrap4"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableEntries, {
        paging: paging,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel
      }), React.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel
      })), !scrollY && !scrollX && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTable, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        hover: hover,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage]
      }, attributes))), (scrollY || scrollX) && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTableScroll, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        handleTableBodyScroll: this.handleTableBodyScroll,
        hover: hover,
        maxHeight: maxHeight,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        scrollX: scrollX,
        scrollY: scrollY,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), React.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })), exportToCSV && React.createElement("div", {
        className: "row justify-content-end"
      }, React.createElement(ExportToCSV, {
        columns: columns,
        data: pages,
        color: "primary"
      }, "Download CSV")));
    }
  }]);

  return DataTable;
}(Component);

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.arrayOf(PropTypes.string),
  maxHeight: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paging: PropTypes.bool,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  entries: 10,
  entriesLabel: "Show entries",
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ["Showing", "to", "of", "entries"],
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ["Previous", "Next"],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: "Search",
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};

var propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  toggle: PropTypes.bool
};
var contextTypes = {
  toggle: PropTypes.func
};
var defaultProps = {
  tag: "button",
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownItem).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return "-1";
      }

      return "0";
    }
  }, {
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ["toggle"]),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "active"]);

      var classes = classNames({
        disabled: props.disabled,
        "dropdown-item": !divider && !header,
        active: active,
        "dropdown-header": header,
        "dropdown-divider": divider
      }, className);

      if (Tag === "button") {
        if (header) {
          Tag = "h6";
        } else if (divider) {
          Tag = "div";
        } else if (props.href) {
          Tag = "a";
        }
      }

      return React.createElement(Tag, _extends({
        type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

var css$6 = ".dropup .dropdown-menu {\n  top: auto !important;\n  bottom: 100% !important;\n  transform: translate3d(5px, 5px, 0px) !important;\n}\n\n.dropdown-menu-right {\n  left: 0 !important;\n  right: auto !important;\n}\n";
styleInject(css$6);

var DropdownMenuProComponent = function DropdownMenuProComponent(props) {
  var isOpen = props.isOpen,
      d_tag = props.d_tag,
      d_tabIndex = props.d_tabIndex,
      d_role = props.d_role,
      d_attributes = props.d_attributes,
      d_aria = props.d_aria,
      d_classes = props.d_classes,
      d_key = props.d_key,
      children = props.children;
  var Tag = d_tag;
  return React.createElement(CSSTransition, {
    in: isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, React.createElement(Tag, _extends({
    tabIndex: d_tabIndex,
    role: d_role
  }, d_attributes, {
    "aria-hidden": d_aria,
    className: d_classes,
    key: d_key
  }), children));
};

DropdownMenuProComponent.propTypes = {
  d_aria: PropTypes.bool.isRequired,
  d_attributes: PropTypes.object.isRequired,
  d_key: PropTypes.string.isRequired,
  d_role: PropTypes.string.isRequired,
  d_tabIndex: PropTypes.string.isRequired,
  d_tag: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  d_classes: PropTypes.string
};
DropdownMenuProComponent.defaultProps = {
  d_classes: ""
};

/*
// PRO-END
import DropdownMenuComponent from './DropdownMenuComponent';
// PRO-START
*/
// FREE-END
// PRO-END

var noFlipModifier = {
  flip: {
    enabled: false
  }
};

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          basic = _this$props.basic,
          className = _this$props.className,
          right = _this$props.right,
          children = _this$props.children,
          tag = _this$props.tag,
          flip = _this$props.flip,
          color = _this$props.color,
          attrs = _objectWithoutProperties(_this$props, ["basic", "className", "right", "children", "tag", "flip", "color"]);

      var classes = classNames('dropdown-menu', color && "dropdown-".concat(color), {
        'dropdown-menu-right': right,
        show: this.context.isOpen,
        basic: basic
      }, className);
      var Tag = tag;

      if (this.context.isOpen) {
        Tag = Popper;
        var position1 = this.context.dropup ? 'top' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
        attrs.modifiers = !flip ? noFlipModifier : undefined;
      }

      return React.createElement(DropdownMenuProComponent, {
        isOpen: this.context.isOpen,
        d_tag: Tag,
        d_tabIndex: "-1",
        d_role: "menu",
        d_attributes: attrs,
        d_aria: !this.context.isOpen,
        d_classes: classes,
        d_key: "dropDownMenu"
      }, children);
    }
  }]);

  return DropdownMenu;
}(Component);

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  basic: PropTypes.bool,
  className: PropTypes.string,
  flip: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: false,
  right: false,
  tag: 'div',
  color: false
};
DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  color: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), PropTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _classCallCheck(this, DropdownToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          caret = _this$props.caret,
          nav = _this$props.nav,
          tag = _this$props.tag,
          props = _objectWithoutProperties(_this$props, ["className", "color", "caret", "nav", "tag"]);

      var ariaLabel = props["aria-label"] || "Toggle Dropdown";
      var classes = classNames({
        "dropdown-toggle": caret,
        "nav-link": nav
      }, className);
      var children = props.children || React.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag;

      if (nav && !tag) {
        Tag = "a";
        props.href = "#";
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      } else {
        Tag = tag;
      }

      return React.createElement(Target, _extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen
      }), children);
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "aria-haspopup": PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool
};
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "secondary"
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var EdgeHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(EdgeHeader, _Component);

  function EdgeHeader() {
    _classCallCheck(this, EdgeHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(EdgeHeader).apply(this, arguments));
  }

  _createClass(EdgeHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["color", "className", "tag"]);

      var classes = classNames("edge-header", color, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return EdgeHeader;
}(Component);

EdgeHeader.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
EdgeHeader.defaultProps = {
  color: "deep-purple",
  tag: "div"
};

var FormInline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormInline, _React$Component);

  function FormInline(props) {
    var _this;

    _classCallCheck(this, FormInline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInline).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(FormInline, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          waves = _this$props.waves,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "waves", "children"]);

      var classes = classNames("form-inline", this.props.waves ? "Ripple-parent" : false, className);
      return React.createElement("form", _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }), this.props.children, this.props.waves && React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return FormInline;
}(React.Component);

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["color", "children", "className", "tag"]);

      var classes = classNames("page-footer", color ? color : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Footer;
}(Component);

Footer.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
Footer.defaultProps = {
  tag: "footer"
};

var FreeBird =
/*#__PURE__*/
function (_Component) {
  _inherits(FreeBird, _Component);

  function FreeBird() {
    _classCallCheck(this, FreeBird);

    return _possibleConstructorReturn(this, _getPrototypeOf(FreeBird).apply(this, arguments));
  }

  _createClass(FreeBird, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag"]);

      var classes = classNames("container free-bird", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return FreeBird;
}(Component);

FreeBird.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
FreeBird.defaultProps = {
  tag: "div"
};

var css$7 = ".hamburger-button__checkbox {\n  display: none;\n}\n\n.hamburger-button__button {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  top: -5px;\n}\n\nlabel.hamburger-button__button {\n  margin-bottom: 0;\n}\n\n#nav-icon1 {\n  width: 1.5em;\n  height: 1.5em;\n  position: relative;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .5s ease-in-out;\n  -moz-transition: .5s ease-in-out;\n  -o-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  cursor: pointer;\n}\n\n#nav-icon1 span {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  border-radius: 1px;\n  background-color: #fff;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .25s ease-in-out;\n  -moz-transition: .25s ease-in-out;\n  -o-transition: .25s ease-in-out;\n  transition: .25s ease-in-out;\n}\n\n#nav-icon1 span:nth-child(1) {\n  top: 5px;\n}\n\n#nav-icon1 span:nth-child(2) {\n  top: 16px;\n}\n\n#nav-icon1 span:nth-child(3) {\n  top: 27px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\n  top: 16px;\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\n  opacity: 0;\n  left: -60px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\n  top: 16px;\n  -webkit-transform: rotate(-135deg);\n  -moz-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n";
styleInject(css$7);

var HamburgerToggler =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HamburgerToggler, _React$Component);

  function HamburgerToggler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HamburgerToggler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HamburgerToggler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      checked: _this.props.isOpen || false
    });

    return _this;
  }

  _createClass(HamburgerToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          color = _this$props.color,
          className = _this$props.className;
      var classes = classNames("hamburger-button__button", className);
      return React.createElement(React.Fragment, null, React.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.checked,
        onChange: this.props.onClick,
        className: "hamburger-button__checkbox",
        id: id
      }), React.createElement("label", {
        id: "nav-icon1",
        className: classes,
        htmlFor: id
      }, React.createElement("span", {
        style: {
          background: color
        }
      }), React.createElement("span", {
        style: {
          background: color
        }
      }), React.createElement("span", {
        style: {
          background: color
        }
      })));
    }
  }]);

  return HamburgerToggler;
}(React.Component);

HamburgerToggler.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

var InputNumeric =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputNumeric, _React$Component);

  function InputNumeric() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputNumeric);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputNumeric)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeHandler", function (value) {
      _this.props.getValue && _this.props.getValue(value);
    });

    return _this;
  }

  _createClass(InputNumeric, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          getValue = _this$props.getValue,
          attributes = _objectWithoutProperties(_this$props, ["className", "getValue"]);

      var classes = classNames("form-control", className);
      return React.createElement(NumericInput, _extends({}, attributes, {
        onChange: this.onChangeHandler,
        className: classes
      }));
    }
  }]);

  return InputNumeric;
}(React.Component);

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(this, _getPrototypeOf(Jumbotron).apply(this, arguments));
  }

  _createClass(Jumbotron, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fluid = _this$props.fluid,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "fluid"]);

      var classes = classNames("jumbotron", fluid ? "jumbotron-fluid" : false, className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Jumbotron;
}(React.Component);

Jumbotron.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

var ListGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(ListGroup, _Component);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroup).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("list-group", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroup;
}(Component);

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
ListGroup.defaultProps = {
  tag: "ul"
};

var ListGroupItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListGroupItem, _Component);

  function ListGroupItem() {
    _classCallCheck(this, ListGroupItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroupItem).apply(this, arguments));
  }

  _createClass(ListGroupItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          disabled = _this$props.disabled,
          hover = _this$props.hover,
          success = _this$props.success,
          info = _this$props.info,
          warning = _this$props.warning,
          danger = _this$props.danger,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

      var classes = classNames("list-group-item", color && "list-group-item-".concat(color), active ? "active" : "", disabled ? "disabled" : "", hover ? "list-group-item-action" : "", success ? "list-group-item-success" : "", info ? "list-group-item-info" : "", warning ? "list-group-item-warning" : "", danger ? "list-group-item-danger" : "", className);

      if (attributes.href && Tag === "li") {
        Tag = "a";
      }

      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroupItem;
}(Component);

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
ListGroupItem.defaultProps = {
  tag: "li"
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, _getPrototypeOf(Media).apply(this, arguments));
  }

  _createClass(Media, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          body = _this$props.body,
          bottom = _this$props.bottom,
          className = _this$props.className,
          heading = _this$props.heading,
          left = _this$props.left,
          list = _this$props.list,
          middle = _this$props.middle,
          object = _this$props.object,
          right = _this$props.right,
          round = _this$props.round,
          thumbnail = _this$props.thumbnail,
          figure = _this$props.figure,
          figImg = _this$props.figImg,
          figCap = _this$props.figCap,
          figCapRight = _this$props.figCapRight,
          figCapLeft = _this$props.figCapLeft,
          tag = _this$props.tag,
          top = _this$props.top,
          attributes = _objectWithoutProperties(_this$props, ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"]);

      var defaultTag;

      if (heading) {
        defaultTag = "h4";
      } else if (left || right) {
        defaultTag = "a";
      } else if (object || figImg) {
        defaultTag = "img";
      } else if (list) {
        defaultTag = "ul";
      } else if (figure) {
        defaultTag = "figure";
      } else if (figCap || figCapRight || figCapLeft) {
        defaultTag = "figcaption";
      } else {
        defaultTag = "div";
      }

      var Tag = tag || defaultTag;
      var classes = classNames(body ? "media-body" : false, heading ? "mt-0" : false, left ? "media-left" : false, right ? "media-right" : false, top ? "align-self-start" : false, middle ? "align-self-center" : false, bottom ? "align-self-end" : false, object ? "media-object" : false, thumbnail ? "img-thumbnail" : false, list ? "media-list" : false, figure ? "figure" : false, figImg ? "figure-img" : false, figCap ? "figure-caption text-center" : false, figCapRight ? "figure-caption text-right" : false, figCapLeft ? "figure-caption text-left" : false, round ? "rounded-circle z-depth-1-half" : false, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? "media" : false, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Media;
}(React.Component);

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  figure: PropTypes.bool,
  figImg: PropTypes.bool,
  figCap: PropTypes.bool,
  figCapRight: PropTypes.bool,
  figCapLeft: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  thumbnail: PropTypes.bool,
  round: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      document.body.classList.add("modal-open");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      document.body.classList.remove("modal-open");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnEntered", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.add("show");
      _this.props.autoFocus && node.focus();

      if (type === "modal") {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExit", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.remove("show");

      if (type === "modal") {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop) return;

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEscape", function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          backdrop = _this$props.backdrop,
          backdropClassName = _this$props.backdropClassName,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          size = _this$props.size,
          side = _this$props.side,
          fullHeight = _this$props.fullHeight,
          frame = _this$props.frame,
          centered = _this$props.centered,
          position = _this$props.position,
          cascading = _this$props.cascading,
          modalStyle = _this$props.modalStyle,
          wrapClassName = _this$props.wrapClassName,
          animation = _this$props.animation,
          fade = _this$props.fade,
          tabIndex = _this$props.tabIndex,
          role = _this$props.role,
          id = _this$props.id,
          inline = _this$props.inline;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames("modal-dialog", className, size && "modal-".concat(size), side && "modal-side", fullHeight && "modal-full-height", frame && "modal-frame", centered && "modal-dialog-centered", position && "modal-".concat(this.props.position), cascading && "cascading-modal", modalStyle && "modal-notify white-text modal-".concat(this.props.modalStyle));
      var wrapperClasses = classNames(inline ? false : "modal", fade && "fade", wrapClassName, fade && (animation || position && position.split("-").slice(-1)[0] || "top"));
      var backdropClasses = classNames("modal-backdrop", fade ? "fade" : "show", backdropClassName);
      var contentClasses = classNames("modal-content", contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: "block"
        },
        id: id || undefined,
        tabIndex: tabIndex,
        role: role,
        "aria-hidden": "true"
      });
      return React.createElement(Fragment, null, backdrop && React.createElement(Transition, {
        timeout: timeout,
        in: this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("backdrop", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("backdrop", node);
        },
        onExited: this.handleOnExited
      }, React.createElement("div", {
        className: backdropClasses
      })), React.createElement(Transition, {
        timeout: timeout,
        in: this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onClick: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("modal", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("modal", node);
        }
      }, React.createElement("div", _extends({
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  backdrop: true,
  fade: true,
  isOpen: false,
  autoFocus: true,
  role: "dialog",
  zIndex: 1050,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
  tabIndex: "-1"
};
Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  size: PropTypes.string,
  side: PropTypes.bool,
  fullHeight: PropTypes.bool,
  frame: PropTypes.bool,
  centered: PropTypes.bool,
  position: PropTypes.string,
  cascading: PropTypes.bool,
  modalStyle: PropTypes.string,
  wrapClassName: PropTypes.string,
  animation: PropTypes.string,
  fade: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  showModal: PropTypes.func,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func
};

var ModalBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalBody, _React$Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "children"]);

      var classes = classNames("modal-body", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalBody;
}(React.Component);

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          center = _this$props.center,
          start = _this$props.start,
          end = _this$props.end,
          around = _this$props.around,
          between = _this$props.between,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "center", "start", "end", "around", "between"]);

      var classes = classNames("modal-footer", start && "justify-content-start", end && "justify-content-end", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalFooter;
}(React.Component);

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalHeader).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var closeButton;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          toggle = _this$props.toggle,
          Tag = _this$props.tag,
          closeAriaLabel = _this$props.closeAriaLabel,
          titleClass = _this$props.titleClass,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

      var classes = classNames("modal-header", className);
      var titleClasses = classNames("modal-title", this.props.titleClass);

      if (toggle) {
        closeButton = React.createElement("button", {
          type: "button",
          onClick: toggle,
          className: "close",
          "aria-label": closeAriaLabel
        }, React.createElement("span", {
          "aria-hidden": "true"
        }, String.fromCharCode(215)));
      }

      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), React.createElement(Tag, {
        className: titleClasses
      }, children), closeButton);
    }
  }]);

  return ModalHeader;
}(React.Component);

ModalHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string
};
ModalHeader.defaultProps = {
  tag: "h4",
  closeAriaLabel: "Close"
};

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          tabs = _this$props.tabs,
          color = _this$props.color,
          classicTabs = _this$props.classicTabs,
          pills = _this$props.pills,
          header = _this$props.header,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

      var classes = classNames("nav", tabs && "md-tabs", pills && "md-pills", header && "nav-pills card-header-pills", pills && color ? "pills-" + color : false, (tabs || classicTabs) && color ? "tabs-" + this.props.color : false, className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Nav;
}(Component);

Nav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  classicTabs: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
  header: PropTypes.bool
};
Nav.defaultProps = {
  tag: "ul",
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;

      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });

    _this.state = {
      isCollapsed: false
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          expand = _this$props.expand,
          light = _this$props.light,
          dark = _this$props.dark,
          sticky = _this$props.sticky,
          fixed = _this$props.fixed,
          scrolling = _this$props.scrolling,
          color = _this$props.color,
          className = _this$props.className,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset,
          Tag = _this$props.tag,
          double = _this$props.double,
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var classes = classNames("navbar", light ? "navbar-light" : "", dark ? "navbar-dark" : "", sticky ? "sticky-" + sticky : "", fixed ? "fixed-" + fixed : "", getExpandClass(expand), scrolling || scrollingNavbarOffset ? "scrolling-navbar" : "", this.state.isCollapsed ? "top-nav-collapse" : "", color ? transparent ? this.state.isCollapsed ? color : "" : color : "", double ? "double-nav" : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  double: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  scrolling: PropTypes.bool,
  scrollingNavbarOffset: PropTypes.number,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  transparent: PropTypes.bool
};
Navbar.defaultProps = {
  tag: "nav",
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames("navbar-brand", className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React.createElement(NavLink, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

var NavbarNav =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarNav, _Component);

  function NavbarNav() {
    _classCallCheck(this, NavbarNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarNav).apply(this, arguments));
  }

  _createClass(NavbarNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          right = _this$props.right,
          left = _this$props.left,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "right", "left", "tag"]);

      var classes = classNames("navbar-nav", right ? "ml-auto" : left ? "mr-auto" : "justify-content-around w-100", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavbarNav;
}(Component);

NavbarNav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool
};
NavbarNav.defaultProps = {
  tag: "ul"
};

var NavbarToggler =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarToggler, _Component);

  function NavbarToggler() {
    _classCallCheck(this, NavbarToggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarToggler).apply(this, arguments));
  }

  _createClass(NavbarToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          right = _this$props.right,
          left = _this$props.left,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          image = _this$props.image,
          attributes = _objectWithoutProperties(_this$props, ["right", "left", "children", "className", "tag", "image"]);

      var classes = classNames("navbar-toggler", right && "navbar-toggler-right", left && "navbar-toggler-left", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children ? children : image ? React.createElement("span", {
        className: "navbar-toggler-icon",
        style: {
          backgroundImage: "url(\"".concat(image, "\")")
        }
      }) : React.createElement("span", {
        className: "navbar-toggler-icon"
      }));
    }
  }]);

  return NavbarToggler;
}(Component);

NavbarToggler.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
  image: PropTypes.string
};
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

var NavItem =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem, _Component);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          active = _this$props.active,
          text = _this$props.text,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "active", "text", "tag"]);

      var classes = classNames("nav-item", active ? "active" : "", text ? "navbar-text" : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavItem;
}(Component);

NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};
NavItem.defaultProps = {
  tag: "li"
};

var NavLink$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(NavLink$$1, _Component);

  function NavLink$$1(props) {
    var _this;

    _classCallCheck(this, NavLink$$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavLink$$1).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      if (!_this.props.disabled) {
        e.stopPropagation(); // Waves - Get Cursor Position

        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        });
      }
    });

    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(NavLink$$1, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          active = _this$props.active,
          to = _this$props.to,
          activeClassName = _this$props.activeClassName,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "active", "to", "activeClassName"]);

      var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
      return React.createElement(NavLink, _extends({
        className: classes,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick,
        to: to
      }, attributes), children, this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return NavLink$$1;
}(Component);

NavLink$1.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string,
  active: PropTypes.bool
};

var css$8 = ".popover-enter {\n  opacity: 0.01;\n  transform: scale(0.9) translateY(50%);\n}\n\n.popover-enter-active {\n  opacity: 1;\n  transform: scale(1);\n  transition: scale 300ms ease-out, opacity 300ms ease;\n}\n\n.popover-enter-done {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.popover-exit {\n  opacity: 1;\n  transform: scale(0.8);\n  transition: all 300ms ease-out;\n}\n\n.popover-exit-active {\n  opacity: 0;\n  transform: scale(0.8);\n  transition: all 300ms ease-out;\n}\n\n/* slide from side */\n\n.side-slide-enter {\n  opacity: 0.2;\n  transform: translateX(-100%);\n}\n\n.side-slide-enter-active {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: transform 300ms ease-out, opacity 300ms ease;\n}\n\n.side-slide-enter-done {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.side-slide-exit {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 300ms ease-out;\n}\n\n.side-slide-exit-active {\n  opacity: 0.2;\n  transform: translateX(-100%);\n  transition: all 300ms ease-out;\n}\n\n.right-side-slide-enter {\n  opacity: 0.2;\n  transform: translateX(100%);\n}\n\n.right-side-slide-enter-active {\n  opacity: 1;\n  transform: translateX(0%) !important;\n  transition: transform 300ms ease-out, opacity 300ms ease;\n}\n\n.right-side-slide-enter-done {\n  opacity: 1;\n  transform: translateX(0%) !important;\n}\n\n.right-side-slide-exit {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 300ms ease-out;\n}\n\n.right-side-slide-exit-active {\n  opacity: 0.2;\n  transform: translateX(100%);\n  transition: all 300ms ease-out;\n}\n";
styleInject(css$8);

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this._handleTargetClick = _this._handleTargetClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._setOusideTap = _this._setOusideTap.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._handleOutsideTap = _this._handleOutsideTap.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setOusideTap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(lastProps, lastState) {
      var _this2 = this;

      if (lastState.isOpen !== this.state.isOpen) {
        setTimeout(function () {
          return _this2._setOusideTap();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.outsideTap.remove();
    }
  }, {
    key: "_setOusideTap",
    value: function _setOusideTap() {
      var elements = [this.target];

      if (this.popper) {
        elements.push(this.popper);
      }

      if (this.outsideTap) {
        this.outsideTap.remove();
      }

      this.outsideTap = outy(elements, ["click", "touchstart"], this._handleOutsideTap);
    }
  }, {
    key: "_handleOutsideTap",
    value: function _handleOutsideTap() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "_handleTargetClick",
    value: function _handleTargetClick() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          placement = _this$props.placement,
          component = _this$props.component,
          componentStyle = _this$props.componentStyle,
          className = _this$props.className,
          children = _this$props.children,
          componentPopover = _this$props.componentPopover,
          popoverBody = _this$props.popoverBody,
          popoverClass = _this$props.popoverClass,
          arrowClass = _this$props.arrowClass,
          tag = _this$props.tag;
      var classes = classNames(className);
      var popoverClasses = classNames("popover", placement ? "bs-popover-" + placement : "", popoverClass);
      var arrowClasses = classNames("arrow", arrowClass);
      return React.createElement(Manager, {
        tag: tag
      }, React.createElement(Target, {
        innerRef: function innerRef(c) {
          return _this3.target = findDOMNode(c);
        },
        component: component,
        style: componentStyle,
        className: classes,
        onClick: this._handleTargetClick
      }, popoverBody), React.createElement(CSSTransition, {
        in: this.state.isOpen,
        appear: this.state.isOpen,
        classNames: "popover",
        unmountOnExit: true,
        timeout: {
          enter: 300,
          exit: 300
        }
      }, React.createElement(Popper, {
        key: "popover",
        component: componentPopover,
        innerRef: function innerRef(c) {
          _this3.popper = findDOMNode(c);
        },
        placement: placement,
        className: popoverClasses
      }, children, React.createElement(Arrow, {
        className: arrowClasses
      }))));
    }
  }]);

  return Popover;
}(React.Component);

Popover.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  componentPopover: PropTypes.string,
  popoverBody: PropTypes.string,
  arrowClass: PropTypes.string,
  popoverClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("popover-body", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
PopoverBody.defaultProps = {
  tag: "div"
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("popover-header", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
PopoverHeader.defaultProps = {
  tag: "h3"
};

var Progress = function Progress(_ref) {
  var animated = _ref.animated,
      barClassName = _ref.barClassName,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      material = _ref.material,
      max = _ref.max,
      min = _ref.min,
      preloader = _ref.preloader,
      striped = _ref.striped,
      wrapperStyle = _ref.wrapperStyle,
      value = _ref.value,
      attributes = _ref.attributes;
  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames("progress", material && "md-progress", preloader && (color ? color + "-color" : "primary-color") + "-dark", className);
  var progressBarClasses = classNames(preloader ? "indeterminate" : "progress-bar", barClassName ? barClassName : null, animated ? "progress-bar-animated" : null, color ? "bg-".concat(color) : null, striped || animated ? "progress-bar-striped" : null);
  var computedHeight = height ? height : children && "1rem";

  var computedWrapperStyle = _objectSpread({}, wrapperStyle, {
    height: computedHeight
  });

  return React.createElement("div", _extends({}, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React.createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};

Progress.propTypes = {
  animated: PropTypes.bool,
  barClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  material: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  preloader: PropTypes.bool,
  striped: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  value: PropTypes.number
};
Progress.defaultProps = {
  animated: false,
  barClassName: "",
  className: "",
  color: "indigo",
  height: "",
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};

var Row =
/*#__PURE__*/
function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          center = _this$props.center,
          start = _this$props.start,
          end = _this$props.end,
          around = _this$props.around,
          between = _this$props.between,
          top = _this$props.top,
          bottom = _this$props.bottom,
          middle = _this$props.middle,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "center", "start", "end", "around", "between", "top", "bottom", "middle"]);

      var classes = classNames("row", end && "justify-content-end", start && "justify-content-start", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Row;
}(Component);

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  end: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool
};
Row.defaultProps = {
  tag: "div"
};

var TableHead = function TableHead(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var classes = classNames(color !== "dark" && color !== "light" ? color : "thead-".concat(color), {
    "text-white": textWhite
  });
  return React.createElement("thead", _extends({}, attributes, {
    className: classes
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : ""
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableHead.defaultProps = {
  textWhite: false
};

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));
    _this.state = {
      visible: false
    };
    _this.show = _this.show.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hide = _this.hide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setVisibility = _this.setVisibility.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tooltip, [{
    key: "show",
    value: function show() {
      this.setVisibility(true);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setVisibility(false);
    }
  }, {
    key: "setVisibility",
    value: function setVisibility(visible) {
      this.setState(Object.assign({}, this.state, {
        visible: visible
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placement = _this$props.placement,
          component = _this$props.component,
          componentStyle = _this$props.componentStyle,
          className = _this$props.className,
          children = _this$props.children,
          tooltipContent = _this$props.tooltipContent,
          tooltipClass = _this$props.tooltipClass,
          arrowClass = _this$props.arrowClass,
          componentTooltip = _this$props.componentTooltip,
          componentClass = _this$props.componentClass,
          wrapperStyle = _this$props.wrapperStyle,
          tag = _this$props.tag;
      var classes = classNames(className);
      var componentClasses = classNames(componentClass);
      var tooltipClasses = classNames("tooltip fade", placement ? "bs-tooltip-" + placement : "", this.state.visible ? "show" : "", tooltipClass);
      var wrapperStyles = wrapperStyle ? wrapperStyle : {};
      var arrowClasses = classNames("arrow", arrowClass);
      return React.createElement(Manager, {
        tag: tag,
        className: classes,
        style: wrapperStyles
      }, React.createElement(Target, {
        component: component,
        style: componentStyle,
        className: componentClasses,
        onMouseEnter: this.show,
        onMouseLeave: this.hide,
        onTouchStart: this.show,
        onTouchEnd: this.hide
      }, children), this.state.visible && React.createElement(Popper, {
        placement: placement,
        component: componentTooltip
      }, function (_ref) {
        var popperProps = _ref.popperProps;
        return React.createElement("div", _extends({}, popperProps, {
          className: tooltipClasses
        }), React.createElement("div", {
          className: "tooltip-inner"
        }, tooltipContent), React.createElement(Arrow, null, function (_ref2) {
          var arrowProps = _ref2.arrowProps;
          return React.createElement("span", _extends({}, arrowProps, {
            className: arrowClasses
          }));
        }));
      }));
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  tooltipContent: PropTypes.string,
  tooltipClass: PropTypes.string,
  arrowClass: PropTypes.string,
  componentTooltip: PropTypes.string,
  componentClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  wrapperStyle: PropTypes.object
};

var Iframe =
/*#__PURE__*/
function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Iframe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: "",
      height: "",
      ratio: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var width = _this.props.width;
      var height = _this.props.height;
      var ratio = 9 / 16;

      if (_this.props.ratio) {
        var newRatio = _this.props.ratio.split("by")[0] / _this.props.ratio.split("by")[1];

        if (typeof ratio === "number") ratio = newRatio;
      }

      if (_this.props.width && _this.props.height) {
        return;
      } else if (_this.props.width) {
        height = _this.props.width * ratio;
      } else if (_this.props.height) {
        width = _this.props.height * (1 / ratio);
      }

      _this.setState(_objectSpread({}, _this.state, {
        width: width,
        height: height,
        ratio: ratio
      }));
    });

    return _this;
  }

  _createClass(Iframe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          allowFullScreen = _this$props.allowFullScreen,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          onMouseOver = _this$props.onMouseOver,
          onMouseOut = _this$props.onMouseOut,
          onLoad = _this$props.onLoad,
          sandbox = _this$props.sandbox,
          src = _this$props.src,
          style = _this$props.style,
          title = _this$props.title,
          ratio = _this$props.ratio,
          height = _this$props.height,
          width = _this$props.width;
      var classes = classNames("embed-responsive-item", className);
      var wrapperClasses = classNames(!(height || width) && "embed-responsive", ratio ? "embed-responsive-".concat(ratio) : "embed-responsive-16by9", className);
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: "0",
        target: "_parent",
        allowFullScreen: allowFullScreen || true,
        height: this.state.height || "100%",
        name: name || undefined,
        width: this.state.width || "100%",
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = returnAttributes(iframeAttributes);
      return React.createElement("div", {
        className: wrapperClasses
      }, React.createElement("iframe", _extends({
        title: title || "",
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(Component);

Iframe.propTypes = {
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onLoad: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  src: PropTypes.string.isRequired,
  styles: PropTypes.object,
  width: PropTypes.number,
  title: PropTypes.string
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.state.isOpen,
        dropup: this.props.dropup,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      if (this.state.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return ReactDOM.findDOMNode(this);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();

      if (e.which === keyCodes.space && this.state.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.state.isOpen) {
        this.toggle(e);
        container.querySelector("[aria-expanded]").focus();
        return;
      }

      var menuClass = "dropdown-menu";
      var itemClass = "dropdown-item";
      var disabledClass = "disabled";
      var items = container.querySelectorAll(".".concat(menuClass, " .").concat(itemClass, ":not(.").concat(disabledClass, ")"));
      if (!items.length) return;
      var index = -1;

      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ["toggle", "disabled"]),
          className = _omit.className,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          attrs = _objectWithoutProperties(_omit, ["className", "dropup", "group", "size"]);

      var classes = classNames((_classNames = {
        "btn-group": group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", this.state.isOpen), _defineProperty(_classNames, "dropup", dropup), _classNames), className);
      return React.createElement(Manager, _extends({}, attrs, {
        className: classes,
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired
};

var theme = {
  container: "md-form",
  containerOpen: "react-autosuggest__container--open",
  input: "mdb-autocomplete form-control",
  inputOpen: "react-autosuggest__input--open",
  inputFocused: "react-autosuggest__input--focused",
  suggestionsContainer: "react-autosuggest__suggestions-container",
  suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
  suggestionsList: "mdb-autocomplete-wrap",
  suggestion: "react-autosuggest__suggestion",
  suggestionFirst: "react-autosuggest__suggestion--first",
  suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
  sectionContainer: "react-autosuggest__section-container",
  sectionContainerFirst: "react-autosuggest__section-container--first",
  sectionTitle: "react-autosuggest__section-title"
};

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionsFetchRequested", function (_ref) {
      var value = _ref.value;

      if (_this.props.search) {
        return;
      }

      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSuggestions", function (value) {
      var inputValue = value.toLowerCase();
      var inputLength = inputValue.length;
      return inputLength === 0 ? [] : _this.props.data.filter(function (data) {
        return data.toLowerCase().includes(inputValue);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSuggestionValue", function (suggestion) {
      if (_this.props.getValue) {
        _this.props.getValue(suggestion);
      }

      return suggestion;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSuggestion", function (suggestion) {
      return React.createElement("div", null, suggestion);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event, _ref2) {
      var newValue = _ref2.newValue;

      _this.setState({
        value: newValue
      });

      if (_this.props.search) {
        _this.props.search(newValue, ReactDOM.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))).parentNode.parentNode.querySelectorAll("li"));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionsClearRequested", function () {
      _this.setState({
        suggestions: []
      });
    });

    _this.state = {
      value: "",
      suggestions: [],
      isTouched: false
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.blurCallback = _this.blurCallback.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.triggerFocus = _this.triggerFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClear = _this.handleClear.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "onClick",
    value: function onClick(ev) {
      this.setState({
        isTouched: true
      });
    }
  }, {
    key: "blurCallback",
    value: function blurCallback(ev) {
      this.setState({
        isTouched: false
      });
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      this.setState({
        value: ""
      });
    }
  }, {
    key: "triggerFocus",
    value: function triggerFocus() {
      var input = document.getElementById(this.props.id);
      input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          suggestions = _this$state.suggestions;

      var _this$props = this.props,
          className = _this$props.className,
          clear = _this$props.clear,
          clearClass = _this$props.clearClass,
          data = _this$props.data,
          disabled = _this$props.disabled,
          getValue = _this$props.getValue,
          id = _this$props.id,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          placeholder = _this$props.placeholder,
          search = _this$props.search,
          attributes = _objectWithoutProperties(_this$props, ["className", "clear", "clearClass", "data", "disabled", "getValue", "id", "label", "labelClass", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "placeholder", "search"]);

      if (disabled) {
        attributes.disabled = true;
      } // needed for rendering custom input


      var inputProps = {
        placeholder: placeholder,
        value: value,
        onChange: this.onChange,
        onBlur: this.blurCallback,
        onClick: this.onClick,
        onFocus: this.onFocus,
        id: this.props.id
      }; // the main variable for classFixes

      var isNotEmpty = Boolean(this.state.value) || placeholder || this.state.isTouched; // classFixes:

      var labelClassFix = classNames(isNotEmpty && "active", disabled && "disabled", labelClass);
      var iconClassFix = classNames("prefix", this.state.isTouched && "active", iconClass);
      var clearClassFix = classNames(clearClass);

      var isclearVisible = function isclearVisible() {
        var hiddenOrNot = "hidden";

        if (_this2.state.value) {
          hiddenOrNot = "visible";
        }

        return hiddenOrNot;
      };

      var clearStyleFix = {
        position: "absolute",
        zIndex: 2,
        top: ".85rem",
        right: 0,
        border: "none",
        background: "0 0",
        visibility: isclearVisible()
      };

      var renderInputComponent = function renderInputComponent(inputProps) {
        return React.createElement("div", null, icon && React.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix
        }), React.createElement("input", _extends({
          type: "text",
          id: id,
          className: "form-control"
        }, inputProps, attributes, {
          onFocus: function onFocus(ev, val) {
            _this2.onClick();

            inputProps.onFocus(ev, val);
          }
        })), React.createElement("label", {
          htmlFor: id,
          id: "label for ".concat(id),
          onClick: _this2.triggerFocus,
          className: labelClassFix
        }, label), clear && React.createElement(Fa, {
          icon: "close",
          onClick: _this2.handleClear,
          style: clearStyleFix,
          className: clearClassFix
        }));
      };

      return React.createElement(Autosuggest, _extends({
        suggestions: suggestions,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        getSuggestions: this.getSuggestions,
        getSuggestionValue: this.getSuggestionValue,
        onSuggestionSelected: this.blurCallback,
        renderSuggestion: this.renderSuggestion,
        inputProps: inputProps,
        onChange: this.onChange,
        theme: theme,
        renderInputComponent: renderInputComponent,
        focusInputOnSuggestionClick: false
      }, attributes));
    }
  }]);

  return Autocomplete;
}(Component);

Autocomplete.propTypes = {
  className: PropTypes.string,
  clear: PropTypes.bool,
  clearClass: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  getValue: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelClass: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  placeholder: PropTypes.string,
  search: PropTypes.func
};
Autocomplete.defaultProps = {
  className: "",
  clear: false,
  clearClass: "",
  data: [],
  disabled: false,
  getValue: function getValue() {},
  id: "",
  label: "",
  labelClass: "",
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  placeholder: ""
};

var Avatar =
/*#__PURE__*/
function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          round = _this$props.round,
          circle = _this$props.circle,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "round", "circle"]);

      var classes = classNames("avatar", round && "rounded", circle && "rounded-circle", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Avatar;
}(Component);

Avatar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  round: PropTypes.bool,
  circle: PropTypes.bool
};
Avatar.defaultProps = {
  tag: "div",
  round: false,
  circle: false
};

var ButtonFixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          topSection = _this$props.topSection,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "topSection"]);

      var buttonFixedClasses = classNames("fixed-action-btn active");
      var classes = classNames(floating ? "btn-floating" : "btn", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "".concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, block ? "btn-block" : false, "Ripple-parent", className, {
        active: active,
        disabled: this.props.disabled
      });
      return React.createElement("div", _extends({
        className: buttonFixedClasses,
        ref: innerRef,
        style: {
          bottom: "45px",
          right: "24px"
        }
      }, attributes), React.createElement("a", {
        href: this.props.topSection ? this.props.topSection : "#",
        className: classes,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }, icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })), React.createElement("ul", {
        className: "list-unstyled"
      }, this.props.children));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed.defaultProps = {
  color: "default"
};
ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  topSection: PropTypes.string
};

var ButtonFixed$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed(props) {
    var _this;

    _classCallCheck(this, ButtonFixed);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonFixed).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.props.onClick && _this.props.onClick();
    });

    _this.state = {
      cursorPos: {},
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    };
    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          buttonStyle = _this$props.buttonStyle,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "buttonStyle"]);

      var classes = classNames(size && "btn-".concat(size), "btn-floating", color ? color : false, "Ripple-parent", className);
      return React.createElement("li", null, React.createElement("a", _extends({}, attributes, {
        style: this.props.buttonStyle,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        className: classes
      }), icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed$1.defaultProps = {
  color: "default"
};
ButtonFixed$1.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['lg', 'sm']),
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  buttonStyle: PropTypes.object
};

var CardUp =
/*#__PURE__*/
function (_Component) {
  _inherits(CardUp, _Component);

  function CardUp() {
    _classCallCheck(this, CardUp);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardUp).apply(this, arguments));
  }

  _createClass(CardUp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          color = _this$props.color,
          gradient = _this$props.gradient,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "color", "gradient"]);

      var classes = classNames("card-up", color && color + "-color", gradient && gradient + "-gradient", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardUp;
}(Component);

CardUp.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
CardUp.defaultProps = {
  tag: "div"
};

var css$9 = ".chip.chip-md {\n  height: 42px;\n  line-height: 42px;\n  border-radius: 21px;\n}\n.chip.chip-md img {\n  height: 42px;\n  width: 42px;\n}\n.chip.chip-md .close {\n  height: 42px;\n  line-height: 42px;\n  border-radius: 21px;\n}\n.chip.chip-lg {\n  height: 52px;\n  line-height: 52px;\n  border-radius: 26px;\n}\n.chip.chip-lg img {\n  height: 52px;\n  width: 52px;\n}\n.chip.chip-lg .close {\n  height: 52px;\n  line-height: 52px;\n  border-radius: 26px;\n}\n";
styleInject(css$9);

var Chip =
/*#__PURE__*/
function (_Component) {
  _inherits(Chip, _Component);

  function Chip(props) {
    var _this;

    _classCallCheck(this, Chip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chip).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.handleCloseClick = _this.handleCloseClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Chip, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.stopPropagation();
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "handleCloseClick",
    value: function handleCloseClick(e) {
      if (this.props.handleClose) {
        this.props.handleClose(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          size = _this$props.size,
          bgColor = _this$props.bgColor,
          text = _this$props.text,
          gradient = _this$props.gradient,
          src = _this$props.src,
          alt = _this$props.alt,
          close = _this$props.close,
          waves = _this$props.waves,
          handleClose = _this$props.handleClose,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "size", "bgColor", "text", "gradient", "src", "alt", "close", "waves", "handleClose"]);

      var classes = classNames("chip", size && "chip-" + size, bgColor && bgColor, text && text + "-text", gradient && gradient + "-gradient", waves && "Ripple-parent", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }), src && React.createElement("img", {
        src: src,
        alt: alt
      }), this.props.children, waves && React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }), close && React.createElement(Fa, {
        icon: "times",
        className: "close",
        onClick: this.handleCloseClick
      }));
    }
  }]);

  return Chip;
}(Component);

Chip.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  gradient: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  close: PropTypes.bool,
  handleClose: PropTypes.func
};
Chip.defaultProps = {
  tag: "div"
};

var ChipsInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChipsInput, _Component);

  function ChipsInput(props) {
    var _this;

    _classCallCheck(this, ChipsInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChipsInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      _this.setState({
        isTouched: true
      });

      _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        inputValue: e.target.value,
        isReadyToDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnter", function (e) {
      // 1) get the value:
      var newChipString = _this.inputRef.current.value; // 2) upon pressing Enter:

      if (e.which === 13) {
        // 3) if the string is empty or consists only of spaces: return
        if (/^ *$/.test(newChipString)) {
          return;
        } // 3.5) of the string is already in the array, delete input value and return


        if (_this.state.chipsList.includes(newChipString)) {
          _this.setState({
            inputValue: ""
          });

          return;
        } // 4) else: add the input value to the array and reset it on input:


        _this.setState({
          inputValue: "",
          chipsList: [].concat(_toConsumableArray(_this.state.chipsList), [newChipString])
        });
      } // 5) in case the keyboard events caused the input to be empty, prepare to delete chips:


      if (_this.state.inputValue === "") {
        _this.setState({
          isReadyToDelete: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackspace", function (e) {
      // 1) if the input is already empty (is ready to delete chips) and Backspace is pressed:
      if (_this.state.isReadyToDelete && e.which === 8) {
        // 2) grab the array
        var array = _this.state.chipsList; // 3) delete its last element
        // const popTheArray = array.pop();
        // 4) and update the state with the new array.

        _this.setState({
          chipsList: array
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function (param) {
      return function (e) {
        // Close functionality:
        // 1) get the chips list from state:
        var currentChipsList = _this.state.chipsList; // 2) check the chip's index in the said array:

        var index = _this.state.chipsList.indexOf(param); // 3) delete the array item using splice:


        currentChipsList.splice(index, 1); // 4) update state with the new chips list.

        _this.setState({
          chipsList: currentChipsList
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOutsideClick", function () {
      _this.setState({
        isTouched: false
      });
    });

    _this.state = {
      chipsList: _this.props.chips,
      inputValue: "",
      isTouched: false,
      isReadyToDelete: false
    };
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(ChipsInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          handleClose = _this$props.handleClose,
          placeholder = _this$props.placeholder,
          secondaryPlaceholder = _this$props.secondaryPlaceholder,
          chipSize = _this$props.chipSize,
          chipColor = _this$props.chipColor,
          chipText = _this$props.chipText,
          chipGradient = _this$props.chipGradient,
          chipWaves = _this$props.chipWaves,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "handleClose", "placeholder", "secondaryPlaceholder", "chipSize", "chipColor", "chipText", "chipGradient", "chipWaves"]);

      var renderedChips = this.state.chipsList.map(function (chip) {
        return React.createElement(Chip, {
          close: true,
          handleClose: _this2.handleClose(chip),
          key: chip.toString(),
          size: chipSize,
          bgColor: chipColor,
          text: chipText,
          gradient: chipGradient,
          waves: chipWaves
        }, chip);
      });
      var calculatePlaceholder;

      if (this.state.chipsList.length < 1) {
        calculatePlaceholder = placeholder;
      } else {
        calculatePlaceholder = secondaryPlaceholder;
      }

      var classes = classNames("chips", this.state.isTouched && "focus", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleBackspace
      }), renderedChips, React.createElement("input", {
        className: "input",
        type: "text",
        placeholder: calculatePlaceholder,
        ref: this.inputRef,
        onKeyUp: this.handleEnter,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: this.handleOutsideClick
      }));
    }
  }]);

  return ChipsInput;
}(Component);

ChipsInput.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  chipSize: PropTypes.string,
  chipColor: PropTypes.string,
  chipText: PropTypes.string,
  chipGradient: PropTypes.string
};
ChipsInput.defaultProps = {
  tag: "div",
  chips: []
};

var CollapseHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollapseHeader, _React$Component);

  function CollapseHeader() {
    _classCallCheck(this, CollapseHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollapseHeader).apply(this, arguments));
  }

  _createClass(CollapseHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          Tag = _this$props.tag,
          triggerOnClick = _this$props.triggerOnClick,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "tag", "triggerOnClick"]);

      var classes = classNames("card-header", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes,
        style: {
          cursor: "pointer"
        }
      }), React.createElement("a", {
        href: "#!"
      }, React.createElement(Tag, {
        className: "mb-0"
      }, children)));
    }
  }]);

  return CollapseHeader;
}(React.Component);

CollapseHeader.defaultProps = {
  tag: "h5"
};
CollapseHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  triggerOnClick: PropTypes.func
};

var css$a = "/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n";
styleInject(css$a);

var DatePicker$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker$$1, _Component);

  function DatePicker$$1(props) {
    var _this;

    _classCallCheck(this, DatePicker$$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker$$1).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDateChange", function (date) {
      _this.setState({
        selectedDate: date ? date._d : _this.props.value
      });
    });

    _this.state = {
      selectedDate: props.value || props.valueDefault,
      muiTheme: createMuiTheme(_objectSpread({}, props.theme, {
        typography: {
          useNextVariants: true
        }
      }))
    };
    return _this;
  }

  _createClass(DatePicker$$1, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.getValue && prevState.selectedDate !== this.state.selectedDate) {
        this.props.getValue(this.state.selectedDate);
      }

      if (this.props.value !== prevProps.value) {
        this.setState({
          selectedDate: this.props.value
        });
      }

      if (prevProps.theme !== this.props.theme) {
        this.setState({
          muiTheme: createMuiTheme(this.props.theme)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          adornmentPosition = _this$props.adornmentPosition,
          allowKeyboardControl = _this$props.allowKeyboardControl,
          animateYearScrolling = _this$props.animateYearScrolling,
          autoOk = _this$props.autoOk,
          cancelLabel = _this$props.cancelLabel,
          clearable = _this$props.clearable,
          clearLabel = _this$props.clearLabel,
          disableFuture = _this$props.disableFuture,
          disableOpenOnEnter = _this$props.disableOpenOnEnter,
          disablePast = _this$props.disablePast,
          emptyLabel = _this$props.emptyLabel,
          initialFocusedDate = _this$props.initialFocusedDate,
          InputAdornmentProps = _this$props.InputAdornmentProps,
          invalidDateMessage = _this$props.invalidDateMessage,
          invalidLabel = _this$props.invalidLabel,
          keyboard = _this$props.keyboard,
          keyboardIcon = _this$props.keyboardIcon,
          leftArrowIcon = _this$props.leftArrowIcon,
          mask = _this$props.mask,
          maxDate = _this$props.maxDate,
          maxDateMessage = _this$props.maxDateMessage,
          minDate = _this$props.minDate,
          minDateMessage = _this$props.minDateMessage,
          okLabel = _this$props.okLabel,
          onInputChange = _this$props.onInputChange,
          openToYearSelection = _this$props.openToYearSelection,
          rightArrowIcon = _this$props.rightArrowIcon,
          showTodayButton = _this$props.showTodayButton,
          TextFieldComponent = _this$props.TextFieldComponent,
          todayLabel = _this$props.todayLabel,
          locale = _this$props.locale,
          format = _this$props.format,
          className = _this$props.className,
          getValue = _this$props.getValue,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["theme", "adornmentPosition", "allowKeyboardControl", "animateYearScrolling", "autoOk", "cancelLabel", "clearable", "clearLabel", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "initialFocusedDate", "InputAdornmentProps", "invalidDateMessage", "invalidLabel", "keyboard", "keyboardIcon", "leftArrowIcon", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "okLabel", "onInputChange", "openToYearSelection", "rightArrowIcon", "showTodayButton", "TextFieldComponent", "todayLabel", "locale", "format", "className", "getValue", "value", "valueDefault", "tag"]);

      var classes = classNames('md-form', className);
      return React.createElement(Tag, {
        className: classes
      }, React.createElement(MuiThemeProvider, {
        theme: this.state.muiTheme
      }, React.createElement(MuiPickersUtilsProvider, {
        locale: locale,
        moment: moment,
        utils: MomentUtils
      }, React.createElement(DatePicker, _extends({}, attributes, {
        adornmentPosition: adornmentPosition,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        autoOk: autoOk,
        cancelLabel: cancelLabel,
        clearable: clearable,
        clearLabel: clearLabel,
        disableFuture: disableFuture,
        disableOpenOnEnter: disableOpenOnEnter,
        disablePast: disablePast,
        emptyLabel: emptyLabel,
        initialFocusedDate: initialFocusedDate,
        InputAdornmentProps: InputAdornmentProps,
        invalidDateMessage: invalidDateMessage,
        invalidLabel: invalidLabel,
        keyboard: keyboard,
        keyboardIcon: keyboardIcon,
        leftArrowIcon: leftArrowIcon,
        mask: mask,
        maxDate: maxDate,
        maxDateMessage: maxDateMessage,
        minDate: minDate,
        minDateMessage: minDateMessage,
        okLabel: okLabel,
        onInputChange: onInputChange,
        openToYearSelection: openToYearSelection,
        rightArrowIcon: rightArrowIcon,
        showTodayButton: showTodayButton,
        TextFieldComponent: TextFieldComponent,
        todayLabel: todayLabel,
        format: format || "DD MMMM, YYYY",
        value: this.state.selectedDate,
        onChange: this.handleDateChange
      })))));
    }
  }]);

  return DatePicker$$1;
}(Component);

DatePicker$1.propTypes = {
  theme: PropTypes.object,
  adornmentPosition: PropTypes.string,
  allowKeyboardControl: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.object,
  disableOpenOnEnter: PropTypes.bool,
  disablePast: PropTypes.bool,
  emptyLabel: PropTypes.string,
  initialFocusedDate: PropTypes.string,
  InputAdornmentProps: PropTypes.object,
  invalidDateMessage: PropTypes.node,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  keyboardIcon: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  onInputChange: PropTypes.func,
  openToYearSelection: PropTypes.bool,
  rightArrowIcon: PropTypes.node,
  showTodayButton: PropTypes.bool,
  TextFieldComponent: PropTypes.string,
  todayLabel: PropTypes.string,
  locale: PropTypes.string,
  format: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  getValue: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  valueDefault: PropTypes.instanceOf(Date)
};
DatePicker$1.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: function getValue() {}
};

function RotatingCard(props) {
  var className = props.className,
      Tag = props.tag,
      InnerTag = props.innerTag,
      flipped = props.flipped,
      attributes = _objectWithoutProperties(props, ["className", "tag", "innerTag", "flipped"]);

  var classes = classNames("card-rotating effect__click", props.flipped && "flipped", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: "card-wrapper"
  }), React.createElement(InnerTag, {
    className: classes
  }, props.children));
}

RotatingCard.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  flipped: PropTypes.bool
};
RotatingCard.defaultProps = {
  tag: "div",
  innerTag: "div",
  flipped: false
};

var InputFile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputFile, _React$Component);

  function InputFile(props) {
    var _this;

    _classCallCheck(this, InputFile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputFile).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeHandler", function (e) {
      _this.fileChange(e.target.files);

      _this.props.getValue && _this.props.getValue(e.target.files);
    });

    _this.state = {
      files: false
    };
    _this.fileChange = _this.fileChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(InputFile, [{
    key: "fileChange",
    value: function fileChange(files) {
      if (files.length > 0) {
        if (files.length > 1) {
          var filesNames = [];

          for (var i = 0; i < files.length; i++) {
            filesNames.push(files[i].name);
          }

          this.setState({
            files: filesNames
          });
        } else {
          this.setState({
            files: files[0].name
          });
        }
      } else {
        this.setState({
          files: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          btnTitle = _this$props.btnTitle,
          btnColor = _this$props.btnColor,
          textFieldTitle = _this$props.textFieldTitle,
          multiple = _this$props.multiple;
      var btnClass = classNames("btn", "btn-" + btnColor, "btn-sm", "float-left");
      var inputFieldClass = classNames("file-path validate", this.state.files ? "valid" : false, className);
      return React.createElement("form", null, React.createElement("div", {
        className: "file-field md-form"
      }, React.createElement("div", {
        className: btnClass
      }, React.createElement("span", null, btnTitle), React.createElement("input", {
        multiple: multiple,
        onChange: this.onChangeHandler,
        type: "file"
      })), React.createElement("div", {
        className: "file-path-wrapper"
      }, React.createElement("input", {
        className: inputFieldClass,
        type: "text",
        placeholder: this.state.files ? this.state.files : textFieldTitle
      }))));
    }
  }]);

  return InputFile;
}(React.Component);

InputFile.propTypes = {
  className: PropTypes.string,
  btnTitle: PropTypes.string,
  btnColor: PropTypes.string,
  textFieldTitle: PropTypes.string,
  multiple: PropTypes.bool
};
InputFile.defaultProps = {
  btnTitle: "Choose file",
  textFieldTitle: "Upload your file",
  btnColor: "primary"
};

var css$b = ".thumb {\n  transition: top .2s, height .2s, width .2s, margin-left .2s;\n}\n\ninput[type=\"range\"] {\n  -webkit-appearance: none;\n}\n\n/* thumb */\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #4285f4;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: 0.3s; }\n  input[type=range]:focus::-webkit-slider-runnable-track {\n    background: #ccc; }\n  input[type=range]::-moz-range-track {\n    /*required for proper track sizing in FF*/\n    height: 3px;\n    background: #c2c0c2;\n    border: none; }\n  input[type=range]::-moz-range-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: #4285f4;\n    margin-top: -5px; }\n  input[type=range]:-moz-focusring {\n    /*hide the outline behind the border*/\n    outline: 1px solid #ffffff;\n    outline-offset: -1px; }\n  input[type=range]:focus::-moz-range-track {\n    background: #c2c0c2; }\n  input[type=range]::-ms-track {\n    height: 3px;\n    background: transparent;\n    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n    border-color: transparent;\n    /*leave room for the larger thumb to overflow with a transparent border */\n    border-width: 6px 0;\n    color: transparent;\n    /*remove default tick marks*/ }\n  input[type=range]::-ms-fill-lower {\n    background: #c2c0c2; }\n  input[type=range]::-ms-fill-upper {\n    background: #c2c0c2; }\n  input[type=range]::-ms-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: #4285f4; }\n  input[type=range]:focus::-ms-fill-lower {\n    background: #c2c0c2; }\n  input[type=range]:focus::-ms-fill-upper {\n    background: #c2c0c2; }";
styleInject(css$b);

var InputRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputRange, _React$Component);

  function InputRange(props) {
    var _this;

    _classCallCheck(this, InputRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRange).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      var input = _this.inputRef.current;
      var inputWidth = input.offsetWidth;
      var oneStep = inputWidth / (_this.props.max - _this.props.min);

      _this.setState({
        value: _this.props.value,
        leftPosition: oneStep * _this.props.value - oneStep * _this.props.min,
        oneStep: oneStep
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rangeChange", function (e) {
      var newValue = e.target.value;

      _this.setState({
        value: newValue,
        leftPosition: _this.state.oneStep * newValue - _this.state.oneStep * _this.props.min
      });

      _this.props.getValue && _this.props.getValue(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rangeFocus", function () {
      _this.setState({
        thumbActive: true,
        thumbHeight: '30px',
        thumbWidth: '30px',
        thumbTop: '-20px',
        thumbMarginLeft: '-15px'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rangeMouseLeave", function () {
      var input = _this.inputRef.current;
      input.blur();

      _this.setState({
        thumbActive: false,
        thumbHeight: 0,
        thumbWidth: 0,
        thumbTop: '10px',
        thumbMarginLeft: '-6px'
      });
    });

    _this.state = {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px',
      input: 'input',
      oneStep: ''
    };
    _this.inputRef = React.createRef();
    return _this;
  }

  _createClass(InputRange, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          formClassName = _this$props.formClassName,
          min = _this$props.min,
          max = _this$props.max;
      var inputClass = classNames(className);
      var formClass = classNames('range-field', formClassName);
      var thumbClass = classNames('thumb', this.state.thumbActive ? 'active' : false);
      return React.createElement("form", {
        className: formClass
      }, React.createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        value: this.state.value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseLeave: this.rangeMouseLeave
      }), React.createElement("span", {
        className: thumbClass,
        style: {
          left: this.state.leftPosition,
          height: this.state.thumbHeight,
          width: this.state.thumbWidth,
          top: this.state.thumbTop,
          marginLeft: this.state.thumbMarginLeft
        }
      }, React.createElement("span", {
        className: "value"
      }, this.state.value)));
    }
  }]);

  return InputRange;
}(React.Component);

InputRange.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
};
InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false
};

var InputSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputSwitch, _React$Component);

  function InputSwitch(props) {
    var _this;

    _classCallCheck(this, InputSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSwitch).call(this, props));
    _this.state = {
      value: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(InputSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.checked
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: !this.state.value
      });
      this.props.getValue && this.props.getValue(event.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          getValue = _this$props.getValue,
          labelLeft = _this$props.labelLeft,
          labelRight = _this$props.labelRight,
          attributes = _objectWithoutProperties(_this$props, ["className", "checked", "disabled", "getValue", "labelLeft", "labelRight"]);

      var classes = classNames("switch", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), React.createElement("label", null, labelLeft, React.createElement("input", {
        disabled: this.props.disabled,
        value: this.state.value,
        checked: this.state.value,
        onChange: function onChange(event) {
          return _this2.handleChange(event);
        },
        type: "checkbox"
      }), React.createElement("span", {
        className: "lever"
      }), labelRight));
    }
  }]);

  return InputSwitch;
}(React.Component);

InputSwitch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  labelLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
};
InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: "Off",
  labelRight: "On"
};

var css$c = ".ReactModal__Overlay {\n    z-index: 2000 !important;\n}";
styleInject(css$c);

var css$d = "\n/*\n * Container style\n */\n .ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n.scrollbar-container {\n  position: relative;\n  height: 100%;\n}\n";
styleInject(css$d);

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (ref) {
      _this._container = ref;

      _this.props.containerRef(ref);
    });

    _this._handlerByEvent = new Map();
    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._ps = new PerfectScrollbar(this._container, this.props.option); // hook up events

      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this2.props[handlerNameByEvent[key]];

        if (callback) {
          var handler = function handler() {
            return callback(_this2._container);
          };

          _this2._handlerByEvent.set(key, handler);

          _this2._container.addEventListener(key, handler, false);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._ps.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (value, key) {
        _this3._container.removeEventListener(key, value, false);
      });

      this._handlerByEvent.clear();

      this._ps.destroy();

      this._ps = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement("div", {
        className: "scrollbar-container ".concat(className),
        ref: this.handleRef
      }, children);
    }
  }]);

  return ScrollBar;
}(Component);

ScrollBar.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined
};
ScrollBar.propTypes = {
  children: PropTypes$1.node.isRequired,
  className: PropTypes$1.string,
  option: PropTypes$1.object,
  containerRef: PropTypes$1.func,
  onScrollY: PropTypes$1.func,
  onScrollX: PropTypes$1.func,
  onScrollUp: PropTypes$1.func,
  onScrollDown: PropTypes$1.func,
  onScrollLeft: PropTypes$1.func,
  onScrollRight: PropTypes$1.func,
  onYReachStart: PropTypes$1.func,
  onYReachEnd: PropTypes$1.func,
  onXReachStart: PropTypes$1.func,
  onXReachEnd: PropTypes$1.func
};

var ScrollBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollBox, _Component);

  function ScrollBox() {
    _classCallCheck(this, ScrollBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollBox).apply(this, arguments));
  }

  _createClass(ScrollBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "children"]);

      var classes = classNames("scroll-box", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ScrollBox;
}(Component);

ScrollBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var ScrollSpyList =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollSpyList, _Component);

  function ScrollSpyList() {
    _classCallCheck(this, ScrollSpyList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpyList).apply(this, arguments));
  }

  _createClass(ScrollSpyList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "color"]);

      var classes = classNames("nav md-tabs horizontal-spy", color ? color : false, className);
      return React.createElement("ul", _extends({}, attributes, {
        role: "navigation",
        className: classes
      }), children);
    }
  }]);

  return ScrollSpyList;
}(Component);

ScrollSpyList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string
};

var ScrollSpyListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollSpyListItem, _Component);

  function ScrollSpyListItem() {
    _classCallCheck(this, ScrollSpyListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpyListItem).apply(this, arguments));
  }

  _createClass(ScrollSpyListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          active = _this$props.active,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "active"]);

      var classes = classNames("nav-link ", active ? "active" : false, className);
      return React.createElement("li", {
        className: "nav-item"
      }, React.createElement("a", _extends({}, attributes, {
        className: classes,
        role: "tab"
      }), children));
    }
  }]);

  return ScrollSpyListItem;
}(Component);

ScrollSpyListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};

var ScrollSpyText =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollSpyText, _Component);

  function ScrollSpyText() {
    _classCallCheck(this, ScrollSpyText);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpyText).apply(this, arguments));
  }

  _createClass(ScrollSpyText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          scrollSpyRef = _this$props.scrollSpyRef,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "scrollSpyRef"]);

      var classes = classNames("scrollspy-example z-depth-1", className);
      return React.createElement("div", _extends({}, attributes, {
        ref: this.props.scrollSpyRef,
        className: classes
      }), children);
    }
  }]);

  return ScrollSpyText;
}(Component);

ScrollSpyText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  scrollSpyRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePredicate", function () {
      if (!_this.props.hidden) {
        _this.setState({
          isOpen: window.innerWidth > _this.props.breakWidth
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOverlayClick", function () {
      _this.setState({
        isOpen: false,
        showOverlay: false
      });

      if (_this.props.onOverlayClick) {
        _this.props.onOverlayClick();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      if (!_this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      }

      e.stopPropagation();
    });

    _this.state = {
      isOpen: false,
      showOverlay: false,
      cursorPos: {}
    };
    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.triggerOpening !== this.props.triggerOpening) {
        this.setState({
          isOpen: !this.state.isOpen,
          showOverlay: !this.state.showOverlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bg = _this$props.bg,
          breakWidth = _this$props.breakWidth,
          children = _this$props.children,
          className = _this$props.className,
          hidden = _this$props.hidden,
          href = _this$props.href,
          logo = _this$props.logo,
          mask = _this$props.mask,
          onOverlayClick = _this$props.onOverlayClick,
          right = _this$props.right,
          triggerOpening = _this$props.triggerOpening,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["bg", "breakWidth", "children", "className", "hidden", "href", "logo", "mask", "onOverlayClick", "right", "triggerOpening", "tag"]);

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          showOverlay = _this$state.showOverlay;
      var classes = classNames("side-nav", right && "right-aligned", className);
      var overlay = React.createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: {
          backgroundImage: "url(".concat(bg)
        }
      }), React.createElement("ul", {
        className: "custom-scrollbar list-unstyled"
      }, logo && React.createElement("li", null, React.createElement("div", {
        className: "logo-wrapper"
      }, React.createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, React.createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })))), children), mask && React.createElement("div", {
        className: "sidenav-bg mask-".concat(mask)
      }));
      return React.createElement("div", null, React.createElement(CSSTransition, {
        timeout: {
          enter: 300,
          exit: 300
        },
        classNames: right ? "right-side-slide" : "side-slide",
        in: isOpen
      }, sidenav), showOverlay && isOpen && overlay);
    }
  }]);

  return SideNav;
}(React.Component);

SideNav.propTypes = {
  bg: PropTypes.string,
  breakWidth: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  logo: PropTypes.string,
  mask: PropTypes.string,
  onOverlayClick: PropTypes.func,
  right: PropTypes.bool,
  triggerOpening: PropTypes.bool,
  tag: PropTypes.string
};
SideNav.defaultProps = {
  bg: '',
  breakWidth: 1400,
  className: '',
  hidden: false,
  href: "#",
  logo: '',
  mask: '',
  onOverlayClick: function onOverlayClick() {},
  right: false,
  triggerOpening: false,
  tag: "div"
};

var SideNavCat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavCat, _React$Component);

  function SideNavCat(props) {
    var _this;

    _classCallCheck(this, SideNavCat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavCat).call(this, props));
    _this.state = {
      cursorPos: {},
      isOpenID: ""
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SideNavCat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpenID: this.props.isOpen ? this.props.id : ""
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e, id) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(id);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          className = _this$props.className,
          name = _this$props.name,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          isOpen = _this$props.isOpen,
          isOpenID = _this$props.isOpenID,
          id = _this$props.id,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "className", "name", "icon", "iconBrand", "iconLight", "iconRegular", "iconSize", "onClick", "disabled", "isOpen", "isOpenID", "id"]);

      var classes = classNames("collapsible-header", "Ripple-parent", "arrow-r", isOpen && "active", disabled && "disabled", className);
      return React.createElement(Tag, null, React.createElement("a", _extends({
        className: classes,
        onClick: function onClick(e) {
          return _this2.handleClick(e, id);
        }
      }, attributes), icon && React.createElement(Fa, {
        icon: icon,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        size: iconSize,
        className: "mr-2"
      }), name, React.createElement(Fa, {
        icon: "angle-down",
        className: "rotate-icon"
      }), React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })), React.createElement(Collapse, {
        id: id,
        isOpen: this.state.isOpenID
      }, React.createElement("div", {
        className: "collapsible-body",
        style: {
          display: "block"
        }
      }, React.createElement("ul", null, children))));
    }
  }]);

  return SideNavCat;
}(React.Component);

_defineProperty(SideNavCat, "displayName", "SideNavCat");

SideNavCat.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isOpenID: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  tag: PropTypes.string
};
SideNavCat.defaultProps = {
  className: "",
  disabled: false,
  icon: "",
  iconBrand: false,
  iconLight: false,
  iconRegular: false,
  iconSize: "",
  id: "",
  isOpen: false,
  isOpenID: "",
  name: "",
  onClick: function onClick() {},
  tag: "li"
};

var SideNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavItem, _React$Component);

  function SideNavItem(props) {
    var _this;

    _classCallCheck(this, SideNavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavItem).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SideNavItem, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          href = _this$props.href,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "href", "className", "innerRef"]);

      var classes = classNames("Ripple-parent", className);
      return React.createElement(Tag, _extends({
        className: classes,
        ref: innerRef,
        onClick: this.handleClick
      }, attributes), React.createElement("a", {
        className: classes,
        href: href
      }, children, React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })));
    }
  }]);

  return SideNavItem;
}(React.Component);

SideNavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
SideNavItem.defaultProps = {
  tag: "li"
};

var SideNavLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavLink, _React$Component);

  function SideNavLink(props) {
    var _this;

    _classCallCheck(this, SideNavLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavLink).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SideNavLink, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.props.disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };
        this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:

        if (this.props.onClick) {
          this.props.onClick(e);
        }

        e.stopPropagation();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          to = _this$props.to,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          topLevel = _this$props.topLevel,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "to", "className", "innerRef", "topLevel"]);

      var classes = classNames('Ripple-parent', topLevel && 'collapsible-header', className);
      var sideNavLink = React.createElement(NavLink, _extends({
        className: classes,
        ref: innerRef,
        onClick: this.handleClick,
        to: to
      }, attributes), children, React.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
      return topLevel ? React.createElement("li", null, " ", sideNavLink) : sideNavLink;
    }
  }]);

  return SideNavLink;
}(React.Component);

SideNavLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  topLevel: PropTypes.bool
};
SideNavLink.defaultProps = {
  to: '#',
  topLevel: false
};

var SideNavNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavNav, _React$Component);

  function SideNavNav(props) {
    var _this;

    _classCallCheck(this, SideNavNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavNav).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (number) {
      return function () {
        var state = "";

        if (_this.state.accordion !== number) {
          state = number;
        } else {
          state = null;
        }

        _this.setState({
          accordion: state
        });
      };
    });

    _this.state = {
      accordion: null
    };
    return _this;
  }

  _createClass(SideNavNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["tag", "children", "className"]);

      var accordion = this.state.accordion;
      var classes = classNames("collapsible", "collapsible-accordion", className);
      var modified = React.Children.map(this.props.children, function (child, i) {
        if (child.type.displayName === "SideNavCat") {
          return React.cloneElement(child, {
            onClick: _this2.onClick(i),
            isOpen: accordion === i
          });
        } else {
          return child;
        }
      });
      return React.createElement("li", null, React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), modified));
    }
  }]);

  return SideNavNav;
}(React.Component);

SideNavNav.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};
SideNavNav.defaultProps = {
  tag: "ul"
};

var SimpleChart = function SimpleChart(props) {
  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {
    if (!x || !y) console.error('x or y missing to describeArc');
    var start = polarToCartesian(x, y, radius, endAngle),
        end = polarToCartesian(x, y, radius, startAngle),
        arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
  };

  var percent = Math.min(props.percent || 0, 100),
      radius = props.width / 2 - props.strokeWidth / 2 - props.padding,
      center = radius + props.strokeWidth / 2 + props.padding,
      startAngle = 0,
      endAngle = 3.6 * percent,
      label = "".concat(percent, "%"),
      labelLeftOffset = label.length === 3 || label.length === 4 ? -0.95 : -0.6,
      arc = describeArc(center, center, radius, startAngle, endAngle - .001);
  return React.createElement("svg", {
    className: "react-chart ".concat(props.type),
    width: props.width,
    style: _objectSpread({
      overflow: 'visible',
      border: props.border
    }, props.style),
    height: props.height
  }, React.createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    fill: props.fillColor,
    stroke: props.railColor,
    strokeWidth: props.strokeWidth
  }), React.createElement("path", {
    fill: props.fillColor,
    stroke: props.strokeColor,
    strokeWidth: props.strokeWidth,
    d: arc
  }), React.createElement("text", {
    x: center,
    y: center,
    dx: "".concat(labelLeftOffset, "em"),
    dy: ".35em",
    fill: props.labelColor,
    fontWeight: props.labelFontWeight,
    fontSize: props.labelFontSize
  }, label));
};

SimpleChart.defaultProps = {
  width: 150,
  height: 150,
  border: 'none',
  strokeWidth: 10,
  style: {},
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  strokeColor: '#408AE5',
  railColor: '#f5f5f5',
  fillColor: 'none',
  percent: 70,
  padding: 0
};
SimpleChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelFontSize: PropTypes.string,
  fillColor: PropTypes.string,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  radius: PropTypes.number,
  style: PropTypes.object
};

var Spinner =
/*#__PURE__*/
function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: "theChosenColorSpinner",
    value: function theChosenColorSpinner(spinnerClasses) {
      if (this.props.multicolor) {
        var theSpinnerItself = React.createElement("div", null, React.createElement("div", {
          className: "spinner-layer spinner-blue"
        }, React.createElement("div", {
          className: "circle-clipper left"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "gap-patch"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "circle-clipper right"
        }, React.createElement("div", {
          className: "circle"
        }))), React.createElement("div", {
          className: "spinner-layer spinner-red"
        }, React.createElement("div", {
          className: "circle-clipper left"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "gap-patch"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "circle-clipper right"
        }, React.createElement("div", {
          className: "circle"
        }))), React.createElement("div", {
          className: "spinner-layer spinner-yellow"
        }, React.createElement("div", {
          className: "circle-clipper left"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "gap-patch"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "circle-clipper right"
        }, React.createElement("div", {
          className: "circle"
        }))), React.createElement("div", {
          className: "spinner-layer spinner-green"
        }, React.createElement("div", {
          className: "circle-clipper left"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "gap-patch"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "circle-clipper right"
        }, React.createElement("div", {
          className: "circle"
        }))));
        return theSpinnerItself;
      } else {
        var _theSpinnerItself = React.createElement("div", {
          className: spinnerClasses
        }, React.createElement("div", {
          className: "circle-clipper left"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "gap-patch"
        }, React.createElement("div", {
          className: "circle"
        })), React.createElement("div", {
          className: "circle-clipper right"
        }, React.createElement("div", {
          className: "circle"
        })));

        return _theSpinnerItself;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          big = _this$props.big,
          small = _this$props.small,
          red = _this$props.red,
          green = _this$props.green,
          yellow = _this$props.yellow;
      var wrapperClasses = classNames("preloader-wrapper", "active", big ? "big" : false, small ? "small" : false, className);
      var spinnerClasses = classNames("spinner-layer", red ? "spinner-red-only" : false, green ? "spinner-green-only" : false, yellow ? "spinner-yellow-only" : "spinner-blue-only", className);

      if (this.props.crazy) {
        return React.createElement("div", {
          className: wrapperClasses
        }, React.createElement("div", {
          className: wrapperClasses
        }, React.createElement("div", {
          className: wrapperClasses
        }, React.createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses)))));
      } else {
        return React.createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses));
      }
    }
  }]);

  return Spinner;
}(Component);

Spinner.propTypes = {
  className: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  crazy: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  multicolor: PropTypes.bool
};
Spinner.defaultProps = {
  tag: "div"
};

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step(props) {
    var _this;

    _classCallCheck(this, Step);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Step).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(Step, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          form = _this$props.form,
          icon = _this$props.icon,
          stepName = _this$props.stepName,
          vertical = _this$props.vertical;
      var iconClass = classNames("fa fa-" + icon, "Ripple-parent");
      var stepClass = classNames(form ? "steps-step" : icon && vertical ? "steps-step-3" : icon && !vertical ? "steps-step-2" : null, this.props.className);
      var step;

      if (form) {
        step = React.createElement(Tag, {
          className: stepClass
        }, this.props.children);
      } else if (icon && !vertical) {
        step = React.createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, React.createElement(Tooltip, {
          placement: "top",
          componentClass: "btn btn-circle-2 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, React.createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), React.createElement(Waves, {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else if (icon && vertical) {
        step = React.createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, React.createElement(Tooltip, {
          placement: "top",
          componentClass: "btn btn-circle-3 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, React.createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), React.createElement(Waves, {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else {
        step = React.createElement("li", {
          className: stepClass
        }, this.props.children);
      }

      return step;
    }
  }]);

  return Step;
}(React.Component);

Step.defaultProps = {
  tag: "div",
  form: false,
  vertical: false
};

var css$e = "/* Stepper Form */\n\n/* Stepper v.2 (Form) */\n.steps-form {\n  display: table;\n  width: 100%;\n  position: relative; }\n.steps-form .steps-row {\n  display: table-row; }\n.steps-form .steps-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc; }\n.steps-form .steps-row .steps-step {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n.steps-form .steps-row .steps-step p {\n  margin-top: 0.5rem; }\n.steps-form .steps-row .steps-step button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form .steps-row .steps-step .btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  margin-top: 0; }\n\n/* Stepper v.3 (Icons) */\n.steps-form-2 {\n  display: table;\n  width: 100%;\n  position: relative; }\n.steps-form-2 .steps-row-2 {\n  display: table-row; }\n.steps-form-2 .steps-row-2:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 99%;\n  height: 2px;\n  background-color: #7283a7; }\n.steps-form-2 .steps-row-2 .steps-step-2 {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n.steps-form-2 .steps-row-2 .steps-step-2 p {\n  margin-top: 0.5rem; }\n.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {\n  width: 70px;\n  height: 70px;\n  border: 2px solid #59698D;\n  background-color: white !important;\n  color: #59698D !important;\n  border-radius: 50%;\n  padding: 22px 18px 15px 18px;\n  margin-top: -22px; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {\n  border: 2px solid #4285F4;\n  color: #4285F4 !important;\n  background-color: white !important; }\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa {\n  font-size: 1.7rem; }\n .steps-row-2:first-child .btn {\n  margin-left: 0\n}\n.steps-row-2:last-child .btn {\n  margin-right: 0\n}\n\n\n/* Stepper v.4 (Icon-vertical) */\n\n.steps-form-3 {\n  width: 2px;\nheight: 470px;\n  position: relative; }\n.steps-form-3 .steps-row-3 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n.steps-form-3 .steps-row-3:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  width: 2px;\n  height: 100%;\n  background-color: #7283a7; }\n.steps-form-3 .steps-row-3 .steps-step-3 {\n  height: 150px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  position: relative; }\n.steps-form-3 .steps-row-3 .steps-step-3.no-height {\n  height: 50px; }\n.steps-form-3 .steps-row-3 .steps-step-3 p {\nmargin-top: 0.5rem; }\n.steps-form-3 .steps-row-3 .steps-step-3 button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #59698D;\n  background-color: white !important;\n  color: #59698D !important;\n  border-radius: 50%;\n  padding: 18px 18px 15px 15px;\n  margin-top: -22px; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3:hover {\n  border: 2px solid #4285F4;\n  color: #4285F4 !important;\n  background-color: white !important; }\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fa {\n  font-size: 1.7rem; }\n";
styleInject(css$e);

var Stepper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stepper, _React$Component);

  function Stepper(props) {
    var _this;

    _classCallCheck(this, Stepper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stepper).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Stepper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vertical = _this$props.vertical,
          form = _this$props.form,
          icon = _this$props.icon;
      var stepperClass = classNames(form ? "steps-form" : icon && vertical ? "steps-form-3" : icon && !vertical ? "steps-form-2" : "stepper", vertical && !icon ? "stepper-vertical" : form || icon ? null : "stepper-horizontal", this.props.className);
      var wrapperFix = classNames(form ? "steps-row" : icon && vertical ? "steps-row-3 d-flex justify-content-between" : icon && !vertical ? "steps-row-2 d-flex justify-content-between" : null); // wrapper shim in case this.props.form

      var stepper;

      if (form || icon) {
        stepper = React.createElement("div", {
          className: stepperClass
        }, React.createElement("div", {
          className: wrapperFix
        }, this.props.children));
      } else {
        stepper = React.createElement("ul", {
          className: stepperClass
        }, this.props.children);
      }

      return stepper;
    }
  }]);

  return Stepper;
}(React.Component);

Stepper.propTypes = {
  vertical: PropTypes.bool,
  form: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
Stepper.defaultProps = {
  form: false
};

var css$f = ".react-bootstrap-table {\n  padding-top: 65px;\n}\n\n.react-bootstrap-table .caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid\\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.react-bootstrap-table .dropup .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid\\9;\n}\n\n.react-bootstrap-table-pagination .pagination {\n  float: right;\n}\n\n.react-bootstrap-table-pagination .pagination .page-item.active .page-link {\n  background-color: #09c;\n}\n\n.react-bootstrap-table-pagination .select-wrapper {\n  display: inline-block;\n  width: 100px;\n  margin: 0 15px;\n}\n\n.react-bootstrap-table-pagination .dropdown-item {\n  padding: 0;\n}\n\n.react-bootstrap-table-pagination-total {\n  display: block;\n}\n\n.react-bootstrap-table .md-form {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  width: 200px;\n}\n\n.react-bootstrap-table-pagination > * {\n  position: inherit;\n}\n\n.react-bs-table-sizePerPage-dropdown {\n  position: absolute;\n  top: 0;\n  left: 0;\n}";
styleInject(css$f);

var TableEditable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableEditable, _React$Component);

  function TableEditable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableEditable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableEditable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      _this.props.data && _this.setState(_objectSpread({}, _this.state, {
        data: _this.props.data
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addRow", function () {
      var newData = _toConsumableArray(_this.state.data);

      var newRow = [];

      _this.props.columns.forEach(function () {
        newRow.push("");
      });

      newData.push(newRow);

      _this.setState(_objectSpread({}, _this.state.data, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeRow", function (index) {
      var newData = _toConsumableArray(_this.state.data);

      newData = [].concat(_toConsumableArray(newData.slice(0, index)), _toConsumableArray(newData.slice(index + 1)));

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decreaseIndex", function (index) {
      if (index === 0) return;

      var newData = _this.changeArrayOrder(index, index - 1);

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "increaseIndex", function (index) {
      if (index === _this.state.data.length - 1) return;

      var newData = _this.changeArrayOrder(index, index + 1);

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeArrayOrder", function (oldIndex, newIndex) {
      var array = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _toConsumableArray(_this.state.data);
      var newArray = array;

      var oldIndexValue = _toConsumableArray(newArray[oldIndex]);

      var newIndexValue = _toConsumableArray(newArray[newIndex]);

      newArray.splice(oldIndex, 1, newIndexValue);
      newArray.splice(newIndex, 1, oldIndexValue);
      return newArray;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlurHandler", function (trIndex, tdIndex, e) {
      var value = e.target.innerText;

      var newData = _toConsumableArray(_this.state.data);

      newData = newData.map(function (item, index) {
        if (index !== trIndex) {
          return item;
        }

        return item.map(function (tdItem, index) {
          if (index !== tdIndex) {
            return tdItem;
          }

          return tdItem = value;
        });
      });

      _this.setState(_objectSpread({}, _this.state, {
        data: newData
      }));
    });

    return _this;
  }

  _createClass(TableEditable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          small = _this$props.small,
          bordered = _this$props.bordered,
          striped = _this$props.striped,
          hover = _this$props.hover,
          data = _this$props.data,
          columns = _this$props.columns,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          attributes = _objectWithoutProperties(_this$props, ["className", "small", "bordered", "striped", "hover", "data", "columns", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl"]);

      var classes = classNames("table", small && "table-sm", bordered && "table-bordered", striped && "table-striped", hover && "table-hover", className);
      var wrapperClasses = classNames("table-editable text-center", responsive && "table-responsive", responsiveSm && "table-responsive-sm", responsiveMd && "table-responsive-md", responsiveLg && "table-responsive-lg", responsiveXl && "table-responsive-xl");
      return React.createElement("div", {
        className: wrapperClasses
      }, React.createElement("span", {
        onClick: this.addRow,
        className: "table-add float-right mb-3 mr-2"
      }, React.createElement("a", {
        href: "#!",
        className: "text-success"
      }, React.createElement(Fa, {
        icon: "plus",
        size: "2x"
      }))), React.createElement("table", _extends({}, attributes, {
        className: classes
      }), React.createElement("thead", null, React.createElement("tr", null, this.props.columns && this.props.columns.map(function (th, i) {
        return React.createElement("th", {
          key: i
        }, th);
      }), React.createElement("th", null, "Sort "), React.createElement("th", null, "Delete "))), React.createElement("tbody", null, this.state.data.map(function (tr, trIndex) {
        return React.createElement("tr", {
          key: trIndex
        }, tr.map(function (td, tdIndex) {
          return React.createElement("td", {
            key: tdIndex,
            contentEditable: true,
            suppressContentEditableWarning: "true",
            onBlur: function onBlur(e) {
              return _this2.onBlurHandler(trIndex, tdIndex, e);
            }
          }, td);
        }), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.decreaseIndex(trIndex);
          },
          className: "table-up"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-up"
        }))), React.createElement("span", {
          onClick: function onClick() {
            return _this2.increaseIndex(trIndex);
          },
          className: "table-down"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-down"
        })))), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.removeRow(trIndex);
          },
          className: "table-remove"
        }, React.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-rounded btn-sm my-0"
        }, "Remove"))));
      }))));
    }
  }]);

  return TableEditable;
}(React.Component);

TableEditable.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.array,
  children: PropTypes.node,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool
};

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPane).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabId = _this$props.tabId,
          attributes = _objectWithoutProperties(_this$props, ["className", "tabId"]);

      var classes = classNames("tab-pane", {
        active: tabId === this.context.activeItemId
      }, className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React.Component);

TabPane.contextTypes = {
  activeItemId: PropTypes.any
};
TabPane.propTypes = {
  tabId: PropTypes.any,
  className: PropTypes.string
};

var propTypes$1 = {
  activeItem: PropTypes.any,
  tabId: PropTypes.any,
  className: PropTypes.string
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent(props) {
    var _this;

    _classCallCheck(this, TabContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabContent).call(this, props));
    _this.state = {
      activeItem: _this.props.activeItem
    };
    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItemId: this.state.activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes$1));
      var classes = classNames("tab-content", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return prevState.activeItem !== nextProps.activeItem ? {
        activeItem: nextProps.activeItem
      } : null;
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};
TabContent.propTypes = propTypes$1;

var Sticky =
/*#__PURE__*/
function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sticky)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isSticky: false,
      wasSticky: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleContainerEvent", function (_ref) {
      var distanceFromTop = _ref.distanceFromTop,
          distanceFromBottom = _ref.distanceFromBottom,
          eventSource = _ref.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;

      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();

      var contentClientRect = _this.content.getBoundingClientRect();

      var calculatedHeight = contentClientRect.height;
      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;
      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;
      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;
      var style = !isSticky ? {} : {
        position: "fixed",
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = "translateZ(0)";
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    });

    return _this;
  }

  _createClass(Sticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");
      this.context.subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : "".concat(this.state.isSticky ? this.state.calculatedHeight : 0, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = React.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = ReactDOM.findDOMNode(content);
        }
      });
      return React.createElement("div", null, React.createElement("div", {
        ref: function ref(placeholder) {
          return _this2.placeholder = placeholder;
        }
      }), element);
    }
  }]);

  return Sticky;
}(Component);

_defineProperty(Sticky, "propTypes", {
  topOffset: PropTypes.number,
  bottomOffset: PropTypes.number,
  relative: PropTypes.bool,
  children: PropTypes.func.isRequired
});

_defineProperty(Sticky, "defaultProps", {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
});

_defineProperty(Sticky, "contextTypes", {
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  getParent: PropTypes.func
});

var Container$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "events", ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"]);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subscribers", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subscribe", function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "unsubscribe", function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "notifySubscribers", function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;
        raf(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getParent", function () {
      return _this.node;
    });

    return _this;
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(PureComponent);

_defineProperty(Container$1, "childContextTypes", {
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  getParent: PropTypes.func
});

var Testimonial =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonial, _Component);

  function Testimonial() {
    _classCallCheck(this, Testimonial);

    return _possibleConstructorReturn(this, _getPrototypeOf(Testimonial).apply(this, arguments));
  }

  _createClass(Testimonial, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag"]);

      var classes = classNames("testimonial", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Testimonial;
}(Component);

Testimonial.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
Testimonial.defaultProps = {
  tag: "div"
};

var css$g = "@media (max-width: 1025px) {\n  .stepper.timeline li {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n\n.stepper.timeline li a {\n  padding: 0px 24px;\n  left: 50%;\n}\n@media (max-width: 450px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n.stepper.timeline li a .circle {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  margin-left: -50px;\n  background-color: #fff;\n  z-index: 2;\n}\n\n.stepper.timeline li .step-content {\n  width: 45%;\n  float: left;\n  border-radius: 2px;\n  position: relative;\n  background-color: #fff;\n}\n.stepper.timeline li .step-content:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #e0e0e0;\n  border-right: 0 solid #e0e0e0;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n.stepper.timeline li .step-content:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n@media (max-width: 450px) {\n  .stepper.timeline li .step-content {\n    width: 80%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li .step-content {\n    width: 85%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n\n.stepper.timeline li.timeline-inverted {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n.stepper.timeline li.timeline-inverted .step-content {\n  float: right;\n}\n.stepper.timeline li.timeline-inverted .step-content:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n.stepper.timeline li.timeline-inverted .step-content:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.stepper.timeline.stepper-vertical li:not(:last-child):after {\n  content: \" \";\n  position: absolute;\n  width: 3px;\n  background-color: #e0e0e0;\n  left: 50%;\n  top: 57px;\n  margin-left: -1.5px;\n}\n@media (max-width: 450px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n";
styleInject(css$g);

var Timeline = function Timeline(props) {
  var children = props.children;
  return React.createElement("ul", {
    className: "stepper stepper-vertical timeline pl-0"
  }, children);
};

var TimelineStep = function TimelineStep(props) {
  var href = props.href,
      color = props.color,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClass = props.iconClass,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      className = props.className,
      children = props.children,
      inverted = props.inverted,
      colorful = props.colorful,
      hoverable = props.hoverable,
      label = props.label;
  var circleClasses = classNames("circle", "z-depth-1-half", color ? color : "primary-color", className);
  var stepContentClasses = classNames("step-content", "z-depth-1", "ml-xl-0", colorful ? "p-0 mt-2" : "p-4", hoverable && "hoverable");
  var liClasses = classNames(inverted && "timeline-inverted");
  return React.createElement("li", {
    className: liClasses
  }, React.createElement("a", {
    href: href
  }, React.createElement("span", {
    className: circleClasses
  }, icon && React.createElement(Fa, {
    icon: icon,
    size: iconSize,
    brand: iconBrand,
    light: iconLight,
    regular: iconRegular,
    className: iconClass
  }), label)), React.createElement("div", {
    className: stepContentClasses
  }, children));
};

TimelineStep.propTypes = {
  href: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  className: PropTypes.string
};
TimelineStep.defaultProps = {
  href: "#"
};

var css$h = ".time-picker-clock {\n  border-radius: 100%;\n  position: relative;\n  /* transition: 0.3s cubic-bezier(.25,.8,.50,1); */\n  user-select: none;\n  background: #f0f0f0;\n  animation: show-up-clock 0.2s linear;\n}\n@keyframes show-up-clock {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.time-picker-clock__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.time-picker-clock__hand {\n  height: calc(50% - 28px);\n  width: 2px;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n  will-change: transform;\n  z-index: 1;\n  background-color: rgba(0, 150, 136, 0.25);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring {\n  background-color: rgba(0, 150, 136, 0.25);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 2.5rem;\n  height: 2.5rem;\n  content: \"\";\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring:before {\n  background-color: rgba(0, 77, 64, 0.75);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand:after {\n  content: \"\";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 100%;\n  left: 50%;\n  border-radius: 50%;\n  background-color: rgba(0, 77, 64, 0.75);\n  opacity: 0.75;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 1rem;\n  line-height: 1.2;\n  justify-content: center;\n  left: calc(50% - 40px / 2);\n  height: 40px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 40px / 2);\n  width: 40px;\n  user-select: none;\n}\n.time-picker-clock > span:hover,\n.time-picker-clock > span.active:hover {\n  cursor: pointer;\n}\n.time-picker-clock > span:active:hover,\n.time-picker-clock > span.active:active:hover {\n  cursor: move;\n}\n.time-picker-clock:active:hover {\n  cursor: move;\n}\n.time-picker-clock > span > span {\n  z-index: 1;\n}\n\n.time-picker-clock > span:before,\n.time-picker-clock > span:after {\n  content: \"\";\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span > span:after,\n.time-picker-clock > span > span:before {\n  height: 40px;\n  width: 40px;\n}\n.time-picker-clock > span.active {\n  color: #fff;\n  cursor: default;\n  z-index: 2;\n  background: blue;\n}\n.time-picker-clock > span > span.disabled {\n  pointer-events: none;\n}\n\n.picker__footer .clockpicker-button {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n";
styleInject(css$h);

var propTypes$2 = {
  color: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  unitsMode: PropTypes.string.isRequired,
  handleModeChange: PropTypes.func.isRequired,
  hoursFormat: PropTypes.number.isRequired
};

var TimePickerDisplay = function TimePickerDisplay(_ref) {
  var color = _ref.color,
      hours = _ref.hours,
      minutes = _ref.minutes,
      dayTime = _ref.dayTime,
      unitsMode = _ref.unitsMode,
      handleModeChange = _ref.handleModeChange,
      hoursFormat = _ref.hoursFormat;
  var displayClasses = classNames('picker__date-display', "btn-".concat(color));
  var hourClasses = classNames('clockpicker-span-hours', unitsMode === 'h' && 'text-primary');
  var minuteClasses = classNames('clockpicker-span-minutes', unitsMode === 'm' && 'text-primary');
  return React.createElement("div", {
    className: displayClasses
  }, React.createElement("div", {
    className: "clockpicker-display"
  }, React.createElement("div", {
    className: "clockpicker-display-column"
  }, React.createElement("span", {
    className: hourClasses,
    onClick: function onClick() {
      return handleModeChange('h');
    }
  }, hours !== '' ? hours : "--"), ":", React.createElement("span", {
    className: minuteClasses,
    onClick: function onClick() {
      return handleModeChange('m');
    }
  }, minutes !== '' ? minutes : "--")), hoursFormat === 12 && React.createElement("div", {
    className: "clockpicker-display-column clockpicker-display-am-pm"
  }, React.createElement("div", {
    className: "clockpicker-span-am-pm"
  }, dayTime.toUpperCase()))));
};

TimePickerDisplay.propTypes = propTypes$2;

var propTypes$3 = {
  angle: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired
};

var TimpiePickerClockHand = function TimpiePickerClockHand(_ref) {
  var angle = _ref.angle,
      between = _ref.between,
      color = _ref.color,
      scale = _ref.scale;
  var classes = classNames('time-picker-clock__hand', color, between && 'between');
  return React.createElement("div", {
    className: classes,
    style: {
      transform: "rotate(".concat(angle, "deg)"),
      height: "calc((50% - 28px) * ".concat(scale, ")")
    }
  }, React.createElement("div", {
    className: "time-picker-clock__hand--ring"
  }));
};

TimpiePickerClockHand.propTypes = propTypes$3;

var propTypes$4 = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  startFromInner: PropTypes.bool.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  color: PropTypes.string,
  double: PropTypes.bool,
  handleModeChange: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.number
};
var defaultProps$1 = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  double: false,
  handleModeChange: function handleModeChange() {},
  size: 270,
  value: 0
};

var TimePickerClock =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePickerClock, _Component);

  function TimePickerClock(props) {
    var _this;

    _classCallCheck(this, TimePickerClock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePickerClock).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buildComponentState", function () {
      var _this$props = _this.props,
          size = _this$props.size,
          max = _this$props.max,
          min = _this$props.min,
          double = _this$props.double,
          rotate = _this$props.rotate,
          value = _this$props.value;
      var clockRadius = size / 2;
      var digitsAmount = max - min + 1;
      var digitsInRound = double ? digitsAmount / 2 : digitsAmount;
      var degreesPerUnit = 360 / digitsInRound;
      var outerRadius = clockRadius - 4;
      var innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40

      var degrees = degreesPerUnit * Math.PI / 180;
      var handAngle = rotate + degreesPerUnit * (value - min);

      _this.setState({
        clockRadius: clockRadius,
        degrees: degrees,
        degreesPerUnit: degreesPerUnit,
        digitsInRound: digitsInRound,
        handAngle: handAngle,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        value: value
      }, function () {
        return _this.setState({
          handScale: _this.getScale(value)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getScale", function (value) {
      if (_this.props.startFromInner && _this.props.double) {
        return value - _this.props.min >= _this.state.digitsInRound ? _this.state.outerRadius / _this.state.clockRadius : _this.state.innerRadius / _this.state.clockRadius;
      }

      return value - _this.props.min >= _this.state.digitsInRound ? _this.state.innerRadius / _this.state.clockRadius : _this.state.outerRadius / _this.state.clockRadius;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getAngle", function (center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - _this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCoords", function (e) {
      var _this$clockRef$curren = _this.clockRef.current.getBoundingClientRect(),
          width = _this$clockRef$curren.width,
          top = _this$clockRef$curren.top,
          left = _this$clockRef$curren.left;

      var _ref = 'touches' in e ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      return {
        center: center,
        coords: coords
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPosition", function (value) {
      var radius = (_this.state.clockRadius - 24) * _this.getScale(value);

      var rotateRadians = _this.props.rotate * Math.PI / 180;
      return {
        x: Math.round(Math.sin((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius),
        y: Math.round(-Math.cos((value - _this.props.min) * _this.state.degrees + rotateRadians) * radius)
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isValueAllowed", function (value) {
      return _this.props.allowedValues.length ? _this.props.allowedValues.find(function (item) {
        return item === value;
      }) : value >= _this.props.min && value <= _this.props.max;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isOnInner", function (center, coords) {
      var centerDistance = _this.euclidean(center, coords);

      var betweenRadiusDistance = (_this.state.outerRadius + _this.state.innerRadius) / 2 - 16;

      if (_this.props.double) {
        return _this.props.startFromInner ? centerDistance > betweenRadiusDistance : centerDistance < betweenRadiusDistance;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeTimeNumber", function (number) {
      return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeHandAngle", function (exactAngle) {
      if (360 % _this.props.max !== 0) {
        return exactAngle >= 360 - _this.state.degreesPerUnit / 2 ? 0 : exactAngle;
      }

      return exactAngle <= _this.state.degreesPerUnit / 2 ? 360 : exactAngle;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "euclidean", function (p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transformPosition", function (value) {
      var _this$setPosition = _this.setPosition(value),
          x = _this$setPosition.x,
          y = _this$setPosition.y;

      return {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "genClockDigits", function () {
      var children = [];

      var _loop = function _loop(value) {
        var classes = classNames('clockpicker-tick', value === _this.state.value && 'active', !_this.isValueAllowed(value) && 'disabled');
        children.push(React.createElement("span", {
          className: classes,
          style: Object.assign(_this.transformPosition(value), {
            fontSize: !_this.props.double ? '140%' : _this.props.startFromInner ? value <= 12 ? '120%' : '100%' : value > 12 ? '120%' : '100%'
          }),
          key: value,
          onMouseDown: function onMouseDown(e) {
            return _this.onMouseDown(e, value);
          },
          onTouchStart: function onTouchStart(e) {
            return _this.onMouseDown(e, value);
          }
        }, _this.props.max > 24 ? _this.computeTimeNumber(value) : value === 24 ? '00' : value));
      };

      for (var value = _this.props.min; value <= _this.props.max; value += _this.props.step) {
        _loop(value);
      }

      return children;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseDown", function (e, value) {
      e.preventDefault();

      _this.setState({
        isDragging: true
      });

      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);

      var handScale = _this.getScale(value);

      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseUp", function (e) {
      e.preventDefault();

      if (_this.state.isDragging) {
        _this.setState({
          isDragging: false
        });

        if (_this.props.autoSwitch) _this.props.handleModeChange('m');
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function (e) {
      e.preventDefault();
      if (_this.state.isDragging) _this.setState({
        isDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragMove", function (e) {
      e.preventDefault();
      if (!_this.state.isDragging && e.type !== 'click') return;

      var _this$getCoords = _this.getCoords(e),
          center = _this$getCoords.center,
          coords = _this$getCoords.coords;

      var isOnInner = _this.isOnInner(center, coords);

      var exactHandAngle = _this.getAngle(center, coords);

      var computedHandAngle = _this.computeHandAngle(exactHandAngle);

      var value = Math.round((computedHandAngle - _this.props.rotate) / _this.state.degreesPerUnit) + _this.props.min + (isOnInner ? _this.state.digitsInRound : 0);
      var handAngle = _this.props.rotate + _this.state.degreesPerUnit * (value - _this.props.min);

      var handScale = _this.getScale(value);

      if (_this.state.value !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value, handAngle, handScale) {
      _this.props.handleChange(value);

      _this.setState({
        value: value,
        handAngle: handAngle,
        handScale: handScale
      });
    });

    _this.state = {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      handAngle: 0,
      handScale: 1,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      value: 0
    };
    _this.clockRef = React.createRef();
    return _this;
  }

  _createClass(TimePickerClock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildComponentState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.max !== this.props.max || prevProps.min !== this.props.min || this.state.value !== this.props.value) {
        this.buildComponentState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classNames('time-picker-clock', 'clockpicker-dial', this.props.className, this.state.value === null && 'time-picker-clock--indeterminate');
      return React.createElement("div", {
        className: classes,
        style: {
          height: "".concat(this.props.size, "px"),
          width: "".concat(this.props.size, "px"),
          visibility: 'visible'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave,
        onTouchStart: this.onMouseDown,
        onTouchEnd: this.onMouseUp,
        onMouseMove: this.onDragMove,
        onTouchMove: this.onDragMove,
        ref: this.clockRef
      }, React.createElement(TimpiePickerClockHand, {
        between: this.state.value % this.props.step !== 0,
        color: this.props.color,
        angle: this.state.handAngle,
        scale: this.state.handScale
      }), this.genClockDigits());
    }
  }]);

  return TimePickerClock;
}(Component);

TimePickerClock.propTypes = propTypes$4;
TimePickerClock.defaultProps = defaultProps$1;

var propTypes$5 = {
  color: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  handleDayTimeChange: PropTypes.func.isRequired
};

var TimePickerAmPmBlock = function TimePickerAmPmBlock(_ref) {
  var color = _ref.color,
      dayTime = _ref.dayTime,
      handleDayTimeChange = _ref.handleDayTimeChange;
  var classesAM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'am-button', dayTime === 'am' && 'active', "btn-".concat(color));
  var classesPM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', dayTime === 'pm' && 'active', "btn-".concat(color));
  return React.createElement("div", {
    className: "clockpicker-am-pm-block d-flex justify-content-between"
  }, React.createElement("button", {
    type: "button",
    className: classesAM,
    onClick: function onClick() {
      return handleDayTimeChange('am');
    }
  }, "AM"), React.createElement("button", {
    type: "button",
    className: classesPM,
    onClick: function onClick() {
      return handleDayTimeChange('pm');
    }
  }, "PM"));
};

TimePickerAmPmBlock.propTypes = propTypes$5;

var propTypes$6 = {
  cancelable: PropTypes.bool.isRequired,
  cancelText: PropTypes.string.isRequired,
  clearable: PropTypes.bool.isRequired,
  clearText: PropTypes.string.isRequired,
  doneText: PropTypes.string.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleDoneClick: PropTypes.func.isRequired
};

var TimePickerFooter = function TimePickerFooter(_ref) {
  var cancelable = _ref.cancelable,
      cancelText = _ref.cancelText,
      clearable = _ref.clearable,
      clearText = _ref.clearText,
      doneText = _ref.doneText,
      handleCancelClick = _ref.handleCancelClick,
      handleClearClick = _ref.handleClearClick,
      handleDoneClick = _ref.handleDoneClick;
  return React.createElement("div", {
    className: "picker__footer"
  }, clearable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleClearClick
  }, clearText), cancelable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleCancelClick
  }, cancelText), React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleDoneClick
  }, doneText));
};

TimePickerFooter.propTypes = propTypes$6;

var propTypes$7 = {
  id: PropTypes.string.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  cancelable: PropTypes.bool,
  cancelText: PropTypes.string,
  clearable: PropTypes.bool,
  clearText: PropTypes.string,
  closeOnCancel: PropTypes.bool,
  color: PropTypes.string,
  doneText: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minutes: PropTypes.number,
  placeholder: PropTypes.string,
  startFromInner: PropTypes.bool
};
var defaultProps$2 = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  doneText: 'Done',
  getValue: function getValue() {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};

var TimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setInputText", function () {
      var value = '';

      if (_this.state.hours !== null && _this.state.minutes !== null) {
        value = _this.props.hoursFormat === 12 ? "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes).concat(_this.state.dayTime.toUpperCase()) : "".concat(_this.state.computedHours, ":").concat(_this.state.computedMinutes);
      }

      _this.setState({
        value: value,
        unitsMode: 'h'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "computeTimeNumber", function (number) {
      if (number !== null) {
        number = _this.state.unitsMode === 'h' && number === 24 ? 0 : number;
        return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
      }

      return '';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePickerDialogOpen", function () {
      return _this.setState({
        pickerDialogOpen: !_this.state.pickerDialogOpen
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleModeChange", function (unitsMode) {
      return _this.setState({
        unitsMode: unitsMode
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDayTimeChange", function (dayTime) {
      return _this.setState({
        dayTime: dayTime
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMinutesChange", function (minutes) {
      return _this.setState({
        minutes: minutes
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleHoursChange", function (hours) {
      _this.setState({
        hours: hours
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackdropClick", function (e) {
      if (e.target.classList.value === 'picker__holder') {
        _this.handlePickerDialogOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDoneClick", function () {
      _this.setInputText();

      _this.handlePickerDialogOpen();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClearClick", function () {
      _this.handleHoursChange(null);

      _this.handleMinutesChange(null);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancelClick", function () {
      _this.handleHoursChange(_this.props.hours);

      _this.handleMinutesChange(_this.props.minutes);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');

      if (_this.props.closeOnCancel) {
        _this.handlePickerDialogOpen();
      }
    });

    _this.state = {
      allowedValues: [],
      computedHours: '',
      computedMinutes: '',
      dayTime: 'am',
      hours: _this.props.hours,
      minutes: _this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        computedHours: this.computeTimeNumber(this.state.hours),
        computedMinutes: this.computeTimeNumber(this.state.minutes)
      }, function () {
        return _this2.setInputText();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.minutes !== this.state.minutes) {
        this.setState({
          computedMinutes: this.computeTimeNumber(this.state.minutes)
        });
      }

      if (prevState.hours !== this.state.hours) {
        this.setState({
          computedHours: this.computeTimeNumber(this.state.hours)
        });
      }

      if (prevState.value !== this.state.value) {
        this.props.getValue(this.state.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          computedHours = _this$state.computedHours,
          computedMinutes = _this$state.computedMinutes,
          dayTime = _this$state.dayTime,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          pickerDialogOpen = _this$state.pickerDialogOpen,
          unitsMode = _this$state.unitsMode,
          value = _this$state.value;
      var _this$props = this.props,
          allowedValues = _this$props.allowedValues,
          autoSwitch = _this$props.autoSwitch,
          cancelable = _this$props.cancelable,
          cancelText = _this$props.cancelText,
          clearable = _this$props.clearable,
          clearText = _this$props.clearText,
          color = _this$props.color,
          doneText = _this$props.doneText,
          hoursFormat = _this$props.hoursFormat,
          id = _this$props.id,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          startFromInner = _this$props.startFromInner;
      var inputClasses = classNames("form-control", "timepicker", pickerDialogOpen && "picker__input picker__input--active");
      var clockClasses = classNames("clockpicker", "picker", pickerDialogOpen && "picker--opened");
      var hoursClasses = classNames("clockpicker-hours", unitsMode !== "h" && "clockpicker-dial-out");
      var minutesClasses = classNames("clockpicker-minutes", unitsMode !== "m" && "clockpicker-dial-out");
      return React.createElement("div", {
        className: "md-form"
      }, React.createElement("input", {
        type: "text",
        placeholder: placeholder,
        id: id,
        className: inputClasses,
        value: value,
        onClick: this.handlePickerDialogOpen,
        readOnly: true
      }), React.createElement("label", {
        htmlFor: id,
        className: "active"
      }, label), pickerDialogOpen && React.createElement("div", {
        className: clockClasses
      }, React.createElement("div", {
        className: "picker__holder",
        onClick: this.handleBackdropClick
      }, React.createElement("div", {
        className: "picker__frame"
      }, React.createElement("div", {
        className: "picker__wrap"
      }, React.createElement("div", {
        className: "picker__box"
      }, React.createElement(TimePickerDisplay, {
        color: color,
        hours: computedHours,
        minutes: computedMinutes,
        dayTime: dayTime,
        unitsMode: unitsMode,
        handleModeChange: this.handleModeChange,
        hoursFormat: hoursFormat
      }), React.createElement("div", {
        className: "picker__calendar-container"
      }, React.createElement("div", {
        className: "clockpicker-plate"
      }, unitsMode === 'h' ? React.createElement(TimePickerClock, {
        allowedValues: allowedValues,
        autoSwitch: autoSwitch,
        className: hoursClasses,
        color: color,
        double: hoursFormat === 24,
        handleChange: this.handleHoursChange,
        handleModeChange: this.handleModeChange,
        min: 1,
        max: hoursFormat,
        step: 1,
        rotate: 30,
        startFromInner: startFromInner,
        value: hours
      }) : React.createElement(TimePickerClock, {
        className: minutesClasses,
        color: color,
        handleChange: this.handleMinutesChange,
        min: 0,
        max: 59,
        step: 5,
        rotate: 0,
        startFromInner: startFromInner,
        value: minutes
      })), hoursFormat === 12 && React.createElement(TimePickerAmPmBlock, {
        color: color,
        dayTime: dayTime,
        handleDayTimeChange: this.handleDayTimeChange
      })), React.createElement(TimePickerFooter, {
        cancelText: cancelText,
        clearText: clearText,
        doneText: doneText,
        cancelable: cancelable,
        clearable: clearable,
        handleCancelClick: this.handleCancelClick,
        handleClearClick: this.handleClearClick,
        handleDoneClick: this.handleDoneClick
      })))))));
    }
  }]);

  return TimePicker;
}(Component);

TimePicker.propTypes = propTypes$7;
TimePicker.defaultProps = defaultProps$2;

var MDBStreak = function MDBStreak(_ref) {
  var children = _ref.children,
      by = _ref.by,
      byClass = _ref.byClass,
      wrapperClass = _ref.wrapperClass,
      size = _ref.size,
      quoteClass = _ref.quoteClass,
      photo = _ref.photo,
      overlayClass = _ref.overlayClass;
  var byClasses = classNames("text-center", "font-italic", "mb-0", byClass);
  var wrapperClasses = classNames("streak", photo && "streak-photo", size && "streak-".concat(size), wrapperClass);
  var quoteClasses = classNames("h2-responsive", quoteClass);
  var overlayClasses = classNames("flex-center", overlayClass);
  return React.createElement("div", {
    className: wrapperClasses,
    style: {
      backgroundImage: "url(\"".concat(photo, "\")"),
      backgroundAttachment: "fixed"
    }
  }, React.createElement("div", {
    className: overlayClasses
  }, React.createElement("ul", {
    className: "mb-0 list-unstyled"
  }, React.createElement("li", null, React.createElement("h2", {
    className: quoteClasses
  }, React.createElement(Fa, {
    icon: "quote-left"
  }), " ", children, " ", React.createElement(Fa, {
    icon: "quote-right"
  }))), React.createElement("li", {
    className: "mb-0"
  }, React.createElement("h5", {
    className: byClasses
  }, "~ ", by)))));
};

MDBStreak.propTypes = {
  size: PropTypes.oneOf(['lg', 'md']),
  by: PropTypes.string,
  wrapperClass: PropTypes.string,
  byClass: PropTypes.string,
  quoteClass: PropTypes.string,
  photo: PropTypes.string,
  overlayClass: PropTypes.string
};
MDBStreak.defaultProps = {
  wrapperClass: "grey lighten-3"
};

// FREE

export { Animation, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImage, CardText, CardTitle, Carousel, CarouselCaption, Control as CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Col, Collapse, Container, DataTable, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, EdgeHeader, Fa, FormInline, Footer, FreeBird, HamburgerToggler, Input, InputNumeric, Jumbotron, ListGroup, ListGroupItem, Mask, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink$1 as NavLink, Pagination, PageItem, PageLink, Popover, PopoverBody, PopoverHeader, Progress, Waves, Row, Table, TableBody, TableHead, TableFoot, Tooltip, View, Iframe, Autocomplete, Avatar, ButtonFixed, ButtonFixed$1 as ButtonFixedItem, CardUp, Chip, ChipsInput, CollapseHeader, DatePicker$1 as DatePicker, ExportToCSV, RotatingCard as FlippingCard, InputFile, InputRange, InputSwitch, css$c as LightboxStyles, ScrollBar as PerfectScrollbar, ScrollBox as ScrollSpyBox, ScrollSpyList, ScrollSpyListItem, ScrollSpyText, SideNav, SideNavCat, SideNavItem, SideNavLink, SideNavNav, SimpleChart, Select, SelectInput$1 as SelectInput, Options as SelectOptions, SelectOption, Spinner, Step, Stepper, TableEditable, TabPane, TabContent, Sticky, Container$1 as StickyContainer, Testimonial, Timeline, TimelineStep, TimePicker, Iframe as MDBIframe, Animation as MDBAnimation, Badge as MDBBadge, Alert as MDBAlert, Breadcrumb as MDBBreadcrumb, BreadcrumbItem as MDBBreadcrumbItem, Button as MDBBtn, ButtonGroup as MDBBtnGroup, ButtonToolbar as MDBBtnToolbar, Card as MDBCard, CardBody as MDBCardBody, CardFooter as MDBCardFooter, CardGroup as MDBCardGroup, CardHeader as MDBCardHeader, CardImage as MDBCardImage, CardText as MDBCardText, CardTitle as MDBCardTitle, Carousel as MDBCarousel, CarouselCaption as MDBCarouselCaption, Control as MDBControl, CarouselInner as MDBCarouselInner, CarouselItem as MDBCarouselItem, CarouselIndicators as MDBCarouselIndicators, CarouselIndicator as MDBCarouselIndicator, Col as MDBCol, Collapse as MDBCollapse, Container as MDBContainer, DataTable as MDBDataTable, Dropdown as MDBDropdown, DropdownItem as MDBDropdownItem, DropdownMenu as MDBDropdownMenu, DropdownToggle as MDBDropdownToggle, EdgeHeader as MDBEdgeHeader, FormInline as MDBFormInline, Footer as MDBFooter, FreeBird as MDBFreeBird, HamburgerToggler as MDBHamburgerToggler, Fa as MDBIcon, Input as MDBInput, InputNumeric as MDBInputSelect, Jumbotron as MDBJumbotron, ListGroup as MDBListGroup, ListGroupItem as MDBListGroupItem, Mask as MDBMask, Media as MDBMedia, Modal as MDBModal, ModalBody as MDBModalBody, ModalFooter as MDBModalFooter, ModalHeader as MDBModalHeader, Nav as MDBNav, Navbar as MDBNavbar, NavbarBrand as MDBNavbarBrand, NavbarNav as MDBNavbarNav, NavbarToggler as MDBNavbarToggler, NavItem as MDBNavItem, NavLink$1 as MDBNavLink, Pagination as MDBPagination, PageItem as MDBPageItem, PageLink as MDBPageNav, Popover as MDBPopover, PopoverBody as MDBPopoverBody, PopoverHeader as MDBPopoverHeader, Progress as MDBProgress, Waves as MDBWaves, Row as MDBRow, Table as MDBTable, TableBody as MDBTableBody, TableHead as MDBTableHead, TableFoot as MDBTableFoot, Tooltip as MDBTooltip, View as MDBView, Autocomplete as MDBAutocomplete, Avatar as MDBAvatar, ButtonFixed as MDBBtnFixed, ButtonFixed$1 as MDBBtnFixedItem, CardUp as MDBCardUp, Chip as MDBChip, ChipsInput as MDBChipsInput, CollapseHeader as MDBCollapseHeader, ExportToCSV as MDBExportToCSV, DatePicker$1 as MDBDatePicker, TimePicker as MDBTimePicker, RotatingCard as MDBRotatingCard, InputFile as MDBFileInput, InputRange as MDBRangeInput, InputSwitch as MDBSwitch, ScrollBar as MDBScrollbar, ScrollBox as MDBScrollspyBox, ScrollSpyList as MDBScrollspyList, ScrollSpyListItem as MDBScrollspyListItem, ScrollSpyText as MDBScrollspyText, SideNav as MDBSideNav, SideNavCat as MDBSideNavCat, SideNavItem as MDBSideNavItem, SideNavLink as MDBSideNavLink, SideNavNav as MDBSideNavNav, SimpleChart as MDBSimpleChart, Select as MDBSelect, SelectInput as MDBSelectInput, Options as MDBSelectOptions, Option as MDBSelectOption, Spinner as MDBSpinner, TableEditable as MDBTableEditable, TabPane as MDBTabPane, TabContent as MDBTabContent, Step as MDBStep, Stepper as MDBStepper, Sticky as MDBSticky, Container$1 as MDBStickyContent, Testimonial as MDBTestimonial, Timeline as MDBTimeline, TimelineStep as MDBTimelineStep, MDBStreak };
