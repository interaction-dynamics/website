import React from 'react'

import Section from '~organisms/Section'
import Prompt from '~atoms/Prompt'
import Header from '~molecules/Header'
import MouseIndicator from '~atoms/MouseIndicator'

import ButtonIcon from '~assets/svg/Button.svg'

import style from './Welcome.style'

const words = [
  'seamless',
  'immersive',
  'magical',
  'positive',
  'unique',
  'customized',
]

export default () => (
  <Section className={style.Welcome}>
    <Header className={style.header} animated light />
    <div className={style.content}>
      <div className={style.left}>
        <div className={style.preTitle}>
          Digital Product Research, Design & Build
        </div>

        <h1 className={style.title}>
          <span className={style.stateOfTheArt}>State-of-the-art</span>
          <br /> technologies for
          <br />
          truly{' '}
          <span className={style.adjective}>
            <Prompt words={words} />
          </span>
          <br />
          user experiences
        </h1>
      </div>
      {/* <div className={style.right}>
        <ButtonIcon className={style.button} />
      </div> */}
    </div>
    <MouseIndicator />
  </Section>
)
