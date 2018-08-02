"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addListener = exports.addListener = function addListener(e, t) {
  return window.addEventListener(e, t);
};
var removeListener = exports.removeListener = function removeListener(e, t) {
  return window.removeEventListener(e, t);
};