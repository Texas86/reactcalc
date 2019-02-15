<<<<<<< HEAD
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("classnames"),require("react-popper"),require("react-transition-group"),require("react-dom"),require("react-router-dom"),require("react-numeric-input"),require("outy")):"function"==typeof define&&define.amd?define("mdbreact",["prop-types","react","classnames","react-popper","react-transition-group","react-dom","react-router-dom","react-numeric-input","outy"],t):"object"==typeof exports?exports.mdbreact=t(require("prop-types"),require("react"),require("classnames"),require("react-popper"),require("react-transition-group"),require("react-dom"),require("react-router-dom"),require("react-numeric-input"),require("outy")):e.mdbreact=t(e.PropTypes,e.React,e.classnames,e["react-popper"],e.reactTransitionGroup,e.ReactDOM,e["react-router-dom"],e["react-numeric-input"],e.outy)}(window,function(e,t,r,n,o,a,i,c,l){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";r.d(t,"c",function(){return n}),r.d(t,"b",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"a",function(){return i});function n(e,t){var r={};return Object.keys(e).forEach(function(n){-1===t.indexOf(n)&&(r[n]=e[n])}),r}var o={esc:27,space:32,tab:9,up:38,down:40},a=function(e){return Object.keys(e).reduce(function(t,r){return e[r]&&(t[r]=e[r]),t},{})},i=function(e){var t=e.split(" "),r=["danger","warning","success","info","default","primary","secondary","elegant","stylish","unique","special"],n="";return t.forEach(function(e){r.includes(e)?e.includes("dark")?(e.replace("-","-color-"),n+="".concat(e," ")):n+="".concat(e,"-color"):n+="".concat(e," ")}),n}},function(e,t){e.exports=n},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(a).concat([o]).join("\n")}var i;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){var n,o,a={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),c=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,s=[],f=r(17);function p(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=a[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(v(n.parts[i],t))}else{var c=[];for(i=0;i<n.parts.length;i++)c.push(v(n.parts[i],t));a[n.id]={id:n.id,refs:1,parts:c}}}}function b(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}function y(e,t){var r=c(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=s[s.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),s.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,r);r.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return h(t,e.attrs),y(e,t),t}function h(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function v(e,t){var r,n,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=u++;r=l||(l=m(t)),n=w.bind(null,r,i,!1),o=w.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),y(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,r,t),o=function(){d(r),r.href&&URL.revokeObjectURL(r.href)}):(r=m(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){d(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=b(e,t);return p(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var i=r[o];(c=a[i.id]).refs--,n.push(c)}e&&p(b(e,t),t);for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}};var g,O=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t),r.d(t,"MDBDropdownMenuComponent",function(){return l});var n=r(1),o=r.n(n),a=r(0),i=r.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=function(e){var t=e.d_tag,r=e.d_tabIndex,a=e.d_role,i=e.d_attributes,l=e.d_aria,u=e.d_classes,s=e.d_key,f=e.children,p=t;return o.a.createElement(n.Fragment,null,o.a.createElement(p,c({tabIndex:r,role:a},i,{"aria-hidden":l,className:u,key:s}),f))};l.propTypes={d_aria:i.a.bool.isRequired,d_attributes:i.a.object.isRequired,d_key:i.a.string.isRequired,d_role:i.a.string.isRequired,d_tabIndex:i.a.string.isRequired,d_tag:i.a.any.isRequired,children:i.a.node.isRequired,d_classes:i.a.string},l.defaultProps={d_classes:""},t.default=l},function(e,t,r){"use strict";r.r(t),r.d(t,"MDBDropdown",function(){return w});var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(8),l=r.n(c),u=r(4),s=r(2),f=r.n(s),p=r(3);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=h(t).call(this,e),r=!o||"object"!==b(o)&&"function"!=typeof o?g(n):o,O(g(g(r)),"toggle",function(){r.setState({isOpen:!r.state.isOpen})}),r.state={isOpen:!1},r.addEvents=r.addEvents.bind(g(g(r))),r.handleDocumentClick=r.handleDocumentClick.bind(g(g(r))),r.handleKeyDown=r.handleKeyDown.bind(g(g(r))),r.removeEvents=r.removeEvents.bind(g(g(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),r=t,(n=[{key:"getChildContext",value:function(){return{isOpen:this.state.isOpen,dropup:this.props.dropup,toggle:this.toggle}}},{key:"componentDidMount",value:function(){this.handleEventsBinding()}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"componentDidUpdate",value:function(){this.handleEventsBinding()}},{key:"handleEventsBinding",value:function(){this.state.isOpen?this.addEvents():this.removeEvents()}},{key:"getContainer",value:function(){return l.a.findDOMNode(this)}},{key:"addEvents",value:function(){var e=this;["click","touchstart","keyup"].forEach(function(t){return document.addEventListener(t,e.handleDocumentClick,!0)})}},{key:"removeEvents",value:function(){var e=this;["click","touchstart","keyup"].forEach(function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)})}},{key:"handleDocumentClick",value:function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===p.b.tab)){var t=this.getContainer();(!t.contains(e.target)||t===e.target||"keyup"===e.type&&e.which!==p.b.tab)&&this.toggle(e)}}},{key:"handleKeyDown",value:function(e){if(!(-1===[p.b.esc,p.b.up,p.b.down,p.b.space].indexOf(e.which)||/button/i.test(e.target.tagName)&&e.which===p.b.space||/input|textarea/i.test(e.target.tagName)||(e.preventDefault(),this.props.disabled))){var t=this.getContainer();if(e.which===p.b.space&&this.state.isOpen&&t!==e.target&&e.target.click(),e.which===p.b.esc||!this.state.isOpen)return this.toggle(e),void t.querySelector("[aria-expanded]").focus();var r=t.querySelectorAll(".".concat("dropdown-menu"," .").concat("dropdown-item",":not(.").concat("disabled",")"));if(r.length){for(var n=-1,o=0;o<r.length;o+=1)if(r[o]===e.target){n=o;break}e.which===p.b.up&&n>0&&(n-=1),e.which===p.b.down&&n<r.length-1&&(n+=1),n<0&&(n=0),r[n].focus()}}}},{key:"render",value:function(){var e,t=Object(p.c)(this.props,["toggle","disabled"]),r=t.className,n=t.dropup,a=t.group,i=t.size,c=d(t,["className","dropup","group","size"]),l=f()((O(e={"btn-group":a},"btn-group-".concat(i),!!i),O(e,"dropdown",!a),O(e,"show",this.state.isOpen),O(e,"dropup",n),e),r);return o.a.createElement(u.Manager,y({},c,{className:l,onKeyDown:this.handleKeyDown}))}}])&&m(r.prototype,n),a&&m(r,a),t}();w.propTypes={disabled:i.a.bool,dropup:i.a.bool,group:i.a.bool,size:i.a.string,tag:i.a.string,toggle:i.a.func,children:i.a.node,className:i.a.string},w.defaultProps={dropup:!1,tag:"div"},w.childContextTypes={toggle:i.a.func.isRequired,isOpen:i.a.bool.isRequired,dropup:i.a.bool.isRequired},t.default=w},function(e,t){e.exports=c},function(e,t){e.exports=l},function(e,t,r){e.exports=r(34)},function(e,t,r){var n=r(16);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".bc-icons.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item::after {\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item.active {\r\n  color: #eeeeee;\r\n}\r\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){var n=r(19);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".Ripple {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  opacity: 1;\r\n  transform: scale(0);\r\n}\r\n\r\n.Ripple-outline {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.Ripple.is-reppling {\r\n  animation: ripple 0.5s linear;\r\n}\r\n\r\n.Ripple-parent {\r\n  position: relative;\r\n  overflow: hidden;\r\n  touch-action: none;\r\n}\r\n\r\n@keyframes ripple {\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3);\r\n  }\r\n}\r\n",""])},function(e,t,r){var n=r(21);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".btn-group-vertical>.btn,\r\n.btn-group-vertical>.btn+.btn-group,\r\n.btn-group-vertical>.btn-group+.btn,\r\n.btn-group-vertical>.btn-group+.btn-group {\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn-group-lg>.btn {\r\n  font-size: 0.9rem;\r\n  padding: 1rem 2.4rem;\r\n}\r\n\r\n.btn-group-sm>.btn {\r\n  font-size: 0.6rem;\r\n  padding: 0.5rem 1.6rem;\r\n}\r\n\r\n.btn-floating.btn.btn-sm,\r\n.btn-floating.btn.btn-lg {\r\n  padding: 0;\r\n}\r\n",""])},function(e,t,r){var n=r(23);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block !important;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\r\n}\r\n\r\n.carousel-fade .carousel-item.active {\r\n  position: relative;\r\n  z-index: 1;\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-multi-item .carousel-item {\r\n  display: inline-block !important;\r\n}\r\n\r\n.carousel .carousel-slide-item {\r\n  transition: left 0.5s;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\r\n  z-index: 2;\r\n}\r\n",""])},function(e,t,r){var n=r(25);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".table-wrapper-scroll-y {\r\n  display: block;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n",""])},function(e,t,r){"use strict";r.r(t),r.d(t,"MDBDataTableSelect",function(){return c});var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=function(e){var t=e.value,r=e.onChange,n=e.entries,a=e.label;return o.a.createElement("div",{className:"dataTables_length bs-select"},o.a.createElement("label",null,a||"Show entries ",o.a.createElement("select",{value:t,onChange:function(e){var t=parseInt(e.target.value,10);r(t)},className:"custom-select custom-select-sm form-control form-control-sm"},n.map(function(e){return o.a.createElement("option",{key:e,value:e},e)}))))};c.propTypes={entries:i.a.arrayOf(i.a.number),onChange:i.a.func,value:i.a.number,label:i.a.oneOfType([i.a.string,i.a.number,i.a.object])},t.default=c},function(e,t,r){"use strict";r.r(t),r.d(t,"MDBDataTableInput",function(){return c});var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=function(e){var t=e.value,r=e.onChange,n=e.label;return o.a.createElement("div",{className:"dataTables_filter"},o.a.createElement("label",null,n||"Search",o.a.createElement("input",{value:t,onChange:r,type:"search",className:"form-control form-control-sm",placeholder:n||"Search"})))};c.propTypes={label:i.a.oneOfType([i.a.string,i.a.number,i.a.object]),onChange:i.a.func,value:i.a.string},t.default=c},function(e,t,r){var n=r(29);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".dropup .dropdown-menu {\r\n  top: auto !important;\r\n  bottom: 100% !important;\r\n  transform: translate3d(5px, 5px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  left: 0 !important;\r\n  right: auto !important;\r\n}\r\n",""])},function(e,t,r){var n=r(31);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".popover-enter {\r\n  opacity: 0.01;\r\n  transform: scale(0.9) translateY(50%);\r\n}\r\n\r\n.popover-enter-active {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  transition: scale 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.popover-enter-done {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n}\r\n\r\n.popover-exit {\r\n  opacity: 1;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.popover-exit-active {\r\n  opacity: 0;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n/* slide from side */\r\n\r\n.side-slide-enter {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.side-slide-enter-active {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n\r\n.side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-enter {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n}\r\n\r\n.right-side-slide-enter-active {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.right-side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n}\r\n\r\n.right-side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n",""])},function(e,t,r){var n=r(33);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".hamburger-button__checkbox {\r\n  display: none;\r\n}\r\n\r\n.hamburger-button__button {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  top: -5px;\r\n}\r\n\r\nlabel.hamburger-button__button {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#nav-icon1 {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: relative;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  -moz-transition: .5s ease-in-out;\r\n  -o-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n  background-color: #fff;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  -moz-transition: .25s ease-in-out;\r\n  -o-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n  top: 16px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n  top: 27px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(135deg);\r\n  -moz-transform: rotate(135deg);\r\n  -o-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(-135deg);\r\n  -moz-transform: rotate(-135deg);\r\n  -o-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n",""])},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(2),l=r.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=b(t).call(this,e),r=!a||"object"!==u(a)&&"function"!=typeof a?d(n):a,m(d(d(r)),"updatePredicate",function(){var e=window.innerHeight,t=window.scrollY,n=document.documentElement.offsetHeight;if(e+t-100>r.getOffset(r.elemRef.current)&&t<r.getOffset(r.elemRef.current)||e+t-100>r.getOffset(r.elemRef.current)+r.elemRef.current.clientHeight&&t<r.getOffset(r.elemRef.current)+r.elemRef.current.clientHeight||e+t===n&&r.getOffset(r.elemRef.current)+100>n)r.setState({isVisible:!0});else{if(r.state.revealed)return;r.setState({isVisible:!1,revealed:!0})}}),m(d(d(r)),"handleStart",function(e){r.setState({countIterations:r.state.countIterations+1}),r.props.onAnimationStart&&r.props.onAnimationStart()}),m(d(d(r)),"handleIteration",function(e){r.props.onAnimationIteration&&(r.setState({countIterations:r.state.countIterations+1}),r.props.onAnimationIteration())}),m(d(d(r)),"handleEnd",function(e){r.setState({countIterations:r.state.countIterations+1}),r.props.onAnimationEnd&&r.props.count===r.state.countIterations&&r.props.onAnimationEnd()}),m(d(d(r)),"getOffset",function(e){var t=e.getBoundingClientRect(),r=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||r.scrollTop,a=n.clientTop||r.clientTop||0,i=t.top+o-a;return Math.round(i)}),r.state={isVisible:!r.props.reveal,revealed:!r.props.reveal,countIterations:0},r.elemRef=o.a.createRef(),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){this.props.reveal&&window.addEventListener("scroll",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){this.props.reveal&&window.removeEventListener("scroll",this.updatePredicate)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.type,a=e.duration,i=e.delay,c=e.count,u=(e.reveal,e.infinite),p=e.style,b=e.children,y=f(e,["className","tag","type","duration","delay","count","reveal","infinite","style","children"]),d=this.state,m=d.isVisible,h=d.revealed,v={animationDuration:a,animationDelay:i,animationIterationCount:!u&&c,visibility:m?"visible":"hidden",animationName:n},g=Object.assign(v,p),O=l()(this.state.isVisible&&"animated",n&&n,u&&"infinite",t);return o.a.createElement(r,s({},y,{className:O,style:m&&h?g:{animationName:"none",visibility:"hidden"},ref:this.elemRef,onAnimationStart:this.handleStart,onAnimationIteration:this.handleIteration,onAnimationEnd:this.handleEnd}),b)}}])&&p(r.prototype,a),i&&p(r,i),t}();h.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,type:i.a.string,delay:i.a.string,count:i.a.number,onAnimationEnd:i.a.func,onAnimationStart:i.a.func},h.defaultProps={tag:"div",reveal:!1,duration:1,count:1};var v=h,g=r(7);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=j(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==O(o)&&"function"!=typeof o?S(n):o,_(S(S(r)),"state",{isOpen:!0}),_(S(S(r)),"closeAlert",function(){r.setState({isOpen:!1})}),_(S(S(r)),"handleOnExit",function(e){e.classList.add("fade"),r.props.onClose&&r.props.onClose()}),_(S(S(r)),"handleOnExited",function(e){r.props.onClosed&&r.props.onClosed()}),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.color,a=t.children,i=t.dismiss,c=l()("alert",n&&"alert-".concat(n),r);return i?o.a.createElement(g.Transition,{in:this.state.isOpen,timeout:150,unmountOnExit:!0,onExit:function(t){return e.handleOnExit(t)},onExited:function(t){return e.handleOnExited(t)}},o.a.createElement("div",{className:c,role:"alert"},a,o.a.createElement("button",{onClick:this.closeAlert,type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"×")))):o.a.createElement("div",{className:c,role:"alert"},a)}}])&&w(r.prototype,a),i&&w(r,i),t}();E.defaultProps={color:"primary"},E.propTypes={className:i.a.string,color:i.a.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),onClose:i.a.func,onClosed:i.a.func};var x=E;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,I(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.tag,r=e.className,n=(e.children,e.color),a=e.pill,i=C(e,["tag","className","children","color","pill"]),c=l()("badge",n,"badge-"+n,!!a&&"badge-pill",r);return o.a.createElement(t,T({},i,{className:c}),this.props.children)}}])&&N(r.prototype,n),a&&N(r,a),t}();D.defaultProps={tag:"span",color:"default",pill:!1},D.propTypes={color:i.a.string,pill:i.a.bool,children:i.a.node,className:i.a.string};var B=D,q=r(3);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=function(e){var t,r=e.className,n=e.color,a=e.light,i=e.uppercase,c=e.bold,u=W(e,["className","color","light","uppercase","bold"]),s=l()("breadcrumb",i&&"text-uppercase",c&&"font-up-bold",a&&"white-text",n&&Object(q.a)(n),r);return t=c?o.a.Children.map(e.children,function(e){return o.a.cloneElement(e,{bold:!0})}):e.children,o.a.createElement("nav",null,o.a.createElement("ol",L({},u,{className:s}),t))};A.propTypes={children:i.a.node,className:i.a.string,color:i.a.string,light:i.a.bool,uppercase:i.a.bool,bold:i.a.bool};var H=A;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,Y(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.border,r=e.className,n=e.fixed,a=e.flip,i=e.icon,c=e.inverse,u=e.list,s=e.pull,f=e.pulse,p=e.rotate,b=e.size,y=e.spin,d=e.stack,m=U(e,["border","className","fixed","flip","icon","inverse","list","pull","pulse","rotate","size","spin","stack"]),h=l()(!!u&&"fa-li","fa",!!i&&"fa-".concat(i),!!b&&"fa-".concat(b),!!n&&"fa-fw",!!s&&"fa-pull-".concat(s),!!t&&"fa-border",!!y&&"fa-spin",!!f&&"fa-pulse",!!p&&"fa-rotate-".concat(p),!!a&&"fa-flip-".concat(a),!!c&&"fa-inverse",!!d&&"fa-".concat(d),r);return o.a.createElement("i",X({},m,{className:h}))}}])&&z(r.prototype,n),a&&z(r,a),t}();K.propTypes={border:i.a.bool,className:i.a.string,fixed:i.a.bool,flip:i.a.string,icon:i.a.string,inverse:i.a.string,list:i.a.bool,pull:i.a.string,pulse:i.a.bool,rotate:i.a.string,spin:i.a.bool,size:i.a.string,stack:i.a.string};var J=K;r(15);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Z=function(e){var t=e.className,r=e.active,a=e.bold,i=(e.children,e.icon),c=e.iconClassName,u=e.appendIcon,s=Q(e,["className","active","bold","children","icon","iconClassName","appendIcon"]),f=l()(!!r&&"active",i&&"bc-icons","breadcrumb-item",t),p=l()(u?"mx-2":"mr-2",c);return o.a.createElement("li",$({},s,{className:f}),o.a.createElement(function(e){var t=e.bold,r=e.children;return t?o.a.createElement("strong",null,r):r},{bold:a},o.a.createElement(function(e){var t=e.icon,r=e.children,a=e.appendIcon;return t?a?o.a.createElement(n.Fragment,null,r,o.a.createElement(J,{icon:t,className:p})):o.a.createElement(n.Fragment,null,o.a.createElement(J,{icon:t,className:p}),r):r},{icon:i,appendIcon:u},e.children)))};Z.propTypes={active:i.a.bool,appendIcon:i.a.bool,bold:i.a.bool,children:i.a.node,className:i.a.string,icon:i.a.string,iconClassName:i.a.string};var ee=Z,te=r(8),re=r.n(te);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ae(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r(18);var le=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=ae(this,ie(t).call(this,e))).state={animate:!1,width:0,height:0,top:0,left:0,cursorPos:e.cursorPos},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidUpdate",value:function(e,t){var r=this;t.cursorPos.time!==this.props.cursorPos.time&&(t.animate?this.setState({animate:!1,cursorPos:this.props.cursorPos},function(){r.reppling()}):this.reppling())}},{key:"reppling",value:function(){var e=re.a.findDOMNode(this).parentNode,t=e.getBoundingClientRect(),r=e.offsetWidth,n=e.offsetHeight,o=Math.max(n,r),a=o/2;this.setState({animate:!0,width:o,height:o,top:this.state.cursorPos.top-t.top-a,left:this.state.cursorPos.left-t.left-a})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Ripple "+(this.props.outline||this.props.flat||this.props.dark?"Ripple-outline ":"")+(this.state.animate?"is-reppling":""),style:{top:this.state.top+"px",left:this.state.left+"px",width:this.state.width+"px",height:this.state.height+"px"}})}}])&&oe(r.prototype,n),a&&oe(r,a),t}();le.propTypes={outline:i.a.bool,flat:i.a.bool,animate:i.a.bool,cursorPos:i.a.object,children:i.a.node};var ue=le;function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function be(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var he=function(e){function t(e){var r,n,o,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=ye(t).call(this,e),r=!o||"object"!==se(o)&&"function"!=typeof o?me(n):o,a=me(me(r)),c=function(e){e.stopPropagation();var t={top:e.clientY,left:e.clientX,time:Date.now()};r.setState({cursorPos:t})},(i="handleClick")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r.state={cursorPos:{}},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.active,r=e.block,n=e.circle,a=e.className,i=e.color,c=e.disabled,u=e.download,s=e.outline,f=e.size,p=e.rounded,b=e.gradient,y=e.floating,d=e.flat,m=e.role,h=e.type,v=e.social,g=e.action,O=e.tag,w=e.target,j=e.innerRef,P=pe(e,["active","block","circle","className","color","disabled","download","outline","size","rounded","gradient","floating","flat","role","type","social","action","tag","target","innerRef"]),S=l()(y?"btn-floating btn":"btn",d?"btn-flat":b?"".concat(b,"-gradient"):"btn".concat(s?"-outline":"","-").concat(i),!!f&&"btn-".concat(f),!!p&&"btn-rounded",n&&"btn-circle",!!r&&"btn-block",!!v&&"btn-"+v,!!g&&"btn-action","Ripple-parent",a,{active:t,disabled:c});return P.href&&"button"===O&&(O="a"),o.a.createElement(O,fe({type:"button"!==O||h?h:"button",target:w,role:"a"!==O||m?m:"button",className:S,ref:j,onMouseUp:this.handleClick,onTouchStart:this.handleClick},P,{download:u,disabled:c}),this.props.children,!this.props.disabled&&o.a.createElement(ue,{cursorPos:this.state.cursorPos,outline:s,flat:d}))}}])&&be(r.prototype,n),a&&be(r,a),t}();he.defaultProps={color:"default",tag:"button"},he.propTypes={active:i.a.bool,action:i.a.bool,block:i.a.bool,color:i.a.string,disabled:i.a.bool,download:i.a.string,gradient:i.a.string,role:i.a.string,type:i.a.string,outline:i.a.bool,rounded:i.a.bool,circle:i.a.bool,floating:i.a.bool,flat:i.a.bool,innerRef:i.a.oneOfType([i.a.func,i.a.string]),onClick:i.a.func,size:i.a.string,social:i.a.string,children:i.a.node,tag:i.a.string,target:i.a.string,className:i.a.string};var ve=he;r(20);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function je(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pe(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _e(e,t){return(_e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Pe(this,Se(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.size,n=e.vertical,a=we(e,["className","size","vertical"]),i=l()(t,!!r&&"btn-group-"+r,n?"btn-group-vertical":"btn-group");return o.a.createElement("div",Oe({},a,{className:i}),this.props.children)}}])&&je(r.prototype,n),a&&je(r,a),t}();Ee.propTypes={"aria-label":i.a.string,className:i.a.string,role:i.a.string,size:i.a.string,children:i.a.node,vertical:i.a.bool},Ee.defaultProps={role:"group"};var xe=Ee;function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Re(e,t){return!t||"object"!==ke(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Me(e,t){return(Me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var De=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Re(this,Ie(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Me(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=Ce(e,["className"]),n=l()(t,"btn-toolbar");return o.a.createElement("div",Te({},r,{className:n}),this.props.children)}}])&&Ne(r.prototype,n),a&&Ne(r,a),t}();De.propTypes={"aria-label":i.a.string,className:i.a.string,children:i.a.node,role:i.a.string},De.defaultProps={role:"toolbar"};var Be=De;function qe(e){return(qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function He(e,t){return!t||"object"!==qe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ue=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),He(this,Fe(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.cascade,a=e.wide,i=e.narrow,c=e.reverse,u=e.testimonial,s=e.ecommerce,f=e.collection,p=e.pricing,b=e.personal,y=e.news,d=e.color,m=e.text,h=e.border,v=We(e,["className","tag","cascade","wide","narrow","reverse","testimonial","ecommerce","collection","pricing","personal","news","color","text","border"]),g=l()("card",n&&"card-cascade",a&&"card-cascade wider",i&&"card-cascade narrower",c&&"card-cascade wider reverse",u&&"testimonial-card",s&&"card-ecommerce",f&&"collection-card",p&&"pricing-card",b&&"card-personal",y&&"news-card",d&&d,m&&m+"-text",h&&"border-"+h,t);return o.a.createElement(r,Le({},v,{className:g}))}}])&&Ae(r.prototype,a),i&&Ae(r,i),t}();Ue.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,color:i.a.string,border:i.a.string},Ue.defaultProps={tag:"div"};var ze=Ue;function Ve(e){return(Ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ge(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ke(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Je(e,t){return!t||"object"!==Ve(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Qe(e,t){return(Qe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ze=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Je(this,$e(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qe(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.cascade,a=Ge(e,["className","tag","cascade"]),i=l()("card-body",n&&"card-body-cascade",t);return o.a.createElement(r,Ye({},a,{className:i}))}}])&&Ke(r.prototype,a),i&&Ke(r,i),t}();Ze.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,cascade:i.a.bool},Ze.defaultProps={tag:"div"};var et=Ze;function tt(e){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ot(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function at(e,t){return!t||"object"!==tt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function it(e){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ct(e,t){return(ct=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var lt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),at(this,it(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ct(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.color,a=e.text,i=e.border,c=e.transparent,u=e.small,s=e.muted,f=nt(e,["className","tag","color","text","border","transparent","small","muted"]),p=l()("card-footer",n&&n,a&&a,n&&!a&&" white-text",i&&"border-"+i,c&&"bg-transparent",s&&"text-muted",t),b=o.a.createElement(r,rt({},f,{className:p}));return u&&(b=o.a.createElement(r,rt({},f,{className:p}),o.a.createElement("small",null," ",this.props.children," "))),b}}])&&ot(r.prototype,a),i&&ot(r,i),t}();lt.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,color:i.a.string,text:i.a.string,border:i.a.string,transparent:i.a.bool,small:i.a.bool,muted:i.a.bool},lt.defaultProps={tag:"div"};var ut=lt;function st(e){return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ft(){return(ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function bt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function yt(e,t){return!t||"object"!==st(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function dt(e){return(dt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mt(e,t){return(mt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ht=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),yt(this,dt(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mt(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.deck,a=e.column,i=pt(e,["className","tag","deck","column"]),c=l()(n?"card-deck":a?"card-columns":"card-group",t);return o.a.createElement(r,ft({},i,{className:c}))}}])&&bt(r.prototype,a),i&&bt(r,i),t}();ht.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,deck:i.a.bool,column:i.a.bool},ht.defaultProps={tag:"div"};var vt=ht;function gt(e){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ot(){return(Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function wt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function jt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pt(e,t){return!t||"object"!==gt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function St(e){return(St=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _t(e,t){return(_t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Et=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Pt(this,St(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_t(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.color,a=e.text,i=e.border,c=e.transparent,u=wt(e,["className","tag","color","text","border","transparent"]),s=l()("card-header",n&&n,a&&a,n&&!a&&" white-text",i&&"border-"+i,c&&"bg-transparent",t);return o.a.createElement(r,Ot({},u,{className:s}))}}])&&jt(r.prototype,a),i&&jt(r,i),t}();Et.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,color:i.a.string,text:i.a.string,border:i.a.string,transparent:i.a.bool},Et.defaultProps={tag:"div"};var xt=Et;function kt(e){return(kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Tt(){return(Tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ct(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Nt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Rt(e,t){return!t||"object"!==kt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function It(e){return(It=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Mt(e,t){return(Mt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Dt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Rt(this,It(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Mt(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=(e.children,e.className),r=e.overlay,n=e.pattern,a=e.tag,i=Ct(e,["children","className","overlay","pattern","tag"]),c=l()("mask",n&&"pattern-".concat(n),r&&"rgba-".concat(r),t);return o.a.createElement(a,Tt({},i,{className:c}),this.props.children)}}])&&Nt(r.prototype,n),a&&Nt(r,a),t}();Dt.propTypes={children:i.a.node,className:i.a.string,overlay:i.a.string,pattern:i.a.oneOfType([i.a.string,i.a.number]),tag:i.a.string},Dt.defaultProps={className:"",overlay:"",pattern:"",tag:"div"};var Bt=Dt;function qt(e){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Wt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function At(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ht(e,t){return!t||"object"!==qt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ft(e){return(Ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Xt(e,t){return(Xt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ut=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Ht(this,Ft(t).call(this,e))).state={cursorPos:{}},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xt(e,t)}(t,o.a.Component),r=t,(n=[{key:"handleClick",value:function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};this.setState({cursorPos:t})}},{key:"render",value:function(){var e=this.props,t=e.cascade,r=e.children,n=e.className,a=e.hover,i=e.rounded,c=e.src,u=e.tag,s=e.waves,f=e.zoom,p=Wt(e,["cascade","children","className","hover","rounded","src","tag","waves","zoom"]),b=l()("view",i&&"rounded",f&&"zoom",a&&"overlay",t&&"view-cascade",!!s&&"Ripple-parent",n),y=c?{backgroundImage:'url("'.concat(c,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center",height:"100vh"}:{};return o.a.createElement(u,Lt({},p,{className:b,onMouseDown:this.handleClick.bind(this),onTouchStart:this.handleClick.bind(this),style:y}),r,s&&o.a.createElement(ue,{cursorPos:this.state.cursorPos}))}}])&&At(r.prototype,n),a&&At(r,a),t}();Ut.defaultProps={cascade:!1,className:"",hover:!1,rounded:!1,src:"",tag:"div",waves:!1,zoom:!1},Ut.propTypes={cascade:i.a.bool,children:i.a.node,className:i.a.string,hover:i.a.bool,rounded:i.a.bool,src:i.a.string,tag:i.a.string,waves:i.a.bool,zoom:i.a.bool};var zt=Ut;function Vt(e){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Yt(){return(Yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Gt(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Kt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Jt(e,t){return!t||"object"!==Vt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $t(e){return($t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Qt(e,t){return(Qt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Zt=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Jt(this,$t(t).call(this,e))).state={cursorPos:{}},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qt(e,t)}(t,n["Component"]),r=t,(a=[{key:"handleClick",value:function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};this.setState({cursorPos:t})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.overlay,n=e.top,a=(e.waves,e.hover,e.cascade,e.tag),i=Gt(e,["className","overlay","top","waves","hover","cascade","tag"]),c=l()(n&&"card-img-top",t),u=a,s=o.a.createElement(u,Yt({},i,{className:c}),this.props.children);return this.props.src?o.a.createElement(zt,{hover:this.props.hover,cascade:this.props.cascade},o.a.createElement("div",{className:"Ripple-parent",onMouseDown:this.handleClick.bind(this),onTouchStart:this.handleClick.bind(this)},s,o.a.createElement(Bt,{overlay:r}),this.props.waves&&o.a.createElement(ue,{cursorPos:this.state.cursorPos}))):o.a.createElement("div",null,s)}}])&&Kt(r.prototype,a),i&&Kt(r,i),t}();Zt.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),waves:i.a.bool,className:i.a.string,cascade:i.a.bool,hover:i.a.bool,overlay:i.a.string,top:i.a.bool,src:i.a.string,children:i.a.node},Zt.defaultProps={tag:"img",overlay:"white-slight",waves:!0,hover:!1,cascade:!1};var er=Zt;function tr(e){return(tr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rr(){return(rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function nr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function or(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ar(e,t){return!t||"object"!==tr(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ir(e){return(ir=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function cr(e,t){return(cr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var lr=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ar(this,ir(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&cr(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.muted,a=e.small,i=nr(e,["className","tag","muted","small"]),c=l()("card-text",n&&"text-muted",t),u=o.a.createElement(r,rr({},i,{className:c}));return a&&(u=o.a.createElement(r,rr({},i,{className:c}),o.a.createElement("small",null," ",this.props.children," "))),u}}])&&or(r.prototype,a),i&&or(r,i),t}();lr.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,muted:i.a.bool,small:i.a.bool},lr.defaultProps={tag:"p"};var ur=lr;function sr(e){return(sr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fr(){return(fr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function pr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function br(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function yr(e,t){return!t||"object"!==sr(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function dr(e){return(dr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mr(e,t){return(mr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var hr=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),yr(this,dr(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mr(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.sub,a=pr(e,["className","tag","sub"]),i=l()(n?"card-subtitle":"card-title",t);return o.a.createElement(r,fr({},a,{className:i}))}}])&&br(r.prototype,a),i&&br(r,i),t}();hr.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),sub:i.a.bool,className:i.a.string},hr.defaultProps={tag:"h4",sub:!1};var vr=hr;r(22);function gr(e){return(gr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Or(){return(Or=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function wr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function jr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){xr(e,t,r[t])})}return e}function Pr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Sr(e){return(Sr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _r(e,t){return(_r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Er(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var kr=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=Sr(t).call(this,e),r=!a||"object"!==gr(a)&&"function"!=typeof a?Er(n):a,xr(Er(Er(r)),"restartInterval",function(){!1!==r.props.interval&&(clearInterval(r.cycleInterval),r.cycleInterval=setInterval(r.next,r.props.interval))}),xr(Er(Er(r)),"next",function(){var e=r.state.activeItem+1;e>r.state.length?r.setState(jr({},r.state,{activeItem:1})):r.setState(jr({},r.state,{activeItem:e})),r.restartInterval()}),xr(Er(Er(r)),"prev",function(){var e=r.state.activeItem-1;e<1?r.setState(jr({},r.state,{activeItem:r.state.length})):r.setState(jr({},r.state,{activeItem:e})),r.restartInterval()}),xr(Er(Er(r)),"componentDidMount",function(){if(!1!==r.props.interval&&(r.cycleInterval=setInterval(r.next,r.props.interval),r.props.thumbnails)){var e=r.carouselRef.current.querySelectorAll(".carousel-item img");console.log(e);var t=Array.prototype.map.call(e,function(e){return e.src});r.setState(jr({},r.state,{srcArray:t}))}}),r.state={activeItem:r.props.activeItem,length:r.props.length,slide:r.props.slide,srcArray:[]},r.carouselRef=o.a.createRef(),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_r(e,t)}(t,n["Component"]),r=t,(a=[{key:"goToIndex",value:function(e){this.state.activeItem!==e&&this.setState(jr({},this.state,{activeItem:e})),this.restartInterval()}},{key:"componentWillUnmount",value:function(){!1!==this.props.interval&&clearInterval(this.cycleInterval)}},{key:"getChildContext",value:function(){return{activeItem:this.state.activeItem,length:this.state.length,slide:this.state.slide}}},{key:"render",value:function(){for(var e=this,t=this.props,r=(t.activeItem,t.children),n=t.className,a=t.multiItem,i=(t.slide,t.thumbnails),c=(t.interval,t.testimonial),u=t.tag,s=(t.length,t.showControls),f=t.showIndicators,p=wr(t,["activeItem","children","className","multiItem","slide","thumbnails","interval","testimonial","tag","length","showControls","showIndicators"]),b=l()("carousel",a?"carousel-multi-item":"carousel-fade",i?"carousel-thumbnails":"",c?"testimonial-carousel":"",n),y=[],d=function(t){y.push(o.a.createElement(kn,{img:i?e.state.srcArray[t-1]:null,key:t,active:e.state.activeItem===t,onClick:function(){e.goToIndex(t)}}))},m=1;m<=this.state.length;m++)d(m);return o.a.createElement(u,Or({ref:this.carouselRef},p,{className:b,"aria-label":"carousel"}),s&&a&&o.a.createElement("div",{className:"controls-top"},o.a.createElement(zr,{testimonial:!!c,multiItem:!!a,iconLeft:!0,className:"btn-floating",direction:"prev",role:"button",onClick:this.prev}),o.a.createElement(zr,{testimonial:!!c,multiItem:!!a,iconRight:!0,className:"btn-floating",direction:"next",role:"button",onClick:this.next})),r,s&&!a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(zr,{testimonial:!!c,multiItem:!!a,direction:"prev",role:"button",onClick:this.prev}),o.a.createElement(zr,{testimonial:!!c,multiItem:!!a,direction:"next",role:"button",onClick:this.next})),o.a.createElement(gn,null,f&&y))}}])&&Pr(r.prototype,a),i&&Pr(r,i),t}();kr.propTypes={activeItem:i.a.number,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node,multiItem:i.a.bool,interval:i.a.oneOfType([i.a.number,i.a.bool]),thumbnails:i.a.bool,testimonial:i.a.bool,showControls:i.a.bool,showIndicators:i.a.bool,slide:i.a.bool,length:i.a.number},kr.defaultProps={tag:"div",interval:6e3,showControls:!0,showIndicators:!0},kr.childContextTypes={activeItem:i.a.any,length:i.a.any,slide:i.a.any};var Tr=kr;function Cr(e){return(Cr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nr(){return(Nr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Rr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ir(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Mr(e,t){return!t||"object"!==Cr(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Dr(e){return(Dr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Br(e,t){return(Br=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qr=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Mr(this,Dr(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Br(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.tag,a=Rr(e,["children","className","tag"]),i=l()("carousel-caption",r);return o.a.createElement(n,Nr({},a,{className:i}),t)}}])&&Ir(r.prototype,a),i&&Ir(r,i),t}();qr.propTypes={active:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node},qr.defaultProps={tag:"div"};var Lr=qr;function Wr(e){return(Wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ar(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Hr(e,t){return!t||"object"!==Wr(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Fr(e){return(Fr=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Xr(e,t){return(Xr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ur=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Hr(this,Fr(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xr(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e,t=this.props,r=t.direction,n=t.className,a=t.onClick,i=t.tag,c=t.iconLeft,u=t.iconRight,s=t.testimonial,f=t.multiItem;"prev"===r?e="Previous":"next"===r&&(e="Next");var p=l()("carousel-control-"+r,n),b=l()("carousel-control-"+r+"-icon");if(s){var y="prev"===r?"left":"right";p=l()("carousel-item-"+r,y,"carousel-control",n),b=l()("icon-"+r)}return f&&(p=l()("btn-floating")),o.a.createElement(i,{className:p,"data-slide":r,onClick:a},c?o.a.createElement("i",{className:"fa fa-chevron-left"}):u?o.a.createElement("i",{className:"fa fa-chevron-right"}):o.a.createElement("div",null,o.a.createElement("span",{className:b,"aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},e)))}}])&&Ar(r.prototype,a),i&&Ar(r,i),t}();Ur.propTypes={onClick:i.a.any,direction:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,iconLeft:i.a.bool,iconRight:i.a.bool,testimonial:i.a.bool,multiItem:i.a.bool},Ur.defaultProps={tag:"a"};var zr=Ur;function Vr(e){return(Vr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Yr(){return(Yr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Gr(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Kr(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Jr(e,t){return!t||"object"!==Vr(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $r(e){return($r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Qr(e,t){return(Qr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Zr=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Jr(this,$r(t).call(this,e))).state={childrenCount:o.a.Children.count(r.props.children)},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qr(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.active,r=e.children,n=(e.childrenCount,e.className),a=e.tag,i=Gr(e,["active","children","childrenCount","className","tag"]),c=l()("carousel-inner",t?"active":"",n);return o.a.Children.count(this.props.children),o.a.createElement(a,Yr({},i,{className:c}),r)}}])&&Kr(r.prototype,a),i&&Kr(r,i),t}();Zr.propTypes={childrenCount:i.a.any,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,active:i.a.bool,children:i.a.node},Zr.defaultProps={tag:"div"},Zr.contextTypes={childrenCount:i.a.any};var en=Zr;function tn(e){return(tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rn(){return(rn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function nn(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function on(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function an(e){return(an=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function cn(e,t){return(cn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ln(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var un=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=an(t).call(this,e))||"object"!==tn(o)&&"function"!=typeof o?ln(n):o).moveForward=r.moveForward.bind(ln(ln(r))),r.moveBackwards=r.moveBackwards.bind(ln(ln(r))),r.makeVisible=r.makeVisible.bind(ln(ln(r))),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&cn(e,t)}(t,n["Component"]),r=t,(a=[{key:"moveForward",value:function(){this.style={position:"absolute",left:"100%"}}},{key:"moveBackwards",value:function(){this.style={position:"absolute",left:"-100%"}}},{key:"makeVisible",value:function(){this.style={left:"0"}}},{key:"render",value:function(){var e=this.props,t=(e.active,e.children),r=e.className,n=e.itemId,a=e.tag,i=nn(e,["active","children","className","itemId","tag"]);n=parseInt(n,10);var c=l()("carousel-item",this.context.slide?"active carousel-slide-item":n===this.context.activeItem&&"active",r),u=this.context.activeItem-n;return this.context.slide&&(u<0?this.moveForward():u>0?this.moveBackwards():this.makeVisible()),o.a.createElement(a,rn({},i,{className:c,style:this.style}),t)}}])&&on(r.prototype,a),i&&on(r,i),t}();un.propTypes={active:i.a.bool,itemId:i.a.any,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node},un.defaultProps={tag:"div"},un.contextTypes={activeItem:i.a.any,length:i.a.any,slide:i.a.any};var sn=un;function fn(e){return(fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pn(){return(pn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function bn(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function yn(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function dn(e,t){return!t||"object"!==fn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function mn(e){return(mn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function hn(e,t){return(hn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var vn=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),dn(this,mn(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&hn(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=bn(e,["children","className"]),a=l()("carousel-indicators",r);return o.a.createElement("ol",pn({},n,{className:a}),t)}}])&&yn(r.prototype,a),i&&yn(r,i),t}();vn.propTypes={children:i.a.node,className:i.a.string},vn.defaultProps={className:""};var gn=vn;function On(e){return(On="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wn(){return(wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function jn(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Pn(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Sn(e,t){return!t||"object"!==On(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _n(e){return(_n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function En(e,t){return(En=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xn=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Sn(this,_n(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&En(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.active,e.children),r=e.className,n=(e.img,e.alt,jn(e,["active","children","className","img","alt"])),a=l()(this.props.active?"active":"",r);return o.a.createElement("li",wn({},n,{className:a}),this.props.img&&o.a.createElement("img",{src:this.props.img,alt:this.props.alt,className:"img-fluid"}),t)}}])&&Pn(r.prototype,a),i&&Pn(r,i),t}();xn.propTypes={active:i.a.bool.isRequired,alt:i.a.string,children:i.a.node,className:i.a.string,img:i.a.string},xn.defaultProps={alt:"Carousel thumbnail",className:"",img:""};var kn=xn;function Tn(e){return(Tn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Cn(){return(Cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Nn(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Rn(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function In(e,t){return!t||"object"!==Tn(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Mn(e){return(Mn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Dn(e,t){return(Dn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Bn=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),In(this,Mn(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Dn(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.xs,r=e.sm,n=e.md,a=e.lg,i=e.xl,c=e.top,u=e.bottom,s=e.middle,f=e.size,p=e.className,b=e.tag,y=Nn(e,["xs","sm","md","lg","xl","top","bottom","middle","size","className","tag"]),d=l()(f&&"col-"+f,t&&"col-"+t,r&&"col-sm-"+r,n&&"col-md-"+n,a&&"col-lg-"+a,i&&"col-xl-"+i,f||t||r||n||a||i?"":"col",c&&"align-self-start",s&&"align-self-center",u&&"align-self-end",p);return o.a.createElement(b,Cn({},y,{className:d}))}}])&&Rn(r.prototype,a),i&&Rn(r,i),t}();Bn.propTypes={xs:i.a.string,sm:i.a.string,md:i.a.string,lg:i.a.string,xl:i.a.string,top:i.a.string,bottom:i.a.string,middle:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},Bn.defaultProps={tag:"div",xs:null,sm:null,md:null,lg:null,xl:null};var qn=Bn;function Ln(){return(Ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Wn(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Vn(e,t,r[t])})}return e}function An(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Hn(e){return(Hn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fn(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Xn(e){return(Xn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Un(e,t){return(Un=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function zn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Yn="SHOW",Gn="SHOWN",Kn="HIDE",Jn="HIDDEN",$n={show:350,hide:350},Qn=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=Xn(t).call(this,e),r=!o||"object"!==Hn(o)&&"function"!=typeof o?zn(n):o,Vn(zn(zn(r)),"openCollapse",function(){r.setState({collapse:Yn},function(){r.setState({height:r.getHeight()}),r.transitionTag=setTimeout(function(){r.setState({collapse:Gn,height:null},r.props.onOpened())},r.getDelay("show"))})}),Vn(zn(zn(r)),"closeCollapse",function(){r.setState({height:r.getHeight()},function(){r.setState({collapse:Kn,height:r.getHeight()},function(){r.setState({height:0})})}),r.transitionTag=setTimeout(function(){r.setState({collapse:Jn,height:null},r.props.onClosed())},r.getDelay("hide"))}),r.state={id:e.id,collapse:Jn,height:null},r.element=null,r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Un(e,t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){this.props.isOpen!==this.state.id&&!0!==this.props.isOpen||this.state.collapse!==Jn||this.openCollapse()}},{key:"componentDidUpdate",value:function(e,t){var r=t.collapse,n="boolean"!=typeof this.props.isOpen?this.props.isOpen===t.id:this.props.isOpen;n&&this.state.collapse===Jn?this.openCollapse():n||r!==Gn||this.closeCollapse()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTag)}},{key:"getDelay",value:function(e){var t=this.props.delay;return"object"===Hn(t)?isNaN(t[e])?$n[e]:t[e]:t}},{key:"getHeight",value:function(){return this.element.scrollHeight}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.navbar,a=r.children,i=r.className,c=(r.isOpen,r.delay,r.onOpened,r.onClosed,An(r,["navbar","children","className","isOpen","delay","onOpened","onClosed"])),u=this.state,s=u.collapse,f=u.height;switch(s){case Yn:e="collapsing";break;case Gn:e="collapse show";break;case Kn:e="collapsing";break;case Jn:e="collapse";break;default:e="collapse"}var p=l()(e,!!n&&"navbar-collapse",i),b=null===f?null:{height:f};return o.a.createElement("div",Ln({},c,{style:Wn({},c.style,b),className:p,ref:function(e){t.element=e}}),a)}}])&&Fn(r.prototype,a),i&&Fn(r,i),t}();Qn.propTypes={isOpen:i.a.oneOfType([i.a.string,i.a.bool]),id:i.a.string,className:i.a.node,children:i.a.node,navbar:i.a.bool,delay:i.a.oneOfType([i.a.shape({show:i.a.number,hide:i.a.number}),i.a.number]),onOpened:i.a.func,onClosed:i.a.func},Qn.defaultProps={isOpen:"",delay:$n,onOpened:function(){},onClosed:function(){}};var Zn=Qn;function eo(e){return(eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function to(){return(to=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ro(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function no(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oo(e,t){return!t||"object"!==eo(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ao(e){return(ao=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function io(e,t){return(io=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var co=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oo(this,ao(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&io(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.fluid,r=e.className,n=e.tag,a=ro(e,["fluid","className","tag"]),i=l()(t?"container-fluid":"container",r);return o.a.createElement(n,to({},a,{className:i}))}}])&&no(r.prototype,a),i&&no(r,i),t}();co.propTypes={fluid:i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},co.defaultProps={tag:"div",fluid:!1};var lo=co;r(24);function uo(e){return(uo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function so(){return(so=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fo(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function po(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function bo(e,t){return!t||"object"!==uo(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function yo(e){return(yo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mo(e,t){return(mo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ho=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),bo(this,yo(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mo(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.autoWidth,r=e.bordered,n=e.borderless,a=e.btn,i=e.children,c=e.dark,u=e.fixed,s=(e.theadColor,e.hover),f=e.maxHeight,p=e.responsive,b=e.responsiveSm,y=e.responsiveMd,d=e.responsiveLg,m=e.responsiveXl,h=e.scrollY,v=e.small,g=e.striped,O=e.className,w=fo(e,["autoWidth","bordered","borderless","btn","children","dark","fixed","theadColor","hover","maxHeight","responsive","responsiveSm","responsiveMd","responsiveLg","responsiveXl","scrollY","small","striped","className"]),j=l()("table",{"w-auto":t,"table-bordered":r,"table-borderless":n,"btn-table":a,"table-fixed":u,"table-hover":s,"table-sm":v,"table-striped":g},O),P=l()({"table-dark":c,"table-responsive":p,"table-responsive-sm":b,"table-responsive-md":y,"table-responsive-lg":d,"table-responsive-xl":m,"table-wrapper-scroll-y":h}),S={maxHeight:f?"".concat(f):null};return o.a.createElement("div",{className:P,style:S},o.a.createElement("table",so({},w,{className:j}),i))}}])&&po(r.prototype,n),a&&po(r,a),t}();ho.propTypes={autoWidth:i.a.bool,bordered:i.a.bool,borderless:i.a.bool,btn:i.a.bool,children:i.a.node,dark:i.a.bool,fixed:i.a.bool,theadColor:i.a.string,hover:i.a.bool,maxHeight:i.a.string,responsive:i.a.bool,responsiveSm:i.a.bool,responsiveMd:i.a.bool,responsiveLg:i.a.bool,responsiveXl:i.a.bool,scrollY:i.a.bool,small:i.a.bool,striped:i.a.bool,className:i.a.string};var vo=ho;function go(){return(go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Oo(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var wo=function(e){var t=e.color,r=e.columns,a=e.handleSort,i=e.scrollX,c=e.scrollY,u=e.sortable,s=e.textWhite,f=Oo(e,["color","columns","handleSort","scrollX","scrollY","sortable","textWhite"]),p=l()("dark"!==t&&"light"!==t?t:"thead-".concat(t),{"text-white":s});return o.a.createElement(n.Fragment,null,(c||i)&&o.a.createElement("colgroup",null,r.map(function(e){return o.a.createElement("col",{key:e.field,style:{width:"".concat(e.width,"px")||!1,minWidth:"".concat(e.width,"px")||!1}})})),o.a.createElement("thead",go({},f,{className:p}),o.a.createElement("tr",null,r.map(function(e){return o.a.createElement("th",{onClick:function(){return u&&a(e.field,e.sort)},key:e.field,className:e.hasOwnProperty("minimal")?"th-".concat(e.minimal):""},e.label,u&&o.a.createElement("i",{className:"fa fa-sort float-right","aria-hidden":"true"}))}))))};wo.propTypes={color:i.a.string,columns:i.a.arrayOf(i.a.object),handleSort:i.a.func,scrollX:i.a.bool,scrollY:i.a.bool,sortable:i.a.bool,textWhite:i.a.bool},wo.defaultProps={scrollX:!1,scrollY:!1,sortable:!0,textWhite:!1};var jo=wo;function Po(){return(Po=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function So(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var _o=function(e){var t=e.children,r=e.color,n=e.rows,a=e.textWhite,i=So(e,["children","color","rows","textWhite"]),c=l()(r,{"text-white":a});return o.a.createElement("tbody",Po({},i,{className:c}),n&&n.map(function(e,t){return o.a.createElement("tr",{key:t},Object.keys(e).map(function(t,r,n){return"colspan"!==t?"colspan"!==n[r+1]?o.a.createElement("td",{key:t},e[t]):null:o.a.createElement("td",{key:t,colSpan:e[t]},e[n[r-1]])}))}),t)};_o.propTypes={children:i.a.node,color:i.a.string,rows:i.a.arrayOf(i.a.object),textWhite:i.a.bool},_o.defaultProps={textWhite:!1};var Eo=_o;function xo(){return(xo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ko(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var To=function(e){var t=e.children,r=e.color,n=e.columns,a=e.textWhite,i=ko(e,["children","color","columns","textWhite"]),c=l()("dark"!==r&&"light"!==r?r:"thead-".concat(r),{"text-white":a});return o.a.createElement("thead",xo({},i,{className:c}),n&&o.a.createElement("tr",null,n.map(function(e){return o.a.createElement("th",{key:e.field,className:e.hasOwnProperty("minimal")?"th-".concat(e.minimal):""},e.label)})),t)};To.propTypes={children:i.a.node,color:i.a.string,columns:i.a.arrayOf(i.a.object),textWhite:i.a.bool},To.defaultProps={textWhite:!1};var Co=To;function No(){return(No=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ro(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Io=function(e){var t=e.autoWidth,r=e.bordered,n=e.borderless,a=e.btn,i=e.children,c=e.columns,l=e.dark,u=e.fixed,s=e.hover,f=e.handleSort,p=e.responsive,b=e.responsiveSm,y=e.responsiveMd,d=e.responsiveLg,m=e.responsiveXl,h=e.rows,v=e.small,g=e.sortable,O=e.striped,w=e.tbodyColor,j=e.tbodyTextWhite,P=e.theadColor,S=e.theadTextWhite,_=Ro(e,["autoWidth","bordered","borderless","btn","children","columns","dark","fixed","hover","handleSort","responsive","responsiveSm","responsiveMd","responsiveLg","responsiveXl","rows","small","sortable","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite"]);return o.a.createElement("div",{className:"col-sm-12"},o.a.createElement(vo,No({autoWidth:t,bordered:r,borderless:n,btn:a,dark:l,fixed:u,hover:s,responsive:p,responsiveSm:b,responsiveMd:y,responsiveLg:d,responsiveXl:m,small:v,striped:O,className:"dataTable"},_),o.a.createElement(jo,{color:P,textWhite:S,columns:c,handleSort:f,sortable:g}),o.a.createElement(Eo,{color:w,textWhite:j,rows:h}),o.a.createElement(Co,{color:P,textWhite:S,columns:c}),i))};Io.propTypes={autoWidth:i.a.bool.isRequired,bordered:i.a.bool.isRequired,borderless:i.a.bool.isRequired,btn:i.a.bool.isRequired,dark:i.a.bool.isRequired,fixed:i.a.bool.isRequired,hover:i.a.bool.isRequired,handleSort:i.a.func.isRequired,responsive:i.a.bool.isRequired,responsiveSm:i.a.bool.isRequired,responsiveMd:i.a.bool.isRequired,responsiveLg:i.a.bool.isRequired,responsiveXl:i.a.bool.isRequired,sortable:i.a.bool.isRequired,small:i.a.bool.isRequired,striped:i.a.bool.isRequired,theadColor:i.a.string.isRequired,theadTextWhite:i.a.bool.isRequired,tbodyColor:i.a.string.isRequired,tbodyTextWhite:i.a.bool.isRequired,columns:i.a.arrayOf(i.a.object),rows:i.a.arrayOf(i.a.object),children:i.a.node};var Mo=Io;function Do(){return(Do=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Bo(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var qo=function(e){var t=e.autoWidth,r=e.bordered,n=e.borderless,a=e.btn,i=e.children,c=e.columns,l=e.dark,u=e.fixed,s=e.hover,f=e.handleSort,p=e.handleTableBodyScroll,b=e.maxHeight,y=e.responsive,d=e.responsiveSm,m=e.responsiveMd,h=e.responsiveLg,v=e.responsiveXl,g=e.rows,O=e.scrollX,w=e.scrollY,j=e.small,P=e.sortable,S=e.striped,_=e.tbodyColor,E=e.tbodyTextWhite,x=e.theadColor,k=e.theadTextWhite,T=e.translateScrollHead,C=Bo(e,["autoWidth","bordered","borderless","btn","children","columns","dark","fixed","hover","handleSort","handleTableBodyScroll","maxHeight","responsive","responsiveSm","responsiveMd","responsiveLg","responsiveXl","rows","scrollX","scrollY","small","sortable","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite","translateScrollHead"]);return o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:"dataTables_scroll"},o.a.createElement("div",{className:"dataTables_scrollHead",style:{overflow:"hidden"}},o.a.createElement("div",{className:"dataTables_scrollHeadInner",style:{position:"relative",transform:"translateX(-".concat(T,"px)"),boxSizing:"content-box",paddingRight:"15px",minWidth:"".concat(O?c.map(function(e){return e.width}).reduce(function(e,t){return e+t},0)+"px":"auto")}},o.a.createElement(vo,Do({autoWidth:t,bordered:r,borderless:n,btn:a,dark:l,fixed:u,hover:s,responsive:y,responsiveSm:d,responsiveMd:m,responsiveLg:h,responsiveXl:v,small:j,striped:S,className:"dataTable"},C),o.a.createElement(jo,{color:x,textWhite:k,columns:c,handleSort:f,scrollX:O,scrollY:w,sortable:P})))),o.a.createElement("div",{className:"dataTable_scrollBody",style:{overflow:"auto"},onScroll:p},o.a.createElement(vo,Do({style:{minWidth:"".concat(O?c.map(function(e){return e.width}).reduce(function(e,t){return e+t},0)+"px":"auto")},autoWidth:t,bordered:r,borderless:n,btn:a,dark:l,fixed:u,hover:s,maxHeight:b,responsive:y,responsiveSm:d,responsiveMd:m,responsiveLg:h,responsiveXl:v,scrollY:w,small:j,striped:S,className:"dataTable"},C),o.a.createElement("colgroup",null,c.map(function(e){return o.a.createElement("col",{key:e.field,style:{width:"".concat(e.width,"px")||!1,minWidth:"".concat(e.width,"px")||!1}})})),o.a.createElement(Eo,{color:_,textWhite:E,rows:g}),i))))};qo.propTypes={autoWidth:i.a.bool.isRequired,bordered:i.a.bool.isRequired,borderless:i.a.bool.isRequired,btn:i.a.bool.isRequired,dark:i.a.bool.isRequired,fixed:i.a.bool.isRequired,hover:i.a.bool.isRequired,handleSort:i.a.func.isRequired,handleTableBodyScroll:i.a.func.isRequired,responsive:i.a.bool.isRequired,responsiveSm:i.a.bool.isRequired,responsiveMd:i.a.bool.isRequired,responsiveLg:i.a.bool.isRequired,responsiveXl:i.a.bool.isRequired,sortable:i.a.bool.isRequired,small:i.a.bool.isRequired,striped:i.a.bool.isRequired,theadColor:i.a.string.isRequired,theadTextWhite:i.a.bool.isRequired,tbodyColor:i.a.string.isRequired,tbodyTextWhite:i.a.bool.isRequired,translateScrollHead:i.a.number.isRequired,columns:i.a.arrayOf(i.a.object),rows:i.a.arrayOf(i.a.object),children:i.a.node,maxHeight:i.a.string,scrollX:i.a.bool,scrollY:i.a.bool};var Lo,Wo=qo;try{Lo=r(!function(){var e=new Error("Cannot find module '../pro/DataTableSelect'");throw e.code="MODULE_NOT_FOUND",e}()).default}catch(e){Lo=r(26).default}var Ao=function(e){var t=e.handleEntriesChange,r=e.entries,n=e.entriesArr,a=e.paging,i=e.label;return o.a.createElement("div",{className:"col-sm-12 col-md-6"},a&&o.a.createElement(Lo,{value:r,onChange:t,entries:n,label:i}))};Ao.propTypes={handleEntriesChange:i.a.func.isRequired,entries:i.a.number.isRequired,entriesArr:i.a.arrayOf(i.a.number).isRequired,paging:i.a.bool.isRequired,label:i.a.string};var Ho,Fo=Ao;try{Ho=r(!function(){var e=new Error("Cannot find module '../pro/DataTableInput'");throw e.code="MODULE_NOT_FOUND",e}()).default}catch(e){Ho=r(27).default}var Xo=function(e){var t=e.handleSearchChange,r=e.search,n=e.searching,a=e.label;return o.a.createElement("div",{className:"col-sm-12 col-md-6"},n&&o.a.createElement(Ho,{value:r,onChange:t,label:a}))};Xo.propTypes={handleSearchChange:i.a.func.isRequired,search:i.a.string.isRequired,searching:i.a.bool.isRequired,label:i.a.string};var Uo=Xo,zo=function(e){var t=e.activePage,r=e.entries,n=e.filteredRows,a=e.info,i=e.pages,c=e.label;return o.a.createElement("div",{className:"col-sm-12 col-md-5"},a&&o.a.createElement("div",{className:"dataTables_info",role:"status","aria-live":"polite"},c[0]," ",t>0?t*r+1:t+1," ",c[1]," ",i.length-1>t?i[t].length*(t+1):n.length," ",c[2]," ",n.length," ",c[3]))};zo.propTypes={activePage:i.a.number.isRequired,entries:i.a.number.isRequired,filteredRows:i.a.array.isRequired,info:i.a.bool.isRequired,pages:i.a.array.isRequired,label:i.a.arrayOf(i.a.string)},zo.defaultProps={label:["Showing","to","of","entries"]};var Vo=zo;function Yo(e){return(Yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Go(){return(Go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ko(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Jo(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $o(e,t){return!t||"object"!==Yo(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Qo(e){return(Qo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Zo(e,t){return(Zo=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ea=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$o(this,Qo(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zo(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.circle,n=e.className,a=e.color,i=e.tag,c=e.size,u=Ko(e,["children","circle","className","color","tag","size"]),s=l()("pagination",r&&"pagination-circle",a&&"pg-"+a,!!c&&"pagination-".concat(c),n);return o.a.createElement(i,Go({},u,{className:s}),t)}}])&&Jo(r.prototype,a),i&&Jo(r,i),t}();ea.propTypes={children:i.a.node,circle:i.a.bool,className:i.a.string,color:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),size:i.a.oneOf(["lg","sm"])},ea.defaultProps={circle:!1,className:"",color:"",tag:"ul"};var ta=ea;function ra(e){return(ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function na(){return(na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function oa(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function aa(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ia(e,t){return!t||"object"!==ra(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ca(e){return(ca=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function la(e,t){return(la=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ua=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ia(this,ca(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&la(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.active,r=e.className,n=e.children,a=e.disabled,i=e.tag,c=oa(e,["active","className","children","disabled","tag"]),u=l()("page-item",a?"disabled":"",t?"active":"",r);return o.a.createElement(i,na({},c,{className:u}),n)}}])&&aa(r.prototype,a),i&&aa(r,i),t}();ua.propTypes={active:i.a.bool,className:i.a.string,children:i.a.node,disabled:i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string])},ua.defaultProps={active:!1,className:"",disabled:!1,tag:"li"};var sa=ua;function fa(e){return(fa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pa(){return(pa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ba(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ya(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function da(e,t){return!t||"object"!==fa(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ma(e){return(ma=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ha(e,t){return(ha=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var va=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),da(this,ma(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ha(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.tag,a=ba(e,["children","className","tag"]),i=l()("page-link",r);return o.a.createElement(n,pa({},a,{className:i}),t)}}])&&ya(r.prototype,a),i&&ya(r,i),t}();va.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node},va.defaultProps={tag:"a"};var ga=va,Oa=function(e){var t=e.activePage,r=e.changeActivePage,n=e.pages,a=e.label;return o.a.createElement("div",{className:"col-sm-12 col-md-7"},o.a.createElement("div",{className:"dataTables_paginate"},o.a.createElement(ta,null,o.a.createElement(sa,{disabled:0===t},o.a.createElement(ga,{className:"page-link","aria-label":a[0],onClick:function(){return r(t-1)}},o.a.createElement("span",null,a[0]))),n.map(function(e,n){return o.a.createElement(sa,{key:n,active:n===t},o.a.createElement(ga,{className:"page-link",onClick:function(){return r(n)}},n+1," ",n===t&&o.a.createElement("span",{className:"sr-only"},"(current)")))}),o.a.createElement(sa,{disabled:t===n.length-1},o.a.createElement(ga,{className:"page-link","aria-label":a[1],onClick:function(){return r(t+1)}},o.a.createElement("span",null,a[1]))))))};Oa.propTypes={activePage:i.a.number.isRequired,changeActivePage:i.a.func.isRequired,pages:i.a.array.isRequired,label:i.a.arrayOf(i.a.string)},Oa.defaultProps={label:["Previous","Next"]};var wa=Oa;function ja(e){return(ja="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pa(){return(Pa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Sa(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ea(e){return(Ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xa(e,t){return(xa=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ka(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ta(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ca=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=Ea(t).call(this,e),r=!o||"object"!==ja(o)&&"function"!=typeof o?ka(n):o,Ta(ka(ka(r)),"fetchData",function(e){fetch(e).then(function(e){return e.json()}).then(function(e){r.setState({columns:e.columns,filteredRows:e.rows,rows:e.rows})}).catch(function(e){return console.log(e)})}),Ta(ka(ka(r)),"paginateRowsInitialy",function(){for(var e=Math.ceil(r.state.rows.length/r.state.entries),t=1;t<=e;t++){var n=t*r.state.entries;r.state.pages.push(r.state.rows.slice(n-r.state.entries,n))}}),Ta(ka(ka(r)),"handleEntriesChange",function(e){r.setState({entries:Array.isArray(e)?e[0]:e},function(){return r.paginateRows()})}),Ta(ka(ka(r)),"handleSearchChange",function(e){r.setState({search:e.target.value},function(){return r.filterRows()})}),Ta(ka(ka(r)),"handleSort",function(e,t){r.setState(function(r){switch(t){case"asc":r.rows.sort(function(t,r){return t[e]>r[e]?1:-1});break;case"desc":r.rows.sort(function(t,r){return t[e]>r[e]?-1:1});break;default:r.rows.sort(function(t,r){return t[e]>r[e]?1:-1})}return r.columns[r.columns.findIndex(function(t){return t.field===e})].sort="asc"===t?"desc":"asc",{rows:r.rows,columns:r.columns}},function(){return r.filterRows()})}),Ta(ka(ka(r)),"filterRows",function(){r.setState(function(e){var t=e.rows.filter(function(e){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t))if((null!==e[t]?e[t].toString():"").toLowerCase().match(r.state.search.toLowerCase()))return!0}return!1});return 0===t.length&&t.push({message:"No matching records found",colspan:e.columns.length}),{filteredRows:t,activePage:0}},function(){return r.paginateRows()})}),Ta(ka(ka(r)),"paginateRows",function(){var e=Math.ceil(r.state.filteredRows.length/r.state.entries);r.setState(function(t){if(t.pages=[],r.props.paging){for(var n=1;n<=e;n++){var o=n*t.entries;t.pages.push(t.filteredRows.slice(o-t.entries,o))}t.activePage=t.activePage<t.pages.length||0===t.activePage?t.activePage:t.pages.length-1}else t.pages.push(t.filteredRows),t.activePage=0;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Ta(e,t,r[t])})}return e}({},t)})}),Ta(ka(ka(r)),"changeActivePage",function(e){r.setState({activePage:e})}),Ta(ka(ka(r)),"handleTableBodyScroll",function(e){r.setState({translateScrollHead:e.target.scrollLeft})}),r.state={activePage:0,columns:e.data.columns||[],entries:10,filteredRows:e.data.rows||[],pages:[],rows:e.data.rows||[],search:"",translateScrollHead:0,order:e.order||[]},r.props.paging?r.paginateRowsInitialy():r.state.pages.push(r.state.rows),r}var a,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xa(e,t)}(t,n["Component"]),a=t,(i=[{key:"componentDidMount",value:function(){"string"==typeof this.props.data&&this.fetchData(this.props.data),this.state.order.length&&this.handleSort(this.state.order[0],this.state.order[1])}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&("string"==typeof this.props.data?this.fetchData(this.props.data):this.setState({columns:this.props.data.columns||[],filteredRows:this.props.data.rows||[],rows:this.props.data.rows||[]})),t.pages===this.state.pages&&t.rows===this.state.rows||this.paginateRows()}},{key:"render",value:function(){var e,t=this.props,n=t.autoWidth,a=t.bordered,i=t.borderless,c=t.btn,l=(t.children,t.dark),u=(t.data,t.entriesLabel),s=t.exportToCSV,f=t.fixed,p=t.hover,b=t.info,y=t.infoLabel,d=t.maxHeight,m=(t.order,t.paging),h=t.paginationLabel,v=t.responsive,g=t.responsiveSm,O=t.responsiveMd,w=t.responsiveLg,j=t.responsiveXl,P=t.searching,S=t.searchLabel,_=t.scrollX,E=t.scrollY,x=t.small,k=t.sortable,T=t.striped,C=t.tbodyColor,N=t.tbodyTextWhite,R=t.theadColor,I=t.theadTextWhite,M=Sa(t,["autoWidth","bordered","borderless","btn","children","dark","data","entriesLabel","exportToCSV","fixed","hover","info","infoLabel","maxHeight","order","paging","paginationLabel","responsive","responsiveSm","responsiveMd","responsiveLg","responsiveXl","searching","searchLabel","scrollX","scrollY","small","sortable","striped","tbodyColor","tbodyTextWhite","theadColor","theadTextWhite"]),D=this.state,B=D.columns,q=D.entries,L=D.filteredRows,W=D.pages,A=D.activePage,H=D.search,F=D.translateScrollHead;if(s)try{e=r(!function(){var e=new Error("Cannot find module './pro/ExportToCSV'");throw e.code="MODULE_NOT_FOUND",e}()).default}catch(e){console.log("Export to CSV is MDB PRO component, more here: https://mdbootstrap.com/products/react-ui-kit/")}return o.a.createElement("div",{className:"dataTables_wrapper dt-bootstrap4"},o.a.createElement("div",{className:"row"},o.a.createElement(Fo,{paging:m,entries:q,handleEntriesChange:this.handleEntriesChange,entriesArr:[10,25,50,100],label:u}),o.a.createElement(Uo,{handleSearchChange:this.handleSearchChange,search:H,searching:P,label:S})),!E&&!_&&o.a.createElement("div",{className:"row"},o.a.createElement(Mo,Pa({autoWidth:n,bordered:a,borderless:i,btn:c,dark:l,fixed:f,hover:p,responsive:v,responsiveSm:g,responsiveMd:O,responsiveLg:w,responsiveXl:j,small:x,striped:T,theadColor:R,theadTextWhite:I,columns:B,handleSort:this.handleSort,sortable:k,tbodyColor:C,tbodyTextWhite:N,rows:W[A]},M))),(E||_)&&o.a.createElement("div",{className:"row"},o.a.createElement(Wo,Pa({autoWidth:n,bordered:a,borderless:i,btn:c,dark:l,fixed:f,handleTableBodyScroll:this.handleTableBodyScroll,hover:p,maxHeight:d,responsive:v,responsiveSm:g,responsiveMd:O,responsiveLg:w,responsiveXl:j,scrollX:_,scrollY:E,small:x,striped:T,theadColor:R,theadTextWhite:I,columns:B,handleSort:this.handleSort,sortable:k,tbodyColor:C,tbodyTextWhite:N,rows:W[A],translateScrollHead:F},M))),m&&o.a.createElement("div",{className:"row"},o.a.createElement(Vo,{activePage:A,entries:q,filteredRows:L,info:b,pages:W,label:y}),o.a.createElement(wa,{activePage:A,changeActivePage:this.changeActivePage,pages:W,label:h})),s&&o.a.createElement("div",{className:"row justify-content-end"},o.a.createElement(e,{columns:B,data:W,color:"primary"},"Download CSV")))}}])&&_a(a.prototype,i),c&&_a(a,c),t}();Ca.propTypes={autoWidth:i.a.bool,bordered:i.a.bool,borderless:i.a.bool,btn:i.a.bool,children:i.a.node,dark:i.a.bool,data:i.a.oneOfType([i.a.object,i.a.string]),entriesLabel:i.a.string,exportToCSV:i.a.bool,fixed:i.a.bool,hover:i.a.bool,info:i.a.bool,infoLabel:i.a.arrayOf(i.a.string),maxHeight:i.a.string,order:i.a.arrayOf(i.a.string),paging:i.a.bool,paginationLabel:i.a.arrayOf(i.a.string),responsive:i.a.bool,responsiveSm:i.a.bool,responsiveMd:i.a.bool,responsiveLg:i.a.bool,responsiveXl:i.a.bool,searching:i.a.bool,searchLabel:i.a.string,scrollX:i.a.bool,scrollY:i.a.bool,sortable:i.a.bool,small:i.a.bool,striped:i.a.bool,theadColor:i.a.string,theadTextWhite:i.a.bool,tbodyColor:i.a.string,tbodyTextWhite:i.a.bool},Ca.defaultProps={autoWidth:!1,bordered:!1,borderless:!1,btn:!1,dark:!1,data:{},fixed:!1,hover:!1,info:!0,order:[],paging:!0,responsive:!1,responsiveSm:!1,responsiveMd:!1,responsiveLg:!1,responsiveXl:!1,searching:!0,scrollX:!1,scrollY:!1,sortable:!0,small:!1,striped:!1,theadColor:"",theadTextWhite:!1,tbodyColor:"",tbodyTextWhite:!1};var Na=Ca;function Ra(e){return(Ra="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ia(){return(Ia=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ma(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Da(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ba(e){return(Ba=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function qa(e,t){return(qa=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function La(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Wa={children:i.a.node,active:i.a.bool,disabled:i.a.bool,divider:i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string]),header:i.a.bool,onClick:i.a.func,className:i.a.string,toggle:i.a.bool},Aa={toggle:i.a.func},Ha=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=Ba(t).call(this,e))||"object"!==Ra(o)&&"function"!=typeof o?La(n):o).onClick=r.onClick.bind(La(La(r))),r.getTabIndex=r.getTabIndex.bind(La(La(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qa(e,t)}(t,o.a.Component),r=t,(n=[{key:"onClick",value:function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))}},{key:"getTabIndex",value:function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"}},{key:"render",value:function(){var e=this.getTabIndex(),t=Object(q.c)(this.props,["toggle"]),r=t.className,n=t.divider,a=t.tag,i=t.header,c=t.active,u=Ma(t,["className","divider","tag","header","active"]),s=l()({disabled:u.disabled,"dropdown-item":!n&&!i,active:c,"dropdown-header":i,"dropdown-divider":n},r);return"button"===a&&(i?a="h6":n?a="div":u.href&&(a="a")),o.a.createElement(a,Ia({type:"button"===a&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,className:s,onClick:this.onClick}))}}])&&Da(r.prototype,n),a&&Da(r,a),t}();Ha.propTypes=Wa,Ha.defaultProps={tag:"button",toggle:!0},Ha.contextTypes=Aa;var Fa,Xa=Ha,Ua=r(4);r(28);function za(e){return(za="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Va(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ya(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ga(e,t){return!t||"object"!==za(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ka(e){return(Ka=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ja(e,t){return(Ja=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}try{Fa=r(!function(){var e=new Error("Cannot find module './pro/DropdownMenuProComponent'");throw e.code="MODULE_NOT_FOUND",e}()).default}catch(e){Fa=r(10).default}var $a={flip:{enabled:!1}},Qa=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ga(this,Ka(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ja(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.basic,r=e.className,n=e.right,a=e.children,i=e.tag,c=e.flip,u=e.color,s=Va(e,["basic","className","right","children","tag","flip","color"]),f=l()("dropdown-menu",u&&"dropdown-".concat(u),{"dropdown-menu-right":n,show:this.context.isOpen,basic:t},r),p=i;if(this.context.isOpen){p=Ua.Popper;var b=this.context.dropup?"top":"bottom",y=n?"end":"start";s.placement="".concat(b,"-").concat(y),s.component=i,s.modifiers=c?void 0:$a}return o.a.createElement(Fa,{isOpen:this.context.isOpen,d_tag:p,d_tabIndex:"-1",d_role:"menu",d_attributes:s,d_aria:!this.context.isOpen,d_classes:f,d_key:"dropDownMenu"},a)}}])&&Ya(r.prototype,a),i&&Ya(r,i),t}();Qa.propTypes={children:i.a.node.isRequired,basic:i.a.bool,className:i.a.string,flip:i.a.bool,right:i.a.bool,tag:i.a.string},Qa.defaultProps={basic:!1,className:"",flip:!1,right:!1,tag:"div",color:!1},Qa.contextTypes={isOpen:i.a.bool.isRequired,dropup:i.a.bool.isRequired,color:i.a.oneOfType([i.a.oneOf(["primary","default","secondary","success","dark","danger","info","warning","ins"]),i.a.bool])};var Za=Qa;function ei(e){return(ei="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ti(){return(ti=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ri(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ni(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oi(e){return(oi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ai(e,t){return(ai=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ii(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ci=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=oi(t).call(this,e))||"object"!==ei(o)&&"function"!=typeof o?ii(n):o).onClick=r.onClick.bind(ii(ii(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ai(e,t)}(t,o.a.Component),r=t,(n=[{key:"onClick",value:function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.color,a=t.caret,i=t.nav,c=t.tag,u=ri(t,["className","color","caret","nav","tag"]),s=u["aria-label"]||"Toggle Dropdown",f=l()({"dropdown-toggle":a,"nav-link":i},r),p=u.children||o.a.createElement("span",{className:"sr-only"},s);return i&&!c?(e="a",u.href="#"):c?e=c:(e=ve,u.color=n),o.a.createElement(Ua.Target,ti({},u,{className:f,component:e,onClick:this.onClick,"aria-expanded":this.context.isOpen}),p)}}])&&ni(r.prototype,n),a&&ni(r,a),t}();ci.propTypes={caret:i.a.bool,color:i.a.string,children:i.a.node,className:i.a.string,disabled:i.a.bool,onClick:i.a.func,"aria-haspopup":i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string]),nav:i.a.bool},ci.defaultProps={"aria-haspopup":!0,color:"secondary"},ci.contextTypes={isOpen:i.a.bool.isRequired,toggle:i.a.func.isRequired};var li=ci;function ui(e){return(ui="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function si(){return(si=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fi(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function pi(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function bi(e,t){return!t||"object"!==ui(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function yi(e){return(yi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function di(e,t){return(di=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var mi=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),bi(this,yi(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&di(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.color,r=e.className,n=e.tag,a=fi(e,["color","className","tag"]),i=l()("edge-header",t,r);return o.a.createElement(n,si({},a,{className:i}))}}])&&pi(r.prototype,a),i&&pi(r,i),t}();mi.propTypes={color:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},mi.defaultProps={color:"deep-purple",tag:"div"};var hi=mi;function vi(e){return(vi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function gi(){return(gi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Oi(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function wi(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ji(e,t){return!t||"object"!==vi(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Pi(e){return(Pi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Si(e,t){return(Si=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _i=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=ji(this,Pi(t).call(this,e))).state={cursorPos:{}},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Si(e,t)}(t,o.a.Component),r=t,(n=[{key:"handleClick",value:function(e){var t={top:e.clientY,left:e.clientX,time:Date.now()};this.setState({cursorPos:t})}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.waves,e.children,Oi(e,["className","waves","children"])),n=l()("form-inline",!!this.props.waves&&"Ripple-parent",t);return o.a.createElement("form",gi({},r,{className:n,onMouseDown:this.handleClick.bind(this),onTouchStart:this.handleClick.bind(this)}),this.props.children,this.props.waves&&o.a.createElement(ue,{cursorPos:this.state.cursorPos}))}}])&&wi(r.prototype,n),a&&wi(r,a),t}();_i.propTypes={children:i.a.node,className:i.a.string,waves:i.a.bool};var Ei=_i;function xi(e){return(xi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ki(){return(ki=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ti(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ci(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ni(e,t){return!t||"object"!==xi(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ri(e){return(Ri=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ii(e,t){return(Ii=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Mi=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ni(this,Ri(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ii(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.color,r=e.children,n=e.className,a=e.tag,i=Ti(e,["color","children","className","tag"]),c=l()("page-footer mt-4",t||"",n);return o.a.createElement(a,ki({},i,{className:c}),r)}}])&&Ci(r.prototype,a),i&&Ci(r,i),t}();Mi.propTypes={color:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node},Mi.defaultProps={tag:"footer"};var Di=Mi;function Bi(e){return(Bi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qi(){return(qi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Li(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Wi(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ai(e,t){return!t||"object"!==Bi(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Hi(e){return(Hi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fi(e,t){return(Fi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Xi=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ai(this,Hi(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fi(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=Li(e,["className","tag"]),a=l()("container free-bird",t);return o.a.createElement(r,qi({},n,{className:a}))}}])&&Wi(r.prototype,a),i&&Wi(r,i),t}();Xi.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},Xi.defaultProps={tag:"div"};var Ui=Xi;function zi(e){return(zi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vi(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Yi(){return(Yi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Gi(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ki(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ji(e){return(Ji=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $i(e,t){return($i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Qi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zi=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=Ji(t).call(this,e))||"object"!==zi(o)&&"function"!=typeof o?Qi(n):o).state={innerValue:e.value||e.default||"",isTouched:!1,isPristine:!0},r.onBlur=r.onBlur.bind(Qi(Qi(r))),r.onChange=r.onChange.bind(Qi(Qi(r))),r.onFocus=r.onFocus.bind(Qi(Qi(r))),r.triggerFocus=r.triggerFocus.bind(Qi(Qi(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$i(e,t)}(t,o.a.Component),r=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.value!==t.value?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Vi(e,t,r[t])})}return e}({},t,{innerValue:e.value}):null}}],(n=[{key:"componentDidMount",value:function(){}},{key:"onBlur",value:function(e){document.activeElement!==this.inputElRef&&this.setState({isTouched:!1});var t=this.props.onBlur;t&&t(e)}},{key:"onFocus",value:function(e){this.setState({isTouched:!0});var t=this.props.onFocus;t&&t(e)}},{key:"onChange",value:function(e){"checkbox"!==this.props.type&&"radio"!==this.props.type&&this.setState({innerValue:e.target.value,isPristine:!1});var t=this.props.onChange;t&&t(e),this.props.getValue&&this.props.getValue(e.target.value)}},{key:"triggerFocus",value:function(){this.inputElRef.focus()}},{key:"getValueHandler",value:function(){return this.state.innerValue}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,n=t.containerClass,a=t.size,i=t.group,c=(t.getValue,t.className),u=t.type,s=(t.el,t.tag,t.id),f=t.hint,p=t.validate,b=(t.value,t.label),y=t.error,d=t.success,m=t.disabled,h=t.labelClass,v=t.icon,g=t.iconClass,O=t.filled,w=t.gap,j=Gi(t,["children","containerClass","size","group","getValue","className","type","el","tag","id","hint","validate","value","label","error","success","disabled","labelClass","icon","iconClass","filled","gap"]),P=Boolean(this.state.innerValue)||f||this.state.isTouched,S="textarea"===u,_=S?u:"input",E="form-control";S?E="md-textarea form-control":"input"===u&&(E="form-control"),"input"===_&&(j.type=u),m&&(j.disabled=!0);var x=l()(E,!!a&&"form-control-".concat(a),!!p&&"validate",!!O&&"filled-in",!!w&&"with-gap","checkbox"===u&&(!w&&"form-check-input"),"radio"===u&&"form-check-input",c),k=l()("checkbox"===u||"radio"===u?"form-check my-3":"md-form",!!i&&"form-group",!!a&&"form-".concat(a),n),T=l()("fa",!!v&&"fa-".concat(v),!!P&&"active",!!a&&"fa-".concat(a),g,"prefix"),C=l()(!!P&&"active",!!m&&"disabled","checkbox"===u&&"form-check-label mr-5","radio"===u&&"form-check-label mr-5",h);return o.a.createElement("div",{className:k},!!v&&o.a.createElement("i",{className:T}),o.a.createElement(_,Yi({},j,{id:s,className:x,ref:function(t){e.inputElRef=t},value:this.state.innerValue,placeholder:f,onBlur:this.onBlur,onChange:this.onChange,onFocus:this.onFocus})),!!b&&o.a.createElement("label",{className:C,htmlFor:s,"data-error":y,"data-success":d,onClick:this.triggerFocus,id:s},b),r)}}])&&Ki(r.prototype,n),a&&Ki(r,a),t}();Zi.propTypes={children:i.a.node,type:i.a.string,disabled:i.a.bool,group:i.a.bool,validate:i.a.bool,size:i.a.string,onBlur:i.a.func,onChange:i.a.func,onFocus:i.a.func,id:i.a.string,hint:i.a.string,value:i.a.string,default:i.a.string,error:i.a.string,success:i.a.string,label:i.a.oneOfType([i.a.string,i.a.number,i.a.object]),labelClass:i.a.string,icon:i.a.string,iconClass:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),el:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,containerClass:i.a.string,filled:i.a.bool,gap:i.a.bool,getValue:i.a.oneOfType([i.a.func,i.a.bool])},Zi.defaultProps={tag:"input",type:"text",hint:null,getValue:!1};var ec=Zi;function tc(e){return(tc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rc(){return(rc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function nc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oc(e,t){return!t||"object"!==tc(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ac(e){return(ac=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ic(e,t){return(ic=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var cc=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oc(this,ac(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ic(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this;return o.a.createElement(ec,rc({},this.props,{ref:function(t){t&&(e.controlEl=t.inputElRef.inputElRef)}}))}}])&&nc(r.prototype,n),a&&nc(r,a),t}();cc.defaultProps={type:"text"};var lc=cc,uc=r(12),sc=r.n(uc);function fc(e){return(fc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pc(){return(pc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function bc(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function yc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function dc(e){return(dc=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function mc(e,t){return(mc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function hc(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var vc=function(e){function t(){var e,r,n,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=this,o=(e=dc(t)).call.apply(e,[this].concat(u)),r=!o||"object"!==fc(o)&&"function"!=typeof o?hc(n):o,a=hc(hc(r)),c=function(e){r.props.getValue(e)},(i="onChangeHandler")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&mc(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=(t.getValue,bc(t,["className","getValue"])),a=l()("form-control",r);return o.a.createElement(sc.a,pc({},n,{onChange:function(t){return e.onChangeHandler(t)},className:a}))}}])&&yc(r.prototype,n),a&&yc(r,a),t}();vc.defaultProps={getValue:!1},vc.propTypes={className:i.a.string,getValue:i.a.oneOfType([i.a.func,i.a.bool])};var gc=vc;function Oc(e){return(Oc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wc(){return(wc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function jc(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Pc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Sc(e,t){return!t||"object"!==Oc(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _c(e){return(_c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ec(e,t){return(Ec=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xc=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Sc(this,_c(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ec(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=e.fluid,a=jc(e,["className","children","fluid"]),i=l()("jumbotron",!!n&&"jumbotron-fluid",t);return o.a.createElement("div",wc({},a,{className:i}),r)}}])&&Pc(r.prototype,n),a&&Pc(r,a),t}();xc.propTypes={fluid:i.a.bool,children:i.a.node,className:i.a.string};var kc=xc;function Tc(e){return(Tc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Cc(){return(Cc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Nc(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Rc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ic(e,t){return!t||"object"!==Tc(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Mc(e){return(Mc=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Dc(e,t){return(Dc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Bc=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ic(this,Mc(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Dc(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.tag,a=Nc(e,["children","className","tag"]),i=l()("list-group",r);return o.a.createElement(n,Cc({},a,{className:i}),t)}}])&&Rc(r.prototype,a),i&&Rc(r,i),t}();Bc.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node},Bc.defaultProps={tag:"ul"};var qc=Bc;function Lc(e){return(Lc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Wc(){return(Wc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ac(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Hc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Fc(e,t){return!t||"object"!==Lc(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Xc(e){return(Xc=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Uc(e,t){return(Uc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var zc=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Fc(this,Xc(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Uc(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.active,r=e.children,n=e.className,a=e.color,i=e.disabled,c=e.hover,u=e.success,s=e.info,f=e.warning,p=e.danger,b=e.tag,y=Ac(e,["active","children","className","color","disabled","hover","success","info","warning","danger","tag"]),d=l()("list-group-item",a&&"list-group-item-".concat(a),t?"active":"",i?"disabled":"",c?"list-group-item-action":"",u?"list-group-item-success":"",s?"list-group-item-info":"",f?"list-group-item-warning":"",p?"list-group-item-danger":"",n);return y.href&&"li"===b&&(b="a"),o.a.createElement(b,Wc({},y,{className:d}),r)}}])&&Hc(r.prototype,a),i&&Hc(r,i),t}();zc.propTypes={active:i.a.bool,disabled:i.a.bool,hover:i.a.bool,success:i.a.bool,info:i.a.bool,warning:i.a.bool,danger:i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node,color:i.a.oneOf(["primary","secondary","success","danger","warning","info","light","dark"])},zc.defaultProps={tag:"li"};var Vc=zc;function Yc(e){return(Yc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Gc(){return(Gc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Kc(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Jc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $c(e,t){return!t||"object"!==Yc(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Qc(e){return(Qc=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Zc(e,t){return(Zc=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var el=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$c(this,Qc(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Zc(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e,t=this.props,r=t.body,n=t.bottom,a=t.className,i=t.heading,c=t.left,u=t.list,s=t.middle,f=t.object,p=t.right,b=t.round,y=t.thumbnail,d=t.figure,m=t.figImg,h=t.figCap,v=t.figCapRight,g=t.figCapLeft,O=t.tag,w=t.top,j=Kc(t,["body","bottom","className","heading","left","list","middle","object","right","round","thumbnail","figure","figImg","figCap","figCapRight","figCapLeft","tag","top"]);e=i?"h4":c||p?"a":f||m?"img":u?"ul":d?"figure":h||v||g?"figcaption":"div";var P=O||e,S=l()(!!r&&"media-body",!!i&&"mt-0",!!c&&"media-left",!!p&&"media-right",!!w&&"align-self-start",!!s&&"align-self-center",!!n&&"align-self-end",!!f&&"media-object",!!y&&"img-thumbnail",!!u&&"media-list",!!d&&"figure",!!m&&"figure-img",!!h&&"figure-caption text-center",!!v&&"figure-caption text-right",!!g&&"figure-caption text-left",!!b&&"rounded-circle z-depth-1-half",!(r||i||c||p||w||n||s||f||u||h||v||v||m||d)&&"media",a);return o.a.createElement(P,Gc({},j,{className:S}))}}])&&Jc(r.prototype,n),a&&Jc(r,a),t}();el.propTypes={body:i.a.bool,bottom:i.a.bool,children:i.a.node,className:i.a.string,heading:i.a.bool,figure:i.a.bool,figImg:i.a.bool,figCap:i.a.bool,figCapRight:i.a.bool,figCapLeft:i.a.bool,left:i.a.bool,list:i.a.bool,middle:i.a.bool,object:i.a.bool,thumbnail:i.a.bool,round:i.a.bool,right:i.a.bool,tag:i.a.oneOfType([i.a.func,i.a.string]),top:i.a.bool};var tl=el;function rl(e){return(rl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nl(){return(nl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ol(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function al(e){return(al=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function il(e,t){return(il=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function cl(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ll(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ul=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=al(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==rl(o)&&"function"!=typeof o?cl(n):o,ll(cl(cl(r)),"state",{isOpen:r.props.isOpen||!1}),ll(cl(cl(r)),"componentDidMount",function(){document.body.classList.add("modal-open")}),ll(cl(cl(r)),"componentWillUnmount",function(){document.body.classList.remove("modal-open")}),ll(cl(cl(r)),"componentDidUpdate",function(e,t){t.isOpen!==r.props.isOpen&&r.setState({isOpen:r.props.isOpen})}),ll(cl(cl(r)),"handleOnEntered",function(e,t){"backdrop"===e&&!1===r.props.fade||(t.classList.add("show"),r.props.autoFocus&&t.focus(),"modal"===e&&r.props.showModal&&r.props.showModal())}),ll(cl(cl(r)),"handleOnExit",function(e,t){"backdrop"===e&&!1===r.props.fade||(t.classList.remove("show"),"modal"===e&&r.props.hideModal&&r.props.hideModal())}),ll(cl(cl(r)),"handleOnExited",function(e){r.props.hiddenModal&&r.props.hiddenModal()}),ll(cl(cl(r)),"handleBackdropClick",function(e){r.modalContent.contains(e.target)||r.props.toggle()}),ll(cl(cl(r)),"handleEscape",function(e){27===e.keyCode&&(e.preventDefault(),r.props.toggle())}),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&il(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.props,r=t.children,a=t.backdrop,i=t.backdropClassName,c=t.contentClassName,u=t.className,s=t.size,f=t.side,p=t.fullHeight,b=t.frame,y=t.centered,d=t.position,m=t.cascading,h=t.modalStyle,v=t.wrapClassName,O=t.animation,w=t.fade,j=t.tabIndex,P=t.role,S=t.id,_=t.inline,E=w?300:0,x=l()("modal-dialog",u,s&&"modal-".concat(s),f&&"modal-side",p&&"modal-full-height",b&&"modal-frame",y&&"modal-dialog-centered",d&&"modal-".concat(this.props.position),m&&"cascading-modal",h&&"modal-notify white-text modal-".concat(this.props.modalStyle)),k=l()(!_&&"modal",w&&"fade",v,w&&(O||d&&d.split("-").slice(-1)[0]||"top")),T=l()("modal-backdrop",w?"fade":"show",i),C=l()("modal-content",c),N=Object(q.d)({style:{display:"block"},id:S||void 0,tabIndex:j,role:P,"aria-hidden":"true"});return o.a.createElement(n.Fragment,null,a&&o.a.createElement(g.Transition,{timeout:E,in:this.state.isOpen,appear:this.state.isOpen,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(t){return e.handleOnEntered("backdrop",t)},onExit:function(t){return e.handleOnExit("backdrop",t)},onExited:this.handleOnExited},o.a.createElement("div",{className:T})),o.a.createElement(g.Transition,{timeout:E,in:this.state.isOpen,appear:this.state.isOpen,mountOnEnter:!0,unmountOnExit:!0,onClick:this.handleBackdropClick,onEntered:function(t){return e.handleOnEntered("modal",t)},onExit:function(t){return e.handleOnExit("modal",t)}},o.a.createElement("div",nl({onKeyUp:this.handleEscape,className:k},N),o.a.createElement("div",{className:x,role:"document"},o.a.createElement("div",{ref:function(t){return e.modalContent=t},className:C},r)))))}}])&&ol(r.prototype,a),i&&ol(r,i),t}();ul.defaultProps={backdrop:!0,fade:!0,isOpen:!1,autoFocus:!0,role:"dialog",zIndex:1050,modalTransitionTimeout:300,backdropTransitionTimeout:150,tabIndex:"-1"},ul.propTypes={children:i.a.node,className:i.a.string,backdrop:i.a.bool,backdropClassName:i.a.string,contentClassName:i.a.string,modalClassName:i.a.string,size:i.a.string,side:i.a.bool,fullHeight:i.a.bool,frame:i.a.bool,centered:i.a.bool,position:i.a.string,cascading:i.a.bool,modalStyle:i.a.string,wrapClassName:i.a.string,animation:i.a.string,fade:i.a.bool,id:i.a.string,role:i.a.string,tabIndex:i.a.string,showModal:i.a.func,hiddenModal:i.a.func,hideModal:i.a.func};var sl=ul;function fl(e){return(fl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pl(){return(pl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function bl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function yl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function dl(e,t){return!t||"object"!==fl(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ml(e){return(ml=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function hl(e,t){return(hl=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var vl=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),dl(this,ml(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&hl(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=bl(e,["className","children"]),a=l()("modal-body",t);return o.a.createElement("div",pl({},n,{className:a}),r)}}])&&yl(r.prototype,n),a&&yl(r,a),t}();vl.propTypes={className:i.a.string,children:i.a.node};var gl=vl;function Ol(e){return(Ol="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function wl(){return(wl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function jl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Pl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Sl(e,t){return!t||"object"!==Ol(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _l(e){return(_l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function El(e,t){return(El=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var xl=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Sl(this,_l(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&El(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=e.center,a=e.start,i=e.end,c=e.around,u=e.between,s=jl(e,["className","children","center","start","end","around","between"]),f=l()("modal-footer",a&&"justify-content-start",i&&"justify-content-end",n&&"justify-content-center",u&&"justify-content-between",c&&"justify-content-around",t);return o.a.createElement("div",wl({},s,{className:f}),r)}}])&&Pl(r.prototype,n),a&&Pl(r,a),t}();xl.propTypes={className:i.a.string,children:i.a.node};var kl=xl;function Tl(e){return(Tl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Cl(){return(Cl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Nl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Rl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Il(e,t){return!t||"object"!==Tl(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ml(e){return(Ml=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Dl(e,t){return(Dl=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Bl=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Il(this,Ml(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Dl(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.children,a=t.toggle,i=t.tag,c=t.closeAriaLabel,u=(t.titleClass,Nl(t,["className","children","toggle","tag","closeAriaLabel","titleClass"])),s=l()("modal-header",r),f=l()("modal-title",this.props.titleClass);return a&&(e=o.a.createElement("button",{type:"button",onClick:a,className:"close","aria-label":c},o.a.createElement("span",{"aria-hidden":"true"},String.fromCharCode(215)))),o.a.createElement("div",Cl({},u,{className:s}),o.a.createElement(i,{className:f},n),e)}}])&&Rl(r.prototype,n),a&&Rl(r,a),t}();Bl.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),toggle:i.a.func,className:i.a.string,children:i.a.node,closeAriaLabel:i.a.string},Bl.defaultProps={tag:"h4",closeAriaLabel:"Close"};var ql=Bl;function Ll(e){return(Ll="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Wl(){return(Wl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Al(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Hl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Fl(e,t){return!t||"object"!==Ll(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Xl(e){return(Xl=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ul(e,t){return(Ul=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var zl=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Fl(this,Xl(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ul(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.tag,a=e.tabs,i=e.color,c=e.classicTabs,u=e.pills,s=e.header,f=Al(e,["children","className","tag","tabs","color","classicTabs","pills","header"]),p=l()("nav",a&&"md-tabs",u&&"md-pills",s&&"nav-pills card-header-pills",!(!u||!i)&&"pills-"+i,!(!a&&!c||!i)&&"tabs-"+this.props.color,r);return o.a.createElement(n,Wl({},f,{className:p}),t)}}])&&Hl(r.prototype,a),i&&Hl(r,i),t}();zl.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node,color:i.a.string,classicTabs:i.a.bool,pills:i.a.bool,tabs:i.a.bool,header:i.a.bool},zl.defaultProps={tag:"ul",classicTabs:!1,pills:!1,tabs:!1,header:!1};var Vl=zl;function Yl(e){return(Yl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Gl(){return(Gl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Kl(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Jl(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $l(e){return($l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ql(e,t){return(Ql=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Zl(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var eu=function(e){function t(e){var r,n,o,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=$l(t).call(this,e),r=!o||"object"!==Yl(o)&&"function"!=typeof o?Zl(n):o,a=Zl(Zl(r)),c=function(){var e=r.props.scrollingNavbarOffset||50;window.pageYOffset>e?r.setState({isCollapsed:!0}):r.setState({isCollapsed:!1})},(i="handleScroll")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r.state={isCollapsed:!1},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ql(e,t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){(this.props.scrolling||this.props.scrollingNavbarOffset)&&window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){(this.props.scrolling||this.props.scrollingNavbarOffset)&&window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,t=e.expand,r=e.light,n=e.dark,a=e.sticky,i=e.fixed,c=e.scrolling,u=e.color,s=e.className,f=e.scrollingNavbarOffset,p=e.tag,b=e.double,y=e.transparent,d=Kl(e,["expand","light","dark","sticky","fixed","scrolling","color","className","scrollingNavbarOffset","tag","double","transparent"]),m=l()("navbar",r?"navbar-light":"",n?"navbar-dark":"",a?"sticky-"+a:"",i?"fixed-"+i:"",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-".concat(e))}(t),c||f?"scrolling-navbar":"",this.state.isCollapsed?"top-nav-collapse":"",u?y?this.state.isCollapsed?u:"":u:"",b?"double-nav":"",s);return o.a.createElement(p,Gl({},d,{className:m,role:"navigation"}))}}])&&Jl(r.prototype,a),i&&Jl(r,i),t}();eu.propTypes={light:i.a.bool,dark:i.a.bool,double:i.a.bool,fixed:i.a.string,sticky:i.a.string,scrolling:i.a.bool,scrollingNavbarOffset:i.a.number,color:i.a.string,tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,expand:i.a.oneOfType([i.a.bool,i.a.string]),transparent:i.a.bool},eu.defaultProps={tag:"nav",expand:!1,scrolling:!1};var tu=eu,ru=r(9);function nu(){return(nu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ou(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var au=function(e){var t=e.className,r=e.href,n=ou(e,["className","href"]),a=l()("navbar-brand",t);return r?o.a.createElement(ru.NavLink,nu({to:r},n,{className:a})):o.a.createElement("div",nu({},n,{className:a}))};au.propTypes={className:i.a.string,href:i.a.string};var iu=au;function cu(e){return(cu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function lu(){return(lu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function uu(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function su(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function fu(e,t){return!t||"object"!==cu(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function pu(e){return(pu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function bu(e,t){return(bu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var yu=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),fu(this,pu(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&bu(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.right,a=e.left,i=e.tag,c=uu(e,["children","className","right","left","tag"]),u=l()("navbar-nav",n?"ml-auto":a?"mr-auto":"justify-content-around w-100",r);return o.a.createElement(i,lu({},c,{className:u}),t)}}])&&su(r.prototype,a),i&&su(r,i),t}();yu.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node,right:i.a.bool,left:i.a.bool},yu.defaultProps={tag:"ul"};var du=yu;function mu(e){return(mu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function hu(){return(hu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function vu(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function gu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ou(e,t){return!t||"object"!==mu(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function wu(e){return(wu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ju(e,t){return(ju=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Pu=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ou(this,wu(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ju(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.right,r=e.left,n=e.children,a=e.className,i=e.tag,c=e.image,u=vu(e,["right","left","children","className","tag","image"]),s=l()("navbar-toggler",t&&"navbar-toggler-right",r&&"navbar-toggler-left",a);return o.a.createElement(i,hu({},u,{className:s}),n||(c?o.a.createElement("span",{className:"navbar-toggler-icon",style:{backgroundImage:'url("'.concat(c,'")')}}):o.a.createElement("span",{className:"navbar-toggler-icon"})))}}])&&gu(r.prototype,a),i&&gu(r,i),t}();Pu.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),type:i.a.string,className:i.a.string,children:i.a.node,right:i.a.bool,left:i.a.bool,image:i.a.string},Pu.defaultProps={tag:"button",type:"button"};var Su=Pu;function _u(e){return(_u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Eu(){return(Eu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function xu(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ku(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Tu(e,t){return!t||"object"!==_u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Cu(e){return(Cu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Nu(e,t){return(Nu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ru=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Tu(this,Cu(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Nu(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.active,a=e.text,i=e.tag,c=xu(e,["children","className","active","text","tag"]),u=l()("nav-item",n?"active":"",a?"navbar-text":"",r);return o.a.createElement(i,Eu({},c,{className:u}),t)}}])&&ku(r.prototype,a),i&&ku(r,i),t}();Ru.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,children:i.a.node,active:i.a.bool},Ru.defaultProps={tag:"li"};var Iu=Ru;function Mu(e){return(Mu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Du(){return(Du=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Bu(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function qu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Lu(e){return(Lu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Wu(e,t){return(Wu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Au(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Hu=function(e){function t(e){var r,n,o,a,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=Lu(t).call(this,e),r=!o||"object"!==Mu(o)&&"function"!=typeof o?Au(n):o,a=Au(Au(r)),c=function(e){if(!r.props.disabled){e.stopPropagation();var t={top:e.clientY,left:e.clientX,time:Date.now()};r.setState({cursorPos:t})}},(i="handleClick")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r.state={cursorPos:{}},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Wu(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disabled,a=e.active,i=e.to,c=(e.activeClassName,Bu(e,["children","className","disabled","active","to","activeClassName"])),u=l()("nav-link",n?"disabled":"Ripple-parent",a&&"active",r);return o.a.createElement(ru.NavLink,Du({className:u,onMouseUp:this.handleClick,onTouchStart:this.handleClick,to:i},c),t,!this.props.disabled&&o.a.createElement(ue,{cursorPos:this.state.cursorPos}))}}])&&qu(r.prototype,a),i&&qu(r,i),t}();Hu.propTypes={className:i.a.string,disabled:i.a.bool,children:i.a.node,to:i.a.string,active:i.a.bool};var Fu=Hu,Xu=(r(30),r(13)),Uu=r.n(Xu);function zu(e){return(zu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vu(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Yu(e){return(Yu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Gu(e,t){return(Gu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ku(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ju=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=Yu(t).call(this,e))||"object"!==zu(o)&&"function"!=typeof o?Ku(n):o).state={isOpen:!1},r._handleTargetClick=r._handleTargetClick.bind(Ku(Ku(r))),r._setOusideTap=r._setOusideTap.bind(Ku(Ku(r))),r._handleOutsideTap=r._handleOutsideTap.bind(Ku(Ku(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Gu(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){this._setOusideTap()}},{key:"componentDidUpdate",value:function(e,t){var r=this;t.isOpen!==this.state.isOpen&&setTimeout(function(){return r._setOusideTap()})}},{key:"componentWillUnmount",value:function(){this.outsideTap.remove()}},{key:"_setOusideTap",value:function(){var e=[this.target];this.popper&&e.push(this.popper),this.outsideTap&&this.outsideTap.remove(),this.outsideTap=Uu()(e,["click","touchstart"],this._handleOutsideTap)}},{key:"_handleOutsideTap",value:function(){this.setState({isOpen:!1})}},{key:"_handleTargetClick",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this,t=this.props,r=t.placement,n=t.component,a=t.componentStyle,i=t.className,c=t.children,u=t.componentPopover,s=t.popoverBody,f=t.popoverClass,p=t.arrowClass,b=t.tag,y=l()(i),d=l()("popover",r?"bs-popover-"+r:"",f),m=l()("arrow",p);return o.a.createElement(Ua.Manager,{tag:b},o.a.createElement(Ua.Target,{innerRef:function(t){return e.target=Object(te.findDOMNode)(t)},component:n,style:a,className:y,onClick:this._handleTargetClick},s),o.a.createElement(g.CSSTransition,{in:this.state.isOpen,appear:this.state.isOpen,classNames:"popover",unmountOnExit:!0,timeout:{enter:300,exit:300}},o.a.createElement(Ua.Popper,{key:"popover",component:u,innerRef:function(t){e.popper=Object(te.findDOMNode)(t)},placement:r,className:d},c,o.a.createElement(Ua.Arrow,{className:m}))))}}])&&Vu(r.prototype,n),a&&Vu(r,a),t}();Ju.propTypes={placement:i.a.string,component:i.a.string,componentStyle:i.a.string,componentPopover:i.a.string,popoverBody:i.a.string,arrowClass:i.a.string,popoverClass:i.a.string,children:i.a.node,tag:i.a.string,className:i.a.string};var $u=Ju;function Qu(){return(Qu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Zu(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var es=function(e){var t=e.className,r=e.tag,n=Zu(e,["className","tag"]),a=l()("popover-body",t);return o.a.createElement(r,Qu({},n,{className:a}))};es.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},es.defaultProps={tag:"div"};var ts=es;function rs(){return(rs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ns(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var os=function(e){var t=e.className,r=e.tag,n=ns(e,["className","tag"]),a=l()("popover-header",t);return o.a.createElement(r,rs({},n,{className:a}))};os.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string},os.defaultProps={tag:"h3"};var as=os;function is(){return(is=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function cs(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ls=function(e){var t=e.animated,r=e.barClassName,n=e.children,a=e.className,i=e.color,c=e.height,u=e.material,s=e.max,f=e.min,p=e.preloader,b=e.striped,y=e.wrapperStyle,d=e.value,m=e.attributes,h=(d-f)/(s-f)*100,v=l()("progress",u&&"md-progress",p&&(i?i+"-color":"primary-color")+"-dark",a),g=l()(p?"indeterminate":"progress-bar",r||null,t?"progress-bar-animated":null,i?"bg-".concat(i):null,b||t?"progress-bar-striped":null),O=c||n&&"1rem",w=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){cs(e,t,r[t])})}return e}({},y,{height:O});return o.a.createElement("div",is({},m,{className:v,style:w}),o.a.createElement("div",{className:g,style:{width:"".concat(h,"%"),height:O},role:"progressbar","aria-valuenow":d,"aria-valuemin":f,"aria-valuemax":s},n))};ls.propTypes={animated:i.a.bool,barClassName:i.a.string,children:i.a.node,className:i.a.string,color:i.a.string,height:i.a.string,material:i.a.bool,max:i.a.number,min:i.a.number,preloader:i.a.bool,striped:i.a.bool,wrapperStyle:i.a.object,value:i.a.number},ls.defaultProps={animated:!1,barClassName:"",className:"",color:"indigo",height:"",material:!1,max:100,min:0,preloader:!1,striped:!1,wrapperStyle:{},value:0};var us=ls;function ss(e){return(ss="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fs(){return(fs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ps(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function bs(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ys(e,t){return!t||"object"!==ss(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ds(e){return(ds=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ms(e,t){return(ms=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var hs=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ys(this,ds(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ms(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.tag,n=e.center,a=e.start,i=e.end,c=e.around,u=e.between,s=e.top,f=e.bottom,p=e.middle,b=ps(e,["className","tag","center","start","end","around","between","top","bottom","middle"]),y=l()("row",i&&"justify-content-end",a&&"justify-content-start",n&&"justify-content-center",u&&"justify-content-between",c&&"justify-content-around",s&&"align-self-start",p&&"align-self-center",f&&"align-self-end",t);return o.a.createElement(r,fs({},b,{className:y}))}}])&&bs(r.prototype,a),i&&bs(r,i),t}();hs.propTypes={tag:i.a.oneOfType([i.a.func,i.a.string]),className:i.a.string,top:i.a.string,bottom:i.a.string,middle:i.a.string},hs.defaultProps={tag:"div"};var vs=hs;function gs(){return(gs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Os(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ws=function(e){var t=e.children,r=e.color,n=e.columns,a=e.textWhite,i=Os(e,["children","color","columns","textWhite"]),c=l()("dark"!==r&&"light"!==r?r:"thead-".concat(r),{"text-white":a});return o.a.createElement("thead",gs({},i,{className:c}),n&&o.a.createElement("tr",null,n.map(function(e){return o.a.createElement("th",{key:e.field,className:e.hasOwnProperty("minimal")?"th-".concat(e.minimal):""},e.label)})),t)};ws.propTypes={children:i.a.node,color:i.a.string,columns:i.a.arrayOf(i.a.object),textWhite:i.a.bool},ws.defaultProps={textWhite:!1};var js=ws;function Ps(e){return(Ps="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ss(){return(Ss=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Es(e){return(Es=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xs(e,t){return(xs=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ks(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ts=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=Es(t).call(this,e))||"object"!==Ps(o)&&"function"!=typeof o?ks(n):o).state={visible:!1},r.show=r.show.bind(ks(ks(r))),r.hide=r.hide.bind(ks(ks(r))),r.setVisibility=r.setVisibility.bind(ks(ks(r))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xs(e,t)}(t,o.a.Component),r=t,(n=[{key:"show",value:function(){this.setVisibility(!0)}},{key:"hide",value:function(){this.setVisibility(!1)}},{key:"setVisibility",value:function(e){this.setState(Object.assign({},this.state,{visible:e}))}},{key:"render",value:function(){var e=this.props,t=e.placement,r=e.component,n=e.componentStyle,a=e.className,i=e.children,c=e.tooltipContent,u=e.tooltipClass,s=e.arrowClass,f=e.componentTooltip,p=e.componentClass,b=e.wrapperStyle,y=e.tag,d=l()(a),m=l()(p),h=l()("tooltip fade",t?"bs-tooltip-"+t:"",this.state.visible?"show":"",u),v=b||{},g=l()("arrow",s);return o.a.createElement(Ua.Manager,{tag:y,className:d,style:v},o.a.createElement(Ua.Target,{component:r,style:n,className:m,onMouseEnter:this.show,onMouseLeave:this.hide,onTouchStart:this.show,onTouchEnd:this.hide},i),this.state.visible&&o.a.createElement(Ua.Popper,{placement:t,component:f},function(e){var t=e.popperProps;return o.a.createElement("div",Ss({},t,{className:h}),o.a.createElement("div",{className:"tooltip-inner"},c),o.a.createElement(Ua.Arrow,null,function(e){var t=e.arrowProps;return o.a.createElement("span",Ss({},t,{className:g}))}))}))}}])&&_s(r.prototype,n),a&&_s(r,a),t}();Ts.propTypes={placement:i.a.string,component:i.a.string,componentStyle:i.a.string,tooltipContent:i.a.string,tooltipClass:i.a.string,arrowClass:i.a.string,componentTooltip:i.a.string,componentClass:i.a.string,children:i.a.node,tag:i.a.string,className:i.a.string,wrapperStyle:i.a.object};var Cs=Ts;r(32);function Ns(e){return(Ns="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Rs(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Is(e){return(Is=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ms(e,t){return(Ms=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ds(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Bs=function(e){function t(){var e,r,n,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,u=new Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=this,r=!(o=(e=Is(t)).call.apply(e,[this].concat(u)))||"object"!==Ns(o)&&"function"!=typeof o?Ds(n):o,a=Ds(Ds(r)),i="state",c={checked:r.props.isOpen||!1},i in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ms(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.id,r=e.color,n=e.className,a=l()("hamburger-button__button",n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"checkbox",defaultChecked:this.state.checked,onChange:this.props.onClick,className:"hamburger-button__checkbox",id:t}),o.a.createElement("label",{id:"nav-icon1",className:a,htmlFor:t},o.a.createElement("span",{style:{background:r}}),o.a.createElement("span",{style:{background:r}}),o.a.createElement("span",{style:{background:r}})))}}])&&Rs(r.prototype,n),a&&Rs(r,a),t}();Bs.propTypes={id:i.a.string,color:i.a.string,className:i.a.string};var qs=Bs;function Ls(e){return(Ls="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ws(){return(Ws=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function As(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Hs(e){return(Hs=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Fs(e,t){return(Fs=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Xs(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Us(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var zs=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=Hs(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==Ls(o)&&"function"!=typeof o?Xs(n):o,Us(Xs(Xs(r)),"state",{width:"",height:"",ratio:""}),Us(Xs(Xs(r)),"componentDidMount",function(){var e=r.props.width,t=r.props.height,n=9/16;if(r.props.ratio){var o=r.props.ratio.split("by")[0]/r.props.ratio.split("by")[1];"number"==typeof n&&(n=o)}r.props.width&&r.props.height||(r.props.width?t=r.props.width*n:r.props.height&&(e=r.props.height*(1/n)),r.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Us(e,t,r[t])})}return e}({},r.state,{width:e,height:t,ratio:n})))}),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Fs(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.allowFullScreen,r=e.className,n=e.id,a=e.name,i=e.onMouseOver,c=e.onMouseOut,u=e.onLoad,s=e.sandbox,f=e.src,p=e.style,b=e.title,y=e.ratio,d=e.height,m=e.width,h=l()("embed-responsive-item",r),v=l()(!(d||m)&&"embed-responsive",y?"embed-responsive-".concat(y):"embed-responsive-16by9",r),g={src:f,id:n||!1,frameBorder:"0",target:"_parent",allowFullScreen:t||!0,height:this.state.height||"100%",name:a||void 0,width:this.state.width||"100%",onLoad:u||void 0,onMouseOver:i||void 0,onMouseOut:c||void 0,sandbox:s||void 0,style:p||void 0};return g=Object(q.d)(g),o.a.createElement("div",{className:v},o.a.createElement("iframe",Ws({title:b||"",className:h},g)))}}])&&As(r.prototype,a),i&&As(r,i),t}();zs.propTypes={allowFullScreen:i.a.bool,className:i.a.string,height:i.a.number,id:i.a.string,name:i.a.string,onMouseOver:i.a.func,onMouseOut:i.a.func,onLoad:i.a.func,ratio:i.a.string,sandbox:i.a.string,src:i.a.string.isRequired,styles:i.a.object,width:i.a.number,title:i.a.string};var Vs=zs;r.d(t,"Dropdown",function(){return Ys}),r.d(t,"DropdownMenuComponent",function(){return Gs}),r.d(t,"MDBDropdown",function(){return Ks}),r.d(t,"MDBDropdownMenuComponent",function(){return Js}),r.d(t,"Animation",function(){return v}),r.d(t,"Alert",function(){return x}),r.d(t,"Badge",function(){return B}),r.d(t,"Breadcrumb",function(){return H}),r.d(t,"BreadcrumbItem",function(){return ee}),r.d(t,"Button",function(){return ve}),r.d(t,"ButtonGroup",function(){return xe}),r.d(t,"ButtonToolbar",function(){return Be}),r.d(t,"Card",function(){return ze}),r.d(t,"CardBody",function(){return et}),r.d(t,"CardFooter",function(){return ut}),r.d(t,"CardGroup",function(){return vt}),r.d(t,"CardHeader",function(){return xt}),r.d(t,"CardImage",function(){return er}),r.d(t,"CardText",function(){return ur}),r.d(t,"CardTitle",function(){return vr}),r.d(t,"Carousel",function(){return Tr}),r.d(t,"CarouselCaption",function(){return Lr}),r.d(t,"CarouselControl",function(){return zr}),r.d(t,"CarouselInner",function(){return en}),r.d(t,"CarouselItem",function(){return sn}),r.d(t,"CarouselIndicators",function(){return gn}),r.d(t,"CarouselIndicator",function(){return kn}),r.d(t,"Col",function(){return qn}),r.d(t,"Collapse",function(){return Zn}),r.d(t,"Container",function(){return lo}),r.d(t,"DataTable",function(){return Na}),r.d(t,"DropdownItem",function(){return Xa}),r.d(t,"DropdownMenu",function(){return Za}),r.d(t,"DropdownToggle",function(){return li}),r.d(t,"EdgeHeader",function(){return hi}),r.d(t,"Fa",function(){return J}),r.d(t,"FormInline",function(){return Ei}),r.d(t,"Footer",function(){return Di}),r.d(t,"FreeBird",function(){return Ui}),r.d(t,"Input",function(){return lc}),r.d(t,"InputNumeric",function(){return gc}),r.d(t,"Jumbotron",function(){return kc}),r.d(t,"ListGroup",function(){return qc}),r.d(t,"ListGroupItem",function(){return Vc}),r.d(t,"Mask",function(){return Bt}),r.d(t,"Media",function(){return tl}),r.d(t,"Modal",function(){return sl}),r.d(t,"ModalBody",function(){return gl}),r.d(t,"ModalFooter",function(){return kl}),r.d(t,"ModalHeader",function(){return ql}),r.d(t,"Nav",function(){return Vl}),r.d(t,"Navbar",function(){return tu}),r.d(t,"NavbarBrand",function(){return iu}),r.d(t,"NavbarNav",function(){return du}),r.d(t,"NavbarToggler",function(){return Su}),r.d(t,"NavItem",function(){return Iu}),r.d(t,"NavLink",function(){return Fu}),r.d(t,"Pagination",function(){return ta}),r.d(t,"PageItem",function(){return sa}),r.d(t,"PageLink",function(){return ga}),r.d(t,"Popover",function(){return $u}),r.d(t,"PopoverBody",function(){return ts}),r.d(t,"PopoverHeader",function(){return as}),r.d(t,"Progress",function(){return us}),r.d(t,"Waves",function(){return ue}),r.d(t,"Row",function(){return vs}),r.d(t,"Table",function(){return vo}),r.d(t,"TableBody",function(){return Eo}),r.d(t,"TableHead",function(){return js}),r.d(t,"TableFoot",function(){return Co}),r.d(t,"TextField",function(){return ec}),r.d(t,"Tooltip",function(){return Cs}),r.d(t,"View",function(){return zt}),r.d(t,"HamburgerToggler",function(){return qs}),r.d(t,"Iframe",function(){return Vs}),r.d(t,"MDBBadge",function(){return D}),r.d(t,"MDBAlert",function(){return E}),r.d(t,"MDBBreadcrumb",function(){return A}),r.d(t,"MDBBreadcrumbItem",function(){return Z}),r.d(t,"MDBBtn",function(){return he}),r.d(t,"MDBBtnGroup",function(){return Ee}),r.d(t,"MDBBtnToolbar",function(){return De}),r.d(t,"MDBCard",function(){return Ue}),r.d(t,"MDBCardBody",function(){return Ze}),r.d(t,"MDBCardFooter",function(){return lt}),r.d(t,"MDBCardGroup",function(){return ht}),r.d(t,"MDBCardHeader",function(){return Et}),r.d(t,"MDBCardImage",function(){return Zt}),r.d(t,"MDBCardText",function(){return lr}),r.d(t,"MDBCardTitle",function(){return hr}),r.d(t,"MDBCarousel",function(){return kr}),r.d(t,"MDBCarouselCaption",function(){return qr}),r.d(t,"MDBControl",function(){return Ur}),r.d(t,"MDBCarouselInner",function(){return Zr}),r.d(t,"MDBCarouselItem",function(){return un}),r.d(t,"MDBCarouselIndicators",function(){return vn}),r.d(t,"MDBCarouselIndicator",function(){return xn}),r.d(t,"MDBCol",function(){return Bn}),r.d(t,"MDBCollapse",function(){return Qn}),r.d(t,"MDBContainer",function(){return co}),r.d(t,"MDBDataTable",function(){return Ca}),r.d(t,"MDBDropdownItem",function(){return Ha}),r.d(t,"MDBDropdownMenu",function(){return Qa}),r.d(t,"MDBDropdownToggle",function(){return ci}),r.d(t,"MDBEdgeHeader",function(){return mi}),r.d(t,"MDBIcon",function(){return K}),r.d(t,"MDBFormInline",function(){return _i}),r.d(t,"MDBFooter",function(){return Mi}),r.d(t,"MDBFreeBird",function(){return Xi}),r.d(t,"MDBInput",function(){return cc}),r.d(t,"MDBInputSelect",function(){return vc}),r.d(t,"MDBJumbotron",function(){return xc}),r.d(t,"MDBListGroup",function(){return Bc}),r.d(t,"MDBListGroupItem",function(){return zc}),r.d(t,"MDBMask",function(){return Dt}),r.d(t,"MDBMedia",function(){return el}),r.d(t,"MDBModal",function(){return ul}),r.d(t,"MDBModalBody",function(){return vl}),r.d(t,"MDBModalFooter",function(){return xl}),r.d(t,"MDBModalHeader",function(){return Bl}),r.d(t,"MDBNav",function(){return zl}),r.d(t,"MDBNavbar",function(){return eu}),r.d(t,"MDBNavbarBrand",function(){return au}),r.d(t,"MDBNavbarNav",function(){return yu}),r.d(t,"MDBNavbarToggler",function(){return Pu}),r.d(t,"MDBNavItem",function(){return Ru}),r.d(t,"MDBNavLink",function(){return Hu}),r.d(t,"MDBPagination",function(){return ea}),r.d(t,"MDBPageItem",function(){return ua}),r.d(t,"MDBPageNav",function(){return va}),r.d(t,"MDBPopover",function(){return Ju}),r.d(t,"MDBPopoverBody",function(){return es}),r.d(t,"MDBPopoverHeader",function(){return os}),r.d(t,"MDBProgress",function(){return ls}),r.d(t,"MDBWaves",function(){return le}),r.d(t,"MDBRow",function(){return hs}),r.d(t,"MDBTable",function(){return ho}),r.d(t,"MDBTableBody",function(){return _o}),r.d(t,"MDBTableHead",function(){return ws}),r.d(t,"MDBTableFoot",function(){return To}),r.d(t,"MDBTextarea",function(){return Zi}),r.d(t,"MDBTooltip",function(){return Ts}),r.d(t,"MDBView",function(){return Ut});var Ys=r(11).default,Gs=r(10).default,Ks=r(11).default,Js=r(10).default}])});
//# sourceMappingURL=mdbreact.js.map
=======
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var classNames = _interopDefault(require('classnames'));
var reactTransitionGroup = require('react-transition-group');
var ReactDOM = require('react-dom');
var ReactDOM__default = _interopDefault(ReactDOM);
var reactPopper = require('react-popper');
var NumericInput = _interopDefault(require('react-numeric-input'));
var reactRouterDom = require('react-router-dom');
var outy = _interopDefault(require('outy'));
var reactToastify = require('react-toastify');
var Autosuggest = _interopDefault(require('react-autosuggest'));
var MomentUtils = _interopDefault(require('@date-io/moment'));
var materialUiPickers = require('material-ui-pickers');
var moment = _interopDefault(require('moment'));
var core = require('@material-ui/core');
var PerfectScrollbar = _interopDefault(require('perfect-scrollbar'));
var raf = _interopDefault(require('raf'));

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
    _this.elemRef = React__default.createRef();
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
      return React__default.createElement(Tag, _extends({}, attributes, {
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
}(React.Component);

Animation.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  type: PropTypes__default.string,
  delay: PropTypes__default.string,
  count: PropTypes__default.number,
  onAnimationEnd: PropTypes__default.func,
  onAnimationStart: PropTypes__default.func
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
        alertComponent = React__default.createElement(reactTransitionGroup.Transition, {
          in: this.state.isOpen,
          timeout: 150,
          unmountOnExit: true,
          onExit: function onExit(node) {
            return _this2.handleOnExit(node);
          },
          onExited: function onExited(node) {
            return _this2.handleOnExited(node);
          }
        }, React__default.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children, React__default.createElement("button", {
          onClick: this.closeAlert,
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, React__default.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"))));
      } else {
        alertComponent = React__default.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children);
      }

      return alertComponent;
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = {
  color: "primary"
};
Alert.propTypes = {
  className: PropTypes__default.string,
  color: PropTypes__default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes__default.func,
  onClosed: PropTypes__default.func
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Badge;
}(React__default.Component);

Badge.defaultProps = {
  tag: "span",
  color: "default",
  pill: false
};
Badge.propTypes = {
  color: PropTypes__default.string,
  pill: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string
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
    children = React__default.Children.map(props.children, function (child) {
      return React__default.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React__default.createElement("nav", null, React__default.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  light: PropTypes__default.bool,
  uppercase: PropTypes__default.bool,
  bold: PropTypes__default.bool
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
      return React__default.createElement("i", _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Fa;
}(React__default.Component);

Fa.propTypes = {
  icon: PropTypes__default.string.isRequired,
  border: PropTypes__default.bool,
  brand: PropTypes__default.bool,
  className: PropTypes__default.string,
  fab: PropTypes__default.bool,
  fal: PropTypes__default.bool,
  far: PropTypes__default.bool,
  fixed: PropTypes__default.bool,
  flip: PropTypes__default.string,
  inverse: PropTypes__default.string,
  light: PropTypes__default.bool,
  list: PropTypes__default.bool,
  pull: PropTypes__default.string,
  pulse: PropTypes__default.bool,
  regular: PropTypes__default.bool,
  rotate: PropTypes__default.string,
  spin: PropTypes__default.bool,
  size: PropTypes__default.string,
  stack: PropTypes__default.string
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
    return bold ? React__default.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React__default.createElement(React.Fragment, null, appendIcon && children, React__default.createElement(Fa, {
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

  return React__default.createElement("li", _extends({}, attributes, {
    className: classes
  }), React__default.createElement(WithBold, null, React__default.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: PropTypes__default.bool,
  appendIcon: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  bold: PropTypes__default.bool,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClassName: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonGroup;
}(React__default.Component);

ButtonGroup.propTypes = {
  "aria-label": PropTypes__default.string,
  className: PropTypes__default.string,
  role: PropTypes__default.string,
  size: PropTypes__default.string,
  children: PropTypes__default.node,
  vertical: PropTypes__default.bool
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonToolbar;
}(React__default.Component);

ButtonToolbar.propTypes = {
  "aria-label": PropTypes__default.string,
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  role: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Card;
}(React.Component);

Card.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  border: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardBody;
}(React.Component);

CardBody.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  cascade: PropTypes__default.bool
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
      var component = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        component = React__default.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React__default.createElement("small", null, " ", this.props.children, " "));
      }

      return component;
    }
  }]);

  return CardFooter;
}(React.Component);

CardFooter.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  text: PropTypes__default.string,
  border: PropTypes__default.string,
  transparent: PropTypes__default.bool,
  small: PropTypes__default.bool,
  muted: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardGroup;
}(React.Component);

CardGroup.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  deck: PropTypes__default.bool,
  column: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardHeader;
}(React.Component);

CardHeader.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  text: PropTypes__default.string,
  border: PropTypes__default.string,
  transparent: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Mask;
}(React__default.Component);

Mask.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  overlay: PropTypes__default.string,
  pattern: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  tag: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        style: viewStyle
      }), children, waves && React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return View;
}(React__default.Component);

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
  cascade: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  hover: PropTypes__default.bool,
  rounded: PropTypes__default.bool,
  src: PropTypes__default.string,
  tag: PropTypes__default.string,
  waves: PropTypes__default.bool,
  zoom: PropTypes__default.bool
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
      var innerContent = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);

      if (this.props.src) {
        return React__default.createElement(View, {
          zoom: zoom,
          hover: this.props.hover,
          cascade: this.props.cascade
        }, React__default.createElement("div", {
          className: "Ripple-parent",
          onMouseDown: this.handleClick.bind(this),
          onTouchStart: this.handleClick.bind(this)
        }, innerContent, React__default.createElement(Mask, {
          overlay: overlay
        }), this.props.waves && React__default.createElement(Waves, {
          cursorPos: this.state.cursorPos
        })));
      } else {
        return React__default.createElement("div", null, innerContent);
      }
    }
  }]);

  return CardImage;
}(React.Component);

