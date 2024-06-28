import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';

const Footer=()=>{
    return (
      <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
          <span>kinjal150922@gmail.com</span>
          <div className="f-icons">
            <i class="fa-brands fa-github fa-2xl"></i>
            <i class="fa-brands fa-square-instagram fa-2xl"></i>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </div>
        </div>
      </div>
    )
}
export default Footer;