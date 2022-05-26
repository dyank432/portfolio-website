import React from 'react'
import './header.css'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header-icons">
        <a href="https://www.linkedin.com/in/daniel-yankov77/" target="_blank" rel="noreferrer">
            <IoLogoLinkedin size="5em" className="linkedin-icon"/>
        </a>
        <a href="https://github.com/dyank432" target="_blank" rel="noreferrer">
            <IoLogoGithub size="5em" className="github-icon"/>
        </a>
    </div>
  )
}

export default Header