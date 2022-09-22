"use strict";
exports.id = "component---src-pages-404-jshead";
exports.ids = ["component---src-pages-404-jshead"];
exports.modules = {

/***/ "./node_modules/flotiq-components-react/dist/components/Announcement/Announcement.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Announcement/Announcement.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _background = __webpack_require__(/*! ../../defaultProps/background */ "./node_modules/flotiq-components-react/dist/defaultProps/background.js");

var _excluded = ["variant", "backgroundColor", "textAlignment", "textSize", "textColor", "content", "additionalClasses", "rounded"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Announcement = function Announcement(_ref) {
  var variant = _ref.variant,
      backgroundColor = _ref.backgroundColor,
      textAlignment = _ref.textAlignment,
      textSize = _ref.textSize,
      textColor = _ref.textColor,
      content = _ref.content,
      additionalClasses = _ref.additionalClasses,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, _excluded);

  var alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    none: ''
  };
  var fontSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-large',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
    none: ''
  };
  var style = {};

  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  if (textColor) {
    style.color = textColor;
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['px-12 py-6', _background.backgroundProps.classSet[variant], _rounded.roundedProps.classSet[rounded], alignment[textAlignment], fontSize[textSize]].concat(_toConsumableArray(additionalClasses)).join(' '),
    style: style
  }, props), content);
};

Announcement.propTypes = {
  /**
   * What color variant to use?
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
  * What background color to use? Background color will override variant colors
  */
  backgroundColor: _propTypes.default.string,

  /**
  * Text alignment
  */
  textAlignment: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
  * Text size
  */
  textSize: _propTypes.default.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),

  /**
   * What text color to use?  Text color will override variant colors
   */
  textColor: _propTypes.default.string,

  /**
  * Announcement content
  */
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Border radius
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Additional classes for button
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Announcement.defaultProps = {
  variant: _background.backgroundProps.defaultValue,
  backgroundColor: null,
  textAlignment: null,
  textSize: 'base',
  textColor: null,
  rounded: 'lg',
  additionalClasses: []
};
var _default = Announcement;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Audio/Audio.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Audio/Audio.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["url", "caption", "extension", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for audio files
 */
var Audio = function Audio(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      extension = _ref.extension,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['flex flex-col'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement("audio", _extends({
    controls: true,
    className: "w-full"
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: "audio/".concat(extension)
  }), "Your browser does not support the audio element."), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-2 md:pt-5 opacity-70 italic"
  }, caption));
};

Audio.propTypes = {
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,

  /**
   * File caption
   */
  caption: _propTypes.default.string,

  /**
   * Additional classes for audio
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Audio.defaultProps = {
  caption: null,
  additionalClasses: []
};
var _default = Audio;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Button/Button.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Button/Button.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _background = __webpack_require__(/*! ../../defaultProps/background */ "./node_modules/flotiq-components-react/dist/defaultProps/background.js");

var _excluded = ["label", "onClick", "variant", "size", "rounded", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      variant = _ref.variant,
      size = _ref.size,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var sizeClass = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg'
  };
  var hoverBackgroundClasses = {
    primary: 'hover:bg-primary-600',
    secondary: 'hover:bg-secondary-400',
    success: 'hover:bg-success-600',
    danger: 'hover:bg-danger-600',
    warning: 'hover:bg-warning-600',
    info: 'hover:bg-info-600',
    light: 'hover:bg-light-600',
    dark: 'hover:bg-dark-400',
    transparent: ''
  };
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    className: ['inline-flex', 'items-center', 'leading-4', 'font-medium', _rounded.roundedProps.classSet[rounded], 'shadow-sm', _background.backgroundProps.classSet[variant], hoverBackgroundClasses[variant], 'transition-colors', 'duration-200', 'ease-in-out', 'focus:outline-none', sizeClass[size]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), label);
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),

  /**
  * Button contents
  */
  label: _propTypes.default.string.isRequired,

  /**
   * Is this the rounded button?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Additional classes for button
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
  * Optional click handler
  */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  onClick: undefined,
  size: 'md',
  additionalClasses: [],
  variant: _background.backgroundProps.defaultValue,
  rounded: _rounded.roundedProps.defaultValue
};
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/Card.js":
/*!***************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/Card.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _CardBody = _interopRequireDefault(__webpack_require__(/*! ./CardBody */ "./node_modules/flotiq-components-react/dist/components/Card/CardBody.js"));

var _CardTitle = _interopRequireDefault(__webpack_require__(/*! ./CardTitle */ "./node_modules/flotiq-components-react/dist/components/Card/CardTitle.js"));

var _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ "./node_modules/flotiq-components-react/dist/components/Card/CardImg.js"));

var _CardText = _interopRequireDefault(__webpack_require__(/*! ./CardText */ "./node_modules/flotiq-components-react/dist/components/Card/CardText.js"));

var _Context = __webpack_require__(/*! ./Context */ "./node_modules/flotiq-components-react/dist/components/Card/Context.js");

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _excluded = ["children", "rounded", "bordered", "horizontal", "proportionsForHorizontal", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var calcBasisClass = function calcBasisClass(scale, isHorizontal) {
  var breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'md';

  if (scale && isHorizontal) {
    return "".concat(breakpoint, ":basis-").concat(scale);
  }

  return '';
};
/**
 * Complex component for displaying card like elements
 */


var Card = function Card(_ref) {
  var children = _ref.children,
      rounded = _ref.rounded,
      bordered = _ref.bordered,
      horizontal = _ref.horizontal,
      proportionsForHorizontal = _ref.proportionsForHorizontal,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var borderedClass = bordered ? 'border border-gray-200' : '';
  var directionClasses = horizontal ? 'flex flex-wrap justify-between align-start' : 'flex-none';
  var context = (0, _react.useMemo)(function () {
    return {
      horizontal: horizontal,
      basisClassImage: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.img, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint),
      basisClassBody: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.body, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint)
    };
  }, [horizontal, proportionsForHorizontal]);
  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', _rounded.roundedProps.classSet[rounded], borderedClass].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), children));
};

Card.propTypes = {
  /**
   * Is this the rounded card?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Should the card has a border?
   */
  bordered: _propTypes.default.bool,

  /**
   * Should the card be horizontal?
   */
  horizontal: _propTypes.default.bool,

  /**
   * Should the card be horizontal?
   */
  proportionsForHorizontal: _propTypes.default.shape({
    body: _propTypes.default.string,
    img: _propTypes.default.string,
    breakpoint: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),

  /**
   * Additional classes for card
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Card.defaultProps = {
  rounded: 'lg',
  bordered: true,
  horizontal: false,
  additionalClasses: [],
  proportionsForHorizontal: {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  }
};

var _default = Object.assign(Card, {
  Body: _CardBody.default,
  Title: _CardTitle.default,
  Img: _CardImg.default,
  Text: _CardText.default
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/CardBody.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/CardBody.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Context = __webpack_require__(/*! ./Context */ "./node_modules/flotiq-components-react/dist/components/Card/Context.js");

var _excluded = ["children", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for text body of card like component
 */
var CardBody = function CardBody(_ref) {
  var children = _ref.children,
      _ref$additionalClasse = _ref.additionalClasses,
      additionalClasses = _ref$additionalClasse === void 0 ? [] : _ref$additionalClasse,
      props = _objectWithoutProperties(_ref, _excluded);

  var context = (0, _react.useContext)(_Context.Context);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['px-5', 'pt-5', 'pb-2', 'md:px-6', 'md:pt-6', context.basisClassBody].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), children);
};

CardBody.propTypes = {
  /**
   * Additional classes for card body
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
CardBody.defaultProps = {
  additionalClasses: []
};
var _default = CardBody;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/CardImg.js":
/*!******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/CardImg.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Context = __webpack_require__(/*! ./Context */ "./node_modules/flotiq-components-react/dist/components/Card/Context.js");

