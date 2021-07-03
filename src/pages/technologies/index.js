import React, { useState } from 'react'

import { Link } from 'gatsby'
import Lottie from 'react-lottie'
import HeaderSection from '~organisms/HeaderSection'
import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Footer from '~atoms/Footer'
import Main from '~organisms/Main'
import Section from '~organisms/Section'

import homeAnimationData from '~assets/home-outline-edited'
import vrAnimationData from '~assets/vr-glasses-gogle-outline-edited'
import arAnimationData from '~assets/smartphone-morph-outline-edited'
import gesturesAnimationData from '~assets/tap-two-fingers-once-outline-edited'
import chatbotAnimationData from '~assets/chat-outline-edited'

import style from './index.style'

// eslint-disable-next-line react/prop-types
const Technology = ({ title, url, icon }) => {
  const [hover, setHover] = useState()

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
    <Link
      to={url}
      className={style.technology}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={style.svg}>
        <Lottie
          options={defaultOptions}
          isStopped={!hover}
          className={style.svg}
        />
      </div>

      {title}
    </Link>
  )
}

const Technologies = () => {
  return (
    <Layout>
      <SEO title="Technologies" />
      <HeaderSection
        title="We find the best technologies adapted to your project."
        className={style.header}
      />
      <Section>
        <Main className={style.main}>
          <Technology
            title="Smart Home"
            icon={homeAnimationData}
            url="/technologies/smart-home"
          />
          <Technology
            title="Virtual Reality"
            icon={vrAnimationData}
            url="/technologies/virtual-reality"
          />
          {/* <Technology
          title="Augmented Reality"
          icon={arAnimationData}
          url="/technologies/augmented-reality"
        />
        <Technology
          title="Gestures"
          icon={gesturesAnimationData}
          url="/technologies/gestures"
        />
        <Technology
          title="Chatbots"
          icon={chatbotAnimationData}
          url="/technologies/chatbot"
        /> */}
        </Main>
      </Section>

      <Footer />
    </Layout>
  )
}

export default Technologies
