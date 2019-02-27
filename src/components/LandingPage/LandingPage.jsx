import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';


export default class LandingPage extends Component {
   render() {
      return (
         <div className='page landing-page-main'>
            <div className='top-landing-container'>
               <Link to='/skills' className='link'>
                  <div className='landing-button-container skills-text'>
                        Skills
                  </div>
               </Link>
               <Link to='/projects' className='link'>
                  <div className='landing-button-container projects-text'>
                     Projects
                  </div>
               </Link>
            </div>
            <div className='middle-landing-container'>
               <div>
                  <h1 className='orange-neon'>
                     Kyle Payne
                  </h1>
                  <h3 className='blue-neon'>
                     Full-Stack Web Developer
                  </h3>
               </div>
            </div>
            <div className='bottom-landing-container'>
               <Link to='/about' className='link'>
                  <div className='landing-button-container about-title'>
                        About
                  </div>
               </Link>
               <Link to='/contact' className='link'>
                  <div className='landing-button-container contact-title'>
                        Contact
                  </div>
               </Link>
            </div>
         </div>
      )
   }
}