var _excluded = ["src", "alt", "additionalClasses", "additionalContainerClasses", "imageAdditionalProps"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for image in card like component
 */
var CardImg = function CardImg(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      _ref$additionalClasse = _ref.additionalClasses,
      additionalClasses = _ref$additionalClasse === void 0 ? [] : _ref$additionalClasse,
      _ref$additionalContai = _ref.additionalContainerClasses,
      additionalContainerClasses = _ref$additionalContai === void 0 ? [] : _ref$additionalContai,
      _ref$imageAdditionalP = _ref.imageAdditionalProps,
      imageAdditionalProps = _ref$imageAdditionalP === void 0 ? {} : _ref$imageAdditionalP,
      props = _objectWithoutProperties(_ref, _excluded);

  var context = (0, _react.useContext)(_Context.Context);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: [context.basisClassImage].concat(_toConsumableArray(additionalContainerClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("img", _extends({
    src: src,
    alt: alt,
    className: additionalClasses.join(' ')
  }, imageAdditionalProps)));
};

CardImg.propTypes = {
  /**
   * Image source
   */
  src: _propTypes.default.string.isRequired,

  /**
   * Alternative text for image
   */
  alt: _propTypes.default.string,

  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for image container
   */
  additionalContainerClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional props for image
   */
  imageAdditionalProps: _propTypes.default.shape({})
};
CardImg.defaultProps = {
  additionalClasses: [],
  additionalContainerClasses: [],
  alt: false,
  imageAdditionalProps: {}
};
var _default = CardImg;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/CardText.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/CardText.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["children", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Standard text part of body in card like component
 */
var CardText = function CardText(_ref) {
  var children = _ref.children,
      _ref$additionalClasse = _ref.additionalClasses,
      additionalClasses = _ref$additionalClasse === void 0 ? [] : _ref$additionalClasse,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("p", _extends({
    className: ['text-base', 'font-light', 'my-4'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), children);
};

CardText.propTypes = {
  /**
   * Additional classes for card text
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
CardText.defaultProps = {
  additionalClasses: []
};
var _default = CardText;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/CardTitle.js":
/*!********************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/CardTitle.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["children", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Header text of body in card like component
 */
var CardTitle = function CardTitle(_ref) {
  var children = _ref.children,
      _ref$additionalClasse = _ref.additionalClasses,
      additionalClasses = _ref$additionalClasse === void 0 ? [] : _ref$additionalClasse,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("h2", _extends({
    className: ['text-3xl', 'font-semibold', 'leading-10'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), children);
};

CardTitle.propTypes = {
  /**
   * Additional classes for card body
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
CardTitle.defaultProps = {
  additionalClasses: []
};
var _default = CardTitle;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Card/Context.js":
/*!******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Card/Context.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Context = void 0;

var _react = __webpack_require__(/*! react */ "react");

var Context = /*#__PURE__*/(0, _react.createContext)({});
exports.Context = Context;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Code/Code.js":
/*!***************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Code/Code.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["children", "language", "highlight", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for highlighting code.
 * Install highlight.js to make the component looks like in the examples, we use nord.css
 */
var Code = function Code(_ref) {
  var children = _ref.children,
      language = _ref.language,
      highlight = _ref.highlight,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight, language, children]);
  var CodeToDisplay = children;
  var lang = language;

  if (children.indexOf('```') === 0) {
    // eslint-disable-next-line prefer-destructuring
    lang = children.split('```')[1];
    var blocks = children.split('\n');
    blocks.splice(0, 1);
    CodeToDisplay = blocks.join('\n');
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("pre", null, /*#__PURE__*/_react.default.createElement("code", {
    className: "language-".concat(lang)
  }, CodeToDisplay)));
};

Code.propTypes = {
  /**
   * Code content
   */
  children: _propTypes.default.string.isRequired,

  /**
   * Programming language name
   */
  language: _propTypes.default.string,

  /**
   * Additional classes for code
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Code.defaultProps = {
  language: 'bash',
  additionalClasses: []
};
var _default = Code;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Content/Content.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Content/Content.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Code = _interopRequireDefault(__webpack_require__(/*! ../Code/Code */ "./node_modules/flotiq-components-react/dist/components/Code/Code.js"));

var _Delimiter = _interopRequireDefault(__webpack_require__(/*! ../Delimiter/Delimiter */ "./node_modules/flotiq-components-react/dist/components/Delimiter/Delimiter.js"));

var _File = _interopRequireDefault(__webpack_require__(/*! ../File/File */ "./node_modules/flotiq-components-react/dist/components/File/File.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ../Header/Header */ "./node_modules/flotiq-components-react/dist/components/Header/Header.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! ../List/List */ "./node_modules/flotiq-components-react/dist/components/List/List.js"));

var _Paragraph = _interopRequireDefault(__webpack_require__(/*! ../Paragraph/Paragraph */ "./node_modules/flotiq-components-react/dist/components/Paragraph/Paragraph.js"));

var _Quote = _interopRequireDefault(__webpack_require__(/*! ../Quote/Quote */ "./node_modules/flotiq-components-react/dist/components/Quote/Quote.js"));

var _Table = _interopRequireDefault(__webpack_require__(/*! ../Table/Table */ "./node_modules/flotiq-components-react/dist/components/Table/Table.js"));

var _Warning = _interopRequireDefault(__webpack_require__(/*! ../Warning/Warning */ "./node_modules/flotiq-components-react/dist/components/Warning/Warning.js"));

var _YouTubeEmbed = _interopRequireDefault(__webpack_require__(/*! ../YouTubeEmbed/YouTubeEmbed */ "./node_modules/flotiq-components-react/dist/components/YouTubeEmbed/YouTubeEmbed.js"));

var _excluded = ["blocks", "highlight", "headerProps", "paragraphProps", "youTubeEmbedProps", "fileProps", "quoteProps", "tableProps", "codeProps", "warningProps", "delimiterProps", "listProps", "additionalClasses", "standardPadding"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for displaying contents of block fields (editor.js)
 */
var Content = function Content(_ref) {
  var blocks = _ref.blocks,
      highlight = _ref.highlight,
      headerProps = _ref.headerProps,
      paragraphProps = _ref.paragraphProps,
      youTubeEmbedProps = _ref.youTubeEmbedProps,
      fileProps = _ref.fileProps,
      quoteProps = _ref.quoteProps,
      tableProps = _ref.tableProps,
      codeProps = _ref.codeProps,
      warningProps = _ref.warningProps,
      delimiterProps = _ref.delimiterProps,
      listProps = _ref.listProps,
      additionalClasses = _ref.additionalClasses,
      standardPadding = _ref.standardPadding,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);

  var getBlock = function getBlock(block) {
    var _block$tunes, _block$tunes$alignmen, _block$tunes2, _block$tunes2$alignme;

    switch (block.type) {
      case 'header':
        return /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
          level: block.data.level,
          anchor: block.data.anchor,
          alignment: (_block$tunes = block.tunes) === null || _block$tunes === void 0 ? void 0 : (_block$tunes$alignmen = _block$tunes.alignmentTuneTool) === null || _block$tunes$alignmen === void 0 ? void 0 : _block$tunes$alignmen.alignment
        }, headerProps, {
          key: block.id
        }), block.data.text);

      case 'paragraph':
        return /*#__PURE__*/_react.default.createElement(_Paragraph.default, _extends({
          alignment: (_block$tunes2 = block.tunes) === null || _block$tunes2 === void 0 ? void 0 : (_block$tunes2$alignme = _block$tunes2.alignmentTuneTool) === null || _block$tunes2$alignme === void 0 ? void 0 : _block$tunes2$alignme.alignment
        }, paragraphProps, {
          key: block.id
        }), block.data.text);

      case 'list':
        return /*#__PURE__*/_react.default.createElement(_List.default, _extends({
          items: block.data.items,
          style: block.data.style
        }, listProps, {
          key: block.id
        }));

      case 'image':
        return /*#__PURE__*/_react.default.createElement(_File.default, _extends({
          url: block.data.url,
          caption: block.data.caption,
          fileName: block.data.fileName,
          extension: block.data.extension,
          stretched: block.data.stretched
        }, fileProps, {
          key: block.id
        }));

      case 'quote':
        return /*#__PURE__*/_react.default.createElement(_Quote.default, _extends({
          text: block.data.text,
          caption: block.data.caption
        }, quoteProps, {
          key: block.id
        }));

      case 'youtubeEmbed':
        return /*#__PURE__*/_react.default.createElement(_YouTubeEmbed.default, _extends({
          url: block.data.url,
          key: block.id
        }, youTubeEmbedProps));

      case 'table':
        return /*#__PURE__*/_react.default.createElement(_Table.default, _extends({
          content: block.data.withHeadings ? block.data.content.slice(1) : block.data.content,
          headers: block.data.withHeadings ? block.data.content[0] : null
        }, tableProps, {
          key: block.id
        }));

      case 'code':
        return /*#__PURE__*/_react.default.createElement(_Code.default, _extends({}, codeProps, {
          key: block.id
        }), block.data.code);

      case 'warning':
        return /*#__PURE__*/_react.default.createElement(_Warning.default, _extends({
          title: block.data.title,
          message: block.data.message
        }, warningProps, {
          key: block.id
        }));

      case 'delimiter':
        return /*#__PURE__*/_react.default.createElement(_Delimiter.default, delimiterProps);

      default:
        return null;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), blocks.map(function (block) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: standardPadding,
      key: block.id
    }, getBlock(block));
  }));
};

