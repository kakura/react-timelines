'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Controls = require('./components/Controls');

var _Controls2 = _interopRequireDefault(_Controls);

var _Layout = require('./components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _time = require('./utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNKNOWN_WIDTH = -1;

var Timeline = function (_Component) {
  (0, _inherits3.default)(Timeline, _Component);

  function Timeline(props) {
    (0, _classCallCheck3.default)(this, Timeline);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timeline.__proto__ || (0, _getPrototypeOf2.default)(Timeline)).call(this, props));

    _initialiseProps.call(_this);

    var timelineViewportWidth = UNKNOWN_WIDTH;
    var sidebarWidth = UNKNOWN_WIDTH;
    _this.state = {
      time: (0, _time2.default)((0, _extends3.default)({}, props.scale, { viewportWidth: timelineViewportWidth })),
      timelineViewportWidth: timelineViewportWidth,
      sidebarWidth: sidebarWidth
    };
    return _this;
  }

  (0, _createClass3.default)(Timeline, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scale !== this.props.scale) {
        var time = (0, _time2.default)((0, _extends3.default)({}, nextProps.scale, {
          viewportWidth: this.state.timelineViewportWidth
        }));
        this.setState({ time: time });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$isOpen = _props.isOpen,
          isOpen = _props$isOpen === undefined ? true : _props$isOpen,
          toggleOpen = _props.toggleOpen,
          zoomIn = _props.zoomIn,
          zoomOut = _props.zoomOut,
          _props$scale = _props.scale,
          zoom = _props$scale.zoom,
          zoomMin = _props$scale.zoomMin,
          zoomMax = _props$scale.zoomMax,
          tracks = _props.tracks,
          now = _props.now,
          timebar = _props.timebar,
          toggleTrackOpen = _props.toggleTrackOpen,
          _props$enableSticky = _props.enableSticky,
          enableSticky = _props$enableSticky === undefined ? false : _props$enableSticky,
          scrollToNow = _props.scrollToNow;
      var _state = this.state,
          time = _state.time,
          timelineViewportWidth = _state.timelineViewportWidth,
          sidebarWidth = _state.sidebarWidth;
      var _props2 = this.props,
          clickElement = _props2.clickElement,
          clickTrackButton = _props2.clickTrackButton;


      return _react2.default.createElement(
        'div',
        { className: 'rt' },
        _react2.default.createElement(_Controls2.default, {
          isOpen: isOpen,
          toggleOpen: toggleOpen,
          zoomIn: zoomIn,
          zoomOut: zoomOut,
          zoom: zoom,
          zoomMin: zoomMin,
          zoomMax: zoomMax
        }),
        _react2.default.createElement(_Layout2.default, {
          enableSticky: enableSticky,
          now: now,
          tracks: tracks,
          timebar: timebar,
          toggleTrackOpen: toggleTrackOpen,
          scrollToNow: scrollToNow,
          time: time,
          isOpen: isOpen,
          onLayoutChange: this.handleLayoutChange,
          timelineViewportWidth: timelineViewportWidth,
          sidebarWidth: sidebarWidth,
          clickElement: clickElement,
          clickTrackButton: clickTrackButton
        })
      );
    }
  }]);
  return Timeline;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleLayoutChange = function (_ref, cb) {
    var timelineViewportWidth = _ref.timelineViewportWidth,
        sidebarWidth = _ref.sidebarWidth;

    var time = (0, _time2.default)((0, _extends3.default)({}, _this2.props.scale, {
      viewportWidth: timelineViewportWidth
    }));
    _this2.setState({
      time: time,
      timelineViewportWidth: timelineViewportWidth,
      sidebarWidth: sidebarWidth
    }, cb);
  };
};

Timeline.propTypes = {
  scale: _propTypes2.default.shape({
    start: _propTypes2.default.instanceOf(Date).isRequired,
    end: _propTypes2.default.instanceOf(Date).isRequired,
    zoom: _propTypes2.default.number.isRequired,
    zoomMin: _propTypes2.default.number,
    zoomMax: _propTypes2.default.number,
    minWidth: _propTypes2.default.number
  }),
  isOpen: _propTypes2.default.bool,
  toggleOpen: _propTypes2.default.func,
  zoomIn: _propTypes2.default.func,
  zoomOut: _propTypes2.default.func,
  clickElement: _propTypes2.default.func,
  clickTrackButton: _propTypes2.default.func,
  timebar: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired,
  now: _propTypes2.default.instanceOf(Date),
  toggleTrackOpen: _propTypes2.default.func,
  enableSticky: _propTypes2.default.bool,
  scrollToNow: _propTypes2.default.bool
};

exports.default = Timeline;
module.exports = exports['default'];