'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrackKey = function TrackKey(_ref) {
  var track = _ref.track,
      toggleOpen = _ref.toggleOpen,
      clickTrackButton = _ref.clickTrackButton;
  var title = track.title,
      tracks = track.tracks,
      isOpen = track.isOpen,
      hasButton = track.hasButton,
      sideComponent = track.sideComponent;

  var isExpandable = isOpen !== undefined;

  var buildSideComponent = function buildSideComponent() {
    if (sideComponent) {
      return _react2.default.cloneElement(sideComponent);
    } else if (hasButton && clickTrackButton) {
      var handleClick = function handleClick() {
        return clickTrackButton(track);
      };
      return _react2.default.createElement('button', { className: 'rt-track-key__side-button', onClick: handleClick });
    }

    return null;
  };

  return _react2.default.createElement(
    'li',
    { className: 'rt-track-key' },
    _react2.default.createElement(
      'div',
      { className: 'rt-track-key__entry' },
      isExpandable && _react2.default.createElement(
        'button',
        {
          title: 'Expand track',
          className: 'rt-track-key__toggle ' + (isOpen ? 'rt-track-key__toggle--close' : 'rt-track-key__toggle--open'),
          onClick: function onClick() {
            return toggleOpen(track);
          }
        },
        isOpen ? 'Close' : 'Open'
      ),
      _react2.default.createElement(
        'span',
        { className: 'rt-track-key__title' },
        title
      ),
      buildSideComponent()
    ),
    isOpen && tracks && tracks.length > 0 && _react2.default.createElement(_2.default, { tracks: tracks, toggleOpen: toggleOpen })
  );
};

TrackKey.propTypes = {
  track: _propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({})),
    isOpen: _propTypes2.default.bool,
    hasButton: _propTypes2.default.bool
  }),
  toggleOpen: _propTypes2.default.func,
  clickTrackButton: _propTypes2.default.func
};

TrackKey.defaultProps = {
  clickTrackButton: undefined
};

exports.default = TrackKey;
module.exports = exports['default'];