import React, { useLayoutEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import style from './MouseIndicator.style'

const MouseIndicator = () => {
  // https://www.react-spring.io/docs/hooks/basics
  const [{ opacity }, set] = useSpring(() => ({ opacity: 1 }))

  const hide = () => set({ opacity: 0 })

  useLayoutEffect(() => {
    window.addEventListener('scroll', hide, { capture: true })

    return window.removeEventListener('scroll', hide)
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
        display: opacity.interpolate(o => (o === 0 ? 'none' : 'display')),
      }}
    >
      <button className={style.icon} onClick={onClick} type="button">
        <span className={style.wheel} />
      </button>
    </animated.div>
  )
}

export default MouseIndicator
