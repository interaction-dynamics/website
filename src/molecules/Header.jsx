import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from './Header.style'

const links = [
  {
    to: '/mission',
    label: 'Mission',
  },
  {
    to: '/projects',
    label: 'Projects',
  },
  // {
  //   to: '/technologies',
  //   label: 'Technologies',
  // },
  {
    href: 'https://medium.com/interaction-dynamics',
    label: 'Blog',
  },
]

/* eslint-disable react/prop-types */
const VLink = ({ link, light, styles }) => {
  if (link.href) {
    return (
      <a
        className={`${style.navLink} ${light ? style.light : ''}`}
        href={link.href}
        style={styles}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link
      to={link.to}
      className={`${style.navLink} ${light ? style.light : ''}`}
      activeClassName={style.active}
      style={styles}
    >
      {link.label}
    </Link>
  )
}

const Header = ({ children, className, animated, light }) => {
  return (
    <header className={`${style.Header} ${className}`}>
      <div className={style.left}>
        <Link
          to="/"
          className={`${style.title} ${animated ? style.animated : ''} ${
            light ? style.light : ''
          }`}
        >
          Interaction
          <br /> dynamics
        </Link>
      </div>
      {children}
      <div className={`${style.nav} ${animated ? style.animated : ''} `}>
        {links.map((link, index) => (
          <VLink
            link={link}
            key={link.label}
            light={light}
            styles={{ animationDelay: `${1 + 0.2 * index}s` }}
          />
        ))}
      </div>
    </header>
  )
}

Header.defaultProps = {
  className: '',
  children: [],
  animated: false,
  light: false,
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  animated: PropTypes.bool,
  light: PropTypes.bool,
}

export default Header
