"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, x) {
  return window.getComputedStyle(node, x);
};

module.exports = exports["default"];