'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSticky = {
  isSticky: false,
  sidebarWidth: 0,
  headerHeight: 0
};

var defaultProps = {
  timebar: [],
  sticky: (0, _extends3.default)({}, defaultSticky)
};

describe('<Header />', function () {
  it('renders the title for each row', function () {
    var timebar = [{ id: '1', title: 'row-1' }, { id: '1', title: 'row-2' }];
    var props = (0, _extends3.default)({}, defaultProps, { timebar: timebar });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.find('.rt-timebar-key').first().text()).toBe('row-1');
    expect(wrapper.find('.rt-timebar-key').last().text()).toBe('row-2');
  });

  it('reserves the space taken up by the header when it is sticky', function () {
    var sticky = (0, _extends3.default)({}, defaultSticky, {
      isSticky: true,
      headerHeight: 100
    });
    var props = (0, _extends3.default)({}, defaultProps, { sticky: sticky });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.prop('style')).toEqual({
      paddingTop: 100
    });
  });

  it('does not reserve the space taken up by the header when it is static', function () {
    var sticky = (0, _extends3.default)({}, defaultSticky, {
      isSticky: false,
      headerHeight: 100
    });
    var props = (0, _extends3.default)({}, defaultProps, { sticky: sticky });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.prop('style')).toEqual({});
  });

  it('becomes sticky when it receives a sticky prop', function () {
    var sticky = (0, _extends3.default)({}, defaultSticky, {
      isSticky: true,
      sidebarWidth: 200
    });
    var props = (0, _extends3.default)({}, defaultProps, { sticky: sticky });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.find('.rt-sidebar__header').hasClass('rt-is-sticky')).toBe(true);
    expect(wrapper.find('.rt-sidebar__header').prop('style')).toEqual({ width: 200 });
  });

  it('becomes static when it receives a falsy sticky prop', function () {
    var sticky = (0, _extends3.default)({}, defaultSticky, {
      isSticky: false,
      sidebarWidth: 200
    });
    var props = (0, _extends3.default)({}, defaultProps, { sticky: sticky });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Header2.default, props));
    expect(wrapper.find('.rt-sidebar__header').hasClass('rt-is-sticky')).toBe(false);
    expect(wrapper.find('.rt-sidebar__header').prop('style')).toEqual({});
  });
});