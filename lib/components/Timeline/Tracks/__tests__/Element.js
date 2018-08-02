'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

var _Basic = require('../../../Elements/Basic');

var _Basic2 = _interopRequireDefault(_Basic);

var _time = require('../../../../utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Element />', function () {
  var defaultProps = {
    id: '1',
    time: (0, _time2.default)({
      start: new Date('2016-01-01'),
      end: new Date('2019-01-01'),
      zoom: 1
    }),
    title: 'test',
    start: new Date('2017-01-01'),
    end: new Date('2018-01-01')
  };

  it('renders with a calculated width and left position based on "start" and "end"', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, defaultProps));
    expect(wrapper.prop('style')).toEqual({
      left: '366px',
      width: '365px'
    });
  });

  it('renders <BasicElement />', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, defaultProps));
    expect(wrapper.find(_Basic2.default).exists()).toBe(true);
  });

  describe('clickElement', function () {
    it('renders with a cursor pointer style if callback is passed', function () {
      var props = (0, _extends3.default)({}, defaultProps);
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, (0, _extends3.default)({}, props, { clickElement: jest.fn() })));
      expect(wrapper.prop('style')).toMatchObject({ cursor: 'pointer' });
    });

    it('renders without cursor pointer style if callback is not passed', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, defaultProps));
      expect(wrapper.prop('style')).not.toMatchObject({ cursor: 'pointer' });
    });

    it('gets called with props when clicked', function () {
      var clickElement = jest.fn();
      var props = (0, _extends3.default)({}, defaultProps, { clickElement: clickElement });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Element2.default, (0, _extends3.default)({}, props, { clickElement: clickElement })));
      expect(clickElement).toHaveBeenCalledTimes(0);

      wrapper.simulate('click');
      expect(clickElement).toHaveBeenCalledTimes(1);
      expect(clickElement).toHaveBeenCalledWith(props);
    });
  });
});