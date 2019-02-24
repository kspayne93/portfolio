import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';


export default class LandingPage extends Component {
   render() {
      return (
         <div className='page landing-page-main'>
            <div className='top-landing-container'>
               <Link to='/skills' className='link'>
                  <div className='landing-button-container'>
                     Skills
                  </div>
               </Link>
               <Link to='/projects' className='link'>
                  <div className='landing-button-container'>
                     Projects
                  </div>
               </Link>
            </div>
            <div className='middle-landing-container'>
               <div>
                  <h1>Kyle Payne</h1>
               </div>
               <div>
                  Full-Stack Web Developer
               </div>
            </div>
            <div className='bottom-landing-container'>
               <Link to='/about' className='link'>
                  <div className='landing-button-container'>
                     About
                  </div>
               </Link>
               <Link to='/contact' className='link'>
                  <div className='landing-button-container'>
                     Contact
                  </div>
               </Link>
            </div>
         </div>
      )
   }
}
