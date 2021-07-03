import React from 'react'

import Section from '~organisms/Section'

import EmailIcon from '~assets/svg/socials/email.svg'
import LinkedInIcon from '~assets/svg/socials/linkedin.svg'
import MediumIcon from '~assets/svg/socials/medium.svg'

import style from './GetInTouch.style'

const email = 'thibault.friedrich@gmail.com'
const link = `mailto:${email}`

const socials = [
  { label: 'Email', Icon: EmailIcon, href: link },
  {
    label: 'Linkedin',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/thibault-friedrich/',
  },
  {
    label: 'Medium',
    Icon: MediumIcon,
    href: 'https://medium.com/interaction-dynamics',
  },
]

// eslint-disable-next-line react/prop-types
export default ({ className }) => (
  <Section className={`${style.Contact} ${className}`}>
    <div className={style.content}>
      <h3 className={style.title}>Get in touch</h3>
      <p className={style.help}>
        You have a new challenge for us? You want to be part of the team? Please
        contact us.
      </p>
      <div className={style.socials}>
        {socials.map(({ label, Icon, href }) => (
          <a
            key={label}
            className={style.social}
            target="_blank"
            href={href}
            rel="noreferrer"
          >
            <Icon className={style.icon} />
            <div className={style.label}>{label}</div>
          </a>
        ))}
      </div>
    </div>
  </Section>
)