CardImage.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  zoom: PropTypes__default.bool,
  waves: PropTypes__default.bool,
  className: PropTypes__default.string,
  cascade: PropTypes__default.bool,
  hover: PropTypes__default.bool,
  overlay: PropTypes__default.string,
  top: PropTypes__default.bool,
  src: PropTypes__default.string,
  children: PropTypes__default.node
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
      var text = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        text = React__default.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React__default.createElement("small", null, " ", this.props.children, " "));
      }

      return text;
    }
  }]);

  return CardText;
}(React.Component);

CardText.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  muted: PropTypes__default.bool,
  small: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardTitle;
}(React.Component);

CardTitle.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  sub: PropTypes__default.bool,
  className: PropTypes__default.string
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

      return React__default.createElement(Tag, {
        className: classes,
        "data-slide": direction,
        onClick: onClick
      }, iconLeft ? React__default.createElement(Fa, {
        icon: "chevron-left"
      }) : iconRight ? React__default.createElement(Fa, {
        icon: "chevron-right"
      }) : React__default.createElement("div", null, React__default.createElement("span", {
        className: caretClasses,
        "aria-hidden": "true"
      }), React__default.createElement("span", {
        className: "sr-only"
      }, text)));
    }
  }]);

  return Control;
}(React.Component);

