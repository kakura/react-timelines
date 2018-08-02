'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pointer = require('../Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _time = require('../../../../utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = (0, _time2.default)({
  start: new Date('2017-01-01'),
  end: new Date('2018-01-01'),
  zoom: 1
});

describe('<PointerMarker />', function () {
  var props = {
    time: time,
    date: new Date('2017-01-02'),
    visible: false,
    highlighted: false
  };

  it('renders <Marker /> passing down horizontal position', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pointer2.default, props));
    expect(wrapper.find(_2.default).prop('x')).toBe(1);
  });

  it('renders "text"', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pointer2.default, props));
    expect(wrapper.find('strong').text()).toBe('2 Jan');
  });
});