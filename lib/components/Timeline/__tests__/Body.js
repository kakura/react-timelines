'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Body = require('../Body');

var _Body2 = _interopRequireDefault(_Body);

var _Tracks = require('../Tracks');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Grid = require('../Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  time: {},
  grid: [],
  tracks: []
};

describe('<Body />', function () {
  it('renders <Tracks />', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Body2.default, defaultProps));
    expect(wrapper.find(_Tracks2.default).exists()).toBe(true);
  });

  it('renders <Grid /> if grid prop exists', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Body2.default, defaultProps));
    expect(wrapper.find(_Grid2.default).exists()).toBe(true);
  });

  it('does not render <Grid /> if grid prop does not exist', function () {
    var props = (0, _extends3.default)({}, defaultProps, {
      grid: undefined
    });
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Body2.default, props));
    expect(wrapper.find(_Grid2.default).exists()).toBe(false);
  });
});