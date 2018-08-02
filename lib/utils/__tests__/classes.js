'use strict';

var _classes = require('../classes');

var _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('classes', function () {
  it('returns the base class', function () {
    expect((0, _classes2.default)('foo')).toBe('foo');
  });

  it('returns the base class plus additional class passed as string', function () {
    expect((0, _classes2.default)('bar', 'hello')).toBe('bar hello');
  });

  it('returns the base class plus additional class passed as array', function () {
    expect((0, _classes2.default)('bar', ['hello'])).toBe('bar hello');
    expect((0, _classes2.default)('foo', ['hello', 'world'])).toBe('foo hello world');
  });
});