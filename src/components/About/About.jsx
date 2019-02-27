import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.scss';


export default class About extends Component {
   render() {
      return (
         <div className='page about-page-main'>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <h1 style={{ marginBottom: '1rem' }} className='about-title'>About Me:</h1>
            <div className='about-container'>
               <div className='about-text'>
                  <p>I have always loved being challenged and learning new things. Coming from an analytics and real estate sales background, many times my options were limited in terms of creativity. I started dabbling with code and learning to program as a backup skill, and soon had a huge realization: development is my passion! </p>

                  <p>I dropped everything to attended a full-time web-development bootcamp for 13 weeks to increase my knowledge and sharpen my skills, and have never looked back. I love continuing to learn and implement new technologies and make things come to life through code.</p>

                  <p>When I'm not coding, I enjoy spending time with my wife and dog. I love traveling, motorcycles, The Office, and I'm helplessly addicted to Mexican food and Yerba Mate. </p>

               </div>
            </div>
         </div>
      )
   }
}