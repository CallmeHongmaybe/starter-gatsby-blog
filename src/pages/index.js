import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ServiceSection from '../components/section-service'
import MortgageCalculatorSection from '../components/mortgage-calculator'


export default function RootIndex({ data }) {

  let { title, description: { description }, image: { gatsbyImageData } } = data.contentfulHeroComponent

  return (
    <Layout>
      <Hero
        title={title}
        content={description}
        image={gatsbyImageData}
      />
      <ServiceSection />
      <MortgageCalculatorSection />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomeQuery { 
    contentfulHeroComponent {
      title, 
      description {
        description
      }, 
      image {
        gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF]) 
      }
      buttonText
    }
  }
`
