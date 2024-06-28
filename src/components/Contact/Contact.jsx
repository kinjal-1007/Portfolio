import React, {useRef}  from "react";
import emailjs from '@emailjs/browser';

import './Contact.css';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact=()=>{
    const form = useRef();
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const [done, setDone]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v3nhoti', 'template_5znhtql', form.current, {
        publicKey: '64IeDixCe_MI_TIKG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
         <div id="contact" className="contact-form">
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span style={{color: darkMode ? 'white' : '',}}>Contact me</span>
                    <div className='blur s-blur1' style={{background: 'rgb(193,253,254'}}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Enter Name" />
                    <input type="email" name="user_email" className="user" placeholder="Enter Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                     <span>{done && "Thanks for contacting me!"}</span>
                    <div className='blur c-blur2' style={{background: 'var(--purple)'}}></div>
                </form>
            </div>
         </div>
    );
}

export default Contact;