import React from 'react'
import './intro.css'
import Splash from "../../img/img_1.jpg"
import { IoArrowDown, IoMail } from "react-icons/io5";

 const Intro = () => {
   return (
       
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <div className="intro-name">Daniel Yankov</div>
                <div className="intro-start">Welcome to my portfolio</div>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">Web Developer</div>
                        <div className="intro-title-item">Software Developer</div>
                        <div className="intro-title-item">Scripting</div>
                        <div className="intro-title-item">Testing and debugging</div>
                        <div className="intro-title-item">Code documentation</div>
                    </div>
                </div>

                <div className="text-div">
                    <p className="intro-desc">
                        I am a recent graduate, Highly interested in working in the web / software development space. 
                        I am very enthusiastic about learning new technologies and growing as a developer. 
                        Some languages I know include: TypeScript, JavaScript, Java, Python, HTML, CSS, and PHP. 
                    </p>
                </div>

                <div className="intro-scroll">
                    <a href="#works">
                        <IoArrowDown size="5em" className="arrow-icon"/>
                    </a>
                </div>

            </div>
        
        </div>
        <div className='intro-right'>
            <div className='intro-img-bg'></div>
            <img src={Splash} alt="" className="intro-img" />
        </div>
    </div>
   )
 }
 
 export default Intro