Control.propTypes = {
  onClick: PropTypes__default.any,
  direction: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  iconLeft: PropTypes__default.bool,
  iconRight: PropTypes__default.bool,
  testimonial: PropTypes__default.bool,
  multiItem: PropTypes__default.bool
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
      return React__default.createElement("ol", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselIndicators;
}(React.Component);

CarouselIndicators.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string
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
      return React__default.createElement("li", _extends({}, attributes, {
        className: classes
      }), this.props.img && React__default.createElement("img", {
        src: this.props.img,
        alt: this.props.alt,
        className: "img-fluid"
      }), children);
    }
  }]);

  return CarouselIndicator;
}(React.Component);

CarouselIndicator.propTypes = {
  active: PropTypes__default.bool.isRequired,
  alt: PropTypes__default.string,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  img: PropTypes__default.string
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
    _this.carouselRef = React__default.createRef();
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
        CarouselIndicatorsArray.push(React__default.createElement(CarouselIndicator, {
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

      return React__default.createElement(Tag, _extends({
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel
      }), showControls && multiItem && React__default.createElement("div", {
        className: "controls-top"
      }, React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React__default.createElement(React__default.Fragment, null, React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "next",
        role: "button",
        onClick: this.next
      })), React__default.createElement(CarouselIndicators, null, showIndicators && CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(React.Component);

Carousel.propTypes = {
  activeItem: PropTypes__default.number,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  multiItem: PropTypes__default.bool,
  interval: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.bool]),
  thumbnails: PropTypes__default.bool,
  testimonial: PropTypes__default.bool,
  showControls: PropTypes__default.bool,
  showIndicators: PropTypes__default.bool,
  slide: PropTypes__default.bool,
  length: PropTypes__default.number
};
Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true
};
Carousel.childContextTypes = {
  activeItem: PropTypes__default.any,
  length: PropTypes__default.any,
  slide: PropTypes__default.any
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselCaption;
}(React.Component);

CarouselCaption.propTypes = {
  active: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
      childrenCount: React__default.Children.count(_this.props.children)
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
      childrenCount = React__default.Children.count(this.props.children);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselInner;
}(React.Component);

CarouselInner.propTypes = {
  childrenCount: PropTypes__default.any,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  active: PropTypes__default.bool,
  children: PropTypes__default.node
};
CarouselInner.defaultProps = {
  tag: "div"
};
CarouselInner.contextTypes = {
  childrenCount: PropTypes__default.any
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

      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(React.Component);

CarouselItem.propTypes = {
  active: PropTypes__default.bool,
  itemId: PropTypes__default.any,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node
};
CarouselItem.defaultProps = {
  tag: "div"
};
CarouselItem.contextTypes = {
  activeItem: PropTypes__default.any,
  length: PropTypes__default.any,
  slide: PropTypes__default.any
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Col;
}(React.Component);

Col.propTypes = {
  size: PropTypes__default.string,
  xs: PropTypes__default.string,
  sm: PropTypes__default.string,
  md: PropTypes__default.string,
  lg: PropTypes__default.string,
  xl: PropTypes__default.string,
  top: PropTypes__default.bool,
  bottom: PropTypes__default.bool,
  middle: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      return React__default.createElement("div", _extends({}, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(React.Component);

Collapse.propTypes = {
  isOpen: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.bool]),
  id: PropTypes__default.string,
  className: PropTypes__default.node,
  children: PropTypes__default.node,
  navbar: PropTypes__default.bool,
  delay: PropTypes__default.oneOfType([PropTypes__default.shape({
    show: PropTypes__default.number,
    hide: PropTypes__default.number
  }), PropTypes__default.number]),
  onOpened: PropTypes__default.func,
  onClosed: PropTypes__default.func
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Container;
}(React.Component);

Container.propTypes = {
  fluid: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      return React__default.createElement("div", {
        className: wrapperClasses,
        style: wrapperStyles
      }, React__default.createElement("table", _extends({}, attributes, {
        className: tableClasses
      }), children));
    }
  }]);

  return Table;
}(React__default.Component);

