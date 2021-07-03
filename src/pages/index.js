import React from 'react'
import Lottie from 'react-lottie'

import { Link } from 'gatsby'
import Layout from '~organisms/Layout'
import Section from '~organisms/Section'
import SEO from '~atoms/Seo'
import TechnologiesPreview from '~atoms/TechnologiesPreview'
import Main from '~organisms/Main'
import Benefits from '~atoms/Benefits'
import Welcome from '~atoms/index/Welcome'
import BoxPackage from '~atoms/BoxPackage'
import Center from '~molecules/Center'
import Footer from '~atoms/Footer'
import GetInTouch from '~atoms/GetInTouch'
import Icon from '~atoms/Icon'

import AdvancedIcon from '~assets/svg/advanced.svg'
import Standout from '~assets/svg/standout.svg'
import RocketSpace from '~assets/rocket-space-outline-edited'
import VectorDesign from '~assets/117-vector-design-pen-outline-edited'
import Consultation from '~assets/981-consultation-outline-edited'

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

// eslint-disable-next-line react/prop-types
const LottieIcon = ({ icon }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: style.svg,
    },
  }

  return <Lottie options={defaultOptions} className={style.svg} />
}

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
              <div className={style.more}>
                <Link to="/technologies" className={style.moreAbout}>
                  <span className={style.text}>More about technologies</span>
                  <span className={style.moreAboutIcon}>
                    <Icon src="angle-right" />
                  </span>
                </Link>
              </div>
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
        <Main>
          State-of-the-art technologies bring new <strong>challenges</strong> in
          terms of implementation and <strong>interactions</strong>. You need
          designers and developers trained in these technologies to fully take{' '}
          <strong>advantage</strong> of them.
        </Main>
      </Section>
      <Section className={style.Missions}>
        <Main>
          <div className={style.top}>We are the R&D team you need to</div>
          <div className={style.middle}>Design & Build</div>
          <div className={style.bottom}>a great user experience</div>
        </Main>
        <div className={style.second}>
          <div className={style.title}>Our Mission</div>
          <div className={style.list}>
            <div className={style.mission}>
              <div className={style.icon}>
                <LottieIcon icon={RocketSpace} />
              </div>
              <div className={style.name}>Design & build </div>
              <div className={style.description}>
                digital and innovative solutions ready for production
              </div>
            </div>
            <div className={style.mission}>
              <div className={style.icon}>
                <LottieIcon icon={VectorDesign} />
              </div>
              <div className={style.name}>Prototype proof-of-concepts</div>
              <div className={style.description}>
                based on short iterations to help you make the good choice
              </div>
            </div>
            <div className={style.mission}>
              <div className={style.icon}>
                <LottieIcon icon={Consultation} />
              </div>
              <div className={style.name}>Train your team</div>
              <div className={style.description}>
                about state-of-the art technologies and methodologies
              </div>
            </div>
          </div>
          <div className={style.more}>
            <Link to="/mission" className={style.moreAbout}>
              <div className={style.text}>More about our mission</div>
              <span className={style.moreAboutIcon}>
                <Icon src="angle-right" />
              </span>
            </Link>
          </div>
        </div>
      </Section>
      <GetInTouch className={style.GetInTouch} />
      <Footer />
    </Layout>
  )
}
export default IndexPage
