import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Girl from '../../img/girlcoder.png';
import thumbup from '../../img/thumbup.png';
import Code from '../../img/code.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../Floating/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Intro=()=>{

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="intro" id="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? 'white' : '',}}>Hi, there!  I am</span>
                    <span>Kinjal Gupta</span>
                    <span>Final-year Computer Science Student learning WebDev and React.</span>
                </div>
                <a href="#contact"><button className="button i-button">Hire Me</button></a>
                <div className="i-icons">
                    <a href="https://github.com/kinjal-1007"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/kinjalgupta1007/"><img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Girl} alt="" />
                <img src={Code} alt="" />
                <div style={{top: '-5%',  left: '62%'}}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top: '68%',  left: '-7%'}}> 
                    <FloatingDiv image={thumbup} txt1='Connect' txt2='with me'/>
                </div>
                {/* blur divs */}
                <div className='blur' style={{background: 'rgb(238,210,255)'}}></div>
                <div className='blur' style={{background: 'rgb(193,253,254)', top: '17rem', left: '-8%', width: '21rem', height: '11rem'}}></div>
            </div>
        </div>
    )
};

export default Intro;