Table.propTypes = {
  autoWidth: PropTypes__default.bool,
  bordered: PropTypes__default.bool,
  borderless: PropTypes__default.bool,
  btn: PropTypes__default.bool,
  children: PropTypes__default.node,
  dark: PropTypes__default.bool,
  fixed: PropTypes__default.bool,
  theadColor: PropTypes__default.string,
  hover: PropTypes__default.bool,
  maxHeight: PropTypes__default.string,
  responsive: PropTypes__default.bool,
  responsiveSm: PropTypes__default.bool,
  responsiveMd: PropTypes__default.bool,
  responsiveLg: PropTypes__default.bool,
  responsiveXl: PropTypes__default.bool,
  scrollY: PropTypes__default.bool,
  small: PropTypes__default.bool,
  striped: PropTypes__default.bool,
  className: PropTypes__default.string
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
  return React__default.createElement(React.Fragment, null, (scrollY || scrollX) && React__default.createElement("colgroup", null, columns.map(function (col) {
    return React__default.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React__default.createElement("thead", {
    className: theadClasses || undefined
  }, React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.attributes), col.label, sortable && col.sort !== 'disabled' && React__default.createElement(Fa, {
      icon: "sort",
      className: "float-right",
      "aria-hidden": "true"
    }));
  }))));
};

