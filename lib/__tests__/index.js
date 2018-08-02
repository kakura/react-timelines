'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Controls = require('../components/Controls');

var _Controls2 = _interopRequireDefault(_Controls);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStart = new Date('2010-01-01');
var defaultEnd = new Date('2030-01-01');

var createScaleProps = function createScaleProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$start = _ref.start,
      start = _ref$start === undefined ? defaultStart : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === undefined ? defaultEnd : _ref$end,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === undefined ? 1 : _ref$zoom,
      _ref$zoomMin = _ref.zoomMin,
      zoomMin = _ref$zoomMin === undefined ? undefined : _ref$zoomMin,
      _ref$zoomMax = _ref.zoomMax,
      zoomMax = _ref$zoomMax === undefined ? undefined : _ref$zoomMax,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === undefined ? undefined : _ref$minWidth;

  return {
    start: start, end: end, zoom: zoom, zoomMin: zoomMin, zoomMax: zoomMax, minWidth: minWidth
  };
};

var createProps = function createProps() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$now = _ref2.now,
      now = _ref2$now === undefined ? new Date() : _ref2$now,
      _ref2$scale = _ref2.scale,
      scale = _ref2$scale === undefined ? createScaleProps() : _ref2$scale,
      _ref2$isOpen = _ref2.isOpen,
      isOpen = _ref2$isOpen === undefined ? undefined : _ref2$isOpen,
      _ref2$timebar = _ref2.timebar,
      timebar = _ref2$timebar === undefined ? [] : _ref2$timebar,
      _ref2$tracks = _ref2.tracks,
      tracks = _ref2$tracks === undefined ? [] : _ref2$tracks,
      _ref2$toggleOpen = _ref2.toggleOpen,
      toggleOpen = _ref2$toggleOpen === undefined ? jest.fn() : _ref2$toggleOpen,
      _ref2$zoomIn = _ref2.zoomIn,
      zoomIn = _ref2$zoomIn === undefined ? jest.fn() : _ref2$zoomIn,
      _ref2$zoomOut = _ref2.zoomOut,
      zoomOut = _ref2$zoomOut === undefined ? jest.fn() : _ref2$zoomOut;

  return {
    now: now,
    scale: scale,
    isOpen: isOpen,
    timebar: timebar,
    tracks: tracks,
    toggleOpen: toggleOpen,
    zoomIn: zoomIn,
    zoomOut: zoomOut
  };
};

describe('<Timeline />', function () {
  describe('Timeline', function () {
    it('renders <Controls />', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.find(_Controls2.default).exists()).toBe(true);
    });

    it('renders <Layout />', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.find(_Layout2.default).exists()).toBe(true);
    });

    it('re-renders when zoom changes', function () {
      var props = (0, _extends3.default)({}, createProps(), { scale: createScaleProps({ zoom: 1 }) });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.state('time').zoom).toBe(1);

      var nextProps = (0, _extends3.default)({}, props, { scale: createScaleProps({ zoom: 2 }) });

      wrapper.setProps(nextProps);
      expect(wrapper.state('time').zoom).toBe(2);

      wrapper.setProps(nextProps);
      expect(wrapper.state('time').zoom).toBe(2);
    });

    it('renders the sidebar open by default', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.find(_Layout2.default).prop('isOpen')).toBe(true);
    });
  });
});