import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

export default class Projects extends Component {
   state = {

   }

   render() {
      return (
         <div className='page projects-page-main'>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <h1 style={{ marginBottom: '1rem' }} className='projects-text'>Projects</h1>
            <h3 style={{ margin: '0px' }}>(Hover over picture for details)</h3>
            <div className='projects-container'>
               <div class="project-card milestone-card">
                  <div className='card-text'>
                     <h2>Milestone</h2>
                     <div>
                        <ul>
                           <li>
                              Full CRUD web app that allows users to keep track of significant events in their life
                           </li>
                           <li>
                              Won Best Design / Styling out of 18 projects
                           </li>
                           <li>
                              AWS S3 Integration allows users to upload photos & videos
                           </li>
                           <li>
                              Responsive design works on Mobile
                           </li>
                        </ul>
                        <div className='technologies-list'>
                        <p>REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | AMAZON S3 | SESSIONS </p>
                        </div>
                        <div className='link-container'>
                           <div>
                              <a style={{ color: 'white' }} target='_blank' href="https://www.milestone.page/#/" rel="noopener noreferrer">View Live Site</a>
                              <div>
                                 <span>Username: milo</span>
                                 <span> | Password: milo</span>
                              </div>
                           </div>
                           <div>
                              <a style={{ color: 'white' }} target='_blank' href="https://github.com/kspayne93/milestone" rel="noopener noreferrer">View Code</a>
                              <div>
                                 <span style={{ opacity: '0' }} > View Code </span>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>

               <div className="project-card kanoo-card">
                  <div className='card-text'>
                     <h2>Kanoo</h2>
                     <div>
                        <ul>
                           <li>
                              An all-in-one travel planning app that enables users to collaborate with friends to plan upcoming trips. Developed as a group project
                           </li>
                           <li>
                              Keeps track of destinations, budget, activities, travelers (friends), and trip notes, as well as as a user's bucket list.
                           </li>
                           <li>
                              Built with a focus on design, the end result is a simple yet intuitive user experience that displays a user's travel details all in one place.
                           </li>
                        </ul>
                        <div className='technologies-list'>
                           <p>REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | SESSIONS | QUILL </p>
                        </div>
                        <div className='link-container'>
                           <div>
                              <a style={{ color: 'white' }} target='_blank' href="https://kanoo.fun/#/" rel="noopener noreferrer">View Live Site</a>
                              <div>
                                 <span>Username: k</span>
                                 <span> | Password: k</span>
                              </div>
                           </div>
                           <div>
                              <a style={{ color: 'white' }} target='_blank' href="https://github.com/wpr-45-studentdevs/travel-app" rel="noopener noreferrer">View Code</a>
                              <div>
                                 <span style={{ opacity: '0' }} > View Code </span>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
