import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/Controls'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import createTime from './utils/time'

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.scale)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale) {
      this.setState({ time: createTime(nextProps.scale) })
    }
  }

  render() {
    const {
      isOpen = true,
      tracks,
      now,
      timebar,
      toggleOpen,
      toggleTrackOpen,
      zoomIn,
      zoomOut,
      scale
    } = this.props
    const { time } = this.state
    return (
      <div className="react-timelines">
        <Controls
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          zoom={scale.zoom}
          zoomMin={scale.zoomMin}
          zoomMax={scale.zoomMax}
        />
        <div className={`layout ${isOpen ? 'is-open' : ''}`}>
          <div className="layout__side">
            <Sidebar
              timebar={timebar}
              tracks={tracks}
              toggleTrackOpen={toggleTrackOpen}
            />
          </div>
          <div className="layout__main">
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
            />
          </div>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number
  }).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  toggleTrackOpen: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func
}

export default Container
