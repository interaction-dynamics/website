import * as React from 'react'
import Lottie from 'react-lottie'

import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import HeaderSection from '~organisms/HeaderSection'
import Footer from '~atoms/Footer'
import Main from '~organisms/Main'
import Section from '~organisms/Section'
import blackBoard from '~assets/blackboard-school-morph-outline-edited'
import collaboration from '~assets/people-handshake-transation-outline-edited'
import prototype from '~assets/notebook-pen-notes-outline-edited'
import videoGames from '~assets/controller-pad-game-play-outline-edited'
import GetInTouch from '~atoms/GetInTouch'
import WorldCloud from '~assets/svg/wordcloud.svg'
import GoBackToParent from '~atoms/GoBackToParent'

import style from './virtual-reality.style'

// eslint-disable-next-line react/prop-types
const UseCase = ({ title, icon }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: style.icon,
    },
  }

  return (
    <div className={style.useCase}>
      <div className={style.icon}>
        <Lottie options={defaultOptions} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  )
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO />
      <HeaderSection className={style.header} title="Virtual Reality" />
      <Section>
        <Main>
          Virtual Reality (VR) is a set of technologies to create strongly{' '}
          <strong>immersive</strong> user experience based on{' '}
          <strong>first</strong> person point of view.
        </Main>
      </Section>
      <Section>
        <Main>
          VR is old <em>(first headset in 1968)</em> but great progress happened
          last years like <strong>Oculus Quest</strong>. It is now ready for
          grand public and show great <strong>business opportunities</strong>.
        </Main>
        <div className={style.useCases}>
          <UseCase title="Training" icon={blackBoard} />
          <UseCase title="Prototyping" icon={prototype} />
          <UseCase title="Video Games" icon={videoGames} />
          <UseCase title="Collaboration" icon={collaboration} />
        </div>
        <Main className={style.more}>
          And with the VR becoming more grand public, new use cases are
          discovered <strong>everytime</strong>.
        </Main>
      </Section>
      <Section className={style.bothWorlds}>
        <WorldCloud className={style.worldCloud} />
      </Section>
      <GetInTouch />
      <Section>
        <div className={`${style.content} ${style.notabene}`}>
          Nota Bene: Virtual Reality (VR) is different from Augmented Reality
          (AR). They are gathered under the name Mixed Reality or Extended
          Reality (XR). If you want to know more about these technologies,
          follow this{' '}
          <a
            href="https://github.com/friedrith/awesome-extended-reality"
            target="_blank"
            rel="noreferrer"
          >
            Curated list
          </a>
          .
        </div>
      </Section>
      <GoBackToParent to="/technologies" label="Technologies" />
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
