import React from 'react'

const Hero = ({ image, title, content }) => (
  <section className='flex tablet:h-fit phone:h-5/6 bg-custom-navy text-white'>
    <div className="flex justify-center items-center w-1/2 phone:w-full 
      laptop:pl-32 laptop:py-18 
      tablet:pl-16 tablet:py-9
      phone:pl-8 phone:py-4"
    >
      <div className='h-1/2 flex flex-col justify-evenly'>
        <h1 className="
           font-black leading-10 tracking-wide
           laptop:text-6xl
           tablet:text-3xl
           phone:text-2xl
          ">{title}</h1>
        <p>{content}</p>
        <button className="w-36 h-16 bg-custom-orange shadow tablet:mt-6 extrabold-text-manually">Register</button>
      </div>
    </div>
    <div className='w-1/2 relative z-5'>
      {image && <img src={image} alt="Pipe Logo" className='w-full h-full object-cover tablet:object-contain phone:hidden' />}
    </div>
  </section>
)

export default Hero
