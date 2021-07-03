import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '~atoms/Button'
import Icon from '~atoms/Icon'

import style from './GoBackToParent.style'

const GoBackToParent = ({ to, label }) => {
  const [isVisible, setVisibility] = useState(false)

  useEffect(() => {
    const layout = document.querySelector('#layout')

    let newVisibility = false

    const callback = () => {
      const y = layout.scrollTop
      newVisibility = y >= 800 ? true : false || newVisibility
      setVisibility(newVisibility)
    }

    layout.addEventListener('scroll', callback)

    return () => layout.removeEventListener('scroll', callback)
  }, [])

  if (!isVisible) {
    return false
  }

  return (
    <div className={style.GoBackToParent}>
      <Button to={to} className={style.button}>
        <Icon src="angle-double-left" />
        Go back to all {label}
      </Button>
    </div>
  )
}

GoBackToParent.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default GoBackToParent
