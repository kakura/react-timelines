'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZoomIn = function ZoomIn(_ref) {
  var zoom = _ref.zoom,
      zoomMax = _ref.zoomMax,
      zoomIn = _ref.zoomIn;
  return _react2.default.createElement(
    'button',
    {
      className: 'rt-controls__button rt-controls__button--zoom-in',
      disabled: zoomMax && zoom >= zoomMax,
      onClick: zoomIn
    },
    _react2.default.createElement(
      'span',
      { className: 'rt-visually-hidden' },
      ' Zoom In'
    ),
    _react2.default.createElement(
      'svg',
      { viewBox: '1 1 59 59', xmlns: 'http://www.w3.org/2000/svg' },
      _react2.default.createElement(
        'g',
        { fillRule: 'evenodd' },
        _react2.default.createElement('path', { d: 'M12.5 22h24v6h-24z' }),
        _react2.default.createElement('path', { d: 'M27.5 13v24h-6V13z' }),
        _react2.default.createElement('path', { d: 'M25 48.5C12.02 48.5 1.5 37.98 1.5 25S12.02 1.5 25 1.5 48.5 12.02 48.5 25 37.98 48.5 25 48.5zm-.12-6.24c9.6 0 17.38-7.78 17.38-17.38 0-9.6-7.78-17.38-17.38-17.38-9.6 0-17.38 7.78-17.38 17.38 0 9.6 7.78 17.38 17.38 17.38z' }),
        _react2.default.createElement('rect', { width: '24', height: '8', rx: '4', transform: 'rotate(45 -22.312 67.766)' })
      )
    )
  );
};

ZoomIn.propTypes = {
  zoom: _propTypes2.default.number.isRequired,
  zoomMax: _propTypes2.default.number.isRequired,
  zoomIn: _propTypes2.default.func.isRequired
};

exports.default = ZoomIn;
module.exports = exports['default'];