import React from 'react'

import { Link } from 'gatsby'
import Main from '~organisms/Main'

import style from './ListOfProjects.style'

import computerVision from '~images/computer-vision.png'
import projectGesture from '~images/project-gesture.png'

const projects = [
  {
    title: 'Activities recognition with computer vision',
    url: '/projects/recognize-activities-with-computer-vision',
    image: computerVision,
    tags: ['computer-vision', 'machine-learning', 'smart-home'],
  },
  {
    title: 'Lights control using gestures',
    image: projectGesture,
    tags: ['gestures', 'smart-home'],
  },
]

// eslint-disable-next-line react/prop-types
const Project = ({ title, url = '', image, animated, index }) => (
  <Link
    to={url}
    className={`${style.project} ${url ? style.allowed : style.disabled} ${
      animated ? style.animated : ''
    }`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      animationDelay: `${0.6 + index * 0.2}s`,
    }}
  >
    <div className={style.background} />
    <div className={style.title}>{title}</div>
  </Link>
)

// eslint-disable-next-line react/prop-types
const ListOfProjects = ({ animated = false }) => (
  <Main className={style.main}>
    {projects.map((project, index) => (
      <Project
        title={project.title}
        url={project.url}
        image={project.image}
        animated={animated}
        index={index}
      />
    ))}
  </Main>
)

export default ListOfProjects
