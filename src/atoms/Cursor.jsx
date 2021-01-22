import React, { useEffect, useState } from 'react'

import style from './Cursor.style'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    })
  }, [])

  return (
    <div
      style={{ top: position.y, left: position.x }}
      className={style.Cursor}
    />
  )
}

export default Cursor
