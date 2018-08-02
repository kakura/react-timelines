'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Timebar = require('../Timebar');

var _Timebar2 = _interopRequireDefault(_Timebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStickyProp = function createStickyProp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isSticky = _ref.isSticky,
      isSticky = _ref$isSticky === undefined ? false : _ref$isSticky,
      _ref$setHeaderHeight = _ref.setHeaderHeight,
      setHeaderHeight = _ref$setHeaderHeight === undefined ? jest.fn() : _ref$setHeaderHeight,
      _ref$handleHeaderScro = _ref.handleHeaderScrollY,
      handleHeaderScrollY = _ref$handleHeaderScro === undefined ? jest.fn() : _ref$handleHeaderScro,
      _ref$headerHeight = _ref.headerHeight,
      headerHeight = _ref$headerHeight === undefined ? 0 : _ref$headerHeight,
      _ref$viewportWidth = _ref.viewportWidth,
      viewportWidth = _ref$viewportWidth === undefined ? 0 : _ref$viewportWidth,
      _ref$scrollLeft = _ref.scrollLeft,
      scrollLeft = _ref$scrollLeft === undefined ? 0 : _ref$scrollLeft;

  return {
    isSticky: isSticky,
    setHeaderHeight: setHeaderHeight,
    handleHeaderScrollY: handleHeaderScrollY,
    headerHeight: headerHeight,
    viewportWidth: viewportWidth,
    scrollLeft: scrollLeft
  };
};

var createProps = function createProps() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$time = _ref2.time,
      time = _ref2$time === undefined ? {} : _ref2$time,
      _ref2$timebar = _ref2.timebar,
      timebar = _ref2$timebar === undefined ? [] : _ref2$timebar,
      _ref2$onMove = _ref2.onMove,
      onMove = _ref2$onMove === undefined ? jest.fn() : _ref2$onMove,
      _ref2$onEnter = _ref2.onEnter,
      onEnter = _ref2$onEnter === undefined ? jest.fn() : _ref2$onEnter,
      _ref2$onLeave = _ref2.onLeave,
      onLeave = _ref2$onLeave === undefined ? jest.fn() : _ref2$onLeave,
      _ref2$sticky = _ref2.sticky,
      sticky = _ref2$sticky === undefined ? undefined : _ref2$sticky;

  return {
    time: time,
    timebar: timebar,
    onMove: onMove,
    onEnter: onEnter,
    onLeave: onLeave,
    sticky: sticky,
    width: '1000px'
  };
};

describe('<Header />', function () {
  it('renders <Timebar />', function () {
    var props = createProps();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.find(_Timebar2.default).exists()).toBe(true);
  });

  it('calls "onMove" on mouse move event', function () {
    var onMove = jest.fn();
    var props = createProps({ onMove: onMove });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseMove');
    expect(onMove).toBeCalled();
  });

  it('calls "onEnter" on mouse enter event', function () {
    var onEnter = jest.fn();
    var props = createProps({ onEnter: onEnter });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseEnter');
    expect(onEnter).toBeCalled();
  });

  it('calls "onLeave" on mouse leave event', function () {
    var onLeave = jest.fn();
    var props = createProps({ onLeave: onLeave });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    wrapper.simulate('mouseLeave');
    expect(onLeave).toBeCalled();
  });

  describe('sticky', function () {
    it('ensures the scroll left postion gets updated when a new scrollLeft prop is received', function () {
      var sticky = createStickyProp();
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(0);

      sticky = createStickyProp({ scrollLeft: 100 });
      var nextProps = createProps({ sticky: sticky });
      wrapper.setProps(nextProps);
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(100);
    });

    it('ensures the scroll left position is correct when the header becomes sticky', function () {
      var sticky = createStickyProp({ isSticky: false });
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(0);

      sticky = createStickyProp({ isSticky: true });
      var nextProps = createProps({ sticky: sticky });
      wrapper.setProps(nextProps);
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(0);
    });

    it('does not update the scrollLeft position if the component updates and the scrollLeft and isSticky props have not changed', function () {
      var sticky = createStickyProp();
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(0);

      var nextProps = createProps({ height: 100, sticky: sticky });
      wrapper.setProps(nextProps);
      expect(wrapper.find('.rt-timeline__header-scroll').instance().scrollLeft).toBe(0);
    });

    it('calls the setHeaderHeight() prop when mounted', function () {
      var setHeaderHeight = jest.fn();
      var sticky = createStickyProp({ setHeaderHeight: setHeaderHeight });
      var props = createProps({ sticky: sticky });
      (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(setHeaderHeight).toBeCalled();
    });

    it('makes the header sticky if isSticky is true', function () {
      var sticky = createStickyProp({ isSticky: true });
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header').prop('className')).toMatch('is-sticky');
    });

    it('makes the header static if isSticky is false', function () {
      var sticky = createStickyProp({ isSticky: false });
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header').prop('className')).not.toMatch('is-sticky');
    });

    it('sets the viewportWidth and height of the header if sticky', function () {
      var sticky = createStickyProp({ isSticky: true, viewportWidth: 100, headerHeight: 20 });
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      expect(wrapper.find('.rt-timeline__header').prop('style')).toEqual({
        width: 100,
        height: 20
      });
    });

    it('handles scroll events when sticky', function () {
      var handleHeaderScrollY = jest.fn();
      var sticky = createStickyProp({ isSticky: true, handleHeaderScrollY: handleHeaderScrollY });
      var props = createProps({ sticky: sticky });
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Header2.default, props));
      wrapper.find('.rt-timeline__header-scroll').simulate('scroll');
      expect(handleHeaderScrollY).toBeCalled();
    });
  });
});