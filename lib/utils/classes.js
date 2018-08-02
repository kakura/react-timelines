'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = function classes(base, additional) {
  if (!additional) {
    return base;
  } else if (typeof additional === 'string') {
    return base + ' ' + additional;
  }
  return base + ' ' + additional.join(' ');
};

exports.default = classes;
module.exports = exports['default'];