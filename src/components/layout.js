import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Footer from './footer'
import { BrowserRouter } from 'react-router-dom';

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <BrowserRouter>
        <Seo />
        <main>{children}</main>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default Template
