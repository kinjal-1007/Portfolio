import React, { useEffect, useState } from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import vacation from '../../img/vacation.png';
import tictac from '../../img/tictac.png';
import grievease from '../../img/grievease.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Projects=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const project=[
        {
            img: vacation,
            head: "WanderVerse",
            desc: "Developed a website using Javascript, Node, Express and MongoDB that allows users to list properties in picturesque locations.",
        },
        {
            img: grievease,
            head: "GrievEase",
            desc: "Built with React, this website aims to solve community problems and grievances.",
        },
        {
            img: tictac,
            head: "X-vs-O",
            desc: "Let the Xs and Os battle begin! A classic game of Tic-tac-Toe built using Javascript. ",
        },
    ]
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // Call once to set initial value

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='projects-section' id="Projects">
         <div className="projects">
            <div className='p-heading'>
            <span className='heading' style={{color: darkMode ? 'white' : '',}}>Recent Projects</span>
            <div className='blur p-blur1' style={{background: 'var(--purple)'}}></div>
            <div className='blur p-blur2' style={{background: 'skyblue'}}></div>
            </div>
            <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            grabCursor={true}
            className='projects-slider'
            >
                    {project.map((p, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className='project-gallery'>
                                <img src={p.img} alt="" />
                                <span>{p.head}</span>
                                <span>{p.desc}</span>
                                <button className='p-button'>Project Link</button></div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
         </div>
         </section>
    )
};

export default Projects;