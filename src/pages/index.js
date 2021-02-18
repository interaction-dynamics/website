import React from 'react'

import Layout from '~organisms/Layout'
import Section from '~organisms/Section'
import SEO from '~atoms/Seo'
import TechnologiesPreview from '~atoms/TechnologiesPreview'
import Benefits from '~atoms/Benefits'
import Welcome from '~atoms/index/Welcome'
import BoxPackage from '~atoms/BoxPackage'
import Center from '~molecules/Center'

import EmailIcon from '~assets/svg/socials/email.svg'
import LinkedInIcon from '~assets/svg/socials/linkedin.svg'
import MediumIcon from '~assets/svg/socials/medium.svg'
import AdvancedIcon from '~assets/svg/advanced.svg'
import Standout from '~assets/svg/standout.svg'

import style from './index.style'

const methods = [
  {
    label: 'User Centered Design',
    description:
      'Study your users and make them evaluate the implementation to exactly fit your customers needs',
  },
  {
    label: 'Design X Development',
    description:
      'We create mixed teams with dedicated designers and developers for a more efficient communication',
  },
  {
    label: 'Technology Intelligence',
    description:
      'We monitor technological innovations to always use the best technologies',
  },
  {
    label: 'Agile methodology',
    description:
      'We manage our projects with agility to fit your business and financial needs with weekly releases',
  },
  {
    label: 'Code Craftsmanship',
    description:
      'We write tested, maintainable and sustainable code to produce more stable product without technical debt',
  },
]

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
    href: 'https://thibault-friedrich.medium.com/',
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Welcome />
      <Section className={style.NewProduct} id="reasons">
        <div className={style.content}>
          You plan to launch a new digital product?
          <div className={style.icon}>
            <BoxPackage />
            {/* <BoxIcon /> */}
          </div>
        </div>
      </Section>
      <Section className={style.AdvancedInteractions}>
        <Center>
          <Center.Left>
            Your use case requires complex user interactions?...
          </Center.Left>
          <Center.Right>
            <AdvancedIcon className={style.icon} />
          </Center.Right>
        </Center>
      </Section>
      <Section className={style.Standout}>
        <Center>
          <Center.Left>
            <Standout className={style.icon} />
          </Center.Left>
          <Center.Right>
            ...or your want to stand out from your competitors?
          </Center.Right>
        </Center>
      </Section>
      <Section className={style.Technologies}>
        <div className={style.content}>
          <div className={style.left}>
            <div className={style.centerLeft}>
              <strong>State-of-the-art</strong> technologies offer opportunities
              for customized, seamless and unique user experiences
            </div>
          </div>
          <div className={style.right}>
            <div className={style.centerRight}>
              <TechnologiesPreview />
            </div>
          </div>
        </div>
      </Section>
      <Section className={style.Benefits}>
        <div className={style.content}>
          <Benefits />
        </div>
      </Section>
      <Section className={style.Challenges}>
        <div className={style.content}>
          State-of-the-art technologies bring new <strong>challenges</strong> in
          terms of implementation and <strong>interactions</strong>. You need
          designers and developers trained in these technologies to fully take{' '}
          <strong>advantage</strong> of them.
        </div>
      </Section>
      <Section className={style.Mission}>
        <div className={style.content}>
          <div className={style.top}>We are the expert team you need to</div>
          <div className={style.middle}>Design & Build</div>
          <div className={style.bottom}>a great digital solution</div>
        </div>
      </Section>
      <Section className={style.Contact}>
        <div className={style.content}>
          <h3 className={style.title}>Get in touch</h3>
          <p className={style.help}>
            You have a new challenge for us? You want to be part of the team?
            Please contact us.
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
      <footer className={style.footer}>
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/pixelmeetup"
            title="Pixelmeetup"
          >
            Pixelmeetup
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </Layout>
  )
}
export default IndexPage
