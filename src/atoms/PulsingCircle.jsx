import React from 'react'
import PropTypes from 'prop-types'

import style from './PulsingCircle.style'

// https://www.kirupa.com/animations/creating_pulsing_circle_animation.htm

const PulsingCircle = ({ children }) => (
  <div className={style.PulsingCircle}>
    <div className={`${style.circle} ${style.first}`} />
    <div className={`${style.circle} ${style.second}`} />
    {children}
  </div>
)

PulsingCircle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

PulsingCircle.defaultProps = {
  children: [],
}

export default PulsingCircle
