import React, { useState, useRef, useLayoutEffect } from 'react'

import ARIcon from '~assets/svg/technologies/camera.svg'
import VRIcon from '~assets/svg/virtual-reality.svg'
import GestureIcon from '~assets/svg/technologies/ok.svg'
import ChatbotIcon from '~assets/svg/technologies/chatbot.svg'
import SmartHomeIcon from '~assets/svg/technologies/smart-home.svg'

import style from './TechnologiesPreview.style'

const technologies = [
  {
    name: 'VR',
    Icon: VRIcon,
  },
  {
    name: 'AR',
    Icon: ARIcon,
  },
  {
    name: 'Gestures',
    Icon: GestureIcon,
  },
  {
    name: 'Chatbot',
    Icon: ChatbotIcon,
  },
  {
    name: 'Smart Home',
    Icon: SmartHomeIcon,
  },
]

export default () => {
  const ref = useRef(null)
  const [{ name, Icon, top, left, width, height }, setTechnology] = useState(
    technologies[0]
  )

  const interval = useRef()

  const button = useRef([])

  const selectTechnology = index => {
    const target = ref.current.children[index + 1]

    const boundingRect = target.getBoundingClientRect()
    const technology = technologies[index]
    setTechnology({
      ...technology,
      top: target.offsetTop,
      left: target.offsetLeft,
      width: boundingRect.width,
      height: boundingRect.height,
    })
  }

  const onClick = index => () => {
    selectTechnology(index)
    clearInterval(interval.current)
  }

  useLayoutEffect(() => {
    let index = 0

    interval.current = setInterval(() => {
      selectTechnology(index)
      index += 1
      if (index >= technologies.length) {
        index = 0
      }
    }, 5000)
  }, [])

  return (
    <div className={style.TechnologiesPreview}>
      <div className={style.icon}>
        <Icon />
      </div>
      <div className={style.choices} ref={ref}>
        <div
          className={style.background}
          style={{ top, left, width, height }}
        />
        {technologies.map((technology, index) => (
          <button
            ref={button}
            type="button"
            className={`${style.choice} ${
              technology.name === name ? style.active : ''
            }`}
            onClick={onClick(index)}
            key={technology.name}
          >
            {technology.name}
          </button>
        ))}
      </div>
    </div>
  )
}
