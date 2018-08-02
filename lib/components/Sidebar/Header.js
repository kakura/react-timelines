'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var timebar = _ref.timebar,
      _ref$sticky = _ref.sticky;
  _ref$sticky = _ref$sticky === undefined ? {} : _ref$sticky;
  var isSticky = _ref$sticky.isSticky,
      sidebarWidth = _ref$sticky.sidebarWidth,
      headerHeight = _ref$sticky.headerHeight;
  return _react2.default.createElement(
    'div',
    { style: isSticky ? { paddingTop: headerHeight } : {} },
    _react2.default.createElement(
      'div',
      {
        className: 'rt-sidebar__header ' + (isSticky ? 'rt-is-sticky' : ''),
        style: isSticky ? { width: sidebarWidth } : {}
      },
      timebar.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title;
        return _react2.default.createElement(
          'div',
          { key: id, className: 'rt-timebar-key' },
          title
        );
      })
    )
  );
};

Header.propTypes = {
  sticky: _propTypes2.default.shape({
    isSticky: _propTypes2.default.bool.isRequired,
    headerHeight: _propTypes2.default.number.isRequired,
    sidebarWidth: _propTypes2.default.number.isRequired
  }),
  timebar: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string
  }).isRequired).isRequired
};

exports.default = Header;
module.exports = exports['default'];