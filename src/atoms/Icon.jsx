import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, src }) => (
  <i className={`las la-${src} ${className}`} />
)

Icon.defaultProps = {
  className: '',
}

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Icon
