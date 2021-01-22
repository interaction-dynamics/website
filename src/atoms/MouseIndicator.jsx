import React, { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

import style from './MouseIndicator.style'

// https://www.react-spring.io/docs/hooks/basics

const MouseIndicator = () => {
  const [isVisible, setVisibility] = useState(true)

  const [{ opacity }, set] = useSpring(() => ({ opacity: 1 }))

  const hide = () => set({ opacity: 0 })

  useEffect(() => {
    const listener = window.addEventListener('scroll', hide, { capture: true })

    return window.removeEventListener('scroll', listener)
  }, [])

  const onClick = () => {
    const element = document.getElementById('reasons')
    if (!element) {
      return
    }
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  return (
    <animated.div
      className={style.MouseIndicator}
      style={{
        opacity,
        transform: opacity.interpolate(
          o => `translateY(${(1 - o) * 500}px) scale(1.5)`
        ),
      }}
    >
      <button className={style.icon} onClick={onClick} type="button">
        <span className={style.wheel} />
      </button>
    </animated.div>
  )
}

export default MouseIndicator
