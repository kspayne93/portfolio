import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

export default function Contact() {
  return (
    <div className='contact-page-main'>
      <Link to='/' className='link'>
        <i className='back-button fas fa-arrow-left'></i>
      </Link>
      <h1 className='contact-title main-fade-in'>Contact:</h1>
      <div className='contact-icon-container main-fade-in'>
        <div>
          <i className='far fa-envelope contact-icon'></i>
          <p>kspayne93@gmail.com</p>
        </div>

        <div>
          <a href='https://www.linkedin.com/in/kylepayne93' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin contact-icon'></i>
          </a>
          <a href='https://www.linkedin.com/in/kylepayne93' target='_blank' rel='noopener noreferrer'>
            <p>View LinkedIn Profile</p>
          </a>
        </div>

        <div>
          <a href='https://www.github.com/motogoozy' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github contact-icon'></i>
          </a>
          <a href='https://www.github.com/motogoozy' target='_blank' rel='noopener noreferrer'>
            <p>View GitHub Profile</p>
          </a>
        </div>

        <div>
          <a href={require('../../assets/kyle-payne-resume.pdf')} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-file-download contact-icon'></i>
          </a>
          <a href={require('../../assets/kyle-payne-resume.pdf')} target='_blank' rel='noopener noreferrer'>
            <p>View / Download Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