DataTableHead.propTypes = {
  color: PropTypes__default.string,
  columns: PropTypes__default.arrayOf(PropTypes__default.object),
  handleSort: PropTypes__default.func,
  scrollX: PropTypes__default.bool,
  scrollY: PropTypes__default.bool,
  sortable: PropTypes__default.bool,
  textWhite: PropTypes__default.bool
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
  return React__default.createElement("tbody", _extends({}, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React__default.createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;

      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? React__default.createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return React__default.createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};

TableBody.propTypes = {
  children: PropTypes__default.node,
  color: PropTypes__default.string,
  rows: PropTypes__default.arrayOf(PropTypes__default.object),
  textWhite: PropTypes__default.bool
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
  return React__default.createElement("thead", _extends({}, attributes, {
    className: classes || undefined
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: PropTypes__default.node,
  color: PropTypes__default.string,
  columns: PropTypes__default.arrayOf(PropTypes__default.object),
  textWhite: PropTypes__default.bool
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

  return React__default.createElement("div", {
    className: "col-sm-12"
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable
  }), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), React__default.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: PropTypes__default.bool.isRequired,
  bordered: PropTypes__default.bool.isRequired,
  borderless: PropTypes__default.bool.isRequired,
  btn: PropTypes__default.bool.isRequired,
  dark: PropTypes__default.bool.isRequired,
  fixed: PropTypes__default.bool.isRequired,
  hover: PropTypes__default.bool.isRequired,
  handleSort: PropTypes__default.func.isRequired,
  responsive: PropTypes__default.bool.isRequired,
  responsiveSm: PropTypes__default.bool.isRequired,
  responsiveMd: PropTypes__default.bool.isRequired,
  responsiveLg: PropTypes__default.bool.isRequired,
  responsiveXl: PropTypes__default.bool.isRequired,
  sortable: PropTypes__default.bool.isRequired,
  small: PropTypes__default.bool.isRequired,
  striped: PropTypes__default.bool.isRequired,
  theadColor: PropTypes__default.string.isRequired,
  theadTextWhite: PropTypes__default.bool.isRequired,
  tbodyColor: PropTypes__default.string.isRequired,
  tbodyTextWhite: PropTypes__default.bool.isRequired,
  columns: PropTypes__default.arrayOf(PropTypes__default.object),
  rows: PropTypes__default.arrayOf(PropTypes__default.object),
  children: PropTypes__default.node
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

  return React__default.createElement("div", {
    className: "col-sm-12"
  }, React__default.createElement("div", {
    className: "dataTables_scroll"
  }, React__default.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, React__default.createElement("div", {
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
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable
  })))), React__default.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement("colgroup", null, columns.map(function (col) {
    return React__default.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes__default.bool.isRequired,
  bordered: PropTypes__default.bool.isRequired,
  borderless: PropTypes__default.bool.isRequired,
  btn: PropTypes__default.bool.isRequired,
  dark: PropTypes__default.bool.isRequired,
  fixed: PropTypes__default.bool.isRequired,
  hover: PropTypes__default.bool.isRequired,
  handleSort: PropTypes__default.func.isRequired,
  handleTableBodyScroll: PropTypes__default.func.isRequired,
  responsive: PropTypes__default.bool.isRequired,
  responsiveSm: PropTypes__default.bool.isRequired,
  responsiveMd: PropTypes__default.bool.isRequired,
  responsiveLg: PropTypes__default.bool.isRequired,
  responsiveXl: PropTypes__default.bool.isRequired,
  sortable: PropTypes__default.bool.isRequired,
  small: PropTypes__default.bool.isRequired,
  striped: PropTypes__default.bool.isRequired,
  theadColor: PropTypes__default.string.isRequired,
  theadTextWhite: PropTypes__default.bool.isRequired,
  tbodyColor: PropTypes__default.string.isRequired,
  tbodyTextWhite: PropTypes__default.bool.isRequired,
  translateScrollHead: PropTypes__default.number.isRequired,
  columns: PropTypes__default.arrayOf(PropTypes__default.object),
  rows: PropTypes__default.arrayOf(PropTypes__default.object),
  children: PropTypes__default.node,
  maxHeight: PropTypes__default.string,
  scrollX: PropTypes__default.bool,
  scrollY: PropTypes__default.bool
};

var ControlledSelectInput = function ControlledSelectInput(_ref) {
  var value = _ref.value;
  return React__default.createElement("input", {
    type: "text",
    readOnly: true,
    value: value,
    className: "select-dropdown"
  });
};

ControlledSelectInput.propTypes = {
  value: PropTypes__default.string
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
    _this.inputElementRef = React__default.createRef();
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
      return React__default.createElement("div", {
        className: containerClassFix
      }, icon && React__default.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClassFix,
        onClick: this.setFocus
      }), React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        id: id,
        placeholder: hint,
        ref: this.inputElementRef,
        value: this.state.innerValue,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onInput: this.onInput,
        onFocus: this.onFocus
      })), label && React__default.createElement("label", {
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
}(React__default.Component);

Input.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  containerClass: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  error: PropTypes__default.string,
  filled: PropTypes__default.bool,
  gap: PropTypes__default.bool,
  getValue: PropTypes__default.func,
  group: PropTypes__default.bool,
  hint: PropTypes__default.string,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClass: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  id: PropTypes__default.string,
  inputRef: PropTypes__default.oneOfType([PropTypes__default.object, PropTypes__default.func]),
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]),
  labelClass: PropTypes__default.string,
  onBlur: PropTypes__default.func,
  onChange: PropTypes__default.func,
  onFocus: PropTypes__default.func,
  onInput: PropTypes__default.func,
  size: PropTypes__default.string,
  success: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  type: PropTypes__default.string,
  validate: PropTypes__default.bool,
  value: PropTypes__default.string,
  valueDefault: PropTypes__default.string
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
  return React__default.createElement("li", {
    "data-multiple": multiple,
    className: classes,
    onClick: function onClick() {
      return selectOption(value);
    }
  }, icon && React__default.createElement("img", {
    src: icon,
    alt: "",
    className: "rounded-circle"
  }), React__default.createElement("span", {
    "data-multiple": multiple,
    className: "filtrable"
  }, multiple && React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
    type: "checkbox",
    value: value,
    className: "form-check-input",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  }), React__default.createElement("label", {
    style: {
      height: "10px"
    },
    "data-multiple": multiple
  })), text ? text : value));
};