Content.propTypes = {
  /**
   * Content blocks
   */
  blocks: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,

  /**
   * Additional props for header component
   */
  headerProps: _propTypes.default.shape({}),

  /**
   * Additional props for paragraph component
   */
  paragraphProps: _propTypes.default.shape({}),

  /**
   * Additional props for YouTube embed component
   */
  youTubeEmbedProps: _propTypes.default.shape({}),

  /**
   * Additional props for file components
   */
  fileProps: _propTypes.default.shape({}),

  /**
   * Additional props for quote component
   */
  quoteProps: _propTypes.default.shape({}),

  /**
   * Additional props for table component
   */
  tableProps: _propTypes.default.shape({}),

  /**
   * Additional props for code component
   */
  codeProps: _propTypes.default.shape({}),

  /**
   * Additional props for warning component
   */
  warningProps: _propTypes.default.shape({}),

  /**
   * Additional props for delimiter component
   */
  delimiterProps: _propTypes.default.shape({}),

  /**
   * Additional components for list component
   */
  listProps: _propTypes.default.shape({}),

  /**
   * Standard horizontal padding for block components
   */
  standardPadding: _propTypes.default.string,

  /**
   * Additional classes for content container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Content.defaultProps = {
  headerProps: {},
  paragraphProps: {},
  youTubeEmbedProps: {},
  fileProps: {},
  quoteProps: {},
  tableProps: {},
  codeProps: {},
  warningProps: {},
  delimiterProps: {},
  listProps: {},
  standardPadding: 'py-2',
  additionalClasses: []
};
var _default = Content;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Delimiter/Delimiter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Delimiter/Delimiter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _border = __webpack_require__(/*! ../../defaultProps/border */ "./node_modules/flotiq-components-react/dist/defaultProps/border.js");

var _excluded = ["variant", "style", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for separating content
 */
var Delimiter = function Delimiter(_ref) {
  var variant = _ref.variant,
      style = _ref.style,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  };
  return /*#__PURE__*/_react.default.createElement("hr", _extends({
    className: ['my-2', _border.borderProps.classSet[variant], styleClasses[style]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props));
};

Delimiter.propTypes = {
  /**
   * Delimiter variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

  /**
   * Delimiter style
   */
  style: _propTypes.default.oneOf(['solid', 'dashed', 'dotted']),

  /**
   * Additional classes for delimiter
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Delimiter.defaultProps = {
  variant: _border.borderProps.defaultValue,
  style: 'solid',
  additionalClasses: []
};
var _default = Delimiter;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/File/File.js":
/*!***************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/File/File.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Image = _interopRequireDefault(__webpack_require__(/*! ../Image/Image */ "./node_modules/flotiq-components-react/dist/components/Image/Image.js"));

var _Video = _interopRequireDefault(__webpack_require__(/*! ../Video/Video */ "./node_modules/flotiq-components-react/dist/components/Video/Video.js"));

var _Audio = _interopRequireDefault(__webpack_require__(/*! ../Audio/Audio */ "./node_modules/flotiq-components-react/dist/components/Audio/Audio.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var File = function File(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      stretched = _ref.stretched,
      extension = _ref.extension,
      fileName = _ref.fileName,
      imageProps = _ref.imageProps,
      videoProps = _ref.videoProps,
      audioProps = _ref.audioProps;

  if (isImage(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Image.default, _extends({
      url: url,
      caption: caption,
      stretched: stretched
    }, imageProps));
  }

  if (isMovie(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Video.default, _extends({
      url: url,
      caption: caption,
      extension: extension
    }, videoProps));
  }

  if (isAudio(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Audio.default, _extends({
      url: url,
      caption: caption,
      extension: extension
    }, audioProps));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: url
  }, fileName));
};

var isMovie = function isMovie(extension) {
  return ['mp4', 'webm', 'ogv'].indexOf(extension) > -1;
};

var isImage = function isImage(extension) {
  return ['jpg', 'png', 'bmp', 'svg', 'gif', 'webp', 'ico'].indexOf(extension) > -1;
};

var isAudio = function isAudio(extension) {
  return ['mpeg', 'mp3', 'mid', 'ogg', 'oga', 'wav'].indexOf(extension) > -1;
};

File.propTypes = {
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * File caption
   */
  caption: _propTypes.default.string,

  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,

  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,

  /**
   * File name
   */
  fileName: _propTypes.default.string,

  /**
   * Additional props for image components
   */
  imageProps: _propTypes.default.shape({}),

  /**
   * Additional props for video components
   */
  videoProps: _propTypes.default.shape({}),

  /**
   * Additional props for audio components
   */
  audioProps: _propTypes.default.shape({}),

  /**
   * Additional classes for file
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
File.defaultProps = {
  caption: null,
  stretched: false,
  fileName: '',
  imageProps: {},
  videoProps: {},
  audioProps: {},
  additionalClasses: []
};
var _default = File;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Header/Header.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Header/Header.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["level", "children", "anchor", "alignment", "additionalClasses", "h1AdditionalClasses", "h2AdditionalClasses", "h3AdditionalClasses", "h4AdditionalClasses", "h5AdditionalClasses", "h6AdditionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for headings
 */
var Header = function Header(_ref) {
  var level = _ref.level,
      children = _ref.children,
      anchor = _ref.anchor,
      alignment = _ref.alignment,
      additionalClasses = _ref.additionalClasses,
      h1AdditionalClasses = _ref.h1AdditionalClasses,
      h2AdditionalClasses = _ref.h2AdditionalClasses,
      h3AdditionalClasses = _ref.h3AdditionalClasses,
      h4AdditionalClasses = _ref.h4AdditionalClasses,
      h5AdditionalClasses = _ref.h5AdditionalClasses,
      h6AdditionalClasses = _ref.h6AdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var safeLevel = Math.min(Math.max(level, 1), 6);
  var HeaderToRender = "h".concat(safeLevel);
  var sizeClass = {
    1: ['text-4xl font-bold pt-6 pb-3'].concat(_toConsumableArray(h1AdditionalClasses)).join(' '),
    2: ['text-3xl font-bold pt-5 pb-2.5'].concat(_toConsumableArray(h2AdditionalClasses)).join(' '),
    3: ['text-2xl font-bold pt-4 pb-2'].concat(_toConsumableArray(h3AdditionalClasses)).join(' '),
    4: ['text-xl font-bold pt-3 pb-1.5'].concat(_toConsumableArray(h4AdditionalClasses)).join(' '),
    5: ['text-lg font-bold pt-2 pb-1'].concat(_toConsumableArray(h5AdditionalClasses)).join(' '),
    6: ['text-base font-bold pt-1'].concat(_toConsumableArray(h6AdditionalClasses)).join(' ')
  };
  var alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' '),
    id: anchor
  }, props), children) : /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    },
    id: anchor
  }, props));
};

Header.propTypes = {
  /**
   * Level of header
   */
  level: _propTypes.default.number,

  /**
   * Header contents
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Header anchor
   */
  anchor: _propTypes.default.string,

  /**
   * Header alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
   * Additional classes for header (all levels)
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 1 header
   */
  h1AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 2 header
   */
  h2AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 3 header
   */
  h3AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 4 header
   */
  h4AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 5 header
   */
  h5AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for level 6 header
   */
  h6AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Header.defaultProps = {
  level: 1,
  anchor: '',
  alignment: 'left',
  additionalClasses: [],
  h1AdditionalClasses: [],
  h2AdditionalClasses: [],
  h3AdditionalClasses: [],
  h4AdditionalClasses: [],
  h5AdditionalClasses: [],
  h6AdditionalClasses: []
};
var _default = Header;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Image/Image.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Image/Image.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _excluded = ["url", "caption", "stretched", "rounded", "additionalClasses", "captionAdditionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for displaying images
 */
var Image = function Image(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      stretched = _ref.stretched,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      captionAdditionalClasses = _ref.captionAdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: url,
    alt: caption,
    className: [stretched ? 'w-full' : '', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props)), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['pt-2 opacity-70 italic'].concat(_toConsumableArray(captionAdditionalClasses)).join(' ')
  }, caption));
};

Image.propTypes = {
  /**
   * Image url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * Image caption
   */
  caption: _propTypes.default.string,

  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,

  /**
   * Image roundness?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),

  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for image caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Image.defaultProps = {
  caption: null,
  stretched: false,
  rounded: 'none',
  additionalClasses: [],
  captionAdditionalClasses: []
};
var _default = Image;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/List/List.js":
/*!***************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/List/List.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["items", "style", "level", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for listings
 */
var List = function List(_ref) {
  var items = _ref.items,
      style = _ref.style,
      level = _ref.level,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var ListType = style === 'ordered' ? 'ol' : 'ul';
  var listStyleClass = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };
  var safeLevel = Math.max(level, 1);
  var marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
  return /*#__PURE__*/_react.default.createElement(ListType, _extends({
    className: ['space-y-1', listStyleClass[style], 'list-inside', marginClass].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: item.content
    }, /*#__PURE__*/_react.default.isValidElement(item.content) ? /*#__PURE__*/_react.default.createElement("li", null, item.content) : /*#__PURE__*/_react.default.createElement("li", {
      dangerouslySetInnerHTML: {
        __html: item.content
      }
    }), item.items && item.items.length > 0 && /*#__PURE__*/_react.default.createElement(List, {
      items: item.items,
      style: style,
      level: safeLevel + 1
    }));
  }));
};

