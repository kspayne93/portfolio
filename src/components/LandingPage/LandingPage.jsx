import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

// const brickWall = require('../../assets/images/brick-wall.jpg');

const keyboardHeroLanding = require('../../assets/images/keyboardHero/keyboard-hero-landing.png');
const keyboardHeroImg2 = require('../../assets/images/keyboardHero/keyboard-hero-image-2.png');
const keyboardHeroImg3 = require('../../assets/images/keyboardHero/keyboard-hero-image-3.png');
const keyboardHeroImg4 = require('../../assets/images/keyboardHero/keyboard-hero-image-4.png');

const kanooLanding = require('../../assets/images/kanoo/kanoo-landing.png');
const kanooImg2 = require('../../assets/images/kanoo/kanoo-image-2.png');
const kanooImg3 = require('../../assets/images/kanoo/kanoo-image-3.png');
const kanooImg4 = require('../../assets/images/kanoo/kanoo-image-4.png');
const kanooImg5 = require('../../assets/images/kanoo/kanoo-image-5.png');

const nimbleLanding = require('../../assets/images/nimble/nimble-landing.png');
const nimbleLogin = require('../../assets/images/nimble/nimble-login.png');
const nimbleDashboardOverview = require('../../assets/images/nimble/nimble-dashboard-overview.png');
const nimbleMyTasks = require('../../assets/images/nimble/nimble-my-tasks.png');
const nimbleUnassignedTasks = require('../../assets/images/nimble/nimble-unassigned-tasks.png');
const nimblePeople = require('../../assets/images/nimble/nimble-people.png');
const nimbleProjectSettings = require('../../assets/images/nimble/nimble-project-settings.png');
const nimbleSearch = require('../../assets/images/nimble/nimble-search.png');
const nimbleAddTask = require('../../assets/images/nimble/nimble-add-task.png');
const nimbleDragNDrop = require('../../assets/images/nimble/nimble-dragndrop.png');
const nimbleEditList = require('../../assets/images/nimble/nimble-edit-list.png');
const nimbleProfile = require('../../assets/images/nimble/nimble-profile.png');

export default class LandingPage extends Component {
   componentDidMount = () => {
      const imagesToPreload = [
         keyboardHeroLanding,
         keyboardHeroImg2,
         keyboardHeroImg3,
         keyboardHeroImg4,
         kanooLanding,
         kanooImg2,
         kanooImg3,
         kanooImg4,
         kanooImg5,
         nimbleLanding,
         nimbleLogin,
         nimbleDashboardOverview,
         nimbleMyTasks,
         nimbleUnassignedTasks,
         nimblePeople,
         nimbleProjectSettings,
         nimbleSearch,
         nimbleAddTask,
         nimbleDragNDrop,
         nimbleEditList,
         nimbleProfile,
      ];

      imagesToPreload.forEach(image => new Image().src = image);
   };

   render() {
      return (
         <div className='page landing-page-main'>
            <div className='landing-link-container skills-link'>
               <Link to='/skills' className='link'>
                  <p className='skills-link-text'>Skills</p>
               </Link>
            </div>

            <div className='landing-link-container projects-link'>
               <Link to='/projects' className='link'>
                  <p className='projects-link-text'>Projects</p>
               </Link>
            </div>

            <div className='middle-landing-container'>
               <p className='orange-neon'>Kyle<span>__</span>Payne</p>
               <p className='blue-neon'>Full-Stack<span>__</span>Web<span>__</span>Developer</p>
            </div>

            <div className='landing-link-container about-link'>
               <Link to='/about' className='link'>
                  <p className='about-link-text'>About </p>
               </Link>
            </div>

            <div className='landing-link-container contact-link'>
               <Link to='/contact' className='link'>
                  <p className='contact-link-text'>Contact</p>
               </Link>
            </div>
         </div>
      )
   }
}
