import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';


export default function LandingPage() {
   return (
      <div className='page landing-page-main'>
         <div className='top-landing-container'>
            <Link to='/skills' className='link'>
               <div className='landing-button-container skills-link'>Skills</div>
            </Link>
            <Link to='/projects' className='link'>
               <div className='landing-button-container projects-link'>Projects</div>
            </Link>
         </div>
         <div className='middle-landing-container'>
            <div>
               <h1 className='orange-neon'>Kyle<span>__</span>Payne</h1>
               <h3 className='blue-neon'>Full-Stack<span>__</span>Web<span>__</span>Developer</h3>
            </div>
         </div>
         <div className='bottom-landing-container'>
            <Link to='/about' className='link'>
               <div className='landing-button-container about-link'>About </div>
            </Link>
            <Link to='/contact' className='link'>
               <div className='landing-button-container contact-link'>Contact</div>
            </Link>
         </div>
      </div>
   )
}
