import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.scss';
import HTMLIcon from '../../assets/svg/HTMLIcon';
import CSSIcon from '../../assets/svg/CSSIcon';
import JavascriptIcon from '../../assets/svg/JavascriptIcon';
import NodeIcon from '../../assets/svg/NodeIcon';
import PostgresIcon from '../../assets/svg/PostgresIcon';
import SassIcon from '../../assets/svg/SassIcon';
import ReactIcon from '../../assets/svg/ReactIcon';
import ReduxIcon from '../../assets/svg/ReduxIcon';

export default function Skills() {
  return (
    <div className='page skills-page-main'>
      <Link to='/' className='link'>
        <i className='back-button fas fa-arrow-left'></i>
      </Link>

      <h1 className='skills-title main-fade-in'>Skills</h1>

      <div className='skills-container'>
        <div className='skill-container skill-1'>
          <HTMLIcon />
          <p>HTML</p>
        </div>
        <div className='skill-container skill-2'>
          <CSSIcon />
          <p>CSS</p>
        </div>
        <div className='skill-container skill-3'>
          <JavascriptIcon />
          <p>Javascript</p>
        </div>
        <div className='skill-container skill-4'>
          <ReactIcon />
          <p>React</p>
        </div>
        <div className='skill-container skill-5'>
          <NodeIcon />
          <p>Node</p>
        </div>
        <div className='skill-container skill-6'>
          <ReduxIcon />
          <p>Redux</p>
        </div>
        <div className='skill-container skill-7'>
          <PostgresIcon />
          <p>PostgreSQL</p>
        </div>
        <div className='skill-container skill-8'>
          <SassIcon />
          <p>Sass</p>
        </div>
        <div className='skill-container'>
          <p className='and-more-text'>and more...</p>
        </div>
      </div>
    </div>
  );
}
