import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const sliderSettings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true
};

export default class Projects extends Component {
   state = {
      projects: [
         {
            name: 'Kanoo',
            keyPoint1: 'An all-in-one travel planning app that enables users to collaborate with friends to plan upcoming trips. Developed in a group of 4',
            keyPoint2: `Keeps track of destinations, budget, activities, travelers (friends), and trip notes, as well as as a user's bucket list`,
            keyPoint3: `Built with a focus on design, the end result is a simple yet intuitive user experience that displays a user's travel details all in one place`,
            technologies: 'REACT | NODE | POSTGRESQL',
            liveSiteURL: 'https://kanoo.fun/#/',
            username: 'k',
            password: 'k',
            codeURL: 'https://github.com/wpr-45-studentdevs/travel-app',
            mainPhoto: kanooLanding,
            image1: kanooLanding,
            image2: kanooImg2,
            image3: kanooImg3,
            image4: kanooImg4,
            image5: kanooImg5,
            image1description: 'Landing Page with transitioning background image (React Slick)',
            image2description: 'Dashboard View displaying all public trips',
            image3description: 'My Trips view showing all user trips (user can search, and toggle between upcoming / completed trips)',
            image4description: 'Trip Details View (user can update budget, take notes (text editor made with Quill), add destinations, add activities, add travelers). All travelers who are assigned to this trip can edit and collaberate.',
            image5description: 'Bucket List View'
         },
         {
            name: 'Keyboard Hero',
            keyPoint1: 'A typing challenge that tests a user`s speed and accuracy.',
            keyPoint2: `A fun full-stack web application which helps people improve their typing skills.`,
            keyPoint3: `Uses Javascript to check for user's typing accuracy in real-time`,
            technologies: 'REACT | NODE | POSTGRESQL',
            liveSiteURL: 'https://www.keyboardhero.fun',
            codeURL: 'https://github.com/kspayne93/keyboard-hero',
            mainPhoto: keyboardHeroLanding,
            image1: keyboardHeroLanding,
            image2: keyboardHeroImg2,
            image3: keyboardHeroImg3,
            image4: keyboardHeroImg4,
            image1description: 'Landing page',
            image2description: 'Typing challenge provides real-time feedback on accuracy',
            image3description: 'Once challenge is completed, user can see their typed Words Per Minute',
            image4description: 'Database keeps track of leaderboard',
         },
         {
            name: 'Nimble',
            keyPoint1: 'Full-stack project organization/management tool.',
            keyPoint2: `Simple & intuitive UX/UI allows teams to collaborate efficiently with easy-to-use gestures, including drag & drop on tasks and lists.`,
            keyPoint3: `Inspired by Kanban Board methodology, users can organize ideas by projects, and create custom lists & tasks.`,
            keyPoint4: 'Users can manage connections (aka "friends") and add them to projects, tasks, etc.',
            technologies: 'REACT | NODE | POSTGRESQL',
            liveSiteURL: 'https://nimblemanager.com/',
            username: 'demo@demo.com',
            password: 'demo',
            codeURL: 'https://github.com/kspayne93/nimble',
            mainPhoto: nimbleLanding,
            image1: nimbleLanding,
            image2: nimbleLogin,
            image3: nimbleDashboardOverview,
            image4: nimbleMyTasks,
            image5: nimbleUnassignedTasks,
            image6: nimblePeople,
            image7: nimbleProjectSettings,
            image8: nimbleEditList,
            image9: nimbleAddTask,
            image10: nimbleDragNDrop,
            image11: nimbleSearch,
            image12: nimbleProfile,
            image1description: 'Landing page',
            image2description: 'Login page',
            image3description: 'Project overview dashboard',
            image4description: 'Filtering by "My Tasks"',
            image5description: 'Filtering by "Unassigned Tasks"',
            image6description: 'Project Collaborators / User Connections page',
            image7description: 'Project Settings page',
            image8description: 'Editing list',
            image9description: 'Adding task',
            image10description: "Drag n' Drop functionality",
            image11description: 'Search by name/task functionality',
            image12description: 'Profile page',
         },
      ],
      displayKanooImages: false,
      displayKeyboardHeroImages: false,
      displayNimbleImages: false,
   };

