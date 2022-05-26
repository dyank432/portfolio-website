import React from 'react'
import "./contact.css"
import { IoMail, IoLocationSharp, IoPhonePortraitSharp } from "react-icons/io5";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleContact = (e)=> {
      e.preventDefault()

      emailjs.sendForm('service_h02m1mk', 'template_tgcf9yt', formRef.current, 'Ubom49xzrKaw926Co')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    };

  return (
    <div className="contact-main">
      <div className="contact-bg">
      </div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Contact me</h1>
            <div className="contact-info">
              <div className="contact-info-item">
                <p>My information is listed below, the best way to reach me is via phone or email.</p>
              </div>
              <div className="contact-info-item">
                <IoPhonePortraitSharp size="3em" className="contact-icon"/>
                <p>Phone: +1 (587) 582-6727 </p>
              </div>
              <div className="contact-info-item">
                <IoMail size="3em" className="contact-icon"/>
                <p>Email: Danielyankov77@hotmail.com</p>
              </div>
              <div className="contact-info-item">
                <IoLocationSharp size="3em" className="contact-icon"/>
                <p>Location: Canada, Alberta</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
              <form ref = {formRef} onSubmit={handleContact} >
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" placeholder="Message..." name="message"/>
                <button>Submit</button>
                {done && "   Thank you, your message was sent successfully."}
              </form>
          </div>
        </div>
    </div>
  )
  
}

export default Contact