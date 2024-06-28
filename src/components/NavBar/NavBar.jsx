import React from 'react';
import './NavBar.css';
import  Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';
const NavBar =() =>{
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Kinjal</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                        <li>About</li>
                        </Link> 
                        <Link spy={true} to='Skills' smooth={true}>
                        <li>Skills</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                        </Link>
                        <Link spy={true} to='Blogs' smooth={true}>
                        <li>Blogs</li>
                        </Link>
                       
                    </ul>
                </div>
                <Link spy={true} to='contact' smooth={true}>
                <button className='button n-button'>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;