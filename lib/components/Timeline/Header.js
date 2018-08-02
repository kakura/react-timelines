'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Timebar = require('./Timebar');

var _Timebar2 = _interopRequireDefault(_Timebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.handleScroll = function () {
      _this.props.sticky.handleHeaderScrollY(_this.scroll.current.scrollLeft);
    };

    _this.scroll = _react2.default.createRef();
    _this.timebar = _react2.default.createRef();
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var sticky = this.props.sticky;

      if (sticky) {
        sticky.setHeaderHeight(this.timebar.current.offsetHeight);
        var scrollLeft = sticky.scrollLeft,
            isSticky = sticky.isSticky;

        if (isSticky) {
          this.scroll.current.scrollLeft = scrollLeft;
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var sticky = this.props.sticky;

      if (sticky) {
        var scrollLeft = sticky.scrollLeft,
            isSticky = sticky.isSticky;

        var prevScrollLeft = prevProps.sticky.scrollLeft;
        var prevIsSticky = prevProps.sticky.isSticky;
        if (scrollLeft !== prevScrollLeft || isSticky !== prevIsSticky) {
          this.scroll.current.scrollLeft = scrollLeft;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          time = _props.time,
          onMove = _props.onMove,
          onEnter = _props.onEnter,
          onLeave = _props.onLeave,
          width = _props.width,
          rows = _props.timebar,
          _props$sticky = _props.sticky;
      _props$sticky = _props$sticky === undefined ? {} : _props$sticky;
      var isSticky = _props$sticky.isSticky,
          headerHeight = _props$sticky.headerHeight,
          viewportWidth = _props$sticky.viewportWidth;

      return _react2.default.createElement(
        'div',
        {
          style: isSticky ? { paddingTop: headerHeight } : {},
          onMouseMove: onMove,
          onMouseEnter: onEnter,
          onMouseLeave: onLeave
        },
        _react2.default.createElement(
          'div',
          {
            className: 'rt-timeline__header ' + (isSticky ? 'rt-is-sticky' : ''),
            style: isSticky ? { width: viewportWidth, height: headerHeight } : {}
          },
          _react2.default.createElement(
            'div',
            { className: 'rt-timeline__header-scroll', ref: this.scroll, onScroll: isSticky ? this.handleScroll : noop },
            _react2.default.createElement(
              'div',
              {
                ref: this.timebar,
                style: isSticky ? { width: width } : {}
              },
              _react2.default.createElement(_Timebar2.default, { time: time, rows: rows })
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react.PureComponent);

Header.propTypes = {
  time: _propTypes2.default.shape({}).isRequired,
  timebar: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string
  }).isRequired).isRequired,
  onMove: _propTypes2.default.func.isRequired,
  onEnter: _propTypes2.default.func.isRequired,
  onLeave: _propTypes2.default.func.isRequired,
  width: _propTypes2.default.string.isRequired,
  sticky: _propTypes2.default.shape({
    isSticky: _propTypes2.default.bool.isRequired,
    setHeaderHeight: _propTypes2.default.func.isRequired,
    viewportWidth: _propTypes2.default.number.isRequired,
    handleHeaderScrollY: _propTypes2.default.func.isRequired,
    scrollLeft: _propTypes2.default.number.isRequired
  })
};

exports.default = Header;
module.exports = exports['default'];