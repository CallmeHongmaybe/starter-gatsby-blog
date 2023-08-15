import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Navigation from './navigation'

const Hero = ({ image, title, content }) => (
  <section className='w-screen h-screen relative bg-gray-700 text-white'>
    {/* {image && (
      <GatsbyImage className='object-cover w-full h-full z-0' alt={title} image={image}/>
    )} */}
    <Navigation />
    <div className="flex flex-col justify-center items-center w-1/2 pl-32 py-18 pr-8 h-full">
      <div className='h-1/2 flex flex-col justify-evenly'>
        <h1 className="text-6xl font-black leading-10 tracking-wide">{title}</h1>
        <p>{content}</p>
        <button className="w-36 h-16 bg-orange-400 shadow">Register</button>
      </div>
    </div>
  </section>
)

export default Hero
