import React, { useEffect } from 'react'
import { Link } from '@gatsbyjs/reach-router';
import { StaticImage } from 'gatsby-plugin-image'

const executeScroll = (e) => {
  let allNavLinks = document.querySelectorAll(".navlink");
  allNavLinks.forEach(navLink => {
    navLink.classList.remove("font-bold");
  })

  let [targetId,] = e.target.id.split("_")

  e.target.classList.add("font-bold");
  document.getElementById(targetId).scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

let sections = ["calculator", "services"]

const Navigation = () => {

  useEffect(() => {
    sections
      .forEach(id => document.getElementById(id + "_nav").addEventListener(
        'click',
        executeScroll
      ))
    return () => {
      sections
        .forEach(id => document.getElementById(id + "_nav").removeEventListener(
          'click',
          executeScroll
        ))
    }
  }, [])

  return (
    <nav role="navigation" className="flex justify-between items-center mx-auto p-8" aria-label="Main">
      <Link to="/" className="flex items-center flex-row flex-shrink-0 space-x-4">
        <StaticImage width={50} height={50} src="../../static/images/date palm.png" className='rounded-full' />
        <span className="inline-flex items-center tablet:hidden phone:hidden flex-row">Kinka<br />Finance</span>
      </Link>
      <ul className="flex list-none m-0 space-x-8">
        {
          sections.map((section, indx) => (
            <li key={indx} className="inline-flex items-center flex-row">
              <Link to={`/#${section}`}
                id={`${section}_nav`}
                className="border-b-2 border-transparent text-current no-underline hover:border-primary hover:text-primary navlink"
              >
                {section.toUpperCase()}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation
