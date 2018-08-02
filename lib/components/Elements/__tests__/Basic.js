'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Basic = require('../Basic');

var _Basic2 = _interopRequireDefault(_Basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  title: '',
  start: new Date('2017-01-01'),
  end: new Date('2017-02-01'),
  style: {},
  tooltip: '',
  classes: []
};

describe('<Basic />', function () {
  describe('Tooltip', function () {
    var getTooltip = function getTooltip(node) {
      return node.find('.rt-element__tooltip');
    };

    it('renders the tooltip value if it exists', function () {
      var tooltip = 'Test tooltip';
      var props = (0, _extends3.default)({}, defaultProps, { tooltip: tooltip });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(getTooltip(wrapper).html()).toMatch('Test tooltip');
    });

    it('handles multiline tooltips', function () {
      var tooltip = 'Test\ntooltip';
      var props = (0, _extends3.default)({}, defaultProps, { tooltip: tooltip });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(getTooltip(wrapper).html()).toMatch('Test<br>tooltip');
    });

    it('renders the title, formatted start and end date if the tooltip prop does not exist', function () {
      var tooltip = '';
      var title = 'TEST';
      var start = new Date('2017-03-20');
      var end = new Date('2017-04-15');
      var props = (0, _extends3.default)({}, defaultProps, { tooltip: tooltip, title: title, start: start, end: end
      });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(getTooltip(wrapper).text()).toMatch('TEST');
      expect(getTooltip(wrapper).text()).toMatch('Start 20 Mar');
      expect(getTooltip(wrapper).text()).toMatch('End 15 Apr');
    });

    it('can take an optional list of classnames to add to the parent', function () {
      var props = (0, _extends3.default)({}, defaultProps, { classes: ['foo', 'bar'] });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(wrapper.find('.rt-element').hasClass('foo')).toBe(true);
      expect(wrapper.find('.rt-element').hasClass('bar')).toBe(true);
    });
  });

  describe('Data set', function () {
    it('should be able to set data-*', function () {
      var props = (0, _extends3.default)({}, defaultProps, { dataSet: { foo: 'boo', bar: 'baz' } });
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Basic2.default, props));
      expect(wrapper.props()['data-foo']).toEqual('boo');
      expect(wrapper.props()['data-bar']).toEqual('baz');
    });
  });
});