var Items = {
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
Items.items = _propTypes.default.arrayOf(_propTypes.default.shape(Items));
List.propTypes = {
  /**
   * List content
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape(Items)).isRequired,

  /**
   * List style
   */
  style: _propTypes.default.oneOf(['ordered', 'unordered']),

  /**
   * List level
   */
  level: _propTypes.default.number,

  /**
   * Additional classes for list
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
List.defaultProps = {
  style: 'unordered',
  level: 1,
  additionalClasses: []
};
var _default = List;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Pagination/Pagination.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Pagination/Pagination.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _border = __webpack_require__(/*! ../../defaultProps/border */ "./node_modules/flotiq-components-react/dist/defaultProps/border.js");

var _background = __webpack_require__(/*! ../../defaultProps/background */ "./node_modules/flotiq-components-react/dist/defaultProps/background.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Component for pagination navigation
 */
var Pagination = function Pagination(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      borderVariant = _ref.borderVariant,
      size = _ref.size,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      activeAdditionalClasses = _ref.activeAdditionalClasses,
      prevNextAdditionalClasses = _ref.prevNextAdditionalClasses,
      containerAdditionalClasses = _ref.containerAdditionalClasses,
      prev = _ref.prev,
      next = _ref.next,
      baseUrl = _ref.baseUrl,
      page = _ref.page,
      numOfPages = _ref.numOfPages;
  var sizeClass = {
    sm: 'w-6 h-6 md:w-8 md:h-8 text-sm',
    md: 'w-8 h-8 md:w-10 md:h-10 text-sm md:text-base',
    lg: 'w-10 h-10 md:w-12 md:h-12 text-md md:text-lg'
  };
  var sizeClassPrevNext = {
    sm: 'w-16 h-6 md:w-20 md:h-8 text-sm',
    md: 'w-20 h-8 md:w-24 md:h-10 text-sm md:text-base',
    lg: 'w-24 h-10 md:w-28 md:h-12 text-md md:text-lg'
  };
  var bgClasses = {
    primary: 'bg-white hover:bg-primary text-black hover:text-white',
    secondary: 'bg-white hover:bg-secondary text-black hover:text-white',
    info: 'bg-white hover:bg-info text-black',
    light: 'bg-white hover:bg-light text-black',
    dark: 'bg-white hover:bg-dark text-black hover:text-white',
    transparent: 'bg-transparent text-black'
  };
  var borderClasses = {
    primary: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-primary'].join(' '),
    secondary: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-secondary'].join(' '),
    info: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-info'].join(' '),
    light: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-light'].join(' '),
    dark: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-dark'].join(' '),
    transparent: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-transparent'].join(' ')
  };
  var activeBorderClasses = {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    info: 'border border-info',
    light: 'border border-light',
    dark: 'border border-dark',
    transparent: 'border border-transparent'
  };
  var safePage = Math.min(Math.max(page, 1), numOfPages);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['px-1', 'py-3', 'flex', 'items-center', 'justify-between', 'sm:px-6', 'mt-10'].concat(_toConsumableArray(containerAdditionalClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "relative z-0 inline-flex space-x-2",
    "aria-label": "Pagination"
  }, safePage > 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: safePage > 2 ? "".concat(baseUrl).concat(safePage - 1) : baseUrl,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium'].concat(_toConsumableArray(prevNextAdditionalClasses)).join(' ')
  }, prev), /*#__PURE__*/_react.default.createElement("a", {
    href: baseUrl,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', safePage <= 2 ? 'inline-flex' : 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "1"), safePage > 4 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "...")), safePage > 3 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 2),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage - 2), safePage > 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage - 1), /*#__PURE__*/_react.default.createElement("span", {
    "aria-current": "page",
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], _background.backgroundProps.classSet[variant], activeBorderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium'].concat(_toConsumableArray(activeAdditionalClasses)).join(' ')
  }, safePage), safePage < numOfPages - 1 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage + 1), page < numOfPages - 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 2),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, safePage + 2), safePage < numOfPages && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, safePage < numOfPages - 3 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, "..."), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(numOfPages),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', safePage >= numOfPages - 1 ? 'inline-flex' : 'hidden', 'md:inline-flex'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, numOfPages), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium'].concat(_toConsumableArray(prevNextAdditionalClasses)).join(' ')
  }, next)))));
};

Pagination.propTypes = {
  /**
   * Color variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent']),

  /**
   * Color variant for border
   */
  borderVariant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent', 'black', 'white']),

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),

  /**
   * Active page number
   */
  page: _propTypes.default.number.isRequired,

  /**
   * Number of pages
   */
  numOfPages: _propTypes.default.number.isRequired,

  /**
   * Is this the rounded button?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Text or component for previous button
   */
  prev: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /**
   * Text or component for next button
   */
  next: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),

  /**
   * Base url of pagination
   */
  baseUrl: _propTypes.default.string,

  /**
   * Additional classes for pagination box
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for active pagination box
   */
  activeAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for prev and next pagination box
   */
  prevNextAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for pagination container
   */
  containerAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Pagination.defaultProps = {
  size: 'md',
  variant: 'primary',
  borderVariant: 'primary',
  rounded: _rounded.roundedProps.defaultValue,
  prev: 'Previous',
  next: 'Next',
  baseUrl: '/',
  additionalClasses: [],
  activeAdditionalClasses: [],
  prevNextAdditionalClasses: [],
  containerAdditionalClasses: []
};
var _default = Pagination;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Paragraph/Paragraph.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Paragraph/Paragraph.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["alignment", "additionalClasses", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for standard text
 */
var Paragraph = function Paragraph(_ref) {
  var alignment = _ref.alignment,
      additionalClasses = _ref.additionalClasses,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), children) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment]].concat(_toConsumableArray(additionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
};

Paragraph.propTypes = {
  /**
   * Paragraph content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Paragraph alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
   * Additional classes for paragraph
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Paragraph.defaultProps = {
  alignment: 'left',
  additionalClasses: []
};
var _default = Paragraph;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/PoweredByFlotiq/PoweredByFlotiq.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/PoweredByFlotiq/PoweredByFlotiq.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["badge", "text", "additionalClasses", "utmCampaign"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LogoBadge = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEt' + 'LSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZ' + 'lcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJ' + 'odHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveG' + 'xpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzOCAzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW' + '5kOm5ldyAwIDAgMzggMzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS' + '5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDA4M0ZDO30KPC9zdHlsZT4KPH' + 'BhdGggY2xhc3M9InN0MSIgZD0iTTAsNS4yQzAsMi4zLDIuMiwwLDQuOSwwaDguMmMwLjYsMCwxLjEsMC4xLDEuN' + 'iwwLjNjMi41LDAuOSw0LjcsMy4yLDcuNCwzLjJjMi42LDAsNC45LTIuMiw3LjQtMy4yCglDMzAsMC4xLDMwLjUsM' + 'CwzMS4xLDBDMzMuOCwwLDM2LDIuMywzNiw1LjJjMCwyLjktMi4yLDUuMi00LjksNS4yYy0wLjYsMC0xLjEtMC4xL' + 'TEuNi0wLjNjLTIuNS0wLjktNC43LTMuMi03LjQtMy4yCgljLTIuNiwwLTQuOSwyLjItNy40LDMuMmMtMC41LDAuM' + 'i0xLjEsMC4zLTEuNiwwLjNINC45QzIuMiwxMC4zLDAsOCwwLDUuMnogTTAsMTljMC0yLjksMi4yLTUuMiw0LjktN' + 'S4yYzAuNywwLDEuNCwwLjIsMiwwLjUKCWMyLjIsMSw0LjIsMyw2LjYsM2MyLjQsMCw0LjQtMiw2LjYtM2MwLjYtM' + 'C4zLDEuMy0wLjUsMi0wLjVjMi43LDAsNC45LDIuMyw0LjksNS4yYzAsMi45LTIuMiw1LjItNC45LDUuMmMtMC43L' + 'DAtMS40LTAuMi0yLTAuNQoJYy0yLjItMS00LjItMy02LjYtM2MtMi40LDAtNC40LDItNi42LDNjLTAuNiwwLjMtM' + 'S4zLDAuNS0yLDAuNUMyLjIsMjQuMSwwLDIxLjgsMCwxOXogTTQuOSwyNy42Yy0yLjcsMC00LjksMi4zLTQuOSw1L' + 'jIKCXMyLjIsNS4yLDQuOSw1LjJjMi43LDAsNC45LTIuMyw0LjktNS4yUzcuNiwyNy42LDQuOSwyNy42eiIvPgo8L' + '3N2Zz4K';
/**
 * Footer element with powered by flotiq information
 */

var PoweredByFlotiq = function PoweredByFlotiq(_ref) {
  var badge = _ref.badge,
      text = _ref.text,
      additionalClasses = _ref.additionalClasses,
      utmCampaign = _ref.utmCampaign,
      props = _objectWithoutProperties(_ref, _excluded);

  return badge ? /*#__PURE__*/_react.default.createElement("div", {
    className: ['flex', 'items-center', 'font-inter', 'px-2', 'py-1', 'shadow-md', 'shadow-black-400/15', 'rounded-md', 'fixed', 'bottom-[20px]', 'right-[20px]', 'text-xs', 'bg-white', 'border', 'border-light-blue'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: LogoBadge,
    width: 11,
    height: 11,
    alt: "Flotiq",
    className: "mr-1"
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://flotiq.com/?utm_source=poweredByFlotiq&utm_medium=poweredBy".concat(utmCampaign !== '' ? "&utm_campaign=".concat(utmCampaign) : ''),
    target: "_blank",
    rel: "noreferrer"
  }, text)) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['flex', 'items-center', 'mr-12', 'font-inter'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("img", {
    className: "block h-5 md:h-6 w-auto mr-2",
    src: LogoBadge,
    alt: "Flotiq",
    width: 274.96,
    height: 276
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center text-xs md:text-base font-semibold"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://flotiq.com/?utm_source=poweredByFlotiq&utm_medium=poweredBy".concat(utmCampaign !== '' ? "&utm_campaign=".concat(utmCampaign) : ''),
    target: "_blank",
    rel: "noreferrer"
  }, text)));
};

PoweredByFlotiq.propTypes = {
  /**
   * Should the component be a floating pill badge
   */
  badge: _propTypes.default.bool,

  /**
   * Component text
   */
  text: _propTypes.default.string,

  /**
   * Additional classes for delimiter
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * UTM campaign name
   */
  utmCampaign: _propTypes.default.string
};
PoweredByFlotiq.defaultProps = {
  badge: false,
  text: 'Powered by Flotiq',
  additionalClasses: [],
  utmCampaign: ''
};
var _default = PoweredByFlotiq;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Quote/Quote.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Quote/Quote.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _border = __webpack_require__(/*! ../../defaultProps/border */ "./node_modules/flotiq-components-react/dist/defaultProps/border.js");

var _excluded = ["text", "caption", "variant", "additionalClasses", "quoteAdditionalClasses", "captionAdditionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for quote with caption
 */
var Quote = function Quote(_ref) {
  var text = _ref.text,
      caption = _ref.caption,
      variant = _ref.variant,
      additionalClasses = _ref.additionalClasses,
      quoteAdditionalClasses = _ref.quoteAdditionalClasses,
      captionAdditionalClasses = _ref.captionAdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['flex flex-col italic'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.isValidElement(text) ? /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant]].concat(_toConsumableArray(quoteAdditionalClasses)).join(' ')
  }, text) : /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant]].concat(_toConsumableArray(quoteAdditionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['self-end mt-3 py-1.5 opacity-70'].concat(_toConsumableArray(captionAdditionalClasses)).join(' ')
  }, caption));
};

