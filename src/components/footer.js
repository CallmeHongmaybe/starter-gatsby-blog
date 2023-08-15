import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

// import * as styles from './footer.module.css'

const itemStyle = "p-1 laptop:px-4 tablet:mx-2 rounded hover:bg-gray-200 hover:text-green-700 whitespace-nowrap text-left"

const Footer = () => (
  <footer className={`flex flex-col bg-[#FBFDFF] text-black`}>
    <div className={`flex w-full 
            laptop:items-center laptop:justify-between laptop:text-lg p-12
            tablet:flex-col tablet:justify-evenly tablet:text-md 
            phone:flex-col phone:justify-evenly phone:text-sm 
            `}>
      <div className="flex-1 
      phone:flex phone:flex-col phone:items-center
      tablet:flex tablet:flex-col tablet:items-center
      tablet:w-full phone:w-full laptop:self-center">
        <div className="flex flex-row items-center justify-center tablet:container phone:container phone:overflow-visible laptop:w-1/2">
          <StaticImage width={150} height={150} src="../../static/images/date palm.png" className="relative tablet:w-full phone:w-full rounded-full mx-auto" />
          <p className={`font-extrabold text-4xl phone:text-2xl  ml-4`}>Palm Tree Finance</p>
        </div>
        <div className=' mt-4 laptop:w-1/2'>If you need help with finance, look no further than Kinko Finance, as the best company to work with in 2021</div>
        <div className='mt-4 laptop:w-1/3 inline-flex laptop:justify-between phone:justify-evenly items-center'>
          {/* <StaticImage src="../../static/images/socials.png" />
          <div className="laptop:w-1/2 laptop:justify-between phone:justify-evenly items-center">
            
          </div> */}
          <div className="w-12 h-12 phone:mr-4 bg-orange-400 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className='text-xl text-white' />
          </div>
          <div className="w-12 h-12 phone:mr-4 bg-orange-400 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faTwitter} className='text-xl text-white' />
          </div>
          <div className="w-12 h-12 phone:mr-4 bg-orange-400 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebook} className='text-xl text-white' />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 tablet:self-center tablet:py-5 phone:py-5 phone:self-center flex-1">
        <div className="grid grid-rows-2 gap-3">
          <p className="text-green-500 p-1 laptop:px-4 tablet:mx-2">Location</p>
          <button className={itemStyle}>America</button>
          <button className={itemStyle}>Asia</button>
          <button className={itemStyle}>Europe</button>
          <button className={itemStyle}>Africa</button>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <p className="text-green-500 p-1 laptop:px-4 tablet:mx-2">Contact</p>
          <button className={itemStyle}>About us</button>
          <button className={itemStyle}>Teams</button>
          <button className={itemStyle}>Profile</button>
          <button className={itemStyle}>FAQ</button>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <p className="text-green-500 p-1 laptop:px-4 tablet:mx-2">Legals</p>
          <button className={itemStyle}>Privacy</button>
          <button className={itemStyle}>Disclaimer</button>
          <button className={itemStyle}>Terms</button>
          <button className={itemStyle}>Company</button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
