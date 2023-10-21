import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'gatsby'
import Lottie from 'react-lottie'
// eslint-disable-next-line import/no-webpack-loader-syntax
import subtitles from 'file-loader!~videos/subtitles.vtt'
import HeaderSection from '~organisms/HeaderSection'
import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Footer from '~atoms/Footer'
import Title from '~atoms/Title'
import Main from '~organisms/Main'
import Section from '~organisms/Section'
import SectionWithTitle from '~organisms/SectionWithTitle'
import Button from '~atoms/Button'
import GoBackToParent from '~atoms/GoBackToParent'
import SVGImage from '~atoms/SVGImage'

import Header from '~molecules/Header'
import Tags from '~molecules/Tags'
import luxDCamera from '~images/lux-d-camera.png'
import video from '~videos/recognize-activity-3.mp4'
import Activity from '~assets/svg/activity3.svg'
import Camera from '~assets/svg/camera.svg'

import style from './recognize-activities-with-computer-vision.style'

const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

const AnimatedActivity = () => {
  const ref = useRef()

  const onScreen = useOnScreen(ref, '400px')

  return (
    <div ref={ref} className={`${style.svg} ${onScreen ? style.animated : ''}`}>
      <Activity />
    </div>
  )
}

const RecognizeActivitiesWithComputerVision = () => (
  <Layout>
    <SEO title="Activities recognition" />
    <Section className={style.headerSection}>
      <Header light />
    </Section>
    <Section className={style.headerSection}>
      <Title>Activities recognition with computer vision</Title>
      <Tags
        className={style.tags}
        tags={['computer-vision', 'machine-learning', 'smart-home']}
      />
      <div className={style.video}>
        <video width="100%" controls className={style.video}>
          <source src={video} type="video/mp4" />
          <track kind="captions" srcLang="en" src={subtitles} />
          Your browser does not support the video tag.
        </video>
      </div>
    </Section>
    <Section className={style.fullHeight}>
      <Main>
        <p>
          As a proof of concept, we selected a <strong>complex</strong>{' '}
          activity:
        </p>
        <AnimatedActivity />
      </Main>
    </Section>
    <Section className={style.fullHeight}>
      <Main>
        <p>
          We run the human activity recognition using{' '}
          <a
            className={style.link}
            href="https://shop.luxonis.com/products/bw10980bc"
          >
            Luxonis LUX-D camera
          </a>
          .
        </p>
        <div className={style.svg}>
          <Camera />
        </div>
      </Main>
    </Section>
    <Section className={style.fullHeight}>
      <Main>
        <p>
          Most smart home systems are based on <strong>basic sensors</strong>{' '}
          like presence sensors, weight presence, temperature sensors. But with
          this kind of devices, human activity recognition is painful since it
          requires new sensors for each activity.
        </p>
        <p>
          With <strong>computer vision</strong> and{' '}
          <strong>machine-learning</strong>, human activities recognition is
          more scalable.
        </p>
        <p>
          We <strong>successfully</strong> created a proof of concept able to
          recognize our target activity. Besides, our implementation is robust
          enough to recognize <strong>other home activities</strong> and can
          even be customized by final users.
        </p>
      </Main>
    </Section>
    <Section>
      <div>
        You want to know more about this project?
        <div className={style.buttons}>
          <Button
            href="https://medium.com/interaction-dynamics/how-to-use-machine-learning-for-home-automation-with-luxonis-depth-camera-uxtech-1-765418665b5"
            className={style.button}
          >
            Read the article
          </Button>
          <Button
            href="https://github.com/interaction-dynamics/labs-smart-home-with-luxonis"
            className={style.button}
          >
            Access the code
          </Button>
        </div>
      </div>
    </Section>
    <GoBackToParent to="/projects" label="Projects" />
    <Footer />
  </Layout>
)

export default RecognizeActivitiesWithComputerVision
