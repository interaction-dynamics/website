import React from 'react'
import PropTypes from 'prop-types'

import style from './SVGImage.style'

/* eslint-disable react/no-danger */
const SVGImage = ({ svg }) => (
  <span className={style.SVGImage} dangerouslySetInnerHTML={{ __html: svg }} />
)

SVGImage.propTypes = {
  svg: PropTypes.string.isRequired,
}

export default SVGImage
