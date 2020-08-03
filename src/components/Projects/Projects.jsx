import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  fade: true,
};

export default function Projects() {
  const projects = [
    {
      name: 'Kanoo',
      keypoints: [
        'An all-in-one travel planning app that enables users to collaborate with friends to plan upcoming trips. Developed in a group of 4',
        `Keeps track of destinations, budget, activities, travelers (friends), and trip notes, as well as as a user's bucket list`,
        `Built with a focus on design, the end result is a simple yet intuitive user experience that displays a user's travel details all in one place`,
      ],
      technologies: 'REACT | NODE | POSTGRESQL',
      liveSiteURL: 'https://kanoo.fun/#/',
      username: 'k',
      password: 'k',
      codeURL: 'https://github.com/wpr-45-studentdevs/travel-app',
      images: [kanooLanding, kanooImg2, kanooImg3, kanooImg4, kanooImg5],
      imageDescriptions: [
        'Landing Page with transitioning background image (React Slick)',
        'Dashboard View displaying all public trips',
        'My Trips view showing all user trips (user can search, and toggle between upcoming / completed trips)',
        'Trip Details View (user can update budget, take notes (text editor made with Quill), add destinations, add activities, add travelers). All travelers who are assigned to this trip can edit and collaborate.',
        'Bucket List View',
      ],
    },
    {
      name: 'Keyboard Hero',
      keypoints: [
        'A typing challenge that tests a user`s speed and accuracy.',
        `A fun full-stack web application which helps people improve their typing skills.`,
        `Uses Javascript to check for user's typing accuracy in real-time`,
      ],
      technologies: 'REACT | NODE | POSTGRESQL',
      liveSiteURL: 'https://www.keyboardhero.fun',
      codeURL: 'https://github.com/kspayne93/keyboard-hero',
      images: [keyboardHeroLanding, keyboardHeroImg2, keyboardHeroImg3, keyboardHeroImg4],
      imageDescriptions: [
        'Landing page',
        'Typing challenge provides real-time feedback on accuracy',
        'Once challenge is completed, user can see their typed Words Per Minute',
        'Database keeps track of leaderboard',
      ],
    },
    {
      name: 'Nimble',
      keypoints: [
        'Full-stack project organization/management tool.',
        `Simple & intuitive UX/UI allows teams to collaborate efficiently with easy-to-use gestures, including drag & drop on tasks and lists.`,
        `Inspired by Kanban Board methodology, users can organize ideas by projects, and create custom lists & tasks.`,
        'Users can manage connections (aka "friends") and add them to projects, tasks, etc.',
      ],
      technologies: 'REACT | NODE | POSTGRESQL',
      liveSiteURL: 'https://nimblemanager.com/',
      username: 'demo@demo.com',
      password: 'demo',
      codeURL: 'https://github.com/kspayne93/nimble',
      images: [
        nimbleLanding,
        nimbleLogin,
        nimbleDashboardOverview,
        nimbleMyTasks,
        nimbleUnassignedTasks,
        nimblePeople,
        nimbleProjectSettings,
        nimbleEditList,
        nimbleAddTask,
        nimbleDragNDrop,
        nimbleSearch,
        nimbleProfile,
      ],
      imageDescriptions: [
        'Landing page',
        'Login page',
        'Project overview dashboard',
        'Filtering by "My Tasks"',
        'Filtering by "Unassigned Tasks"',
        'Project Collaborators / User Connections page',
        'Project Settings page',
        'Editing list',
        'Adding task',
        "Drag n' Drop functionality",
        'Search by name/task functionality',
        'Profile page',
      ],
    },
  ];

  const displayProjects = () => {
    return projects.reverse().map(project => {
      return (
        <div className='project-card' key={project.name}>
          <div className='slider-container'>
            <Slider {...sliderSettings} className='slider'>
              {project.images.map((image, index) => {
                return (
                  <div key={project.name + image}>
                    <img src={image} alt='' />
                    <p>{project.imageDescriptions[index]}</p>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className='project-info-container'>
            <div className='project-header'>
              <p>{project.name}</p>
            </div>
            <div className='project-technologies'>
              <p>{project.technologies}</p>
            </div>
            <div className='project-keypoints'>
              <ul>
                {project.keypoints.map(keypoint => {
                  return <li key={keypoint}>{keypoint}</li>;
                })}
              </ul>
            </div>
            <div className='project-links'>
              <div className='live-site-link'>
                <a target='_blank' href={project.liveSiteURL} rel='noopener noreferrer'>
                  View Live Site
                </a>
                {project.username && project.password && (
                  <>
                    <p>Username: {project.username}</p>
                    <p>Password: {project.password}</p>
                  </>
                )}
              </div>
              <div className='code-link'>
                <a target='_blank' href={project.codeURL} rel='noopener noreferrer'>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='projects-page-main'>
      <Link to='/' className='link'>
        <i className='back-button fas fa-arrow-left'></i>
      </Link>
      <h1 className='projects-title'>Projects</h1>

      <div className='projects-container'>{displayProjects()}</div>
    </div>
  );
}
