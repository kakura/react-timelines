'use strict';

var _getNumericPropertyValue = require('../getNumericPropertyValue');

var _getNumericPropertyValue2 = _interopRequireDefault(_getNumericPropertyValue);

var _computedStyle = require('../computedStyle');

var _computedStyle2 = _interopRequireDefault(_computedStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../computedStyle');

describe('getNumericPropertyValue', function () {
  it('returns the numeric portion within a property value of a DOM node', function () {
    _computedStyle2.default.mockImplementation(function (node) {
      return {
        getPropertyValue: function getPropertyValue(prop) {
          return node.style[prop];
        }
      };
    });
    var node = {
      style: {
        height: '100px'
      }
    };
    var actual = (0, _getNumericPropertyValue2.default)(node, 'height');
    expect(actual).toBe(100);
  });
});