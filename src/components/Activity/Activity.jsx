import React from 'react';
import './Activity.css';
const Activity=()=>{
    return (
        <div className="activity">
            <div className="achieve">
                <div className="circle">300+</div>
                <span>DSA problems</span>
                <span>solved on Leetcode</span>
            </div>
            <div className="achieve">
                <div className="circle">10+</div>
                <span>Projects</span>
                <span>Completed</span>
            </div>
            <div className="achieve">
                <div className="circle">25+</div>
                <span>Contests</span>
                <span>Participated</span>
            </div>
        </div>
    )
};

export default Activity;