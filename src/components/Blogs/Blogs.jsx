import React from 'react';
import './Blogs.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import coding1 from '../../img/coding1.jpg';
import leetcode from '../../img/leetcode.png';
import leetcode2 from '../../img/leetcode2.jpg';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Blogs=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const blog=[
        {
            img: coding1,
            head: "My Failed Attempt at Learning Dev",
            desc: "Once upon a time, I embarked on a quest to master the art of development. Armed with enthusiasm and a stack of programming books, I dove headfirst into coding. However, reality soon set in. My code was riddled with bugs, and my projects seemed to break more often than they worked. Frustration became my constant companion, and there were moments I doubted I’d ever get it right.<br/><br/>Today, I look back and laugh at those early missteps. They were crucial learning experiences that shaped me into the developer I am now. So, if you’re struggling with your own coding journey, hang in there. Every mistake is a step closer to success!"
        },
        {
            img: leetcode,
            head: "My 100 Days Leetcode Journey",
            desc: "I've always found problem solving difficult because it's not intuitive; you can't see what you're making. This made it hard for me to stay consistent with coding. Enter the Leetcode daily challenges. They pushed me to tackle at least one problem every day, no matter how tricky.<br/><br/> Now, after 100 days, I've not only completed the challenge but also developed a routine that makes coding a part of my daily life. If you find consistency hard, try a challenge like this. It might just be the push you need!",
        },
        {
            img: leetcode2,
            head: "You Are Doomed If You Get these Questions in an Interview",
            desc: "During my journey with Leetcode, I stumbled upon a collection of questions that are famously challenging and require dedicated practice to conquer. These problems often test not just coding skills but also problem-solving creativity and resilience. If you're up for a challenge, explore these Leetcode questions and see how they stretch your abilities.<br/><br/> Feel free to dive into the challenges <a href='https://leetcode.com/problem-list/o10qntr1/' target='_blank' rel='noopener noreferrer' style='text-decoration: none; font-size: inherit; color: var(--orange);'>here</a>, and discover why these questions can make or break your coding interview preparations.",
        },
    ]
    return (
         <div className="blogs" id="Blogs">
            <div className="awesome">
               <span>Peek into</span>
               <span style={{color: darkMode ? 'white' : '',}}>My Life</span>
               <span>Welcome to "Peek into My Life," where I share stories, insights, and a bit of humor from my journey as a developer. <br/>Enjoy these snippets and feel free to reach out if something resonates with you!
                </span>
                {/* <div className='blur b-blur1' style={{background: 'var(--purple)'}}></div> */}
                <div className='blur b-blur2' style={{background: 'skyblue'}}></div>
            </div>
            <Swiper
             spaceBetween={80}
             slidesPerView={1}
             grabCursor={true}
            className='blogs-slider'
            >
                    {blog.map((b, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className='blog-gallery'>
                                <div className='blog-image' style={{background: `url(${b.img})`}}></div>
                                <span>{b.head}</span>
                                <span dangerouslySetInnerHTML={{ __html: b.desc }}></span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
         </div>
    )
};

export default Blogs;