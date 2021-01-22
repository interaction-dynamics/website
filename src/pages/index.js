import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import TypeWriter from 'react-typewriter'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '~organisms/Layout'
import Section from '~organisms/Section'
import SEO from '~atoms/Seo'
import PulsingCircle from '~atoms/PulsingCircle'

import Welcome from '~atoms/index/Welcome'

import chatbot from '~images/chatbot.png'
import virtualReality from '~images/vr.png'
import augmentedReality from '~images/ar3.png'
import iot from '~images/iot2.png'
import gestures from '~images/gesture.png'
import voiceCommands from '~images/voice-commands.png'
import cyber from '~images/cyber.png'
import SVGImage from '~atoms/SVGImage'
import SlackIcon from '~assets/svg/slack.svg'
import FacebookIcon from '~assets/svg/facebook.svg'
import YoutubeIcon from '~assets/svg/youtube.svg'
import TwitterIcon from '~assets/svg/twitter.svg'
import AppleIcon from '~assets/svg/apple.svg'
import TelegramIcon from '~assets/svg/telegram.svg'
import TikTokIcon from '~assets/svg/tiktok.svg'
import WhatsAppIcon from '~assets/svg/whatsapp.svg'

import style from './index.style'

const icons = [
  SlackIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  AppleIcon,
  WhatsAppIcon,
]

const technologies = [
  { label: 'Chatbot', icon: chatbot },
  { label: 'Virtual reality', icon: virtualReality },
  { label: 'Augmented reality', icon: augmentedReality },
  { label: 'Smart home/office', icon: iot },
  { label: 'Voice commands', icon: voiceCommands },
  { label: '3D gestures', icon: gestures },
]

const benefits = [
  {
    label: 'Interact with users where they are:',
    conclusion: 'increase acquisition',
  },
  {
    label: 'More natural use:',
    conclusion: 'increase user satisfaction',
  },
  {
    label: 'More adapted features:',
    conclusion: 'increase retention',
  },
  {
    label: 'Waooh effect:',
    conclusion: 'increase user recommandations',
  },
]

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

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Welcome />
      <Section className={style.Reason} id="reasons">
        <div className={style.background}>
          {icons.map((Icon, index) => (
            <PulsingCircle key={index}>
              <Icon />
            </PulsingCircle>
          ))}
        </div>
        <div className={style.content}>
          <p>
            Users are very solicited
            <br /> new digital products hardly find their market.
          </p>
          <div className={style.big}>
            Make the difference <br />
            with a smealess and immersive user experience.
          </div>
        </div>
      </Section>
      <Section className={style.Reason}>
        <div className={style.content}>
          <p>
            <strong>
              Make the difference
              <br />
              with a smealess and immersive user experience.
            </strong>
          </p>
        </div>
      </Section>
      <Section className={style.Technologies}>
        <div className={style.content}>
          <h3 className={style.title}>
            We design & develop unique user experiences using cutting-edge
            technologies
          </h3>
          <div className={style.list}>
            {technologies.map(t => (
              <div className={style.Technology} key={t.label}>
                <img src={t.icon} alt={t.label} className={style.icon} />
                <div className={style.name}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className={style.Benefits}>
        <div className={style.content}>
          <h3 className={style.title}>Strong Benefits</h3>
          <div className={style.list}>
            {benefits.map(b => (
              <div className={style.Benefit} key={b.label}>
                <div className={style.label}>{b.label}</div>
                <div className={style.conclusion}>
                  <strong>{b.conclusion}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className={style.Mission}>
        <div className={style.content}>
          <h3 className={style.title}>Mission</h3>
          <div className={style.paragraph}>
            We are a team of highly skilled passionate designers and developers
            always ready for new challenges:
            <div className={style.list}>
              <div className={style.item}>
                Design and implement digital solutions from scratch for
                production
              </div>
              <div className={style.item}>Fast prototype proofs of concept</div>
              <div className={style.item}>
                Train your dev team with innovate Human-Computer Interfaces
                technologies
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className={style.Methods}>
        <div className={style.content}>
          <h3 className={style.title}>Methodology</h3>
          <p>5 key points to deliver you a great solution</p>
          <div className={style.list}>
            {methods.map(method => (
              <div className={style.Method} key={method.label}>
                <div className={style.label}>{method.label}</div>
                <div className={style.description}>{method.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className={style.Contact}>
        <div className={style.content}>
          <h3 className={style.title}>Contact</h3>
          <p>
            You have a new challenge for us? You want to be part of the team?
          </p>
          <div className={style.callToAction}>
            <a className={style.link} href={link}>
              {email}
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
export default IndexPage