   kanooProject = () => {
      const kanoo = this.state.projects[0];
      return (
         <div className="project-card" style={{ backgroundImage: `url(${kanoo.mainPhoto})` }}>
            <div className='card-text'>
               <div className='project-card-header'>
                  <h2>{kanoo.name}</h2>
                  <p onClick={() => this.setState({ displayKanooImages: true })} style={{ color: '#0bd4ba' }}>View Photos</p>
                  <div className='small-link-container'>
                  {/* Only displays in mobile view */}
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={kanoo.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {kanoo.username}</span>
                           <span> | Password: {kanoo.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={kanoo.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }}>View Code</span>
                        </div>
                     </div>
   
                  </div>
               </div>
               <div>
                  <ul>
                     <li>{kanoo.keyPoint1}</li>
                     <li>{kanoo.keyPoint2}</li>
                     <li>{kanoo.keyPoint3}</li>
                     { kanoo.keyPoint4 && <li>{kanoo.keyPoint4}</li> }
                  </ul>
                  <div className='technologies-list'>
                     <h5>{kanoo.technologies}</h5>
                  </div>
                  <div className='link-container'>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={kanoo.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {kanoo.username}</span>
                           <span> | Password: {kanoo.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={kanoo.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }} > View Code </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   };

   keyboardHeroProject = () => {
      const keyboardHero = this.state.projects[1];
      return (
         <div
            className="project-card"
            style={{ backgroundImage: `url(${keyboardHero.mainPhoto})`}}
         >
            <div className='card-text'>
               <div className='project-card-header'>
                  <h2>{keyboardHero.name}</h2>
                  <p onClick={() => this.setState({ displayKeyboardHeroImages: true })} style={{ color: '#0bd4ba' }}>View Photos</p>
                  <div className='small-link-container'> 
                  {/* Only displays in mobile view */}
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={keyboardHero.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {keyboardHero.username}</span>
                           <span> | Password: {keyboardHero.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={keyboardHero.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }} > View Code </span>
                        </div>
                     </div>

                  </div>
               </div>
               <div>
                  <ul>
                     <li>{keyboardHero.keyPoint1}</li>
                     <li>{keyboardHero.keyPoint2}</li>
                     <li>{keyboardHero.keyPoint3}</li>
                  </ul>
                  <div className='technologies-list'>
                     <h5>{keyboardHero.technologies}</h5>
                  </div>
                  <div className='link-container'>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={keyboardHero.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={keyboardHero.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }}>View Code</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   };

   nimbleProject = () => {
      const nimble = this.state.projects[2];
      return (
         <div
            className="project-card"
            style={{ backgroundImage: `url(${nimble.mainPhoto})` }}
         >
            <div className='card-text'>
               <div className='project-card-header'>
                  <h2>{nimble.name}</h2>
                  <p onClick={() => this.setState({ displayNimbleImages: true })} style={{ color: '#0bd4ba' }}>View Photos</p>
                  <div className='small-link-container'> 
                  {/* Only displays in mobile view */}
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={nimble.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                        <div>
                           <span>Username: {nimble.username}</span>
                           <span> | Password: {nimble.password}</span>
                        </div>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={nimble.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }} > View Code </span>
                        </div>
                     </div>

                  </div>
               </div>
               <div>
                  <ul>
                     <li>{nimble.keyPoint1}</li>
                     <li>{nimble.keyPoint2}</li>
                     <li>{nimble.keyPoint3}</li>
                  </ul>
                  <div className='technologies-list'>
                     <h5>{nimble.technologies}</h5>
                  </div>
                  <div className='link-container'>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={nimble.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                     </div>
                     <div>
                        <a style={{ color: '#0bd4ba' }} target='_blank' href={nimble.codeURL} rel="noopener noreferrer">View Code</a>
                        <div>
                           <span style={{ opacity: '0' }}>View Code</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   };

   kanooImagesModal = () => {
      const kanoo = this.state.projects[0];
      return (
         <div className='modal-wrapper' onClick={() => this.setState({ displayKanooImages: false })}>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ displayKanooImages: false })}></i>
            <div onClick={e => e.stopPropagation()}>
               <Slider {...sliderSettings} className='slider'>
                  <div>
                     <img src={kanoo.image1} alt="" />
                     <p>{kanoo.image1description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image2} alt="" />
                     <p>{kanoo.image2description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image3} alt="" />
                     <p>{kanoo.image3description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image4} alt="" />
                     <p>{kanoo.image4description}</p>
                  </div>
                  <div>
                     <img src={kanoo.image5} alt="" />
                     <p>{kanoo.image5description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )
   };

   keyboardHeroImagesModal = () => {
      const keyboardHero = this.state.projects[1];
      return (
         <div className='modal-wrapper' onClick={() => this.setState({ displayKeyboardHeroImages: false })}>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ displayKeyboardHeroImages: false })}></i>
            <div onClick={event => event.stopPropagation()}>
               <Slider {...sliderSettings} className='slider'>
                  <div>
                     <img src={keyboardHero.image1} alt="" className='screenshot' />
                     <p>{keyboardHero.image1description}</p>
                  </div>
                  <div>
                     <img src={keyboardHero.image2} alt="" className='screenshot' />
                     <p>{keyboardHero.image2description}</p>
                  </div>
                  <div>
                     <img src={keyboardHero.image3} alt="" className='screenshot' />
                     <p>{keyboardHero.image3description}</p>
                  </div>
                  <div>
                     <img src={keyboardHero.image4} alt="" className='screenshot' />
                     <p>{keyboardHero.image4description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )
   };

   nimbleImagesModal = () => {
      const nimble = this.state.projects[2];
      return (
         <div className='modal-wrapper' onClick={() => this.setState({ displayNimbleImages: false })}>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ displayNimbleImages: false })}></i>
            <div onClick={e => e.stopPropagation()}>
               <Slider {...sliderSettings} className='slider'>
                  <div>
                     <img src={nimble.image1} alt="" />
                     <p>{nimble.image1description}</p>
                  </div>
                  <div>
                     <img src={nimble.image2} alt="" />
                     <p>{nimble.image2description}</p>
                  </div>
                  <div>
                     <img src={nimble.image3} alt="" />
                     <p>{nimble.image3description}</p>
                  </div>
                  <div>
                     <img src={nimble.image4} alt="" />
                     <p>{nimble.image4description}</p>
                  </div>
                  <div>
                     <img src={nimble.image5} alt="" />
                     <p>{nimble.image5description}</p>
                  </div>
                  <div>
                     <img src={nimble.image6} alt="" className='screenshot' />
                     <p>{nimble.image6description}</p>
                  </div>
                  <div>
                     <img src={nimble.image7} alt="" className='screenshot' />
                     <p>{nimble.image7description}</p>
                  </div>
                  <div>
                     <img src={nimble.image8} alt="" className='screenshot' />
                     <p>{nimble.image8description}</p>
                  </div>
                  <div>
                     <img src={nimble.image9} alt="" className='screenshot' />
                     <p>{nimble.image9description}</p>
                  </div>
                  <div>
                     <img src={nimble.image10} alt="" className='screenshot' />
                     <p>{nimble.image10description}</p>
                  </div>
                  <div>
                     <img src={nimble.image11} alt="" className='screenshot' />
                     <p>{nimble.image11description}</p>
                  </div>
                  <div>
                     <img src={nimble.image12} alt="" className='screenshot' />
                     <p>{nimble.image12description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )
   };

   render() {
      return (
         <div>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <div className='page projects-page-main'>
               <h1 className='projects-title'>Projects</h1>
               <h3 className='hover-for-detail-text'>(Hover over picture for details)</h3>
               <h3 className='touch-for-detail-text'>(Touch picture for details)</h3>

               <div className='projects-container'>
                  { this.nimbleProject() }
                  { this.keyboardHeroProject() }
                  { this.kanooProject() }
               </div>

               {
                  this.state.displayKeyboardHeroImages
                  &&
                  this.keyboardHeroImagesModal()
               }

               {
                  this.state.displayKanooImages
                  &&
                  this.kanooImagesModal()
               }

               {
                  this.state.displayNimbleImages
                  &&
                  this.nimbleImagesModal()
               }
            </div>
         </div>
      )
   }
}