Quote.propTypes = {
  /**
   * Quote content
   */
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Quote caption
   */
  caption: _propTypes.default.string.isRequired,

  /**
   * Quote variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
   * Additional classes for quote container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for quote
   */
  quoteAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for quote caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Quote.defaultProps = {
  variant: _border.borderProps.defaultValue,
  additionalClasses: [],
  quoteAdditionalClasses: [],
  captionAdditionalClasses: []
};
var _default = Quote;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/ShowcaseCard/ShowcaseCard.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/ShowcaseCard/ShowcaseCard.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _rounded = __webpack_require__(/*! ../../defaultProps/rounded */ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js");

var _Delimiter = _interopRequireDefault(__webpack_require__(/*! ../Delimiter/Delimiter */ "./node_modules/flotiq-components-react/dist/components/Delimiter/Delimiter.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ../Header/Header */ "./node_modules/flotiq-components-react/dist/components/Header/Header.js"));

var _Paragraph = _interopRequireDefault(__webpack_require__(/*! ../Paragraph/Paragraph */ "./node_modules/flotiq-components-react/dist/components/Paragraph/Paragraph.js"));

var _excluded = ["title", "titleLevel", "excerpt", "thumbnailSrc", "thumbnailSrcAlt", "cardUrl", "demoUrl", "rounded", "additionalClasses", "additionalCategoryClasses", "additionalLiveDemoClasses", "additionalExcerptClasses", "additionalHeaderClasses", "additionalFooterLinkClasses", "category", "tagIcon", "footerLinks"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ArrowTopRightIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR' + '0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9u' + 'ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9I' + 'k0zLjA4MzAxIDEyLjkxNjhMMTIuOTE2MyAzLjA4MzUiIHN0cm9rZT0iIzAwODNGQy' + 'Igc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1' + 'saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMi45MTY1IDEwLjA0MVYzLjA4' + 'MzVINS45NTg5OCIgc3Ryb2tlPSIjMDA4M0ZDIiBzdHJva2Utd2lkdGg9IjIiIHN0c' + 'm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC' + '9zdmc+DQo=';
var LiveDemoIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAi' + 'IGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9I' + 'mh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDQuMzc0NTFDMy' + '43NSA0LjM3NDUxIDEuMjUgMTAuMDAwMSAxLjI1IDEwLjAwMDFDMS4yNSAxMC4wMDAxIDM' + 'uNzUgMTUuNjI0NSAxMCAxNS42MjQ1QzE2LjI1IDE1LjYyNDUgMTguNzUgMTAuMDAwMSAx' + 'OC43NSAxMC4wMDAxQzE4Ljc1IDEwLjAwMDEgMTYuMjUgNC4zNzQ1MSAxMCA0LjM3NDUxW' + 'iIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZW' + 'pvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxMy4xMjVDMTEuNzI1OSAxMy4xMjUgMTM' + 'uMTI1IDExLjcyNTkgMTMuMTI1IDEwQzEzLjEyNSA4LjI3NDExIDExLjcyNTkgNi44NzUg' + 'MTAgNi44NzVDOC4yNzQxMSA2Ljg3NSA2Ljg3NSA4LjI3NDExIDYuODc1IDEwQzYuODc1I' + 'DExLjcyNTkgOC4yNzQxMSAxMy4xMjUgMTAgMTMuMTI1WiIgc3Ryb2tlPSJibGFjayIgc3' + 'Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3Z' + 'nPgo=';
/**
 * Component for displaying product showcase card
 */

var ShowcaseCard = function ShowcaseCard(_ref) {
  var title = _ref.title,
      _ref$titleLevel = _ref.titleLevel,
      titleLevel = _ref$titleLevel === void 0 ? 5 : _ref$titleLevel,
      excerpt = _ref.excerpt,
      thumbnailSrc = _ref.thumbnailSrc,
      thumbnailSrcAlt = _ref.thumbnailSrcAlt,
      cardUrl = _ref.cardUrl,
      demoUrl = _ref.demoUrl,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      additionalCategoryClasses = _ref.additionalCategoryClasses,
      additionalLiveDemoClasses = _ref.additionalLiveDemoClasses,
      additionalExcerptClasses = _ref.additionalExcerptClasses,
      additionalHeaderClasses = _ref.additionalHeaderClasses,
      additionalFooterLinkClasses = _ref.additionalFooterLinkClasses,
      category = _ref.category,
      tagIcon = _ref.tagIcon,
      footerLinks = _ref.footerLinks,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['max-w-sm', 'p-0', 'bg-white', 'hover:shadow-xl', 'transition-all', 'transform', 'duration-300', 'overflow-hidden', 'parent-hover-opacity-anchor', 'flex', 'flex-col', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: cardUrl,
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full top-0 left-0 h-full z-index-1 opacity-[0.6] bg-secondary-500 children-opacity-anchor transition-all transform duration-300"
  })), category && thumbnailSrc && /*#__PURE__*/_react.default.createElement("span", {
    className: ['absolute', 'text-white', 'text-sm', 'bg-primary-600', 'px-4', 'p-1', 'left-5', 'top-5', 'rounded-[6px]', 'color-primary', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalCategoryClasses)).join(' ')
  }, category), demoUrl && thumbnailSrc && /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    target: "_blank",
    rel: "noreferrer",
    className: ['absolute', 'text-black', 'text-sm', 'bg-white', 'px-4', 'py-2', 'left-5', 'bottom-5', 'rounded-[40px]', 'color-primary', 'flex', 'items-center', 'opacity-[0.5]', 'no-underline', 'hover:opacity-[1]', 'hover:no-underline', 'hover:text-black'].concat(_toConsumableArray(additionalFooterLinkClasses)).join(' ')
  }, "Live Demo", /*#__PURE__*/_react.default.createElement("img", {
    src: LiveDemoIcon,
    alt: "Live Demo",
    className: "ml-2"
  })), tagIcon && thumbnailSrc && /*#__PURE__*/_react.default.createElement("img", {
    src: tagIcon,
    alt: "Tag Icon",
    className: "absolute top-5 right-5 max-h-[30px]"
  }), thumbnailSrc && /*#__PURE__*/_react.default.createElement("img", {
    src: thumbnailSrc,
    alt: thumbnailSrcAlt,
    className: "w-full h-full object-center object-cover group-hover:opacity-75"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: cardUrl,
    rel: "noreferrer",
    className: "grow no-underline hover:no-underline hover:text-black"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-1 px-6 pb-6 pt-2"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    level: titleLevel,
    additionalClasses: _toConsumableArray(additionalHeaderClasses).join(' ')
  }, title), /*#__PURE__*/_react.default.createElement(_Paragraph.default, {
    className: ['text-sm'].concat(_toConsumableArray(additionalExcerptClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, excerpt.substring(0, 110), (excerpt === null || excerpt === void 0 ? void 0 : excerpt.length) >= 110 ? '...' : '')))), (footerLinks === null || footerLinks === void 0 ? void 0 : footerLinks.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Delimiter.default, {
    variant: "light",
    className: "mb-[20px] mx-6"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-1 px-6 pb-6 flex flex-wrap justify-between"
  }, footerLinks === null || footerLinks === void 0 ? void 0 : footerLinks.map(function (footer) {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: footer.link,
      className: ['text-sm', 'hover:text-blue-600', 'font-400', 'inline-flex', 'items-center', 'no-underline', 'hover:no-underline'].concat(_toConsumableArray(additionalExcerptClasses)).join(' '),
      target: "_blank",
      rel: "noreferrer"
    }, footer.text, /*#__PURE__*/_react.default.createElement("img", {
      src: ArrowTopRightIcon,
      alt: "Arrow Top Right",
      className: "ml-1"
    }));
  }))));
};

