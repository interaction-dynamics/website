import React from 'react'
import PropTypes from 'prop-types'

import style from './Section.style'

const Section = ({ className, children, id }) => (
  <section id={id} className={`${style.Section} ${className}`}>
    {children}
  </section>
)

Section.defaultProps = {
  className: '',
  id: '',
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
}
export default Section
