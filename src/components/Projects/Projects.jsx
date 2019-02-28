import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data/data';

export default class Projects extends Component {
   state = {
      clicked: false,
   }

   render() {
      //Slider Settings
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1,
         fade: true
      };

      const projectData = data.projects;
      let images;
      const displayProjects = projectData.map(project => {
         const mainPhoto = project.mainPhoto;
         images = project.images.map(image => {
            return (
               <div>
                  <img src={image.image} alt="" style={{ width: '70vw', height: '75vh' }} />
                  <p>{image.description}</p>
               </div>
            )
         })
         const keyPoints = project.keyPoints.map(bulletPoint => <li>{bulletPoint}</li>)
         return (
            <div class="project-card milestone-card" style={{ backgroundImage: `url(${mainPhoto})` }}>
               <div className='card-text'>
                  <div className='project-card-header'>
                     <h2>{project.name}</h2>
                     <p onClick={() => this.setState({ clicked: true })} style={{ color: 'salmon' }}>View Photos</p>
                  </div>
                  <div>
                     <ul>
                        {keyPoints}
                     </ul>
                     <div className='technologies-list'>
                        <p>{project.technologies}</p>
                     </div>
                     <div className='link-container'>
                        <div>
                           <a style={{ color: 'white' }} target='_blank' href={project.liveSiteURL} rel="noopener noreferrer">View Live Site</a>
                           <div>
                              <span>Username: {project.username}</span>
                              <span> | Password: {project.password}</span>
                           </div>
                        </div>
                        <div>
                           <a style={{ color: 'white' }} target='_blank' href={project.codeURL} rel="noopener noreferrer">View Code</a>
                           <div>
                              <span style={{ opacity: '0' }} > View Code </span>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         )
      })


      let imagesModal = (
         <div className='modal-wrapper'>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ clicked: false })}></i>
            <div>
               <Slider {...settings} className='slider'>
               {images}
               </Slider>
            </div>
         </div>
      )



      return (
         <div className='page projects-page-main'>
            <Link to='/' className='link'>
               <i className="fas fa-undo class back-button"></i>
            </Link>
            <h1 style={{ marginBottom: '1rem' }} className='projects-text'>Projects</h1>
            <h3 style={{ margin: '0px' }}>(Hover over picture for details)</h3>
            <div className='projects-container'>
               {displayProjects}
            </div>

            {this.state.clicked && imagesModal}

         </div>
      )
   }
}