var Footers = {
  link: _propTypes.default.string,
  text: _propTypes.default.string
};
ShowcaseCard.propTypes = {
  /**
   * Title contents
   */
  title: _propTypes.default.string,

  /**
   * Title variant
   */
  titleLevel: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Excerpt contents
   */
  excerpt: _propTypes.default.string,

  /**
   * Image url
   */
  thumbnailSrc: _propTypes.default.string,

  /**
   * Image alt text
   */
  thumbnailSrcAlt: _propTypes.default.string,

  /**
   * Demo url
   */
  demoUrl: _propTypes.default.string,

  /**
   * Category contents
   */
  category: _propTypes.default.string,

  /**
   * Tag icon url
   */
  tagIcon: _propTypes.default.string,

  /**
   * Card url
   */
  cardUrl: _propTypes.default.string,

  /**
   * Footer content
   */
  footerLinks: _propTypes.default.arrayOf(_propTypes.default.shape(Footers)),

  /**
   * Is this the rounded card?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Additional classes for card
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for category
   */
  additionalCategoryClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for Live Demo button
   */
  additionalLiveDemoClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for excerpt
   */
  additionalExcerptClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for header
   */
  additionalHeaderClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for footer link
   */
  additionalFooterLinkClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
ShowcaseCard.defaultProps = {
  title: undefined,
  titleLevel: '5',
  excerpt: undefined,
  thumbnailSrc: undefined,
  thumbnailSrcAlt: undefined,
  demoUrl: undefined,
  category: undefined,
  tagIcon: undefined,
  cardUrl: undefined,
  footerLinks: undefined,
  rounded: 'lg',
  additionalClasses: [],
  additionalCategoryClasses: [],
  additionalLiveDemoClasses: [],
  additionalExcerptClasses: [],
  additionalHeaderClasses: [],
  additionalFooterLinkClasses: []
};
var _default = ShowcaseCard;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Table/Table.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Table/Table.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["content", "headers", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Multi-column multi-row table component
 */
var Table = function Table(_ref) {
  var content = _ref.content,
      headers = _ref.headers,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: ['w-full border-collapse mt-2 mb-4 border border-light'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), headers.length > 0 && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(function (column) {
    return /*#__PURE__*/_react.default.createElement("th", {
      className: "border border-light p-3",
      key: column
    }, column);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, content.map(function (row, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement("tr", {
        key: index
      }, row.map(function (column) {
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "border border-light p-3",
          key: column
        }, column);
      }))
    );
  })));
};

Table.propTypes = {
  /**
   * Table contents
   */
  content: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]))).isRequired,

  /**
   * Array of headers
   */
  headers: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])),

  /**
   * Additional classes for table
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Table.defaultProps = {
  headers: [],
  additionalClasses: []
};
var _default = Table;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Video/Video.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Video/Video.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["url", "caption", "extension", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for video files
 */
var Video = function Video(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      extension = _ref.extension,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['text-content-image pt-2 pb-2'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement("video", _extends({
    width: "100%",
    controls: true
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: "video/".concat(extension)
  }), "Your browser does not support the video tag."), /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-2 opacity-70 italic"
  }, caption));
};

Video.propTypes = {
  /**
   * Video url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,

  /**
   * Video caption
   */
  caption: _propTypes.default.string,

  /**
   * Additional classes for video
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Video.defaultProps = {
  caption: null,
  additionalClasses: []
};
var _default = Video;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/Warning/Warning.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/Warning/Warning.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["message", "title", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for displaying warnings
 */
var Warning = function Warning(_ref) {
  var message = _ref.message,
      title = _ref.title,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['bg-warning-200 p-6'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-xl text-warning-800"
  }, title), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4 border-warning-600"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-warning-800"
  }, message));
};

Warning.propTypes = {
  /**
   * Warning message
   */
  message: _propTypes.default.string.isRequired,

  /**
   * Warning title
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Additional classes for warning
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Warning.defaultProps = {
  additionalClasses: []
};
var _default = Warning;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/components/YouTubeEmbed/YouTubeEmbed.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/components/YouTubeEmbed/YouTubeEmbed.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _excluded = ["url", "title", "allowFullScreen", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for displaying iframe with YouTube video
 */
var YouTubeEmbed = function YouTubeEmbed(_ref) {
  var url = _ref.url,
      title = _ref.title,
      allowFullScreen = _ref.allowFullScreen,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var safeUrl = url.replace('/watch?v=', '/embed/');
  safeUrl = safeUrl.replace('youtu.be/', 'www.youtube.com/embed/');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "height-0 pb-[56.25%] relative"
  }, /*#__PURE__*/_react.default.createElement("iframe", _extends({
    id: "ytplayer",
    type: "text/html",
    width: "640",
    height: "360",
    src: safeUrl,
    frameBorder: "0",
    allowFullScreen: allowFullScreen,
    title: title,
    className: ['absolute', 'w-full', 'h-full'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props)));
};

YouTubeEmbed.propTypes = {
  /**
   * YouTUbe url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * Title of iframe
   */
  title: _propTypes.default.string,

  /**
   * Does the video should allow to be put in fullscreen mode
   */
  allowFullScreen: _propTypes.default.bool,

  /**
   * Additional classes for embed
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
YouTubeEmbed.defaultProps = {
  title: 'Youtube video',
  allowFullScreen: true,
  additionalClasses: []
};
var _default = YouTubeEmbed;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/defaultProps/background.js":
/*!******************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/defaultProps/background.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.backgroundProps = void 0;
var classSet = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-success text-white',
  danger: 'bg-danger text-white',
  warning: 'bg-warning text-black',
  info: 'bg-info text-black',
  light: 'bg-light text-black',
  dark: 'bg-dark text-white',
  transparent: 'bg-transparent'
};
var defaultValue = 'primary';
/**
 * Default settings for backgroundColor props
 * PropTypes.oneOf([
 *         'primary',
 *         'secondary',
 *         'success',
 *         'danger',
 *         'warning',
 *         'info',
 *         'light',
 *         'dark',
 *         'transparent',
 *     ])
 */

var backgroundProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.backgroundProps = backgroundProps;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/defaultProps/border.js":
/*!**************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/defaultProps/border.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.borderProps = void 0;
var classSet = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  success: 'border-success',
  danger: 'border-danger',
  warning: 'border-warning',
  info: 'border-info',
  light: 'border-light',
  dark: 'border-dark',
  transparent: 'border-transparent'
};
var defaultValue = 'primary';
/**
 * Default settings for borderColor props
 * PropTypes.oneOf([
 *         'primary',
 *         'secondary',
 *         'success',
 *         'danger',
 *         'warning',
 *         'info',
 *         'light',
 *         'dark',
 *         'transparent',
 *     ])
 */

var borderProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.borderProps = borderProps;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/defaultProps/rounded.js":
/*!***************************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/defaultProps/rounded.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.roundedProps = void 0;
var classSet = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-4xl',
  full: 'rounded-full'
};
var defaultValue = 'full';
/**
 * Default settings for rounded props
 * PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
 */

var roundedProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.roundedProps = roundedProps;

/***/ }),

