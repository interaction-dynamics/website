/* eslint-disable react/prop-types */
import React from 'react'

import style from './Center.style'

const Left = ({ className = '', children }) => (
  <div className={`${style.left} ${className}`}>
    <div className={style.centerLeft}>{children}</div>
  </div>
)

const Right = ({ className = '', children }) => (
  <div className={`${style.right} ${className}`}>
    <div className={style.centerRight}>{children}</div>
  </div>
)

const Center = ({ children }) => <div className={style.content}>{children}</div>

Center.Left = Left
Center.Right = Right

export default Center
