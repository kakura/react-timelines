"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb) {
  return window.requestAnimationFrame(cb);
};

module.exports = exports["default"];