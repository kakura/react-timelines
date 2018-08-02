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

var _Sidebar = require('../Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('../Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _events = require('../../utils/events');

var _raf = require('../../utils/raf');

var _raf2 = _interopRequireDefault(_raf);

var _getNumericPropertyValue = require('../../utils/getNumericPropertyValue');

var _getNumericPropertyValue2 = _interopRequireDefault(_getNumericPropertyValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var Layout = function (_PureComponent) {
  (0, _inherits3.default)(Layout, _PureComponent);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.setHeaderHeight = function (headerHeight) {
      _this.setState({ headerHeight: headerHeight });
    };

    _this.scrollToNow = function () {
      var _this$props = _this.props,
          time = _this$props.time,
          scrollToNow = _this$props.scrollToNow,
          now = _this$props.now;

      if (scrollToNow) {
        _this.timeline.current.scrollLeft = time.toX(now) - 0.5 * _this.props.timelineViewportWidth;
      }
    };

    _this.updateTimelineBodyScroll = function () {
      _this.timeline.current.scrollLeft = _this.state.scrollLeft;
    };

    _this.updateTimelineHeaderScroll = function () {
      var scrollLeft = _this.timeline.current.scrollLeft;

      _this.setState({ scrollLeft: scrollLeft });
    };

    _this.handleHeaderScrollY = function (scrollLeft) {
      (0, _raf2.default)(function () {
        _this.setState({ scrollLeft: scrollLeft });
      });
    };

    _this.handleScrollY = function () {
      (0, _raf2.default)(function () {
        var headerHeight = _this.state.headerHeight;

        var markerHeight = 0;

        var _this$timeline$curren = _this.timeline.current.getBoundingClientRect(),
            top = _this$timeline$curren.top,
            bottom = _this$timeline$curren.bottom;

        var isSticky = top <= -markerHeight && bottom >= headerHeight;
        _this.setState(function () {
          return { isSticky: isSticky };
        });
      });
    };

    _this.handleScrollX = function () {
      (0, _raf2.default)(_this.updateTimelineHeaderScroll);
    };

    _this.calculateSidebarWidth = function () {
      return _this.sidebar.current.offsetWidth + (0, _getNumericPropertyValue2.default)(_this.layout.current, 'margin-left');
    };

    _this.calculateTimelineViewportWidth = function () {
      return _this.timeline.current.offsetWidth;
    };

    _this.handleLayoutChange = function (cb) {
      var sidebarWidth = _this.calculateSidebarWidth();
      var timelineViewportWidth = _this.calculateTimelineViewportWidth();
      if (sidebarWidth !== _this.props.sidebarWidth || timelineViewportWidth !== _this.props.timelineViewportWidth) {
        _this.props.onLayoutChange({
          sidebarWidth: _this.calculateSidebarWidth(),
          timelineViewportWidth: _this.calculateTimelineViewportWidth()
        }, cb);
      }
    };

    _this.handleResize = function () {
      return _this.handleLayoutChange();
    };

    _this.timeline = _react2.default.createRef();
    _this.layout = _react2.default.createRef();
    _this.sidebar = _react2.default.createRef();

    _this.state = {
      isSticky: false,
      headerHeight: 0,
      scrollLeft: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.enableSticky) {
        (0, _events.addListener)('scroll', this.handleScrollY);
        this.updateTimelineHeaderScroll();
        this.updateTimelineBodyScroll();
      }

      (0, _events.addListener)('resize', this.handleResize);
      this.handleLayoutChange(function () {
        return _this2.scrollToNow();
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.enableSticky && this.state.isSticky) {
        if (!prevState.isSticky) {
          this.updateTimelineHeaderScroll();
        }

        if (this.state.scrollLeft !== prevState.scrollLeft) {
          this.updateTimelineBodyScroll();
        }
      }

      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleLayoutChange();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.enableSticky) {
        (0, _events.removeListener)('scroll', this.handleScrollY);
        (0, _events.removeListener)('resize', this.handleResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          tracks = _props.tracks,
          now = _props.now,
          time = _props.time,
          timebar = _props.timebar,
          toggleTrackOpen = _props.toggleTrackOpen,
          sidebarWidth = _props.sidebarWidth,
          timelineViewportWidth = _props.timelineViewportWidth,
          clickElement = _props.clickElement,
          clickTrackButton = _props.clickTrackButton;
      var _state = this.state,
          isSticky = _state.isSticky,
          headerHeight = _state.headerHeight,
          scrollLeft = _state.scrollLeft;

      return _react2.default.createElement(
        'div',
        {
          className: 'rt-layout ' + (isOpen ? 'rt-is-open' : ''),
          ref: this.layout
        },
        _react2.default.createElement(
          'div',
          {
            className: 'rt-layout__side',
            ref: this.sidebar
          },
          _react2.default.createElement(_Sidebar2.default, {
            timebar: timebar,
            tracks: tracks,
            toggleTrackOpen: toggleTrackOpen,
            sticky: { isSticky: isSticky, headerHeight: headerHeight, sidebarWidth: sidebarWidth },
            clickTrackButton: clickTrackButton
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'rt-layout__main' },
          _react2.default.createElement(
            'div',
            {
              className: 'rt-layout__timeline',
              ref: this.timeline,
              onScroll: isSticky ? this.handleScrollX : noop
            },
            _react2.default.createElement(_Timeline2.default, {
              now: now,
              time: time,
              timebar: timebar,
              tracks: tracks,
              sticky: {
                isSticky: isSticky,
                setHeaderHeight: this.setHeaderHeight,
                viewportWidth: timelineViewportWidth,
                handleHeaderScrollY: this.handleHeaderScrollY,
                headerHeight: headerHeight,
                scrollLeft: scrollLeft
              },
              clickElement: clickElement
            })
          )
        )
      );
    }
  }]);
  return Layout;
}(_react.PureComponent);

Layout.propTypes = {
  enableSticky: _propTypes2.default.bool.isRequired,
  timebar: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  time: _propTypes2.default.shape({}).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  now: _propTypes2.default.instanceOf(Date),
  isOpen: _propTypes2.default.bool,
  toggleTrackOpen: _propTypes2.default.func,
  scrollToNow: _propTypes2.default.bool,
  onLayoutChange: _propTypes2.default.func.isRequired,
  sidebarWidth: _propTypes2.default.number,
  timelineViewportWidth: _propTypes2.default.number,
  clickElement: _propTypes2.default.func,
  clickTrackButton: _propTypes2.default.func
};

exports.default = Layout;
module.exports = exports['default'];