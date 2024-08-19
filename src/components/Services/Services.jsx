import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import Developer from '../../img/developer.png';
import Ml from '../../img/ml.png';
import Program from '../../img/program.png';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Services=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="services" id="Services">
            {/* Left side */}
            <div className="awesome">
               <span></span>
               <span style={{color: darkMode ? 'white' : '',}}>About</span>
               <span>I am pursuing a BTech in Computer Science from IET Lucknow.<br/>I am eager to apply my skills and contribute to innovative projects.
                </span>
                <a href="https://docs.google.com/document/d/1PU0Ut0uiKhfBgLedOKo9ctt7akHVQdmTZv6Pg2nn0PQ/edit?usp=sharing" download><button className='button s-button'>Download Resume</button></a>
                <div className='blur s-blur1' style={{background: 'rgb(193,253,254'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                 <div style={{left: '14rem'}}>
                    <Card 
                    emoji={Developer}
                    title={'Developer'}
                    desc={'Worked with React, Node.js, Express.js, MongoDB'}/>
                 </div>
                 <div style={{top: '12rem', left: '-4rem'}}> 
                    <Card 
                    emoji={Ml}
                    title={'Data Science and ML Enthusiast'}
                    desc={''}/>
                 </div>
                 <div style={{top:'19rem', left: '12rem'}}>
                    <Card 
                    emoji={Program}
                    title={'C++ Programmer'}
                    desc={'Proficient in programming using C and C++.'}/>
                 </div>
                 <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
};

export default Services;