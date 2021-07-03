import React, { useState } from 'react'

import HeaderSection from '~organisms/HeaderSection'
import Layout from '~organisms/Layout'
import SEO from '~atoms/Seo'
import Footer from '~atoms/Footer'
import ListOfProjects from '~atoms/ListOfProjects'
import Section from '~organisms/Section'

import style from './index.style'

const Projects = () => {
  return (
    <Layout>
      <SEO title="Our projects" />
      <HeaderSection
        title="Our projects open to public"
        className={style.header}
      />
      <Section>
        <ListOfProjects animated />
      </Section>
      <Footer />
    </Layout>
  )
}

export default Projects
