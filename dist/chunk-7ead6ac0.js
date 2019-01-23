'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var classNames = _interopDefault(require('classnames'));
var ReactDOM = require('react-dom');
var ReactDOM__default = _interopDefault(ReactDOM);

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

var css = ".Ripple {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  opacity: 1;\n  transform: scale(0);\n}\n\n.Ripple-outline {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.Ripple.is-reppling {\n  animation: ripple 0.5s linear;\n}\n\n.Ripple-parent {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    transform: scale(3);\n  }\n}\n";
styleInject(css);

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
      var $ripple = ReactDOM__default.findDOMNode(this);
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
      return React__default.createElement("div", {
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
}(React__default.Component);

Waves.propTypes = {
  outline: PropTypes__default.bool,
  flat: PropTypes__default.bool,
  animate: PropTypes__default.bool,
  cursorPos: PropTypes__default.object,
  children: PropTypes__default.node
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

      return React__default.createElement(Tag, _extends({
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
      }), this.props.children, this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      }));
    }
  }]);

  return Button;
}(React__default.Component);

Button.defaultProps = {
  color: "default",
  tag: "button"
};
Button.propTypes = {
  active: PropTypes__default.bool,
  action: PropTypes__default.bool,
  block: PropTypes__default.bool,
  color: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  download: PropTypes__default.string,
  gradient: PropTypes__default.string,
  role: PropTypes__default.string,
  type: PropTypes__default.string,
  outline: PropTypes__default.bool,
  rounded: PropTypes__default.bool,
  circle: PropTypes__default.bool,
  floating: PropTypes__default.bool,
  flat: PropTypes__default.bool,
  innerRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  onClick: PropTypes__default.func,
  size: PropTypes__default.string,
  social: PropTypes__default.string,
  children: PropTypes__default.node,
  tag: PropTypes__default.string,
  target: PropTypes__default.string,
  className: PropTypes__default.string
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

      return React__default.createElement(Button, _extends({
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
}(React.Component);

ExportToCSV.propTypes = {
  columns: PropTypes__default.arrayOf(PropTypes__default.object).isRequired,
  data: PropTypes__default.array.isRequired,
  active: PropTypes__default.bool,
  block: PropTypes__default.bool,
  color: PropTypes__default.string,
  gradient: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  outline: PropTypes__default.bool,
  rounded: PropTypes__default.bool,
  circle: PropTypes__default.bool,
  floating: PropTypes__default.bool,
  flat: PropTypes__default.bool,
  size: PropTypes__default.string,
  children: PropTypes__default.node,
  className: PropTypes__default.string
};

exports._inherits = _inherits;
exports._classCallCheck = _classCallCheck;
exports._possibleConstructorReturn = _possibleConstructorReturn;
exports._getPrototypeOf = _getPrototypeOf;
exports._defineProperty = _defineProperty;
exports._assertThisInitialized = _assertThisInitialized;
exports._createClass = _createClass;
exports._objectWithoutProperties = _objectWithoutProperties;
exports._extends = _extends;
exports.styleInject = styleInject;
exports.Waves = Waves;
exports._objectSpread = _objectSpread;
exports._typeof = _typeof;
exports._toConsumableArray = _toConsumableArray;
exports.Button = Button;
exports.ExportToCSV = ExportToCSV;
exports.ExportToCSV$1 = ExportToCSV;
exports.Button$1 = Button;
exports.Waves$1 = Waves;
