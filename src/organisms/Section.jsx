import React from 'react'
import PropTypes from 'prop-types'

import style from './Section.style'

const Section = ({ className, children, id, short }) => (
  <section
    id={id}
    className={`${style.Section} ${short ? style.short : ''} ${className}`}
  >
    {children}
  </section>
)

Section.defaultProps = {
  className: '',
  id: '',
  short: false,
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  short: PropTypes.bool,
}
export default Section
