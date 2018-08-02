'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatDate = require('../../utils/formatDate');

var _classes = require('../../utils/classes');

var _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildDataAttributes = function buildDataAttributes() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var value = {};
  (0, _keys2.default)(attributes).forEach(function (name) {
    value['data-' + name] = attributes[name];
  });
  return value;
};

var Basic = function Basic(_ref) {
  var title = _ref.title,
      start = _ref.start,
      end = _ref.end,
      style = _ref.style,
      classes = _ref.classes,
      dataSet = _ref.dataSet,
      tooltip = _ref.tooltip;
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classes2.default)('rt-element', classes),
      style: style
    }, buildDataAttributes(dataSet)),
    _react2.default.createElement(
      'div',
      { className: 'rt-element__content', 'aria-hidden': 'true' },
      _react2.default.createElement(
        'span',
        { className: 'rt-element__title' },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'rt-element__tooltip' },
      tooltip
      // eslint-disable-next-line react/no-danger
      ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: tooltip.split('\n').join('<br>') } }) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          title
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Start'
          ),
          ' ',
          (0, _formatDate.getDayMonth)(start)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'End'
          ),
          ' ',
          (0, _formatDate.getDayMonth)(end)
        )
      )
    )
  );
};

Basic.propTypes = {
  title: _propTypes2.default.string.isRequired,
  start: _propTypes2.default.instanceOf(Date).isRequired,
  end: _propTypes2.default.instanceOf(Date).isRequired,
  style: _propTypes2.default.shape({}),
  classes: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired),
  dataSet: _propTypes2.default.shape({}),
  tooltip: _propTypes2.default.string
};

exports.default = Basic;
module.exports = exports['default'];