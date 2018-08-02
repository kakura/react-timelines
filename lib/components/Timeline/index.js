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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Now = require('./Marker/Now');

var _Now2 = _interopRequireDefault(_Now);

var _Pointer = require('./Marker/Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _getMouseX = require('../../utils/getMouseX');

var _getMouseX2 = _interopRequireDefault(_getMouseX);

var _getGrid = require('../../utils/getGrid');

var _getGrid2 = _interopRequireDefault(_getGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function (_Component) {
  (0, _inherits3.default)(Timeline, _Component);

  function Timeline(props) {
    (0, _classCallCheck3.default)(this, Timeline);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Timeline.__proto__ || (0, _getPrototypeOf2.default)(Timeline)).call(this, props));

    _this.handleMouseMove = function (e) {
      _this.setState({ pointerDate: _this.props.time.fromX((0, _getMouseX2.default)(e)) });
    };

    _this.handleMouseLeave = function () {
      _this.setState({ pointerHighlighted: false });
    };

    _this.handleMouseEnter = function () {
      _this.setState({ pointerVisible: true, pointerHighlighted: true });
    };

    _this.state = {
      pointerDate: null,
      pointerVisible: false,
      pointerHighlighted: false
    };
    return _this;
  }

  (0, _createClass3.default)(Timeline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          now = _props.now,
          time = _props.time,
          timebar = _props.timebar,
          tracks = _props.tracks,
          sticky = _props.sticky,
          clickElement = _props.clickElement;
      var _state = this.state,
          pointerDate = _state.pointerDate,
          pointerVisible = _state.pointerVisible,
          pointerHighlighted = _state.pointerHighlighted;


      var grid = (0, _getGrid2.default)(timebar);

      return _react2.default.createElement(
        'div',
        { className: 'rt-timeline', style: { width: time.timelineWidthStyle } },
        now && _react2.default.createElement(_Now2.default, { now: now, visible: true, time: time }),
        pointerDate && _react2.default.createElement(_Pointer2.default, {
          date: pointerDate,
          time: time,
          visible: pointerVisible,
          highlighted: pointerHighlighted
        }),
        _react2.default.createElement(_Header2.default, {
          time: time,
          timebar: timebar,
          onMove: this.handleMouseMove,
          onEnter: this.handleMouseEnter,
          onLeave: this.handleMouseLeave,
          width: time.timelineWidthStyle,
          sticky: sticky
        }),
        _react2.default.createElement(_Body2.default, {
          time: time,
          grid: grid,
          tracks: tracks,
          clickElement: clickElement
        })
      );
    }
  }]);
  return Timeline;
}(_react.Component);

Timeline.propTypes = {
  now: _propTypes2.default.instanceOf(Date),
  time: _propTypes2.default.shape({
    fromX: _propTypes2.default.func.isRequired
  }).isRequired,
  timebar: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string
  }).isRequired).isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
  sticky: _propTypes2.default.shape({}),
  clickElement: _propTypes2.default.func
};

exports.default = Timeline;
module.exports = exports['default'];