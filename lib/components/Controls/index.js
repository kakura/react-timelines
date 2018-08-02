'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _ZoomIn = require('./ZoomIn');

var _ZoomIn2 = _interopRequireDefault(_ZoomIn);

var _ZoomOut = require('./ZoomOut');

var _ZoomOut2 = _interopRequireDefault(_ZoomOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = function Controls(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? true : _ref$isOpen,
      toggleOpen = _ref.toggleOpen,
      zoomIn = _ref.zoomIn,
      zoomOut = _ref.zoomOut,
      zoom = _ref.zoom,
      zoomMin = _ref.zoomMin,
      zoomMax = _ref.zoomMax;
  return _react2.default.createElement(
    'div',
    { className: 'rt-controls' },
    _react2.default.createElement(
      'div',
      { className: 'rt-controls__content' },
      toggleOpen && _react2.default.createElement(_Toggle2.default, { isOpen: isOpen, toggleOpen: toggleOpen }),
      zoomIn && _react2.default.createElement(_ZoomIn2.default, { zoomIn: zoomIn, zoomMax: zoomMax, zoom: zoom }),
      zoomOut && _react2.default.createElement(_ZoomOut2.default, { zoomOut: zoomOut, zoomMin: zoomMin, zoom: zoom })
    )
  );
};

Controls.propTypes = {
  zoom: _propTypes2.default.number.isRequired,
  isOpen: _propTypes2.default.bool,
  toggleOpen: _propTypes2.default.func,
  zoomIn: _propTypes2.default.func,
  zoomOut: _propTypes2.default.func,
  zoomMin: _propTypes2.default.number,
  zoomMax: _propTypes2.default.number
};

exports.default = Controls;
module.exports = exports['default'];