/***/ "./node_modules/flotiq-components-react/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/flotiq-components-react/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Announcement", ({
  enumerable: true,
  get: function get() {
    return _Announcement.default;
  }
}));
Object.defineProperty(exports, "Audio", ({
  enumerable: true,
  get: function get() {
    return _Audio.default;
  }
}));
Object.defineProperty(exports, "Button", ({
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
}));
Object.defineProperty(exports, "Card", ({
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
}));
Object.defineProperty(exports, "Code", ({
  enumerable: true,
  get: function get() {
    return _Code.default;
  }
}));
Object.defineProperty(exports, "Content", ({
  enumerable: true,
  get: function get() {
    return _Content.default;
  }
}));
Object.defineProperty(exports, "Delimiter", ({
  enumerable: true,
  get: function get() {
    return _Delimiter.default;
  }
}));
Object.defineProperty(exports, "File", ({
  enumerable: true,
  get: function get() {
    return _File.default;
  }
}));
Object.defineProperty(exports, "Header", ({
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
}));
Object.defineProperty(exports, "Image", ({
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
}));
Object.defineProperty(exports, "List", ({
  enumerable: true,
  get: function get() {
    return _List.default;
  }
}));
Object.defineProperty(exports, "Pagination", ({
  enumerable: true,
  get: function get() {
    return _Pagination.default;
  }
}));
Object.defineProperty(exports, "Paragraph", ({
  enumerable: true,
  get: function get() {
    return _Paragraph.default;
  }
}));
Object.defineProperty(exports, "PoweredByFlotiq", ({
  enumerable: true,
  get: function get() {
    return _PoweredByFlotiq.default;
  }
}));
Object.defineProperty(exports, "Quote", ({
  enumerable: true,
  get: function get() {
    return _Quote.default;
  }
}));
Object.defineProperty(exports, "ShowcaseCard", ({
  enumerable: true,
  get: function get() {
    return _ShowcaseCard.default;
  }
}));
Object.defineProperty(exports, "Table", ({
  enumerable: true,
  get: function get() {
    return _Table.default;
  }
}));
Object.defineProperty(exports, "Video", ({
  enumerable: true,
  get: function get() {
    return _Video.default;
  }
}));
Object.defineProperty(exports, "Warning", ({
  enumerable: true,
  get: function get() {
    return _Warning.default;
  }
}));
Object.defineProperty(exports, "YouTubeEmbed", ({
  enumerable: true,
  get: function get() {
    return _YouTubeEmbed.default;
  }
}));

var _Announcement = _interopRequireDefault(__webpack_require__(/*! ./components/Announcement/Announcement */ "./node_modules/flotiq-components-react/dist/components/Announcement/Announcement.js"));

var _Audio = _interopRequireDefault(__webpack_require__(/*! ./components/Audio/Audio */ "./node_modules/flotiq-components-react/dist/components/Audio/Audio.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./components/Button/Button */ "./node_modules/flotiq-components-react/dist/components/Button/Button.js"));

var _Code = _interopRequireDefault(__webpack_require__(/*! ./components/Code/Code */ "./node_modules/flotiq-components-react/dist/components/Code/Code.js"));

var _Content = _interopRequireDefault(__webpack_require__(/*! ./components/Content/Content */ "./node_modules/flotiq-components-react/dist/components/Content/Content.js"));

var _Delimiter = _interopRequireDefault(__webpack_require__(/*! ./components/Delimiter/Delimiter */ "./node_modules/flotiq-components-react/dist/components/Delimiter/Delimiter.js"));

var _File = _interopRequireDefault(__webpack_require__(/*! ./components/File/File */ "./node_modules/flotiq-components-react/dist/components/File/File.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./components/Header/Header */ "./node_modules/flotiq-components-react/dist/components/Header/Header.js"));

var _Image = _interopRequireDefault(__webpack_require__(/*! ./components/Image/Image */ "./node_modules/flotiq-components-react/dist/components/Image/Image.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! ./components/List/List */ "./node_modules/flotiq-components-react/dist/components/List/List.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! ./components/Card/Card */ "./node_modules/flotiq-components-react/dist/components/Card/Card.js"));

var _Pagination = _interopRequireDefault(__webpack_require__(/*! ./components/Pagination/Pagination */ "./node_modules/flotiq-components-react/dist/components/Pagination/Pagination.js"));

var _Paragraph = _interopRequireDefault(__webpack_require__(/*! ./components/Paragraph/Paragraph */ "./node_modules/flotiq-components-react/dist/components/Paragraph/Paragraph.js"));

var _PoweredByFlotiq = _interopRequireDefault(__webpack_require__(/*! ./components/PoweredByFlotiq/PoweredByFlotiq */ "./node_modules/flotiq-components-react/dist/components/PoweredByFlotiq/PoweredByFlotiq.js"));

var _Quote = _interopRequireDefault(__webpack_require__(/*! ./components/Quote/Quote */ "./node_modules/flotiq-components-react/dist/components/Quote/Quote.js"));

var _Table = _interopRequireDefault(__webpack_require__(/*! ./components/Table/Table */ "./node_modules/flotiq-components-react/dist/components/Table/Table.js"));

var _Video = _interopRequireDefault(__webpack_require__(/*! ./components/Video/Video */ "./node_modules/flotiq-components-react/dist/components/Video/Video.js"));

var _Warning = _interopRequireDefault(__webpack_require__(/*! ./components/Warning/Warning */ "./node_modules/flotiq-components-react/dist/components/Warning/Warning.js"));

var _YouTubeEmbed = _interopRequireDefault(__webpack_require__(/*! ./components/YouTubeEmbed/YouTubeEmbed */ "./node_modules/flotiq-components-react/dist/components/YouTubeEmbed/YouTubeEmbed.js"));

var _ShowcaseCard = _interopRequireDefault(__webpack_require__(/*! ./components/ShowcaseCard/ShowcaseCard */ "./node_modules/flotiq-components-react/dist/components/ShowcaseCard/ShowcaseCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flotiq-components-react */ "./node_modules/flotiq-components-react/dist/index.js");
/* harmony import */ var _assets_RR_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/RR.svg */ "./src/assets/RR.svg");




const instagramPath = 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772' + ' 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.0' + '12 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.1' + '53c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-' + '1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-' + '2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.9' + '02 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.' + '63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35' + '.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058' + ' 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054' + '.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.' + '748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058' + '-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1' + '.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.' + '333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z';
const navigation = {
  social: [{
    name: 'Facebook',
    href: 'https://www.facebook.com/flotiq',
    icon: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
      fill: "currentColor",
      viewBox: "0 0 13 25"
    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M8.30466 24.1211V13.5346H11.8761L12.407 9.38964H8.30466V6.74947C8.30466 5.55339 8.63791 4.73447 10.3545 4.73447H12.5297V1.03902C11.4714 0.925596 10.4076 0.870832 9.34316 0.874974C6.18633 0.874974 4.01891 2.80214 4.01891 6.34002V9.38189H0.470703V13.5268H4.02666V24.1211H8.30466Z",
      clipRule: "evenodd"
    }))
  }, {
    name: 'Instagram',
    href: '#',
    icon: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: instagramPath,
      clipRule: "evenodd"
    }))
  }, {
    name: 'Twitter',
    href: 'https://twitter.com/flotiq',
    icon: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
    }))
  }, {
    name: 'Link',
    href: 'https://flotiq.com',
    icon: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
      fill: "currentColor",
      viewBox: "0 0 26.68 11.63"
    }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M15.06,0a5.79,5.79,0,0,0-4.75,2.46A5.62,5.62,0,0,0,9.3,5a5.8,5.8,0,0,0,.27,2.74H11.7a3.89, 3.89,0,0,1-.52-1.94,3.83,3.83,0,0,1,.52-1.93,3.88,3.88,0,0,1,3.36-1.94h5.81a3.88,3.88,0,0,1,0, 7.75h-3a8,8,0,0,1-1.58,1.94h4.56a5.83,5.83,0,0,0,2.22-.45A5.75,5.75,0,0,0,25,9.92,5.81,5.81,0,0, 0,26.24,8a5.85,5.85,0,0,0,0-4.45A5.79,5.79,0,0,0,23.09.44,5.82,5.82,0,0,0,20.87,0Z",
      clipRule: "evenodd"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M10.37,0H5.81a5.82,5.82,0,0,0,0,11.63h5.81A5.92,5.92,0,0,0,14.3,11a5.87,5.87,0,0,0,3.09-4.37, 5.88,5.88,0,0,0-.28-2.73H15.5a1.51,1.51,0,0,0-.48.06,3.91,3.91,0,0,1,.48,1.92A3.81,3.81,0,0,1, 15,7.78a3.85,3.85,0,0,1-3.34,1.91H5.81a3.88,3.88,0,1,1,0-7.75h3A7.64,7.64,0,0,1,10.38,0Z",
      clipRule: "evenodd"
    }))
  }]
};