ControlledSelectOption.propTypes = {
  checked: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  icon: PropTypes__default.string,
  multiple: PropTypes__default.bool,
  selectOption: PropTypes__default.func,
  text: PropTypes__default.string,
  value: PropTypes__default.string
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
      return React__default.createElement("ul", {
        className: classes
      }, search && React__default.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      }), React__default.createElement(ControlledSelectOption, {
        checked: false,
        disabled: true,
        icon: null,
        value: selected
      }), this.state.filteredOptions.map(function (option, index) {
        return React__default.createElement(ControlledSelectOption, {
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
}(React.Component);

ControlledSelectOptions.propTypes = {
  selected: PropTypes__default.string.isRequired,
  selectOption: PropTypes__default.func.isRequired,
  multiple: PropTypes__default.bool,
  options: PropTypes__default.arrayOf(PropTypes__default.shape({
    checked: PropTypes__default.bool,
    disabled: PropTypes__default.bool,
    icon: PropTypes__default.string,
    text: PropTypes__default.string,
    value: PropTypes__default.string
  })),
  search: PropTypes__default.bool,
  searchLabel: PropTypes__default.string,
  searchId: PropTypes__default.string
};
ControlledSelectOptions.defaultProps = {
  multiple: false,
  options: [],
  search: false,
  searchLabel: "Search",
  searchId: "selectSearchInput"
};

var SelectContext = React__default.createContext();

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
        return React__default.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React__default.createElement("span", {
          className: "caret"
        }, "\u25BC"), React__default.createElement(ControlledSelectInput, {
          value: _this.state.selectTextContent
        }), React__default.createElement(ControlledSelectOptions, {
          multiple: multiple,
          options: _this.state.options,
          search: search,
          searchLabel: searchLabel,
          selected: selected,
          selectOption: _this.selectOption
        }));
      } else {
        return React__default.createElement(SelectContext.Provider, {
          value: {
            state: _this.state,
            multiple: _this.props.multiple,
            triggerOptionChange: _this.triggerOptionChange
          }
        }, React__default.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React__default.createElement("span", {
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
}(React__default.Component);

Select.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  getTextContent: PropTypes__default.func,
  getValue: PropTypes__default.func,
  multiple: PropTypes__default.bool,
  options: PropTypes__default.arrayOf(PropTypes__default.shape({
    checked: PropTypes__default.bool,
    disabled: PropTypes__default.bool,
    icon: PropTypes__default.string,
    text: PropTypes__default.string,
    value: PropTypes__default.string
  })),
  search: PropTypes__default.bool,
  searchLabel: PropTypes__default.string,
  searchId: PropTypes__default.string,
  selected: PropTypes__default.string
};

var selectContextHOC = function selectContextHOC(Component) {
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

          return React__default.createElement(SelectContext.Consumer, null, function (context) {
            return React__default.createElement(Component, _extends({}, _this.props, {
              context: context
            }));
          });
        }
      }]);

      return HOC;
    }(React__default.Component)
  );
};

exports.MDBSelectInput = function SelectInput(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      context = _ref.context,
      selected = _ref.selected;
  var classes = classNames("select-dropdown", className);
  return React__default.createElement("input", _extends({
    type: "text",
    readOnly: true,
    value: context.state.selectTextContent ? context.state.selectTextContent : selected
  }, attributes, {
    className: classes
  }));
};

exports.MDBSelectInput.propTypes = {
  context: PropTypes__default.object.isRequired,
  className: PropTypes__default.string,
  selected: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number])
};
exports.MDBSelectInput.defaultProps = {
  className: "",
  selected: "Choose your option"
};
var SelectInput = exports.MDBSelectInput = selectContextHOC(exports.MDBSelectInput);

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
    _this.optionsRef = React__default.createRef();
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
      return React__default.createElement("ul", _extends({}, attributes, {
        className: classes,
        ref: this.optionsRef
      }), search && React__default.createElement("div", {
        className: "mx-2"
      }, React__default.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      })), children);
    }
  }]);

  return Options;
}(React__default.Component);

Options.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  search: PropTypes__default.bool,
  searchLabel: PropTypes__default.string,
  searchId: PropTypes__default.string
};
Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

exports.MDBSelectOption =
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
    _this.optionRef = React__default.createRef();
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
          input = React__default.createElement("input", {
            type: "checkbox",
            value: value,
            onChange: function onChange() {
              return false;
            },
            className: "form-check-input",
            checked: this.state.checked
          });
          label = React__default.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        } else {
          input = React__default.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            disabled: true
          });
          label = React__default.createElement("label", {
            style: {
              height: "10px"
            },
            "data-multiple": this.state.multiple
          });
        }
      }

      return React__default.createElement("li", _extends({
        ref: this.optionRef
      }, attributes, {
        "data-multiple": this.state.multiple,
        className: classes,
        onClick: this.selectOption
      }), icon && React__default.createElement("img", {
        src: this.props.icon,
        alt: "icon",
        className: "rounded-circle"
      }), React__default.createElement("span", {
        "data-multiple": this.state.multiple,
        className: "filtrable"
      }, input, label, children));
    }
  }]);

  return Option;
}(React__default.Component);

exports.MDBSelectOption.propTypes = {
  children: PropTypes__default.node,
  checked: PropTypes__default.bool,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  icon: PropTypes__default.string,
  triggerOptionClick: PropTypes__default.func,
  value: PropTypes__default.any
};
exports.MDBSelectOption.defaultProps = {
  children: "span",
  checked: false,
  className: "",
  disabled: false,
  icon: "",
  triggerOptionClick: function triggerOptionClick() {},
  value: ""
};
var SelectOption = exports.MDBSelectOption = selectContextHOC(exports.MDBSelectOption);

var DataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      entries = _ref.entries,
      label = _ref.label;
  return React__default.createElement("div", {
    className: "dataTables_length d-flex flex-row"
  }, React__default.createElement("label", {
    className: "mt-4"
  }, label), React__default.createElement(Select, {
    getValue: onChange
  }, React__default.createElement(SelectInput, {
    selected: value
  }), React__default.createElement(Options, null, entries.map(function (entry, index) {
    return React__default.createElement(SelectOption, {
      checked: index === 0,
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  entries: PropTypes__default.arrayOf(PropTypes__default.number).isRequired,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]).isRequired,
  onChange: PropTypes__default.func.isRequired,
  value: PropTypes__default.number.isRequired
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
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && React__default.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label
  }));
};

DataTableEntries.propTypes = {
  handleEntriesChange: PropTypes__default.func.isRequired,
  entries: PropTypes__default.number.isRequired,
  entriesArr: PropTypes__default.arrayOf(PropTypes__default.number).isRequired,
  paging: PropTypes__default.bool.isRequired,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]).isRequired
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label;
  return React__default.createElement("div", {
    className: "dataTables_filter md-form"
  }, React__default.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  }));
};

DataTableInput.propTypes = {
  label: PropTypes__default.string,
  onChange: PropTypes__default.func,
  value: PropTypes__default.string
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
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && React__default.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label
  }));
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes__default.func.isRequired,
  search: PropTypes__default.string.isRequired,
  searching: PropTypes__default.bool.isRequired,
  label: PropTypes__default.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      pages = props.pages,
      label = props.label;
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && React__default.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};

DataTableInfo.propTypes = {
  activePage: PropTypes__default.number.isRequired,
  entries: PropTypes__default.number.isRequired,
  filteredRows: PropTypes__default.array.isRequired,
  info: PropTypes__default.bool.isRequired,
  pages: PropTypes__default.array.isRequired,
  label: PropTypes__default.arrayOf(PropTypes__default.string)
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.propTypes = {
  children: PropTypes__default.node,
  circle: PropTypes__default.bool,
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  size: PropTypes__default.oneOf(['lg', 'sm'])
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageItem;
}(React.Component);

PageItem.propTypes = {
  active: PropTypes__default.bool,
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  disabled: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string])
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageLink;
}(React.Component);

PageLink.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
      return React__default.createElement("div", {
        className: "col-sm-12 col-md-7"
      }, React__default.createElement("div", {
        className: "dataTables_paginate"
      }, React__default.createElement(Pagination, null, React__default.createElement(PageItem, {
        disabled: activePage === 0
      }, React__default.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React__default.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React__default.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React__default.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, " ", page.index === activePage && React__default.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React__default.createElement(PageItem, {
        disabled: activePage === pages.length - 1
      }, React__default.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React__default.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(React.Component);

DataTablePagination.propTypes = {
  activePage: PropTypes__default.number.isRequired,
  changeActivePage: PropTypes__default.func.isRequired,
  pages: PropTypes__default.array.isRequired,
  pagesAmount: PropTypes__default.number.isRequired,
  label: PropTypes__default.arrayOf(PropTypes__default.string).isRequired
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
      return React__default.createElement("div", {
        className: "dataTables_wrapper dt-bootstrap4"
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableEntries, {
        paging: paging,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel
      }), React__default.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel
      })), !scrollY && !scrollX && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableTable, _extends({
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
      }, attributes))), (scrollY || scrollX) && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableTableScroll, _extends({
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
      }, attributes))), paging && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), React__default.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })), exportToCSV && React__default.createElement("div", {
        className: "row justify-content-end"
      }, React__default.createElement(ExportToCSV, {
        columns: columns,
        data: pages,
        color: "primary"
      }, "Download CSV")));
    }
  }]);

  return DataTable;
}(React.Component);

DataTable.propTypes = {
  autoWidth: PropTypes__default.bool,
  bordered: PropTypes__default.bool,
  borderless: PropTypes__default.bool,
  btn: PropTypes__default.bool,
  children: PropTypes__default.node,
  dark: PropTypes__default.bool,
  data: PropTypes__default.oneOfType([PropTypes__default.object, PropTypes__default.string]),
  entries: PropTypes__default.number,
  entriesLabel: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]),
  entriesOptions: PropTypes__default.arrayOf(PropTypes__default.number),
  exportToCSV: PropTypes__default.bool,
  fixed: PropTypes__default.bool,
  hover: PropTypes__default.bool,
  info: PropTypes__default.bool,
  infoLabel: PropTypes__default.arrayOf(PropTypes__default.string),
  maxHeight: PropTypes__default.string,
  order: PropTypes__default.arrayOf(PropTypes__default.string),
  pagesAmount: PropTypes__default.number,
  paging: PropTypes__default.bool,
  paginationLabel: PropTypes__default.arrayOf(PropTypes__default.string),
  responsive: PropTypes__default.bool,
  responsiveSm: PropTypes__default.bool,
  responsiveMd: PropTypes__default.bool,
  responsiveLg: PropTypes__default.bool,
  responsiveXl: PropTypes__default.bool,
  searching: PropTypes__default.bool,
  searchLabel: PropTypes__default.string,
  scrollX: PropTypes__default.bool,
  scrollY: PropTypes__default.bool,
  sortable: PropTypes__default.bool,
  small: PropTypes__default.bool,
  striped: PropTypes__default.bool,
  theadColor: PropTypes__default.string,
  theadTextWhite: PropTypes__default.bool,
  tbodyColor: PropTypes__default.string,
  tbodyTextWhite: PropTypes__default.bool
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
  children: PropTypes__default.node,
  active: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  divider: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  header: PropTypes__default.bool,
  onClick: PropTypes__default.func,
  className: PropTypes__default.string,
  toggle: PropTypes__default.bool
};
var contextTypes = {
  toggle: PropTypes__default.func
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

      return React__default.createElement(Tag, _extends({
        type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React__default.Component);

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
  return React__default.createElement(reactTransitionGroup.CSSTransition, {
    in: isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, React__default.createElement(Tag, _extends({
    tabIndex: d_tabIndex,
    role: d_role
  }, d_attributes, {
    "aria-hidden": d_aria,
    className: d_classes,
    key: d_key
  }), children));
};

DropdownMenuProComponent.propTypes = {
  d_aria: PropTypes__default.bool.isRequired,
  d_attributes: PropTypes__default.object.isRequired,
  d_key: PropTypes__default.string.isRequired,
  d_role: PropTypes__default.string.isRequired,
  d_tabIndex: PropTypes__default.string.isRequired,
  d_tag: PropTypes__default.any.isRequired,
  isOpen: PropTypes__default.bool.isRequired,
  children: PropTypes__default.node.isRequired,
  d_classes: PropTypes__default.string
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
        Tag = reactPopper.Popper;
        var position1 = this.context.dropup ? 'top' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
        attrs.modifiers = !flip ? noFlipModifier : undefined;
      }

      return React__default.createElement(DropdownMenuProComponent, {
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
}(React.Component);

DropdownMenu.propTypes = {
  children: PropTypes__default.node.isRequired,
  basic: PropTypes__default.bool,
  className: PropTypes__default.string,
  flip: PropTypes__default.bool,
  right: PropTypes__default.bool,
  tag: PropTypes__default.string
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
  isOpen: PropTypes__default.bool.isRequired,
  dropup: PropTypes__default.bool.isRequired,
  color: PropTypes__default.oneOfType([PropTypes__default.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), PropTypes__default.bool])
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
      var children = props.children || React__default.createElement("span", {
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

      return React__default.createElement(reactPopper.Target, _extends({}, props, {
        className: classes,
        component: Tag,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen
      }), children);
    }
  }]);

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = {
  caret: PropTypes__default.bool,
  color: PropTypes__default.string,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  onClick: PropTypes__default.func,
  "aria-haspopup": PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  nav: PropTypes__default.bool
};
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "secondary"
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes__default.bool.isRequired,
  toggle: PropTypes__default.func.isRequired
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return EdgeHeader;
}(React.Component);

EdgeHeader.propTypes = {
  color: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      return React__default.createElement("form", _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }), this.props.children, this.props.waves && React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return FormInline;
}(React__default.Component);

FormInline.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  waves: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Footer;
}(React.Component);

Footer.propTypes = {
  color: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return FreeBird;
}(React.Component);

FreeBird.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.checked,
        onChange: this.props.onClick,
        className: "hamburger-button__checkbox",
        id: id
      }), React__default.createElement("label", {
        id: "nav-icon1",
        className: classes,
        htmlFor: id
      }, React__default.createElement("span", {
        style: {
          background: color
        }
      }), React__default.createElement("span", {
        style: {
          background: color
        }
      }), React__default.createElement("span", {
        style: {
          background: color
        }
      })));
    }
  }]);

  return HamburgerToggler;
}(React__default.Component);

HamburgerToggler.propTypes = {
  id: PropTypes__default.string,
  color: PropTypes__default.string,
  className: PropTypes__default.string
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
      return React__default.createElement(NumericInput, _extends({}, attributes, {
        onChange: this.onChangeHandler,
        className: classes
      }));
    }
  }]);

  return InputNumeric;
}(React__default.Component);

InputNumeric.propTypes = {
  className: PropTypes__default.string,
  getValue: PropTypes__default.func
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Jumbotron;
}(React__default.Component);

Jumbotron.propTypes = {
  fluid: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroup;
}(React.Component);

ListGroup.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node
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

      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroupItem;
}(React.Component);

ListGroupItem.propTypes = {
  active: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  hover: PropTypes__default.bool,
  success: PropTypes__default.bool,
  info: PropTypes__default.bool,
  warning: PropTypes__default.bool,
  danger: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  color: PropTypes__default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Media;
}(React__default.Component);

Media.propTypes = {
  body: PropTypes__default.bool,
  bottom: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  heading: PropTypes__default.bool,
  figure: PropTypes__default.bool,
  figImg: PropTypes__default.bool,
  figCap: PropTypes__default.bool,
  figCapRight: PropTypes__default.bool,
  figCapLeft: PropTypes__default.bool,
  left: PropTypes__default.bool,
  list: PropTypes__default.bool,
  middle: PropTypes__default.bool,
  object: PropTypes__default.bool,
  thumbnail: PropTypes__default.bool,
  round: PropTypes__default.bool,
  right: PropTypes__default.bool,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  top: PropTypes__default.bool
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
      return React__default.createElement(React.Fragment, null, backdrop && React__default.createElement(reactTransitionGroup.Transition, {
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
      }, React__default.createElement("div", {
        className: backdropClasses
      })), React__default.createElement(reactTransitionGroup.Transition, {
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
      }, React__default.createElement("div", _extends({
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React__default.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React__default.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(React.Component);

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
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  backdrop: PropTypes__default.bool,
  backdropClassName: PropTypes__default.string,
  contentClassName: PropTypes__default.string,
  modalClassName: PropTypes__default.string,
  size: PropTypes__default.string,
  side: PropTypes__default.bool,
  fullHeight: PropTypes__default.bool,
  frame: PropTypes__default.bool,
  centered: PropTypes__default.bool,
  position: PropTypes__default.string,
  cascading: PropTypes__default.bool,
  modalStyle: PropTypes__default.string,
  wrapClassName: PropTypes__default.string,
  animation: PropTypes__default.string,
  fade: PropTypes__default.bool,
  id: PropTypes__default.string,
  role: PropTypes__default.string,
  tabIndex: PropTypes__default.string,
  showModal: PropTypes__default.func,
  hiddenModal: PropTypes__default.func,
  hideModal: PropTypes__default.func
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalBody;
}(React__default.Component);

ModalBody.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalFooter;
}(React__default.Component);

ModalFooter.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
        closeButton = React__default.createElement("button", {
          type: "button",
          onClick: toggle,
          className: "close",
          "aria-label": closeAriaLabel
        }, React__default.createElement("span", {
          "aria-hidden": "true"
        }, String.fromCharCode(215)));
      }

      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), React__default.createElement(Tag, {
        className: titleClasses
      }, children), closeButton);
    }
  }]);

  return ModalHeader;
}(React__default.Component);

ModalHeader.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  toggle: PropTypes__default.func,
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  closeAriaLabel: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Nav;
}(React.Component);

Nav.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  color: PropTypes__default.string,
  classicTabs: PropTypes__default.bool,
  pills: PropTypes__default.bool,
  tabs: PropTypes__default.bool,
  header: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(React.Component);

Navbar.propTypes = {
  light: PropTypes__default.bool,
  dark: PropTypes__default.bool,
  double: PropTypes__default.bool,
  fixed: PropTypes__default.string,
  sticky: PropTypes__default.string,
  scrolling: PropTypes__default.bool,
  scrollingNavbarOffset: PropTypes__default.number,
  color: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  expand: PropTypes__default.oneOfType([PropTypes__default.bool, PropTypes__default.string]),
  transparent: PropTypes__default.bool
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
      return React__default.createElement(reactRouterDom.NavLink, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes__default.string,
  href: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavbarNav;
}(React.Component);

NavbarNav.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  right: PropTypes__default.bool,
  left: PropTypes__default.bool
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children ? children : image ? React__default.createElement("span", {
        className: "navbar-toggler-icon",
        style: {
          backgroundImage: "url(\"".concat(image, "\")")
        }
      }) : React__default.createElement("span", {
        className: "navbar-toggler-icon"
      }));
    }
  }]);

  return NavbarToggler;
}(React.Component);

NavbarToggler.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  type: PropTypes__default.string,
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  right: PropTypes__default.bool,
  left: PropTypes__default.bool,
  image: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavItem;
}(React.Component);

NavItem.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  active: PropTypes__default.bool
};
NavItem.defaultProps = {
  tag: "li"
};

