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
                        Technology professional with experience in enterprise web content deployment, release coordination, and website operations. <br></br> <br></br>
                        My background includes software testing, automation, and full-stack development projects using React, C#, ASP.NET Core, JavaScript, and Python.
                        I enjoy solving technical challenges, improving processes, and continuously expanding my knowledge across software development, DevOps, and web operations.
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