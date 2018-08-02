'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatDate = require('../../../utils/formatDate');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointerMarker = function PointerMarker(_ref) {
  var time = _ref.time,
      date = _ref.date,
      visible = _ref.visible,
      highlighted = _ref.highlighted;
  return _react2.default.createElement(
    _2.default,
    {
      modifier: 'pointer',
      x: time.toX(date),
      visible: visible,
      highlighted: highlighted
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'strong',
          null,
          (0, _formatDate.getDayMonth)(date)
        )
      )
    )
  );
};

PointerMarker.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  date: _propTypes2.default.instanceOf(Date).isRequired,
  visible: _propTypes2.default.bool,
  highlighted: _propTypes2.default.bool
};

exports.default = PointerMarker;
module.exports = exports['default'];