var NavLink =
/*#__PURE__*/
function (_Component) {
  _inherits(NavLink, _Component);

  function NavLink(props) {
    var _this;

    _classCallCheck(this, NavLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavLink).call(this, props));

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

  _createClass(NavLink, [{
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
      return React__default.createElement(reactRouterDom.NavLink, _extends({
        className: classes,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick,
        to: to
      }, attributes), children, this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return NavLink;
}(React.Component);

NavLink.propTypes = {
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  children: PropTypes__default.node,
  to: PropTypes__default.string,
  active: PropTypes__default.bool
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
      return React__default.createElement(reactPopper.Manager, {
        tag: tag
      }, React__default.createElement(reactPopper.Target, {
        innerRef: function innerRef(c) {
          return _this3.target = ReactDOM.findDOMNode(c);
        },
        component: component,
        style: componentStyle,
        className: classes,
        onClick: this._handleTargetClick
      }, popoverBody), React__default.createElement(reactTransitionGroup.CSSTransition, {
        in: this.state.isOpen,
        appear: this.state.isOpen,
        classNames: "popover",
        unmountOnExit: true,
        timeout: {
          enter: 300,
          exit: 300
        }
      }, React__default.createElement(reactPopper.Popper, {
        key: "popover",
        component: componentPopover,
        innerRef: function innerRef(c) {
          _this3.popper = ReactDOM.findDOMNode(c);
        },
        placement: placement,
        className: popoverClasses
      }, children, React__default.createElement(reactPopper.Arrow, {
        className: arrowClasses
      }))));
    }
  }]);

  return Popover;
}(React__default.Component);

Popover.propTypes = {
  placement: PropTypes__default.string,
  component: PropTypes__default.string,
  componentStyle: PropTypes__default.string,
  componentPopover: PropTypes__default.string,
  popoverBody: PropTypes__default.string,
  arrowClass: PropTypes__default.string,
  popoverClass: PropTypes__default.string,
  children: PropTypes__default.node,
  tag: PropTypes__default.string,
  className: PropTypes__default.string
};

var PopoverBody = function PopoverBody(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("popover-body", className);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverBody.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
};
PopoverBody.defaultProps = {
  tag: "div"
};

var PopoverHeader = function PopoverHeader(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("popover-header", className);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

PopoverHeader.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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

  return React__default.createElement("div", _extends({}, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React__default.createElement("div", {
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
  animated: PropTypes__default.bool,
  barClassName: PropTypes__default.string,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  color: PropTypes__default.string,
  height: PropTypes__default.string,
  material: PropTypes__default.bool,
  max: PropTypes__default.number,
  min: PropTypes__default.number,
  preloader: PropTypes__default.bool,
  striped: PropTypes__default.bool,
  wrapperStyle: PropTypes__default.object,
  value: PropTypes__default.number
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Row;
}(React.Component);

Row.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  top: PropTypes__default.bool,
  bottom: PropTypes__default.bool,
  middle: PropTypes__default.bool,
  end: PropTypes__default.bool,
  start: PropTypes__default.bool,
  center: PropTypes__default.bool,
  between: PropTypes__default.bool,
  around: PropTypes__default.bool
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
  return React__default.createElement("thead", _extends({}, attributes, {
    className: classes
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : ""
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: PropTypes__default.node,
  color: PropTypes__default.string,
  columns: PropTypes__default.arrayOf(PropTypes__default.object),
  textWhite: PropTypes__default.bool
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
      return React__default.createElement(reactPopper.Manager, {
        tag: tag,
        className: classes,
        style: wrapperStyles
      }, React__default.createElement(reactPopper.Target, {
        component: component,
        style: componentStyle,
        className: componentClasses,
        onMouseEnter: this.show,
        onMouseLeave: this.hide,
        onTouchStart: this.show,
        onTouchEnd: this.hide
      }, children), this.state.visible && React__default.createElement(reactPopper.Popper, {
        placement: placement,
        component: componentTooltip
      }, function (_ref) {
        var popperProps = _ref.popperProps;
        return React__default.createElement("div", _extends({}, popperProps, {
          className: tooltipClasses
        }), React__default.createElement("div", {
          className: "tooltip-inner"
        }, tooltipContent), React__default.createElement(reactPopper.Arrow, null, function (_ref2) {
          var arrowProps = _ref2.arrowProps;
          return React__default.createElement("span", _extends({}, arrowProps, {
            className: arrowClasses
          }));
        }));
      }));
    }
  }]);

  return Tooltip;
}(React__default.Component);

Tooltip.propTypes = {
  placement: PropTypes__default.string,
  component: PropTypes__default.string,
  componentStyle: PropTypes__default.string,
  tooltipContent: PropTypes__default.string,
  tooltipClass: PropTypes__default.string,
  arrowClass: PropTypes__default.string,
  componentTooltip: PropTypes__default.string,
  componentClass: PropTypes__default.string,
  children: PropTypes__default.node,
  tag: PropTypes__default.string,
  className: PropTypes__default.string,
  wrapperStyle: PropTypes__default.object
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
      return React__default.createElement("div", {
        className: wrapperClasses
      }, React__default.createElement("iframe", _extends({
        title: title || "",
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(React.Component);

Iframe.propTypes = {
  allowFullScreen: PropTypes__default.bool,
  className: PropTypes__default.string,
  height: PropTypes__default.number,
  id: PropTypes__default.string,
  name: PropTypes__default.string,
  onMouseOver: PropTypes__default.func,
  onMouseOut: PropTypes__default.func,
  onLoad: PropTypes__default.func,
  ratio: PropTypes__default.string,
  sandbox: PropTypes__default.string,
  src: PropTypes__default.string.isRequired,
  styles: PropTypes__default.object,
  width: PropTypes__default.number,
  title: PropTypes__default.string
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
      return ReactDOM__default.findDOMNode(this);
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
      return React__default.createElement(reactPopper.Manager, _extends({}, attrs, {
        className: classes,
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return Dropdown;
}(React__default.Component);

Dropdown.propTypes = {
  disabled: PropTypes__default.bool,
  dropup: PropTypes__default.bool,
  group: PropTypes__default.bool,
  size: PropTypes__default.string,
  tag: PropTypes__default.string,
  toggle: PropTypes__default.func,
  children: PropTypes__default.node,
  className: PropTypes__default.string
};
Dropdown.defaultProps = {
  dropup: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: PropTypes__default.func.isRequired,
  isOpen: PropTypes__default.bool.isRequired,
  dropup: PropTypes__default.bool.isRequired
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
      return React__default.createElement("div", null, suggestion);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event, _ref2) {
      var newValue = _ref2.newValue;

      _this.setState({
        value: newValue
      });

      if (_this.props.search) {
        _this.props.search(newValue, ReactDOM__default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))).parentNode.parentNode.querySelectorAll("li"));
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
        return React__default.createElement("div", null, icon && React__default.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix
        }), React__default.createElement("input", _extends({
          type: "text",
          id: id,
          className: "form-control"
        }, inputProps, attributes, {
          onFocus: function onFocus(ev, val) {
            _this2.onClick();

            inputProps.onFocus(ev, val);
          }
        })), React__default.createElement("label", {
          htmlFor: id,
          id: "label for ".concat(id),
          onClick: _this2.triggerFocus,
          className: labelClassFix
        }, label), clear && React__default.createElement(Fa, {
          icon: "close",
          onClick: _this2.handleClear,
          style: clearStyleFix,
          className: clearClassFix
        }));
      };

      return React__default.createElement(Autosuggest, _extends({
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
}(React.Component);

Autocomplete.propTypes = {
  className: PropTypes__default.string,
  clear: PropTypes__default.bool,
  clearClass: PropTypes__default.string,
  data: PropTypes__default.arrayOf(PropTypes__default.string),
  disabled: PropTypes__default.bool,
  getValue: PropTypes__default.func,
  id: PropTypes__default.string,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]),
  labelClass: PropTypes__default.string,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClass: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  placeholder: PropTypes__default.string,
  search: PropTypes__default.func
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  round: PropTypes__default.bool,
  circle: PropTypes__default.bool
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
      return React__default.createElement("div", _extends({
        className: buttonFixedClasses,
        ref: innerRef,
        style: {
          bottom: "45px",
          right: "24px"
        }
      }, attributes), React__default.createElement("a", {
        href: this.props.topSection ? this.props.topSection : "#",
        className: classes,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }, icon && React__default.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })), React__default.createElement("ul", {
        className: "list-unstyled"
      }, this.props.children));
    }
  }]);

  return ButtonFixed;
}(React__default.Component);

ButtonFixed.defaultProps = {
  color: "default"
};
ButtonFixed.propTypes = {
  active: PropTypes__default.bool,
  block: PropTypes__default.bool,
  color: PropTypes__default.string,
  gradient: PropTypes__default.string,
  role: PropTypes__default.string,
  type: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  outline: PropTypes__default.bool,
  rounded: PropTypes__default.bool,
  floating: PropTypes__default.bool,
  flat: PropTypes__default.bool,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClass: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  innerRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  onClick: PropTypes__default.func,
  size: PropTypes__default.string,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  topSection: PropTypes__default.string
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
      return React__default.createElement("li", null, React__default.createElement("a", _extends({}, attributes, {
        style: this.props.buttonStyle,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        className: classes
      }), icon && React__default.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      })));
    }
  }]);

  return ButtonFixed;
}(React__default.Component);

ButtonFixed$1.defaultProps = {
  color: "default"
};
ButtonFixed$1.propTypes = {
  active: PropTypes__default.bool,
  block: PropTypes__default.bool,
  color: PropTypes__default.string,
  gradient: PropTypes__default.string,
  role: PropTypes__default.string,
  type: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  outline: PropTypes__default.bool,
  rounded: PropTypes__default.bool,
  floating: PropTypes__default.bool,
  flat: PropTypes__default.bool,
  innerRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  onClick: PropTypes__default.func,
  size: PropTypes__default.oneOf(['lg', 'sm']),
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClass: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  buttonStyle: PropTypes__default.object
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardUp;
}(React.Component);

CardUp.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }), src && React__default.createElement("img", {
        src: src,
        alt: alt
      }), this.props.children, waves && React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }), close && React__default.createElement(Fa, {
        icon: "times",
        className: "close",
        onClick: this.handleCloseClick
      }));
    }
  }]);

  return Chip;
}(React.Component);

Chip.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  size: PropTypes__default.string,
  bgColor: PropTypes__default.string,
  text: PropTypes__default.string,
  gradient: PropTypes__default.string,
  src: PropTypes__default.string,
  alt: PropTypes__default.string,
  close: PropTypes__default.bool,
  handleClose: PropTypes__default.func
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
    _this.inputRef = React__default.createRef();
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
        return React__default.createElement(Chip, {
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleBackspace
      }), renderedChips, React__default.createElement("input", {
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
}(React.Component);

ChipsInput.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  placeholder: PropTypes__default.string,
  secondaryPlaceholder: PropTypes__default.string,
  chipSize: PropTypes__default.string,
  chipColor: PropTypes__default.string,
  chipText: PropTypes__default.string,
  chipGradient: PropTypes__default.string
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes,
        style: {
          cursor: "pointer"
        }
      }), React__default.createElement("a", {
        href: "#!"
      }, React__default.createElement(Tag, {
        className: "mb-0"
      }, children)));
    }
  }]);

  return CollapseHeader;
}(React__default.Component);

CollapseHeader.defaultProps = {
  tag: "h5"
};
CollapseHeader.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  tag: PropTypes__default.string,
  triggerOnClick: PropTypes__default.func
};

var css$a = "/* fallback */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n";
styleInject(css$a);

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDateChange", function (date) {
      _this.setState({
        selectedDate: date ? date._d : _this.props.value
      });
    });

    _this.state = {
      selectedDate: props.value || props.valueDefault,
      muiTheme: core.createMuiTheme(_objectSpread({}, props.theme, {
        typography: {
          useNextVariants: true
        }
      }))
    };
    return _this;
  }

  _createClass(DatePicker, [{
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
          muiTheme: core.createMuiTheme(this.props.theme)
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
      return React__default.createElement(Tag, {
        className: classes
      }, React__default.createElement(core.MuiThemeProvider, {
        theme: this.state.muiTheme
      }, React__default.createElement(materialUiPickers.MuiPickersUtilsProvider, {
        locale: locale,
        moment: moment,
        utils: MomentUtils
      }, React__default.createElement(materialUiPickers.DatePicker, _extends({}, attributes, {
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

  return DatePicker;
}(React.Component);

DatePicker.propTypes = {
  theme: PropTypes__default.object,
  adornmentPosition: PropTypes__default.string,
  allowKeyboardControl: PropTypes__default.bool,
  animateYearScrolling: PropTypes__default.bool,
  autoOk: PropTypes__default.bool,
  cancelLabel: PropTypes__default.node,
  clearable: PropTypes__default.bool,
  clearLabel: PropTypes__default.node,
  disableFuture: PropTypes__default.object,
  disableOpenOnEnter: PropTypes__default.bool,
  disablePast: PropTypes__default.bool,
  emptyLabel: PropTypes__default.string,
  initialFocusedDate: PropTypes__default.string,
  InputAdornmentProps: PropTypes__default.object,
  invalidDateMessage: PropTypes__default.node,
  invalidLabel: PropTypes__default.string,
  keyboard: PropTypes__default.bool,
  keyboardIcon: PropTypes__default.node,
  leftArrowIcon: PropTypes__default.node,
  mask: PropTypes__default.any,
  maxDate: PropTypes__default.string,
  maxDateMessage: PropTypes__default.node,
  minDate: PropTypes__default.string,
  minDateMessage: PropTypes__default.node,
  okLabel: PropTypes__default.node,
  onInputChange: PropTypes__default.func,
  openToYearSelection: PropTypes__default.bool,
  rightArrowIcon: PropTypes__default.node,
  showTodayButton: PropTypes__default.bool,
  TextFieldComponent: PropTypes__default.string,
  todayLabel: PropTypes__default.string,
  locale: PropTypes__default.string,
  format: PropTypes__default.string,
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  getValue: PropTypes__default.func,
  value: PropTypes__default.instanceOf(Date),
  valueDefault: PropTypes__default.instanceOf(Date)
};
DatePicker.defaultProps = {
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
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: "card-wrapper"
  }), React__default.createElement(InnerTag, {
    className: classes
  }, props.children));
}

RotatingCard.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  innerTag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  flipped: PropTypes__default.bool
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
      return React__default.createElement("form", null, React__default.createElement("div", {
        className: "file-field md-form"
      }, React__default.createElement("div", {
        className: btnClass
      }, React__default.createElement("span", null, btnTitle), React__default.createElement("input", {
        multiple: multiple,
        onChange: this.onChangeHandler,
        type: "file"
      })), React__default.createElement("div", {
        className: "file-path-wrapper"
      }, React__default.createElement("input", {
        className: inputFieldClass,
        type: "text",
        placeholder: this.state.files ? this.state.files : textFieldTitle
      }))));
    }
  }]);

  return InputFile;
}(React__default.Component);

InputFile.propTypes = {
  className: PropTypes__default.string,
  btnTitle: PropTypes__default.string,
  btnColor: PropTypes__default.string,
  textFieldTitle: PropTypes__default.string,
  multiple: PropTypes__default.bool
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
    _this.inputRef = React__default.createRef();
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
      return React__default.createElement("form", {
        className: formClass
      }, React__default.createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        value: this.state.value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseLeave: this.rangeMouseLeave
      }), React__default.createElement("span", {
        className: thumbClass,
        style: {
          left: this.state.leftPosition,
          height: this.state.thumbHeight,
          width: this.state.thumbWidth,
          top: this.state.thumbTop,
          marginLeft: this.state.thumbMarginLeft
        }
      }, React__default.createElement("span", {
        className: "value"
      }, this.state.value)));
    }
  }]);

  return InputRange;
}(React__default.Component);

InputRange.propTypes = {
  className: PropTypes__default.string,
  min: PropTypes__default.number,
  max: PropTypes__default.number,
  value: PropTypes__default.number,
  getValue: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.bool])
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), React__default.createElement("label", null, labelLeft, React__default.createElement("input", {
        disabled: this.props.disabled,
        value: this.state.value,
        checked: this.state.value,
        onChange: function onChange(event) {
          return _this2.handleChange(event);
        },
        type: "checkbox"
      }), React__default.createElement("span", {
        className: "lever"
      }), labelRight));
    }
  }]);

  return InputSwitch;
}(React__default.Component);

InputSwitch.propTypes = {
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  checked: PropTypes__default.bool,
  getValue: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.bool]),
  labelLeft: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]),
  labelRight: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object])
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
      return React__default.createElement("div", {
        className: "scrollbar-container ".concat(className),
        ref: this.handleRef
      }, children);
    }
  }]);

  return ScrollBar;
}(React.Component);

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
  children: PropTypes.PropTypes.node.isRequired,
  className: PropTypes.PropTypes.string,
  option: PropTypes.PropTypes.object,
  containerRef: PropTypes.PropTypes.func,
  onScrollY: PropTypes.PropTypes.func,
  onScrollX: PropTypes.PropTypes.func,
  onScrollUp: PropTypes.PropTypes.func,
  onScrollDown: PropTypes.PropTypes.func,
  onScrollLeft: PropTypes.PropTypes.func,
  onScrollRight: PropTypes.PropTypes.func,
  onYReachStart: PropTypes.PropTypes.func,
  onYReachEnd: PropTypes.PropTypes.func,
  onXReachStart: PropTypes.PropTypes.func,
  onXReachEnd: PropTypes.PropTypes.func
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ScrollBox;
}(React.Component);

ScrollBox.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node
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
      return React__default.createElement("ul", _extends({}, attributes, {
        role: "navigation",
        className: classes
      }), children);
    }
  }]);

  return ScrollSpyList;
}(React.Component);

ScrollSpyList.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  color: PropTypes__default.string
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
      return React__default.createElement("li", {
        className: "nav-item"
      }, React__default.createElement("a", _extends({}, attributes, {
        className: classes,
        role: "tab"
      }), children));
    }
  }]);

  return ScrollSpyListItem;
}(React.Component);

ScrollSpyListItem.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  active: PropTypes__default.bool
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
      return React__default.createElement("div", _extends({}, attributes, {
        ref: this.props.scrollSpyRef,
        className: classes
      }), children);
    }
  }]);

  return ScrollSpyText;
}(React.Component);

ScrollSpyText.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  scrollSpyRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.object])
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
      var overlay = React__default.createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: {
          backgroundImage: "url(".concat(bg)
        }
      }), React__default.createElement("ul", {
        className: "custom-scrollbar list-unstyled"
      }, logo && React__default.createElement("li", null, React__default.createElement("div", {
        className: "logo-wrapper"
      }, React__default.createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, React__default.createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })))), children), mask && React__default.createElement("div", {
        className: "sidenav-bg mask-".concat(mask)
      }));
      return React__default.createElement("div", null, React__default.createElement(reactTransitionGroup.CSSTransition, {
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
}(React__default.Component);

SideNav.propTypes = {
  bg: PropTypes__default.string,
  breakWidth: PropTypes__default.number,
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  hidden: PropTypes__default.bool,
  href: PropTypes__default.string,
  logo: PropTypes__default.string,
  mask: PropTypes__default.string,
  onOverlayClick: PropTypes__default.func,
  right: PropTypes__default.bool,
  triggerOpening: PropTypes__default.bool,
  tag: PropTypes__default.string
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
      return React__default.createElement(Tag, null, React__default.createElement("a", _extends({
        className: classes,
        onClick: function onClick(e) {
          return _this2.handleClick(e, id);
        }
      }, attributes), icon && React__default.createElement(Fa, {
        icon: icon,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        size: iconSize,
        className: "mr-2"
      }), name, React__default.createElement(Fa, {
        icon: "angle-down",
        className: "rotate-icon"
      }), React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })), React__default.createElement(Collapse, {
        id: id,
        isOpen: this.state.isOpenID
      }, React__default.createElement("div", {
        className: "collapsible-body",
        style: {
          display: "block"
        }
      }, React__default.createElement("ul", null, children))));
    }
  }]);

  return SideNavCat;
}(React__default.Component);

_defineProperty(SideNavCat, "displayName", "SideNavCat");

SideNavCat.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  id: PropTypes__default.string,
  isOpen: PropTypes__default.bool,
  isOpenID: PropTypes__default.string,
  name: PropTypes__default.string,
  onClick: PropTypes__default.func,
  tag: PropTypes__default.string
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
      return React__default.createElement(Tag, _extends({
        className: classes,
        ref: innerRef,
        onClick: this.handleClick
      }, attributes), React__default.createElement("a", {
        className: classes,
        href: href
      }, children, React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      })));
    }
  }]);

  return SideNavItem;
}(React__default.Component);

SideNavItem.propTypes = {
  children: PropTypes__default.node,
  href: PropTypes__default.string,
  tag: PropTypes__default.string,
  innerRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
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
      var sideNavLink = React__default.createElement(reactRouterDom.NavLink, _extends({
        className: classes,
        ref: innerRef,
        onClick: this.handleClick,
        to: to
      }, attributes), children, React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
      return topLevel ? React__default.createElement("li", null, " ", sideNavLink) : sideNavLink;
    }
  }]);

  return SideNavLink;
}(React__default.Component);

SideNavLink.propTypes = {
  children: PropTypes__default.node,
  href: PropTypes__default.string,
  tag: PropTypes__default.string,
  innerRef: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string,
  topLevel: PropTypes__default.bool
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
      var modified = React__default.Children.map(this.props.children, function (child, i) {
        if (child.type.displayName === "SideNavCat") {
          return React__default.cloneElement(child, {
            onClick: _this2.onClick(i),
            isOpen: accordion === i
          });
        } else {
          return child;
        }
      });
      return React__default.createElement("li", null, React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), modified));
    }
  }]);

  return SideNavNav;
}(React__default.Component);

SideNavNav.propTypes = {
  children: PropTypes__default.node,
  tag: PropTypes__default.string,
  className: PropTypes__default.string
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
  return React__default.createElement("svg", {
    className: "react-chart ".concat(props.type),
    width: props.width,
    style: _objectSpread({
      overflow: 'visible',
      border: props.border
    }, props.style),
    height: props.height
  }, React__default.createElement("circle", {
    cx: center,
    cy: center,
    r: radius,
    fill: props.fillColor,
    stroke: props.railColor,
    strokeWidth: props.strokeWidth
  }), React__default.createElement("path", {
    fill: props.fillColor,
    stroke: props.strokeColor,
    strokeWidth: props.strokeWidth,
    d: arc
  }), React__default.createElement("text", {
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
  width: PropTypes__default.number,
  height: PropTypes__default.number,
  strokeWidth: PropTypes__default.number,
  strokeColor: PropTypes__default.string,
  labelFontWeight: PropTypes__default.string,
  labelFontSize: PropTypes__default.string,
  fillColor: PropTypes__default.string,
  startAngle: PropTypes__default.number,
  endAngle: PropTypes__default.number,
  radius: PropTypes__default.number,
  style: PropTypes__default.object
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
        var theSpinnerItself = React__default.createElement("div", null, React__default.createElement("div", {
          className: "spinner-layer spinner-blue"
        }, React__default.createElement("div", {
          className: "circle-clipper left"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "gap-patch"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "circle-clipper right"
        }, React__default.createElement("div", {
          className: "circle"
        }))), React__default.createElement("div", {
          className: "spinner-layer spinner-red"
        }, React__default.createElement("div", {
          className: "circle-clipper left"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "gap-patch"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "circle-clipper right"
        }, React__default.createElement("div", {
          className: "circle"
        }))), React__default.createElement("div", {
          className: "spinner-layer spinner-yellow"
        }, React__default.createElement("div", {
          className: "circle-clipper left"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "gap-patch"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "circle-clipper right"
        }, React__default.createElement("div", {
          className: "circle"
        }))), React__default.createElement("div", {
          className: "spinner-layer spinner-green"
        }, React__default.createElement("div", {
          className: "circle-clipper left"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "gap-patch"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "circle-clipper right"
        }, React__default.createElement("div", {
          className: "circle"
        }))));
        return theSpinnerItself;
      } else {
        var _theSpinnerItself = React__default.createElement("div", {
          className: spinnerClasses
        }, React__default.createElement("div", {
          className: "circle-clipper left"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "gap-patch"
        }, React__default.createElement("div", {
          className: "circle"
        })), React__default.createElement("div", {
          className: "circle-clipper right"
        }, React__default.createElement("div", {
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
        return React__default.createElement("div", {
          className: wrapperClasses
        }, React__default.createElement("div", {
          className: wrapperClasses
        }, React__default.createElement("div", {
          className: wrapperClasses
        }, React__default.createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses)))));
      } else {
        return React__default.createElement("div", {
          className: wrapperClasses
        }, this.theChosenColorSpinner(spinnerClasses));
      }
    }
  }]);

  return Spinner;
}(React.Component);

Spinner.propTypes = {
  className: PropTypes__default.string,
  big: PropTypes__default.bool,
  small: PropTypes__default.bool,
  crazy: PropTypes__default.bool,
  red: PropTypes__default.bool,
  green: PropTypes__default.bool,
  yellow: PropTypes__default.bool,
  multicolor: PropTypes__default.bool
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
        step = React__default.createElement(Tag, {
          className: stepClass
        }, this.props.children);
      } else if (icon && !vertical) {
        step = React__default.createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, React__default.createElement(Tooltip, {
          placement: "top",
          componentClass: "btn btn-circle-2 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, React__default.createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), React__default.createElement(Waves, {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else if (icon && vertical) {
        step = React__default.createElement(Tag, {
          className: stepClass,
          onClick: this.props.onClick
        }, React__default.createElement(Tooltip, {
          placement: "top",
          componentClass: "btn btn-circle-3 btn-blue-grey waves-effect",
          tag: "a",
          type: "button",
          component: "div",
          tooltipContent: stepName
        }, React__default.createElement("i", {
          className: iconClass,
          onTouchStart: this.handleClick.bind(this),
          onMouseDown: this.handleClick.bind(this)
        }), React__default.createElement(Waves, {
          cursorPos: this.state.cursorPos,
          dark: true
        })));
      } else {
        step = React__default.createElement("li", {
          className: stepClass
        }, this.props.children);
      }

      return step;
    }
  }]);

  return Step;
}(React__default.Component);

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
        stepper = React__default.createElement("div", {
          className: stepperClass
        }, React__default.createElement("div", {
          className: wrapperFix
        }, this.props.children));
      } else {
        stepper = React__default.createElement("ul", {
          className: stepperClass
        }, this.props.children);
      }

      return stepper;
    }
  }]);

  return Stepper;
}(React__default.Component);

