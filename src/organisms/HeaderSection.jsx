import React from 'react'
import PropTypes from 'prop-types'

import Section from '~organisms/Section'
import Header from '~molecules/Header'

import style from './HeaderSection.style'

const HeaderSection = ({ title, subTitle, className, children }) => (
  <Section className={`${style.header} ${className}`}>
    {children}
    <Header />
    <div className={style.content}>
      <h1 className={style.title}>{title}</h1>
      {subTitle ? <h2 className={style.subTitle}>{subTitle}</h2> : null}
    </div>
  </Section>
)

HeaderSection.defaultProps = {
  title: '',
  className: '',
  children: [],
  subTitle: '',
}

HeaderSection.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  subTitle: PropTypes.string,
}

export default HeaderSection
