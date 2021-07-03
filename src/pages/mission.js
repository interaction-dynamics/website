import React from 'react'
import Lottie from 'react-lottie'

import HeaderSection from '~organisms/HeaderSection'
import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Footer from '~atoms/Footer'
import Main from '~organisms/Main'
import Section from '~organisms/Section'
import Center from '~molecules/Center'
import RocketSpace from '~assets/489-rocket-space-outline-edited-2'
import VectorDesign from '~assets/117-vector-design-pen-outline-edited-2'
import Consultation from '~assets/981-consultation-outline-edited-2'
import CodeCraftmanship from '~assets/743-multimedia-code-2-outline-edited'
import UserCenteredApproach from '~assets/956-engage-users-outline-edited'
import AgileMethods from '~assets/978-project-management-outline-edited'
import GetInTouch from '~atoms/GetInTouch'

import style from './mission.style'

// eslint-disable-next-line react/prop-types
const Icon = ({ icon }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: style.svg,
    },
  }

  return (
    <div className={style.svg}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

const Mission = () => {
  return (
    <Layout>
      <SEO title="Our mission" />
      <HeaderSection
        title="We are always ready for new missions and new challenges"
        className={style.header}
      />
      <Section>
        <Center>
          <Center.Left className={style.firstLeft}>
            <h2 className={style.title}>Design & build</h2>
            We research <strong>user needs</strong>, design the user experience,{' '}
            <strong>code</strong> following best practices and deliver a product
            ready for <strong>production</strong>.
          </Center.Left>
          <Center.Right className={style.firstRight}>
            <Icon icon={RocketSpace} />
          </Center.Right>
        </Center>
      </Section>
      <Section>
        <Center>
          <Center.Left>
            <Icon icon={VectorDesign} />
          </Center.Left>
          <Center.Right>
            <h2 className={style.title}>Prototype</h2>
            We use the state-of-the-art methods and technologies to create{' '}
            <strong>proof of concepts</strong> of innovative user experiences in{' '}
            <strong>short iterations</strong>.
          </Center.Right>
        </Center>
      </Section>
      <Section>
        <Center>
          <Center.Left>
            <h2 className={style.title}>Train your team</h2>
            We help our team to acquire design and technical{' '}
            <strong>skills</strong> and <strong>methods</strong> about
            state-of-the-art technologies.
          </Center.Left>
          <Center.Right>
            <Icon icon={Consultation} />
          </Center.Right>
        </Center>
      </Section>
      <Section className={style.Methods}>
        <div className={style.keyMethods}>Our Key methods</div>
        <div className={style.list}>
          <div className={style.method}>
            <div className={style.icon}>
              <Icon icon={CodeCraftmanship} />
            </div>
            <div className={style.name}>Code Craftsmanship</div>
            <div className={style.description}>
              We produce maintainable and tested code to create robust and
              scalable solutions.
            </div>
          </div>
          <div className={style.method}>
            <div className={style.icon}>
              <Icon icon={UserCenteredApproach} />
            </div>
            <div className={style.name}>User-centered Approach</div>
            <div className={style.description}>
              We focus on real user needs and include our designers at all steps
              of the process.
            </div>
          </div>
          <div className={style.method}>
            <div className={style.icon}>
              <Icon icon={AgileMethods} />
            </div>
            <div className={style.name}>Agile methods</div>
            <div className={style.description}>
              We prefer weekly iterations and delivery to get feedbacks as soon
              as possible.
            </div>
          </div>
        </div>
      </Section>
      <GetInTouch className={style.GetInTouch} />

      <Footer />
    </Layout>
  )
}

export default Mission
