'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

var getMonth = exports.getMonth = function getMonth(date) {
  return monthNames[date.getMonth()];
};

var getDayMonth = exports.getDayMonth = function getDayMonth(date) {
  return date.getDate() + ' ' + getMonth(date);
};