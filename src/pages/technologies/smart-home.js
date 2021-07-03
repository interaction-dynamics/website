/* eslint-disable react/prop-types */
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Section from '~organisms/Section'
import Footer from '~atoms/Footer'
import Check from '~assets/svg/check.svg'
import Error from '~assets/svg/error.svg'
import GetInTouch from '~atoms/GetInTouch'
import HeaderSection from '~organisms/HeaderSection'
import Main from '~organisms/Main'
import ListOfProjects from '~atoms/ListOfProjects'
import GoBackToParent from '~atoms/GoBackToParent'

import style from './smart-home.style'

const Yoga = () => (
  <StaticImage
    className={style.image}
    src="./assets/629-yoga-male-outline.png"
    alt="Comfort"
  />
)

const Lock = () => (
  <StaticImage
    className={style.image}
    src="./assets/95-locked-before-outline.png"
    alt="Security"
  />
)

const Savings = () => (
  <StaticImage
    className={style.image}
    src="./assets/453-savings-pig-outline.png"
    alt="Comfort"
  />
)

const Heart = () => (
  <StaticImage
    className={style.image}
    src="./assets/1249-heart-beat-outline.png"
    alt="Comfort"
  />
)

const Benefit = ({ title, image: Image, children }) => (
  <div className={style.benefit}>
    <div className={style.icon}>
      <Image />
    </div>
    <div className={style.description}>
      <h3 className={style.name}>{title}</h3>
      {children}
    </div>
  </div>
)

const Option = ({ children, bad = false }) => {
  const Icon = bad ? Error : Check
  return (
    <div className={`${style.option} ${bad ? style.bad : ''}`}>
      <Icon className={style.icon} />
      {children}
    </div>
  )
}

// markup
const SmartHome = () => {
  return (
    <Layout>
      <SEO title="Smart Home" />
      <HeaderSection title="Smart Home" className={style.header}>
        <div className={style.background} />
      </HeaderSection>

      <Section>
        <Main>
          <p>
            Based on <strong>IoT</strong> and <strong>machine-learning</strong>,
            Smart Home are <strong>ubiquitous</strong> technologies to augment
            your home capabilities and make your daily life easier.
          </p>
        </Main>
      </Section>

      <Section className={style.Benefits}>
        <h2 className={style.title}>4 positive impacts</h2>
        <div className={style.list}>
          <Benefit title="Comfort" image={Yoga}>
            Controlling the house equipments requires less physical movements
            and reduce your cognitive load. Your home is more comfortable.
          </Benefit>
          <Benefit title="Security" image={Lock}>
            Smart locks, smart surveillance cameras and smart smoke alarms make
            your home safer against intrusion or domestic accidents.
          </Benefit>

          <Benefit title="Savings" image={Savings}>
            Home automation can also monitor your energy consumption, understand
            your habits and at the end optimize your consumption and save energy
            and money.
          </Benefit>
          <Benefit title="Health" image={Heart}>
            Sensors monitor your vital signs and can detect sleep apnea or even
            falls. Smart scales can also detect your body composition. Home
            automation helps you to improve your health.
          </Benefit>
        </div>
      </Section>
      <Section className={style.compare}>
        <Main>
          Using state of the art technologies and design methods, we provide
          customized solutions.
        </Main>
        <div className={style.offers}>
          <div className={style.offer}>
            <div className={style.title}>Global Public Solutions</div>
            <Option>User-friendly</Option>
            <Option bad>No Privacy</Option>
            <Option bad>Closed Environment</Option>
            <Option bad>Basic scenarios only</Option>
          </div>
          <div className={style.offer}>
            <div className={style.title}>Open-source projects</div>
            <Option bad>Not User-friendly</Option>
            <Option>Privacy</Option>
            <Option>Open Source</Option>
            <Option bad>Basic scenarios only</Option>
          </div>
          <div className={`${style.offer} ${style.best}`}>
            <div className={style.title}>Interaction Dynamics</div>
            <Option>User-friendly</Option>
            <Option>Privacy</Option>
            <Option>Open Source</Option>
            <Option>Sophisticated scenarios</Option>
          </div>
        </div>
      </Section>
      <Section className={style.Benefits}>
        <h2 className={style.title}>Our projects for Smart Home</h2>
        <ListOfProjects />
      </Section>

      <GetInTouch />
      <GoBackToParent to="/technologies" label="Technologies" />
      <Footer />
    </Layout>
  )
}

export default SmartHome
