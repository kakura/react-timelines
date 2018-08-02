'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tracks = require('./Tracks');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(_ref) {
  var time = _ref.time,
      grid = _ref.grid,
      tracks = _ref.tracks,
      clickElement = _ref.clickElement;
  return _react2.default.createElement(
    'div',
    { className: 'rt-timeline__body' },
    grid && _react2.default.createElement(_Grid2.default, { time: time, grid: grid }),
    _react2.default.createElement(_Tracks2.default, {
      time: time,
      tracks: tracks,
      clickElement: clickElement
    })
  );
};

Body.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  grid: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  clickElement: _propTypes2.default.func
};

exports.default = Body;
module.exports = exports['default'];