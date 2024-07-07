import React, { useEffect, useState } from 'react';
import './Projects.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import vacation from '../../img/vacation.png';
import tictac from '../../img/tictac.png';
import grievease from '../../img/grievease.png';
import heart from '../../img/heart.png';
import weather from '../../img/weather.png';
import ivr from '../../img/ivr.png';
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
            link: "https://wanderverse.onrender.com/listings"
        },
        {
            img: grievease,
            head: "GrievEase",
            desc: "Built with React, this website aims to solve community problems and grievances.",
            link: "https://griev-ease.vercel.app/"
        },
        {
            img: heart,
            head: "Heart Disease Classification",
            desc: "Performed EDA by utilising ML Libraries and Scikit-Learn models to find the best model for predicting heart disease.",
            link: "https://github.com/kinjal-1007/EDA-Predicting-Heart-Disease-Problem"
        },
        {
            img: weather,
            head: "Simple Weather App",
            desc: "Created a simple weather widget using React OpenWeatherMap API.",
            link: "https://weather-widget-2aat.onrender.com/"
        },
        {
            img: ivr,
            head: "IVR KBC Quiz",
            desc: "Utilised python and docker to create a KBC Quiz over IVR system.",
            link: "https://github.com/kinjal-1007/jaxl-ivr-simulator"
        },
        {
            img: tictac,
            head: "X-vs-O",
            desc: "Let the Xs and Os battle begin! A classic game of Tic-tac-Toe built using Javascript. ",
            link: "https://tic-tac-toe-game-k9yp.onrender.com/"
        }
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
                                <button className='p-button' onClick={() => window.location.href = p.link}>Project Link</button></div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
         </div>
         </section>
    )
};

export default Projects;