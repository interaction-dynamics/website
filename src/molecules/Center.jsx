import React from 'react'

import style from './Center.style'

const Left = ({ children }) => (
  <div className={style.left}>
    <div className={style.centerLeft}>{children}</div>
  </div>
)

const Right = ({ children }) => (
  <div className={style.right}>
    <div className={style.centerRight}>{children}</div>
  </div>
)

const Center = ({ children }) => <div className={style.content}>{children}</div>

Center.Left = Left
Center.Right = Right

export default Center
