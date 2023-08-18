import React from 'react'
import './variables.css'
import './global.css'
import Seo from './seo'
import Footer from './footer'
import Header from './header'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Header />
        <Seo />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
