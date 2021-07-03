/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { Link } from 'gatsby'
import Lottie from 'react-lottie'
import HeaderSection from '~organisms/HeaderSection'
import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Footer from '~atoms/Footer'
import Main from '~organisms/Main'
import Section from '~organisms/Section'
import Header from '~molecules/Header'

import style from './Tags.style'

const Tags = ({ className, tags }) => (
  <div className={`${style.tags} ${className}`}>
    {tags.map(tag => (
      <span className={style.tag} key={tag}>
        #{tag}
      </span>
    ))}
  </div>
)

export default Tags
