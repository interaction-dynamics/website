/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import style from './Layout.style'
import './Layout.style.global'

const Layout = ({ className, children }) => {
  return <main className={`${style.Layout} ${className}`}>{children}</main>
}

Layout.defaultProps = {
  className: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
