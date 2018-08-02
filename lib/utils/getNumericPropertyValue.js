'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _computedStyle = require('./computedStyle');

var _computedStyle2 = _interopRequireDefault(_computedStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (node, prop) {
  return parseInt((0, _computedStyle2.default)(node).getPropertyValue(prop), 10);
};

module.exports = exports['default'];