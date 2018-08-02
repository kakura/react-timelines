'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('../Body');

var _Body2 = _interopRequireDefault(_Body);

var _Now = require('../Marker/Now');

var _Now2 = _interopRequireDefault(_Now);

var _Pointer = require('../Marker/Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _time = require('../../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _getMouseX = require('../../../utils/getMouseX');

var _getMouseX2 = _interopRequireDefault(_getMouseX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../../utils/getMouseX');

var time = (0, _time2.default)({
  start: new Date('2018-01-01'),
  end: new Date('2019-01-01'),
  zoom: 1
});

var defaultTimebar = [{
  useAsGrid: true,
  id: '1',
  cells: [{ id: 'cell-1' }]
}];

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$now = _ref.now,
      now = _ref$now === undefined ? new Date() : _ref$now,
      _ref$timebar = _ref.timebar,
      timebar = _ref$timebar === undefined ? defaultTimebar : _ref$timebar,
      _ref$tracks = _ref.tracks,
      tracks = _ref$tracks === undefined ? [] : _ref$tracks,
      isOpen = _ref.isOpen;

  return {
    now: now,
    time: time,
    timebar: timebar,
    tracks: tracks,
    isOpen: isOpen
  };
};

describe('<Timeline />', function () {
  it('renders <NowMarker />, <Header /> and <Body />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    expect(wrapper.find(_Now2.default).exists()).toBe(true);
    expect(wrapper.find(_Header2.default).exists()).toBe(true);
    expect(wrapper.find(_Body2.default).exists()).toBe(true);
  });

  it('renders <Body /> passing in appropriate grid cells', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
    var expected = [{ id: 'cell-1' }];
    expect(wrapper.find(_Body2.default).prop('grid')).toEqual(expected);
  });

  describe('markers', function () {
    it('does not render <PointerMarker /> when component mounts', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.find(_Pointer2.default).exists()).not.toBe(true);
    });

    it('renders <PointerMarker /> when component mounts', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      wrapper.setState({ pointerDate: new Date() });
      expect(wrapper.find(_Pointer2.default).exists()).toBe(true);
    });

    it('does not render <NowMarker /> if "now" is "null"', function () {
      var props = createProps({ now: null });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.find(_Now2.default).exists()).toBe(false);
    });

    it('updates pointerDate when the mouse moves', function () {
      var event = 10;
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.state('pointerDate')).toBe(null);

      _getMouseX2.default.mockImplementation(function (e) {
        return e;
      });
      wrapper.find(_Header2.default).prop('onMove')(event);
      expect(wrapper.state('pointerDate')).toEqual(new Date('2018-01-11'));
    });

    it('makes the pointer visible and highlighted when the mouse enters', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.state('pointerVisible')).toBe(false);
      expect(wrapper.state('pointerHighlighted')).toBe(false);

      wrapper.find(_Header2.default).prop('onEnter')();
      expect(wrapper.state('pointerVisible')).toBe(true);
      expect(wrapper.state('pointerHighlighted')).toBe(true);
    });

    it('removes the pointer highlight when the mouse leaves', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, props));
      expect(wrapper.state('pointerHighlighted')).toBe(false);

      wrapper.find(_Header2.default).prop('onEnter')();
      expect(wrapper.state('pointerHighlighted')).toBe(true);

      wrapper.find(_Header2.default).prop('onLeave')();
      expect(wrapper.state('pointerHighlighted')).toBe(false);
    });
  });
});