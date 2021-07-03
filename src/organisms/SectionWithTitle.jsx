import React from 'react'
import Section from '~organisms/Section'

import style from './SectionWithTitle.style'

// eslint-disable-next-line react/prop-types
export default ({ title, children, className, ...props }) => (
  <Section className={`${style.Section} ${className} `} {...props}>
    <div className={style.content}>
      <h3 className={style.title}>{title}</h3>
      {children}
    </div>
  </Section>
)
