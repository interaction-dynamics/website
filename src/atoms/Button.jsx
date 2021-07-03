import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import style from './Button.style'

const Button = ({ className, small, ...props }) => {
  if (props.href) {
    return (
      <a
        target="_blank"
        className={`${style.Button} ${small ? style.small : ''} ${className}`}
        {...props}
      >
        {props.children}
      </a>
    )
  }

  return (
    <Link
      className={`${style.Button} ${small ? style.small : ''} ${className}`}
      {...props}
    />
  )
}

Button.defaultProps = {
  className: '',
  small: false,
}

Button.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
}

export default Button
