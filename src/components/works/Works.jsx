import React from 'react'
import "./works.css"
import Item from "../item/Item"
import { IoLogoGithub } from "react-icons/io5";


const about = () => {
  return (
    <div className="works" id="works">
      <div className="works-text">
        <h1 className="works-title"> Some of my work/projects:</h1>
        <p className="works-desc">
          I have included some images from my personal projects and school work. 
          clicking on the image will link to the github repository if it is available.
        </p>
        <p>
          more to come soon.
        </p>

        <div className="works-section">
          <a href="https://github.com/dyank432" target="_blank" rel="noreferrer">
            <IoLogoGithub size="5em" className="github-icon"/>
          </a>
          <p className='inner-text'>
            Click on the github icon to the left to view my public github projects and source code.
          </p>
        </div>
      </div>

      {/* <div className="item-list">
        <Item/>
      </div> */}
    </div>
  )
}

export default about