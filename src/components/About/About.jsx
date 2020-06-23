import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';


export default function About() {
   return (
      <div className='about-page-main'>
         <Link to='/' className='link'>
            <i className="fas fa-undo class back-button"></i>
         </Link>
         <h1 className='about-title'>About Me:</h1>
         <div className='about-text'>
            <p>Coming from an analytics and real estate background, many times I felt that my creative options were limited. Since I have always loved being challenged and learning new things, I started learning to program out of curiosity and interest. I quickly realized that I had a passion for software development and decided to take it seriously!</p>
            <p>I dropped everything to pursue software development full-time, and have been enjoying the journey ever since. I love being able to learn, implement, create, and share what I know with others each day.</p>
            <p>Outside of work, I enjoy spending my free time with my wife and dog. I love traveling, motorcycles, The Office, and I'm helplessly addicted to Mexican food and Yerba Mate.</p>
         </div>
      </div>
   )
}