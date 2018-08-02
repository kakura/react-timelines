'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Basic = require('../../Elements/Basic');

var _Basic2 = _interopRequireDefault(_Basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function Element(props) {
  var time = props.time,
      style = props.style,
      title = props.title,
      start = props.start,
      end = props.end,
      classes = props.classes,
      dataSet = props.dataSet,
      tooltip = props.tooltip,
      clickElement = props.clickElement;


  var handleClick = function handleClick() {
    clickElement(props);
  };
  var elementStyle = (0, _extends3.default)({}, time.toStyleLeftAndWidth(start, end), clickElement ? { cursor: 'pointer' } : {});

  return _react2.default.createElement(
    'div',
    {
      className: 'rt-track__element',
      style: elementStyle,
      onClick: clickElement && handleClick && handleClick
    },
    _react2.default.createElement(_Basic2.default, {
      title: title,
      start: start,
      end: end,
      style: style,
      classes: classes,
      dataSet: dataSet,
      tooltip: tooltip
    })
  );
}; /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */


Element.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  style: _propTypes2.default.shape({}),
  classes: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired),
  dataSet: _propTypes2.default.shape({}),
  title: _propTypes2.default.string,
  start: _propTypes2.default.instanceOf(Date).isRequired,
  end: _propTypes2.default.instanceOf(Date).isRequired,
  tooltip: _propTypes2.default.string,
  clickElement: _propTypes2.default.func
};

Element.defaultTypes = {
  clickElement: undefined
};

exports.default = Element;
module.exports = exports['default'];