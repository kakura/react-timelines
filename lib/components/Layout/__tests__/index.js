'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Sidebar = require('../../Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Timeline = require('../../Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _computedStyle = require('../../../utils/computedStyle');

var _computedStyle2 = _interopRequireDefault(_computedStyle);

var _events = require('../../../utils/events');

var _raf = require('../../../utils/raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../Sidebar', function () {
  return function () {
    return null;
  };
});
jest.mock('../../Timeline', function () {
  return function () {
    return null;
  };
});
jest.mock('../../../utils/computedStyle');
jest.mock('../../../utils/events');
jest.mock('../../../utils/raf');

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$timebar = _ref.timebar,
      timebar = _ref$timebar === undefined ? [] : _ref$timebar,
      _ref$time = _ref.time,
      time = _ref$time === undefined ? {
    fromX: jest.fn(function () {
      return new Date();
    }),
    toX: jest.fn(function () {
      return 0;
    })
  } : _ref$time,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === undefined ? [] : _ref$tracks,
      _ref$now = _ref.now,
      now = _ref$now === undefined ? new Date() : _ref$now,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === undefined ? false : _ref$isOpen,
      _ref$toggleTrackOpen = _ref.toggleTrackOpen,
      toggleTrackOpen = _ref$toggleTrackOpen === undefined ? jest.fn() : _ref$toggleTrackOpen,
      _ref$enableSticky = _ref.enableSticky,
      enableSticky = _ref$enableSticky === undefined ? true : _ref$enableSticky,
      _ref$onLayoutChange = _ref.onLayoutChange,
      onLayoutChange = _ref$onLayoutChange === undefined ? jest.fn() : _ref$onLayoutChange,
      _ref$timelineViewport = _ref.timelineViewportWidth,
      timelineViewportWidth = _ref$timelineViewport === undefined ? 1000 : _ref$timelineViewport,
      _ref$sidebarWidth = _ref.sidebarWidth,
      sidebarWidth = _ref$sidebarWidth === undefined ? 200 : _ref$sidebarWidth;

  return {
    timebar: timebar,
    time: time,
    tracks: tracks,
    now: now,
    isOpen: isOpen,
    toggleTrackOpen: toggleTrackOpen,
    enableSticky: enableSticky,
    onLayoutChange: onLayoutChange,
    timelineViewportWidth: timelineViewportWidth,
    sidebarWidth: sidebarWidth
  };
};

describe('<Layout />', function () {
  beforeEach(function () {
    _computedStyle2.default.mockImplementation(function (node) {
      return {
        getPropertyValue: function getPropertyValue(prop) {
          return node.style[prop];
        }
      };
    });
    _raf2.default.mockImplementation(function (fn) {
      return fn();
    });
  });

  it('renders <Sidebar /> and <Timeline />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Sidebar2.default).exists()).toBe(true);
    expect(wrapper.find(_Timeline2.default).exists()).toBe(true);
  });

  it('renders <Sidebar /> in an open state', function () {
    var props = createProps({ isOpen: true });
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find('.rt-layout').prop('className')).toMatch('is-open');
  });

  it('renders <Sidebar /> in a closed state', function () {
    var props = createProps({ isOpen: false });
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find('.rt-layout').prop('className')).not.toMatch('is-open');
  });

  describe('sticky header', function () {
    it('becomes sticky when the window is within the timeline', function () {
      var listeners = {};
      _events.addListener.mockImplementation(function (evt, fun) {
        listeners[evt] = fun;
      });
      _events.removeListener.mockImplementation(jest.fn());

      var props = createProps();
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, props));
      expect((0, _typeof3.default)(listeners.scroll)).toEqual('function');

      wrapper.instance().setHeaderHeight(50);
      wrapper.instance().timeline.current.getBoundingClientRect = function () {
        return {
          top: -50,
          bottom: 100
        };
      };
      listeners.scroll();
      expect(wrapper.state()).toMatchObject({
        isSticky: true
      });

      wrapper.instance().timeline.current.getBoundingClientRect = function () {
        return {
          top: 10,
          bottom: 100
        };
      };
      listeners.scroll();
      expect(wrapper.state()).toMatchObject({
        isSticky: false
      });

      wrapper.instance().timeline.current.getBoundingClientRect = function () {
        return {
          top: -60,
          bottom: 20
        };
      };
      listeners.scroll();
      expect(wrapper.state()).toMatchObject({
        isSticky: false
      });

      wrapper.unmount();
      expect(_events.removeListener).toBeCalled();
    });

    it('syncs the timeline scroll position when the header is scrolled and is sticky', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_2.default, props));
      wrapper.setState({ isSticky: true });
      wrapper.find(_Timeline2.default).prop('sticky').handleHeaderScrollY('100');
      expect(wrapper.find('.rt-layout__timeline').instance().scrollLeft).toBe(100);
    });
  });
});