Stepper.propTypes = {
  vertical: PropTypes__default.bool,
  form: PropTypes__default.bool,
  icon: PropTypes__default.bool,
  children: PropTypes__default.node,
  className: PropTypes__default.string
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
      return React__default.createElement("div", {
        className: wrapperClasses
      }, React__default.createElement("span", {
        onClick: this.addRow,
        className: "table-add float-right mb-3 mr-2"
      }, React__default.createElement("a", {
        href: "#!",
        className: "text-success"
      }, React__default.createElement(Fa, {
        icon: "plus",
        size: "2x"
      }))), React__default.createElement("table", _extends({}, attributes, {
        className: classes
      }), React__default.createElement("thead", null, React__default.createElement("tr", null, this.props.columns && this.props.columns.map(function (th, i) {
        return React__default.createElement("th", {
          key: i
        }, th);
      }), React__default.createElement("th", null, "Sort "), React__default.createElement("th", null, "Delete "))), React__default.createElement("tbody", null, this.state.data.map(function (tr, trIndex) {
        return React__default.createElement("tr", {
          key: trIndex
        }, tr.map(function (td, tdIndex) {
          return React__default.createElement("td", {
            key: tdIndex,
            contentEditable: true,
            suppressContentEditableWarning: "true",
            onBlur: function onBlur(e) {
              return _this2.onBlurHandler(trIndex, tdIndex, e);
            }
          }, td);
        }), React__default.createElement("td", null, React__default.createElement("span", {
          onClick: function onClick() {
            return _this2.decreaseIndex(trIndex);
          },
          className: "table-up"
        }, React__default.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React__default.createElement(Fa, {
          icon: "long-arrow-alt-up"
        }))), React__default.createElement("span", {
          onClick: function onClick() {
            return _this2.increaseIndex(trIndex);
          },
          className: "table-down"
        }, React__default.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React__default.createElement(Fa, {
          icon: "long-arrow-alt-down"
        })))), React__default.createElement("td", null, React__default.createElement("span", {
          onClick: function onClick() {
            return _this2.removeRow(trIndex);
          },
          className: "table-remove"
        }, React__default.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-rounded btn-sm my-0"
        }, "Remove"))));
      }))));
    }
  }]);

  return TableEditable;
}(React__default.Component);

TableEditable.propTypes = {
  className: PropTypes__default.string,
  small: PropTypes__default.bool,
  bordered: PropTypes__default.bool,
  striped: PropTypes__default.bool,
  hover: PropTypes__default.bool,
  data: PropTypes__default.array,
  columns: PropTypes__default.array,
  children: PropTypes__default.node,
  responsive: PropTypes__default.bool,
  responsiveSm: PropTypes__default.bool,
  responsiveMd: PropTypes__default.bool,
  responsiveLg: PropTypes__default.bool,
  responsiveXl: PropTypes__default.bool
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
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React__default.Component);

TabPane.contextTypes = {
  activeItemId: PropTypes__default.any
};
TabPane.propTypes = {
  tabId: PropTypes__default.any,
  className: PropTypes__default.string
};

var propTypes$1 = {
  activeItem: PropTypes__default.any,
  tabId: PropTypes__default.any,
  className: PropTypes__default.string
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
      return React__default.createElement("div", _extends({}, attributes, {
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
}(React__default.Component);

TabContent.childContextTypes = {
  activeItemId: PropTypes__default.any
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

      var element = React__default.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = ReactDOM__default.findDOMNode(content);
        }
      });
      return React__default.createElement("div", null, React__default.createElement("div", {
        ref: function ref(placeholder) {
          return _this2.placeholder = placeholder;
        }
      }), element);
    }
  }]);

  return Sticky;
}(React.Component);

_defineProperty(Sticky, "propTypes", {
  topOffset: PropTypes__default.number,
  bottomOffset: PropTypes__default.number,
  relative: PropTypes__default.bool,
  children: PropTypes__default.func.isRequired
});

_defineProperty(Sticky, "defaultProps", {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
});

_defineProperty(Sticky, "contextTypes", {
  subscribe: PropTypes__default.func,
  unsubscribe: PropTypes__default.func,
  getParent: PropTypes__default.func
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

      return React__default.createElement("div", _extends({}, this.props, {
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
}(React.PureComponent);

_defineProperty(Container$1, "childContextTypes", {
  subscribe: PropTypes__default.func,
  unsubscribe: PropTypes__default.func,
  getParent: PropTypes__default.func
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
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Testimonial;
}(React.Component);

Testimonial.propTypes = {
  tag: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.string]),
  className: PropTypes__default.string
};
Testimonial.defaultProps = {
  tag: "div"
};

var css$g = "@media (max-width: 1025px) {\n  .stepper.timeline li {\n    -webkit-box-align: end;\n    -webkit-align-items: flex-end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n}\n\n.stepper.timeline li a {\n  padding: 0px 24px;\n  left: 50%;\n}\n@media (max-width: 450px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li a {\n    left: 6%;\n  }\n}\n.stepper.timeline li a .circle {\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  margin-left: -50px;\n  background-color: #fff;\n  z-index: 2;\n}\n\n.stepper.timeline li .step-content {\n  width: 45%;\n  float: left;\n  border-radius: 2px;\n  position: relative;\n  background-color: #fff;\n}\n.stepper.timeline li .step-content:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #e0e0e0;\n  border-right: 0 solid #e0e0e0;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n.stepper.timeline li .step-content:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #fff;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n@media (max-width: 450px) {\n  .stepper.timeline li .step-content {\n    width: 80%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline li .step-content {\n    width: 85%;\n    left: 3rem;\n    margin-right: 3rem;\n    margin-bottom: 2rem;\n    float: right;\n  }\n  .stepper.timeline li .step-content:before {\n    border-left-width: 0;\n    border-right-width: 15px;\n    left: -15px;\n    right: auto;\n  }\n  .stepper.timeline li .step-content:after {\n    border-left-width: 0;\n    border-right-width: 14px;\n    left: -14px;\n    right: auto;\n  }\n}\n\n.stepper.timeline li.timeline-inverted {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n.stepper.timeline li.timeline-inverted .step-content {\n  float: right;\n}\n.stepper.timeline li.timeline-inverted .step-content:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n.stepper.timeline li.timeline-inverted .step-content:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.stepper.timeline.stepper-vertical li:not(:last-child):after {\n  content: \" \";\n  position: absolute;\n  width: 3px;\n  background-color: #e0e0e0;\n  left: 50%;\n  top: 57px;\n  margin-left: -1.5px;\n}\n@media (max-width: 450px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n@media (min-width: 451px) and (max-width: 1025px) {\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\n    left: 6%;\n  }\n}\n";
styleInject(css$g);

var Timeline = function Timeline(props) {
  var children = props.children;
  return React__default.createElement("ul", {
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
  return React__default.createElement("li", {
    className: liClasses
  }, React__default.createElement("a", {
    href: href
  }, React__default.createElement("span", {
    className: circleClasses
  }, icon && React__default.createElement(Fa, {
    icon: icon,
    size: iconSize,
    brand: iconBrand,
    light: iconLight,
    regular: iconRegular,
    className: iconClass
  }), label)), React__default.createElement("div", {
    className: stepContentClasses
  }, children));
};

TimelineStep.propTypes = {
  href: PropTypes__default.string,
  color: PropTypes__default.string,
  size: PropTypes__default.string,
  icon: PropTypes__default.string,
  iconBrand: PropTypes__default.bool,
  iconClass: PropTypes__default.string,
  iconLight: PropTypes__default.bool,
  iconRegular: PropTypes__default.bool,
  iconSize: PropTypes__default.string,
  className: PropTypes__default.string
};
TimelineStep.defaultProps = {
  href: "#"
};

var css$h = ".time-picker-clock {\n  border-radius: 100%;\n  position: relative;\n  /* transition: 0.3s cubic-bezier(.25,.8,.50,1); */\n  user-select: none;\n  background: #f0f0f0;\n  animation: show-up-clock 0.2s linear;\n}\n@keyframes show-up-clock {\n  0% {\n    opacity: 0;\n    transform: scale(0.7);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.time-picker-clock__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.time-picker-clock__hand {\n  height: calc(50% - 28px);\n  width: 2px;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n  will-change: transform;\n  z-index: 1;\n  background-color: rgba(0, 150, 136, 0.25);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring {\n  background-color: rgba(0, 150, 136, 0.25);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 2.5rem;\n  height: 2.5rem;\n  content: \"\";\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand.between .time-picker-clock__hand--ring:before {\n  background-color: rgba(0, 77, 64, 0.75);\n  border-color: inherit;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.time-picker-clock__hand:after {\n  content: \"\";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  top: 100%;\n  left: 50%;\n  border-radius: 50%;\n  background-color: rgba(0, 77, 64, 0.75);\n  opacity: 0.75;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 1rem;\n  line-height: 1.2;\n  justify-content: center;\n  left: calc(50% - 40px / 2);\n  height: 40px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 40px / 2);\n  width: 40px;\n  user-select: none;\n}\n.time-picker-clock > span:hover,\n.time-picker-clock > span.active:hover {\n  cursor: pointer;\n}\n.time-picker-clock > span:active:hover,\n.time-picker-clock > span.active:active:hover {\n  cursor: move;\n}\n.time-picker-clock:active:hover {\n  cursor: move;\n}\n.time-picker-clock > span > span {\n  z-index: 1;\n}\n\n.time-picker-clock > span:before,\n.time-picker-clock > span:after {\n  content: \"\";\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate(-50%, -50%);\n}\n.time-picker-clock > span > span:after,\n.time-picker-clock > span > span:before {\n  height: 40px;\n  width: 40px;\n}\n.time-picker-clock > span.active {\n  color: #fff;\n  cursor: default;\n  z-index: 2;\n  background: blue;\n}\n.time-picker-clock > span > span.disabled {\n  pointer-events: none;\n}\n\n.picker__footer .clockpicker-button {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n";
styleInject(css$h);

var propTypes$2 = {
  color: PropTypes__default.string.isRequired,
  hours: PropTypes__default.string.isRequired,
  minutes: PropTypes__default.string.isRequired,
  dayTime: PropTypes__default.string.isRequired,
  unitsMode: PropTypes__default.string.isRequired,
  handleModeChange: PropTypes__default.func.isRequired,
  hoursFormat: PropTypes__default.number.isRequired
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
  return React__default.createElement("div", {
    className: displayClasses
  }, React__default.createElement("div", {
    className: "clockpicker-display"
  }, React__default.createElement("div", {
    className: "clockpicker-display-column"
  }, React__default.createElement("span", {
    className: hourClasses,
    onClick: function onClick() {
      return handleModeChange('h');
    }
  }, hours !== '' ? hours : "--"), ":", React__default.createElement("span", {
    className: minuteClasses,
    onClick: function onClick() {
      return handleModeChange('m');
    }
  }, minutes !== '' ? minutes : "--")), hoursFormat === 12 && React__default.createElement("div", {
    className: "clockpicker-display-column clockpicker-display-am-pm"
  }, React__default.createElement("div", {
    className: "clockpicker-span-am-pm"
  }, dayTime.toUpperCase()))));
};

TimePickerDisplay.propTypes = propTypes$2;

var propTypes$3 = {
  angle: PropTypes__default.number.isRequired,
  color: PropTypes__default.string.isRequired,
  scale: PropTypes__default.number.isRequired
};

var TimpiePickerClockHand = function TimpiePickerClockHand(_ref) {
  var angle = _ref.angle,
      between = _ref.between,
      color = _ref.color,
      scale = _ref.scale;
  var classes = classNames('time-picker-clock__hand', color, between && 'between');
  return React__default.createElement("div", {
    className: classes,
    style: {
      transform: "rotate(".concat(angle, "deg)"),
      height: "calc((50% - 28px) * ".concat(scale, ")")
    }
  }, React__default.createElement("div", {
    className: "time-picker-clock__hand--ring"
  }));
};

TimpiePickerClockHand.propTypes = propTypes$3;

var propTypes$4 = {
  className: PropTypes__default.string.isRequired,
  handleChange: PropTypes__default.func.isRequired,
  max: PropTypes__default.number.isRequired,
  min: PropTypes__default.number.isRequired,
  rotate: PropTypes__default.number.isRequired,
  step: PropTypes__default.number.isRequired,
  startFromInner: PropTypes__default.bool.isRequired,
  allowedValues: PropTypes__default.arrayOf(PropTypes__default.number),
  autoSwitch: PropTypes__default.bool,
  color: PropTypes__default.string,
  double: PropTypes__default.bool,
  handleModeChange: PropTypes__default.func,
  size: PropTypes__default.number,
  value: PropTypes__default.number
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
        children.push(React__default.createElement("span", {
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
    _this.clockRef = React__default.createRef();
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
      return React__default.createElement("div", {
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
      }, React__default.createElement(TimpiePickerClockHand, {
        between: this.state.value % this.props.step !== 0,
        color: this.props.color,
        angle: this.state.handAngle,
        scale: this.state.handScale
      }), this.genClockDigits());
    }
  }]);

  return TimePickerClock;
}(React.Component);

TimePickerClock.propTypes = propTypes$4;
TimePickerClock.defaultProps = defaultProps$1;

var propTypes$5 = {
  color: PropTypes__default.string.isRequired,
  dayTime: PropTypes__default.string.isRequired,
  handleDayTimeChange: PropTypes__default.func.isRequired
};

var TimePickerAmPmBlock = function TimePickerAmPmBlock(_ref) {
  var color = _ref.color,
      dayTime = _ref.dayTime,
      handleDayTimeChange = _ref.handleDayTimeChange;
  var classesAM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'am-button', dayTime === 'am' && 'active', "btn-".concat(color));
  var classesPM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', dayTime === 'pm' && 'active', "btn-".concat(color));
  return React__default.createElement("div", {
    className: "clockpicker-am-pm-block d-flex justify-content-between"
  }, React__default.createElement("button", {
    type: "button",
    className: classesAM,
    onClick: function onClick() {
      return handleDayTimeChange('am');
    }
  }, "AM"), React__default.createElement("button", {
    type: "button",
    className: classesPM,
    onClick: function onClick() {
      return handleDayTimeChange('pm');
    }
  }, "PM"));
};

TimePickerAmPmBlock.propTypes = propTypes$5;

var propTypes$6 = {
  cancelable: PropTypes__default.bool.isRequired,
  cancelText: PropTypes__default.string.isRequired,
  clearable: PropTypes__default.bool.isRequired,
  clearText: PropTypes__default.string.isRequired,
  doneText: PropTypes__default.string.isRequired,
  handleCancelClick: PropTypes__default.func.isRequired,
  handleClearClick: PropTypes__default.func.isRequired,
  handleDoneClick: PropTypes__default.func.isRequired
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
  return React__default.createElement("div", {
    className: "picker__footer"
  }, clearable && React__default.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleClearClick
  }, clearText), cancelable && React__default.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleCancelClick
  }, cancelText), React__default.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleDoneClick
  }, doneText));
};

TimePickerFooter.propTypes = propTypes$6;

var propTypes$7 = {
  id: PropTypes__default.string.isRequired,
  allowedValues: PropTypes__default.arrayOf(PropTypes__default.number),
  autoSwitch: PropTypes__default.bool,
  cancelable: PropTypes__default.bool,
  cancelText: PropTypes__default.string,
  clearable: PropTypes__default.bool,
  clearText: PropTypes__default.string,
  closeOnCancel: PropTypes__default.bool,
  color: PropTypes__default.string,
  doneText: PropTypes__default.string,
  getValue: PropTypes__default.func,
  hours: PropTypes__default.number,
  hoursFormat: PropTypes__default.number,
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number, PropTypes__default.object]),
  minutes: PropTypes__default.number,
  placeholder: PropTypes__default.string,
  startFromInner: PropTypes__default.bool
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
      return React__default.createElement("div", {
        className: "md-form"
      }, React__default.createElement("input", {
        type: "text",
        placeholder: placeholder,
        id: id,
        className: inputClasses,
        value: value,
        onClick: this.handlePickerDialogOpen,
        readOnly: true
      }), React__default.createElement("label", {
        htmlFor: id,
        className: "active"
      }, label), pickerDialogOpen && React__default.createElement("div", {
        className: clockClasses
      }, React__default.createElement("div", {
        className: "picker__holder",
        onClick: this.handleBackdropClick
      }, React__default.createElement("div", {
        className: "picker__frame"
      }, React__default.createElement("div", {
        className: "picker__wrap"
      }, React__default.createElement("div", {
        className: "picker__box"
      }, React__default.createElement(TimePickerDisplay, {
        color: color,
        hours: computedHours,
        minutes: computedMinutes,
        dayTime: dayTime,
        unitsMode: unitsMode,
        handleModeChange: this.handleModeChange,
        hoursFormat: hoursFormat
      }), React__default.createElement("div", {
        className: "picker__calendar-container"
      }, React__default.createElement("div", {
        className: "clockpicker-plate"
      }, unitsMode === 'h' ? React__default.createElement(TimePickerClock, {
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
      }) : React__default.createElement(TimePickerClock, {
        className: minutesClasses,
        color: color,
        handleChange: this.handleMinutesChange,
        min: 0,
        max: 59,
        step: 5,
        rotate: 0,
        startFromInner: startFromInner,
        value: minutes
      })), hoursFormat === 12 && React__default.createElement(TimePickerAmPmBlock, {
        color: color,
        dayTime: dayTime,
        handleDayTimeChange: this.handleDayTimeChange
      })), React__default.createElement(TimePickerFooter, {
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
}(React.Component);

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
  return React__default.createElement("div", {
    className: wrapperClasses,
    style: {
      backgroundImage: "url(\"".concat(photo, "\")"),
      backgroundAttachment: "fixed"
    }
  }, React__default.createElement("div", {
    className: overlayClasses
  }, React__default.createElement("ul", {
    className: "mb-0 list-unstyled"
  }, React__default.createElement("li", null, React__default.createElement("h2", {
    className: quoteClasses
  }, React__default.createElement(Fa, {
    icon: "quote-left"
  }), " ", children, " ", React__default.createElement(Fa, {
    icon: "quote-right"
  }))), React__default.createElement("li", {
    className: "mb-0"
  }, React__default.createElement("h5", {
    className: byClasses
  }, "~ ", by)))));
};

MDBStreak.propTypes = {
  size: PropTypes__default.oneOf(['lg', 'md']),
  by: PropTypes__default.string,
  wrapperClass: PropTypes__default.string,
  byClass: PropTypes__default.string,
  quoteClass: PropTypes__default.string,
  photo: PropTypes__default.string,
  overlayClass: PropTypes__default.string
};
MDBStreak.defaultProps = {
  wrapperClass: "grey lighten-3"
};

// FREE

exports.cssTransition = reactToastify.cssTransition;
exports.toast = reactToastify.toast;
exports.ToastContainer = reactToastify.ToastContainer;
exports.Animation = Animation;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonToolbar = ButtonToolbar;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardGroup = CardGroup;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel;
exports.CarouselCaption = CarouselCaption;
exports.CarouselControl = Control;
exports.CarouselInner = CarouselInner;
exports.CarouselItem = CarouselItem;
exports.CarouselIndicators = CarouselIndicators;
exports.CarouselIndicator = CarouselIndicator;
exports.Col = Col;
exports.Collapse = Collapse;
exports.Container = Container;
exports.DataTable = DataTable;
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.DropdownMenu = DropdownMenu;
exports.DropdownToggle = DropdownToggle;
exports.EdgeHeader = EdgeHeader;
exports.Fa = Fa;
exports.FormInline = FormInline;
exports.Footer = Footer;
exports.FreeBird = FreeBird;
exports.HamburgerToggler = HamburgerToggler;
exports.Input = Input;
exports.InputNumeric = InputNumeric;
exports.Jumbotron = Jumbotron;
exports.ListGroup = ListGroup;
exports.ListGroupItem = ListGroupItem;
exports.Mask = Mask;
exports.Media = Media;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Nav = Nav;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarNav = NavbarNav;
exports.NavbarToggler = NavbarToggler;
exports.NavItem = NavItem;
exports.NavLink = NavLink;
exports.Pagination = Pagination;
exports.PageItem = PageItem;
exports.PageLink = PageLink;
exports.Popover = Popover;
exports.PopoverBody = PopoverBody;
exports.PopoverHeader = PopoverHeader;
exports.Progress = Progress;
exports.Waves = Waves;
exports.Row = Row;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableHead = TableHead;
exports.TableFoot = TableFoot;
exports.Tooltip = Tooltip;
exports.View = View;
exports.Iframe = Iframe;
exports.Autocomplete = Autocomplete;
exports.Avatar = Avatar;
exports.ButtonFixed = ButtonFixed;
exports.ButtonFixedItem = ButtonFixed$1;
exports.CardUp = CardUp;
exports.Chip = Chip;
exports.ChipsInput = ChipsInput;
exports.CollapseHeader = CollapseHeader;
exports.DatePicker = DatePicker;
exports.ExportToCSV = ExportToCSV;
exports.FlippingCard = RotatingCard;
exports.InputFile = InputFile;
exports.InputRange = InputRange;
exports.InputSwitch = InputSwitch;
exports.LightboxStyles = css$c;
exports.PerfectScrollbar = ScrollBar;
exports.ScrollSpyBox = ScrollBox;
exports.ScrollSpyList = ScrollSpyList;
exports.ScrollSpyListItem = ScrollSpyListItem;
exports.ScrollSpyText = ScrollSpyText;
exports.SideNav = SideNav;
exports.SideNavCat = SideNavCat;
exports.SideNavItem = SideNavItem;
exports.SideNavLink = SideNavLink;
exports.SideNavNav = SideNavNav;
exports.SimpleChart = SimpleChart;
exports.Select = Select;
exports.SelectInput = SelectInput;
exports.SelectOptions = Options;
exports.SelectOption = SelectOption;
exports.Spinner = Spinner;
exports.Step = Step;
exports.Stepper = Stepper;
exports.TableEditable = TableEditable;
exports.TabPane = TabPane;
exports.TabContent = TabContent;
exports.Sticky = Sticky;
exports.StickyContainer = Container$1;
exports.Testimonial = Testimonial;
exports.Timeline = Timeline;
exports.TimelineStep = TimelineStep;
exports.TimePicker = TimePicker;
exports.MDBIframe = Iframe;
exports.MDBAnimation = Animation;
exports.MDBBadge = Badge;
exports.MDBAlert = Alert;
exports.MDBBreadcrumb = Breadcrumb;
exports.MDBBreadcrumbItem = BreadcrumbItem;
exports.MDBBtn = Button;
exports.MDBBtnGroup = ButtonGroup;
exports.MDBBtnToolbar = ButtonToolbar;
exports.MDBCard = Card;
exports.MDBCardBody = CardBody;
exports.MDBCardFooter = CardFooter;
exports.MDBCardGroup = CardGroup;
exports.MDBCardHeader = CardHeader;
exports.MDBCardImage = CardImage;
exports.MDBCardText = CardText;
exports.MDBCardTitle = CardTitle;
exports.MDBCarousel = Carousel;
exports.MDBCarouselCaption = CarouselCaption;
exports.MDBControl = Control;
exports.MDBCarouselInner = CarouselInner;
exports.MDBCarouselItem = CarouselItem;
exports.MDBCarouselIndicators = CarouselIndicators;
exports.MDBCarouselIndicator = CarouselIndicator;
exports.MDBCol = Col;
exports.MDBCollapse = Collapse;
exports.MDBContainer = Container;
exports.MDBDataTable = DataTable;
exports.MDBDropdown = Dropdown;
exports.MDBDropdownItem = DropdownItem;
exports.MDBDropdownMenu = DropdownMenu;
exports.MDBDropdownToggle = DropdownToggle;
exports.MDBEdgeHeader = EdgeHeader;
exports.MDBFormInline = FormInline;
exports.MDBFooter = Footer;
exports.MDBFreeBird = FreeBird;
exports.MDBHamburgerToggler = HamburgerToggler;
exports.MDBIcon = Fa;
exports.MDBInput = Input;
exports.MDBInputSelect = InputNumeric;
exports.MDBJumbotron = Jumbotron;
exports.MDBListGroup = ListGroup;
exports.MDBListGroupItem = ListGroupItem;
exports.MDBMask = Mask;
exports.MDBMedia = Media;
exports.MDBModal = Modal;
exports.MDBModalBody = ModalBody;
exports.MDBModalFooter = ModalFooter;
exports.MDBModalHeader = ModalHeader;
exports.MDBNav = Nav;
exports.MDBNavbar = Navbar;
exports.MDBNavbarBrand = NavbarBrand;
exports.MDBNavbarNav = NavbarNav;
exports.MDBNavbarToggler = NavbarToggler;
exports.MDBNavItem = NavItem;
exports.MDBNavLink = NavLink;
exports.MDBPagination = Pagination;
exports.MDBPageItem = PageItem;
exports.MDBPageNav = PageLink;
exports.MDBPopover = Popover;
exports.MDBPopoverBody = PopoverBody;
exports.MDBPopoverHeader = PopoverHeader;
exports.MDBProgress = Progress;
exports.MDBWaves = Waves;
exports.MDBRow = Row;
exports.MDBTable = Table;
exports.MDBTableBody = TableBody;
exports.MDBTableHead = TableHead;
exports.MDBTableFoot = TableFoot;
exports.MDBTooltip = Tooltip;
exports.MDBView = View;
exports.MDBAutocomplete = Autocomplete;
exports.MDBAvatar = Avatar;
exports.MDBBtnFixed = ButtonFixed;
exports.MDBBtnFixedItem = ButtonFixed$1;
exports.MDBCardUp = CardUp;
exports.MDBChip = Chip;
exports.MDBChipsInput = ChipsInput;
exports.MDBCollapseHeader = CollapseHeader;
exports.MDBExportToCSV = ExportToCSV;
exports.MDBDatePicker = DatePicker;
exports.MDBTimePicker = TimePicker;
exports.MDBRotatingCard = RotatingCard;
exports.MDBFileInput = InputFile;
exports.MDBRangeInput = InputRange;
exports.MDBSwitch = InputSwitch;
exports.MDBScrollbar = ScrollBar;
exports.MDBScrollspyBox = ScrollBox;
exports.MDBScrollspyList = ScrollSpyList;
exports.MDBScrollspyListItem = ScrollSpyListItem;
exports.MDBScrollspyText = ScrollSpyText;
exports.MDBSideNav = SideNav;
exports.MDBSideNavCat = SideNavCat;
exports.MDBSideNavItem = SideNavItem;
exports.MDBSideNavLink = SideNavLink;
exports.MDBSideNavNav = SideNavNav;
exports.MDBSimpleChart = SimpleChart;
exports.MDBSelect = Select;
exports.MDBSelectOptions = Options;
exports.MDBSpinner = Spinner;
exports.MDBTableEditable = TableEditable;
exports.MDBTabPane = TabPane;
exports.MDBTabContent = TabContent;
exports.MDBStep = Step;
exports.MDBStepper = Stepper;
exports.MDBSticky = Sticky;
exports.MDBStickyContent = Container$1;
exports.MDBTestimonial = Testimonial;
exports.MDBTimeline = Timeline;
exports.MDBTimelineStep = TimelineStep;
exports.MDBStreak = MDBStreak;
>>>>>>> 7a8870cf767f6fcff6c2d8ef34d86c1076727397
