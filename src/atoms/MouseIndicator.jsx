import React from 'react'

import style from './MouseIndicator.style'

const onClick = () => {
  const element = document.getElementById('reasons')
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  })
}

const MouseIndicator = () => (
  <div className={style.MouseIndicator}>
    <button className={style.icon} onClick={onClick} type="button">
      <span className={style.wheel} />
    </button>
  </div>
)

export default MouseIndicator
