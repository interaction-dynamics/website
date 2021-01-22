import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import style from './Prompt.style'

const DISPLAY_INTERVAL = 5000
const PROMPT_SPEED = 50

const Prompt = ({ words }) => {
  const state = useRef('hiding')
  const index = useRef(0)
  const word = useRef(words[index.current])
  const [characters, setCharacters] = useState(word.current)
  const timeout = useRef(null)

  const animate = () => {
    clearTimeout(timeout)
    if (state.current === 'hiding') {
      if (word.current.length > 0) {
        word.current = word.current.slice(0, -1)
        setCharacters(word.current)
        timeout.current = setTimeout(animate, PROMPT_SPEED)
      } else {
        index.current =
          index.current === words.length - 1 ? 0 : index.current + 1
        state.current = 'displaying'
        timeout.current = setTimeout(animate, PROMPT_SPEED)
      }
    } else if (state.current === 'displaying') {
      if (word.current.length < words[index.current].length) {
        word.current = words[index.current].slice(0, word.current.length + 1)
        setCharacters(word.current)
        timeout.current = setTimeout(animate, PROMPT_SPEED)
      } else {
        state.current = 'hiding'
        timeout.current = setTimeout(animate, DISPLAY_INTERVAL)
      }
    }
  }

  useEffect(() => {
    timeout.current = setTimeout(animate, DISPLAY_INTERVAL)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {characters}
      <span className={style.blinkingCursor}>|</span>
    </>
  )
}

Prompt.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Prompt
