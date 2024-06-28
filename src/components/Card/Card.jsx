import React from 'react';
import './Card.css';
 
const Card=({emoji,title,desc})=>{
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span>{title}</span>
            <span>{desc}</span>
            {/* <button className='c-button'>Learn More</button> */}
        </div>
    )
}

export default Card;