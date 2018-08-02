'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var time = _ref.time,
      grid = _ref.grid;
  return _react2.default.createElement(
    'div',
    { className: 'rt-grid' },
    grid.map(function (_ref2) {
      var id = _ref2.id,
          start = _ref2.start,
          end = _ref2.end;
      return _react2.default.createElement('div', {
        key: id,
        className: 'rt-grid__cell',
        style: time.toStyleLeftAndWidth(start, end)
      });
    })
  );
};

Grid.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  grid: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date).isRequired,
    end: _propTypes2.default.instanceOf(Date).isRequired
  })).isRequired
};

exports.default = Grid;
module.exports = exports['default'];