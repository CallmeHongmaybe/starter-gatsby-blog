import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

// import * as styles from './footer.module.css'

const itemStyle = "p-1 laptop:px-4 tablet:mx-2 rounded hover:bg-gray-200 hover:text-green-700 whitespace-nowrap text-left text-[#585C65]"

let footerLinks = {
  Location: ['America', 'Asia', 'Europe', 'Africa'],
  Contact: ['About us', 'Teams', 'Profile', 'FAQ'],
  Legals: ['Privacy', 'Disclaimer', 'Terms', 'Company']
}

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
        <div className="flex flex-row 
        laptop:justify-start tablet:justify-center phone:justify-center
        items-center tablet:container phone:container phone:overflow-visible laptop:w-1/2">
          <StaticImage src="../../static/images/date palm.png" width={50} height={50} className="relative rounded-full" />
          <p className={`font-extrabold text-lg phone:text-md ml-4`}>Kinka<br />Finance</p>
        </div>
        <div className=' mt-4 laptop:w-1/2 text-[#585C65]'>2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet</div>
        <div className='mt-4 laptop:w-1/3 tablet:w-1/3 inline-flex laptop:justify-between tablet:justify-between phone:justify-evenly items-center'>
          {
            [faFacebook, faTwitter, faInstagram].map(socIcon => (
              <div className="w-12 h-12 phone:mr-4 bg-custom-orange rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={socIcon} className='text-xl text-white' />
              </div>
            ))
          }
        </div>
      </div>
      <div className="grid grid-cols-3 tablet:self-center tablet:py-5 phone:py-5 phone:self-center flex-1">
        {
          Object.entries(footerLinks).map(([title, items]) => (
            <div className="grid grid-rows-2 gap-3">
              <p className="text-black font-bold p-1 laptop:px-4 tablet:mx-2">{title}</p>
              {
                items.map(item => <button className={itemStyle}>{item}</button>)
              }
            </div>
          ))
        }
      </div>
    </div>
  </footer>
)

export default Footer
