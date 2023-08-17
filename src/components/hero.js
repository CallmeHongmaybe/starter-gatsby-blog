import React from 'react'
import Navigation from './navigation'

const Hero = ({ image, title, content }) => (
  <section className='flex flex-col w-screen 
  laptop:h-fit tablet:h-fit phone:h-screen relative bg-custom-navy text-white'>
    {/* {image && (
      <GatsbyImage className='object-cover w-full h-full z-0' alt={title} image={image}/>
    )} */}
    <div className='max-w-6xl container mx-auto tablet:h-1/6 phone:h-1/6'>
      <Navigation />
    </div>
    <div className='flex tablet:h-fit phone:h-5/6'>
      <div className="flex justify-center items-center w-1/2 phone:w-full 
      laptop:pl-32 laptop:py-18 laptop:pr-8
      tablet:pl-16 tablet:py-9 tablet:pr-4
      phone:pl-8 phone:py-4 phone:pr-2"
      >
        <div className='h-1/2 flex flex-col justify-evenly'>
          <h1 className="
           font-black leading-10 tracking-wide
           laptop:text-6xl
           tablet:text-3xl
           phone:text-2xl
          ">{title}</h1>
          <p>{content}</p>
          <button className="w-36 h-16 bg-custom-orange shadow tablet:mt-6">Register</button>
        </div>
      </div>
      <div className='w-1/2 relative'>
        {image && <img src={image} className='w-full h-full object-cover tablet:object-contain phone:hidden' />}
      </div>
    </div>
  </section>
)

export default Hero
