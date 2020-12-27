import React from 'react'
import PropTypes from 'prop-types'

import style from './Section.style'

const Section = ({ className, children }) => (
  <section className={`${style.Section} ${className}`}>{children}</section>
)

Section.defaultProps = {
  className: '',
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
export default Section
