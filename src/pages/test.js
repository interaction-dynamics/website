import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import Layout from '~organisms/Layout'

export default () => (
  <Layout>
    <Controller>
      <Scene duration={10000} pin>
        <div>Sticky Example</div>
      </Scene>
      <Scene duration={10000} pin>
        <div>Sticky Example2</div>
      </Scene>
    </Controller>
  </Layout>
)
