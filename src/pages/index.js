import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ServiceSection from '../components/section-service'
import MortgageCalculatorSection from '../components/mortgage-calculator'

export default function RootIndex({ data }) {


  let { title, description: { description }, image: { url } } = data.contentfulHeroComponent

  let { nodes } = data.introBlocks

  return (
    <Layout>
      <Hero
        title={title}
        content={description}
        image={url}
      />
      <ServiceSection products={JSON.stringify(nodes)} path="/#services" />
      <MortgageCalculatorSection path="/#calculator" />
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
        url
      }
      buttonText
    }

    introBlocks: allContentfulIconIntroBlock {
      nodes {
        id,
        title
        description,
        image {
          gatsbyImageData(width: 55, height: 55, formats: [AUTO, WEBP, AVIF]) 
        }
      }
    }
  }
`
