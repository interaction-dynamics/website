import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import style from './Header.style'

const links = [
  {
    href: 'https://thibault-friedrich.medium.com/',
    label: 'Blog',
  },
]

const Header = ({ children, className }) => {
  return (
    <header className={`${style.Header} ${className}`}>
      <div className={style.links}>
        {links.map(link => (
          <a className={style.link} href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}

Header.defaultProps = {
  className: '',
  children: [],
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
}

export default Header
