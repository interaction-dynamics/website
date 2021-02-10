import React, { useState, useRef } from 'react'
import Lottie from 'react-lottie'

import animationData from '~assets/box-package'

import style from './BoxPackage.style'

const BoxPackage = () => {
  const [isPlaying, play] = useState(false)
  const isReadyToStop = useRef(false)

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: style.svg,
    },
  }

  return (
    <div className={style.BoxPackage}>
      <Lottie options={defaultOptions} isStopped={!isPlaying} />
    </div>
  )
}

export default BoxPackage
