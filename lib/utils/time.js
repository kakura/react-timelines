"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MILLIS_IN_A_DAY = 24 * 60 * 60 * 1000;

var create = function create(_ref) {
  var start = _ref.start,
      end = _ref.end,
      zoom = _ref.zoom,
      _ref$viewportWidth = _ref.viewportWidth,
      viewportWidth = _ref$viewportWidth === undefined ? 0 : _ref$viewportWidth,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === undefined ? 0 : _ref$minWidth;

  var duration = end - start;

  var days = duration / MILLIS_IN_A_DAY;
  var daysZoomWidth = days * zoom;

  var timelineWidth = void 0;

  if (daysZoomWidth > viewportWidth) {
    timelineWidth = daysZoomWidth;
  } else {
    timelineWidth = viewportWidth;
  }

  if (timelineWidth < minWidth) {
    timelineWidth = minWidth;
  }

  var timelineWidthStyle = timelineWidth + "px";

  var toX = function toX(from) {
    var value = (from - start) / duration;
    return Math.round(value * timelineWidth);
  };

  var toStyleLeft = function toStyleLeft(from) {
    return {
      left: toX(from) + "px"
    };
  };

  var toStyleLeftAndWidth = function toStyleLeftAndWidth(from, to) {
    var left = toX(from);
    return {
      left: left + "px",
      width: toX(to) - left + "px"
    };
  };

  var fromX = function fromX(x) {
    return new Date(start.getTime() + x / timelineWidth * duration);
  };

  return {
    timelineWidth: timelineWidth,
    timelineWidthStyle: timelineWidthStyle,
    start: start,
    end: end,
    zoom: zoom,
    toX: toX,
    toStyleLeft: toStyleLeft,
    toStyleLeftAndWidth: toStyleLeftAndWidth,
    fromX: fromX
  };
};

exports.default = create;
module.exports = exports["default"];