const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
  className: "flex flex-col items-center justify-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "md:w-auto px-5 md:px-0 mt-8 flex flex-col items-center space-y-5 md:space-y-8"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
  url: _assets_RR_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  additionalClasses: ['block h-8 w-auto md:h-40 w-auto'],
  alt: "Logo"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex items-center justify-center space-x-4 md:space-x-3"
}, navigation.social.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  key: item.name,
  href: item.href,
  target: "_blank",
  className: "text-gray hover:text-gray-500 p-3",
  rel: "noreferrer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "sr-only"
}, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
  className: "h-6 w-6",
  "aria-hidden": "true"
}))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "font-sora w-auto px-2 md:px-5 py-5 mt-20 inline-flex justify-between md:justify-center items-center bg-light-gray rounded-t-lg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  className: "text-center text-xs md:text-base font-light"
}, "Copyright \xA9 DM 2022")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js");
/* harmony import */ var flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flotiq-components-react */ "./node_modules/flotiq-components-react/dist/index.js");
/* harmony import */ var _assets_RR_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/RR.svg */ "./src/assets/RR.svg");






const headerText = 'Chef Riccardo';

const PageHeader = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {
  as: "nav"
}, ({
  open
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "max-w-7xl mx-auto py-4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex justify-between h-auto flex-wrap md:flex-nowrap"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "order-2 md:order-1 flex grow md:grow-0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex-shrink-0 flex grow md:grow-0 items-center justify-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
  url: _assets_RR_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  additionalClasses: ['block h-40 md:h-40 w-auto'],
  alt: "Logo"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "-ml-2 mr-2 flex items-center md:hidden"
}, "/*  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Button, {
  className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "sr-only"
}, "Open main menu"), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["default"], {
  className: "block h-6 w-6",
  "aria-hidden": "true"
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__["default"], {
  className: "block h-6 w-6",
  "aria-hidden": "true"
})), "*/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "order-3 md:order-2 hidden md:flex items-center justify-center w-full"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
  additionalClasses: ['!text-3xl font-semibold']
}, headerText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "order-1 md:order-3 flex items-center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex-shrink-0"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "mailto:hello@domain.com",
  className: "relative inline-flex items-center px-4 py-2 text-base md:text-lg font-regular hover:text-secondary"
}, "Contattami!"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure.Panel, {
  className: "md:hidden"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "pt-4 pb-3 border-t border-gray-200"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "flex items-center px-4 sm:px-6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null))))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./src/layouts/layout.js":
/*!*******************************!*\
  !*** ./src/layouts/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");





const Layout = ({
  children,
  additionalClass = []
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
  className: ['font-poppins', ...additionalClass].join(' ')
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
  lang: "en"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/404.js?export=head":
/*!**************************************!*\
  !*** ./src/pages/404.js?export=head ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flotiq-components-react */ "./node_modules/flotiq-components-react/dist/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layouts_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/layout */ "./src/layouts/layout.js");






const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  additionalClass: ['bg-light-gray']
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Page not found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "py-32"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
  additionalClasses: ['basis-1 mb-10 !text-5xl !font-medium text-center']
}, "Page not found, sorry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "text-center mt-5 pt-5"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(flotiq_components_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
  label: "Go back to index"
})))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./src/assets/RR.svg":
/*!***************************!*\
  !*** ./src/assets/RR.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/RR-2dd4eec3d791180726b4908587e5bc9a.svg");

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Disclosure": () => (/* binding */ Oe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
var Q=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Q||{}),V=(n=>(n[n.ToggleDisclosure=0]="ToggleDisclosure",n[n.CloseDisclosure=1]="CloseDisclosure",n[n.SetButtonId=2]="SetButtonId",n[n.SetPanelId=3]="SetPanelId",n[n.LinkPanel=4]="LinkPanel",n[n.UnlinkPanel=5]="UnlinkPanel",n))(V||{});let X={[0]:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[3](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);B.displayName="DisclosureContext";function h(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(B);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,h),o}return t}let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);H.displayName="DisclosureAPIContext";function j(e){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H);if(t===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,j),o}return t}let U=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);U.displayName="DisclosurePanelContext";function Y(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(U)}function Z(e,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,X,e,t)}let ee=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let{defaultOpen:l=!1,...i}=t,s=`headlessui-disclosure-button-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,n=`headlessui-disclosure-panel-${(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_3__.useId)()}`,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.optionalRef)(f=>{u.current=f},t.as===void 0||t.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Z,{disclosureState:l?0:1,linkedPanel:!1,buttonRef:m,panelRef:T,buttonId:s,panelId:n}),[{disclosureState:p},a]=c;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>a({type:2,buttonId:s}),[s,a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>a({type:3,panelId:n}),[n,a]);let P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(f=>{a({type:1});let C=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_6__.getOwnerDocument)(u);if(!C)return;let A=(()=>f?f instanceof HTMLElement?f:f.current instanceof HTMLElement?f.current:C.getElementById(s):C.getElementById(s))();A==null||A.focus()}),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:P}),[P]),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0,close:P}),[p,P]),d={ref:D};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(B.Provider,{value:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:b},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(p,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:d,theirProps:i,slot:r,defaultTag:ee,name:"Disclosure"}))))}),ne="button",le=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let[l,i]=h("Disclosure.Button"),s=Y(),n=s===null?!1:s===l.panelId,u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,o,n?null:l.buttonRef),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{var d;if(n){if(l.disclosureState===1)return;switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:r.preventDefault(),r.stopPropagation(),i({type:0}),(d=l.buttonRef.current)==null||d.focus();break}}else switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Enter:r.preventDefault(),r.stopPropagation(),i({type:0});break}}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__.Keys.Space:r.preventDefault();break}}),c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(r=>{var d;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__.isDisabledReactIssue7711)(r.currentTarget)||t.disabled||(n?(i({type:0}),(d=l.buttonRef.current)==null||d.focus()):i({type:0}))}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.disclosureState===0}),[l]),a=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__.useResolveButtonType)(t,u),P=t,b=n?{ref:D,type:a,onKeyDown:T,onClick:c}:{ref:D,id:l.buttonId,type:a,"aria-expanded":t.disabled?void 0:l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:T,onKeyUp:m,onClick:c};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:b,theirProps:P,slot:p,defaultTag:ne,name:"Disclosure.Button"})}),oe="div",re=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.Features.Static,se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(function(t,o){let[l,i]=h("Disclosure.Panel"),{close:s}=j("Disclosure.Panel"),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(o,l.panelRef,p=>{i({type:p?4:5})}),u=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.useOpenClosed)(),D=(()=>u!==null?u===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open:l.disclosureState===0)(),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l.disclosureState===0,close:s}),[l,s]),m=t,c={ref:n,id:l.panelId};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(U.Provider,{value:l.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:c,theirProps:m,slot:T,defaultTag:oe,features:re,visible:D,name:"Disclosure.Panel"}))}),Oe=Object.assign(te,{Button:le,Panel:se});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keys": () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useEvent": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
var u;let l=0;function r(){return++l}let I=(u=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?u:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)(),[e,o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?r:null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{e===null&&o(r())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsoMorphicEffect": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/ssr.js */ "./node_modules/@headlessui/react/dist/utils/ssr.js");
let s=_utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__.isServer?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLatestValue": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResolveButtonType": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useServerHandoffComplete": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r.serverHandoffComplete===!1&&(r.serverHandoffComplete=!0)},[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionalRef": () => (/* binding */ T),
/* harmony export */   "useSyncRefs": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenClosedProvider": () => (/* binding */ C),
/* harmony export */   "State": () => (/* binding */ p),
/* harmony export */   "useOpenClosed": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p||{});function s(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDisabledReactIssue7711": () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "match": () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOwnerDocument": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _ssr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr.js */ "./node_modules/@headlessui/react/dist/utils/ssr.js");
function e(r){return _ssr_js__WEBPACK_IMPORTED_MODULE_0__.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Features": () => (/* binding */ S),
/* harmony export */   "RenderStrategy": () => (/* binding */ j),
/* harmony export */   "compact": () => (/* binding */ F),
/* harmony export */   "forwardRefWithAs": () => (/* binding */ C),
/* harmony export */   "render": () => (/* binding */ $)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=o!=null?o:0;if(u&2){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=s;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i?0:1,{[0](){return null},[1](){return p({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(f=!0),g===!0&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,w(i.ref,u.ref)))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function T(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](n,...l){let s=e[o];for(let u of s){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/ssr.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": () => (/* binding */ e)
/* harmony export */ });
const e=typeof window=="undefined"||typeof document=="undefined";


/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/MenuIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/MenuIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MenuIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/XIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-jshead.js.map