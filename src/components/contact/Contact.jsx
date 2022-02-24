import React, { useContext, useRef, useState } from 'react'
import "./contact.css"
import phone from '../../img/phone.png'
import mail from '../../img/mail.png'
import location from '../../img/location.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'


 const Contact = () => {
     const formRef = useRef();
     const [done, setDone] = useState(false); 

     const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

     const handleSubmit = (e) => {
         e.preventDefault()
         
         emailjs.sendForm('service_sigxn65', 'template_3do0s23', formRef.current, 'user_I8sMcd7PCvoA7Dpj3c5td')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
     }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-tittle">Get In Touch</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" className='c-icon' />
                        8770170930
                    </div>
                    <div className="c-info-item">
                        <img src={mail} alt="" className='c-icon' />
                        gupta.dhruv22695@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={location} alt="" className='c-icon' />
                        19/2, U-block, Phase 3, Gurgaon(Haryana)
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your need?</b> To get something done take the first step and contact through the form below.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder='Name' name='user_name' />
                    <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder='Subject' name='user_subject' />
                    <input type="text" style={{backgroundColor: darkMode && "#333"}} placeholder='Email' name='user_email' />
                    <textarea name="message" rows="5" placeholder='Message' style={{backgroundColor: darkMode && "#333"}}></textarea>
                    <button>Submit</button>
                    {done && "Thank you for the response! will get back to you shortly!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact