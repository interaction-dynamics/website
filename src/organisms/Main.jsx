import React from 'react'
import PropTypes from 'prop-types'

import style from './Main.style'

const Main = ({ className, children }) => (
  <main className={`${style.main} ${className}`}>{children}</main>
)

Main.defaultProps = {
  className: '',
  children: [],
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Main
