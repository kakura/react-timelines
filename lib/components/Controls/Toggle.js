'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseSvg = function CloseSvg() {
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 56 56', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fillRule: 'evenodd' },
      _react2.default.createElement('rect', { width: '56', height: '8', rx: '4', transform: 'rotate(-45 56.335 16.263)' }),
      _react2.default.createElement('rect', { width: '56', height: '8', rx: '4', transform: 'rotate(45 -.707 15.364)' })
    )
  );
};

var OpenSvg = function OpenSvg() {
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 56 56', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { fillRule: 'evenodd' },
      _react2.default.createElement('rect', { width: '46', height: '8', rx: '4', transform: 'translate(5 7)' }),
      _react2.default.createElement('rect', { width: '46', height: '8', rx: '4', transform: 'translate(5 41)' }),
      _react2.default.createElement('rect', { width: '46', height: '8', rx: '4', transform: 'translate(5 24)' })
    )
  );
};

var Toggle = function Toggle(_ref) {
  var toggleOpen = _ref.toggleOpen,
      isOpen = _ref.isOpen;
  return _react2.default.createElement(
    'button',
    {
      className: 'rt-controls__button rt-controls__button--toggle',
      onClick: toggleOpen
    },
    _react2.default.createElement(
      'span',
      { className: 'rt-visually-hidden' },
      isOpen ? 'Close' : 'Open'
    ),
    isOpen ? _react2.default.createElement(CloseSvg, null) : _react2.default.createElement(OpenSvg, null)
  );
};

Toggle.propTypes = {
  toggleOpen: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool.isRequired
};

exports.default = Toggle;
module.exports = exports['default'];