import React from 'react'
import { Link } from 'gatsby'
import { NavLink } from "react-router-dom";
import { StaticImage } from 'gatsby-plugin-image'

const executeScroll = (e, id) => {
  const selectedElement = document.getElementById(id);
  const allNavLinks = document.querySelectorAll(".navlink");
  allNavLinks.forEach(navLink => {
    navLink.classList.remove("font-bold");
  });

  e.target.classList.add("font-bold");
  selectedElement.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

const Navigation = () => (
  <nav role="navigation" className="flex justify-between items-center mx-auto p-8" aria-label="Main">
    <Link to="/" className="flex items-center flex-row flex-shrink-0 space-x-4">
      <StaticImage width={50} height={50} src="../../static/images/date palm.png" className='rounded-full' />
      <span className="inline-flex items-center tablet:hidden phone:hidden flex-row">Kinka<br/>Finance</span>
    </Link>
    <ul className="flex list-none m-0 space-x-8">
      <li className="inline-flex items-center flex-row">
        <NavLink to="/#mortgage"
          onClick={(e) => executeScroll(e, "mortgage")}
          className="border-b-2 border-transparent text-current no-underline hover:border-primary hover:text-primary navlink"
        >
          Calculator
        </NavLink>
      </li>
      <li className="inline-flex items-center flex-row">
        <NavLink to="/#service"
          onClick={(e) => executeScroll(e, "service")}
          className="border-b-2 border-transparent text-current no-underline hover:border-primary hover:text-primary navlink"
        >
          Services
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation
