"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getGrid = function getGrid(timebar) {
  return (timebar.find(function (row) {
    return row.useAsGrid;
  }) || {}).cells;
};

exports.default = getGrid;
module.exports = exports["default"];