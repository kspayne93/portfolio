import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';


export default function Contact() {
   return (
      <div className='contact-page-main'>
         <Link to='/' className='link'>
            <i className="fas fa-undo class back-button"></i>
         </Link>
         <h1 className='contact-title'>Contact:</h1>
         <div className='contact-icon-container'>
            <div>
               <i className="far fa-envelope contact-icon"></i>
               <p>kspayne93@gmail.com</p>
            </div>
            <div>
               <i className="fas fa-mobile-alt contact-icon"></i>
               <p>(385) 335-1329</p>
            </div>
            <div>
               <a href="https://www.linkedin.com/in/kylepayne93" target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin contact-icon"></i></a>
               <a href="https://www.linkedin.com/in/kylepayne93" target='_blank' rel='noopener noreferrer'><p>www.linkedin.com/in/kylepayne93</p></a>
            </div>
            <div>
               <a href="https://www.linkedin.com/in/kylepayne93" target='_blank' rel='noopener noreferrer'><i className="fab fa-github contact-icon"></i></a>
               <a href="https://www.github.com/kspayne93" target='_blank' rel='noopener noreferrer'><p>www.github.com/kspayne93</p></a>
            </div>
         </div>
      </div>
   )
}
