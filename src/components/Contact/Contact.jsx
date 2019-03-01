import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';


export default class Contact extends Component {
   render() {
      return (
         <div className='page contact-page-main'>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <h1 style={{ marginBottom: '1rem' }} className='contact-title'>
               Contact:
            </h1>
            <div className='contact-container'>
               <div className='contact-text'>
                     <p>
                        kspayne93@gmail.com
                     </p>
                     <p>
                        (385) 335-1329
                     </p>
                     <p>
                        www.linkedin.com/in/kylepayne93
                     </p>
                     <p>
                        www.github.com/kspayne93
                     </p>
               </div>
            </div>
         </div>
      )
   }
}
