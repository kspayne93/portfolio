import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
   state = {
      projects: [
         {
            name: 'Keyboard Hero',
            keyPoint1: 'A typing challenge that tests a user`s speed and accuracy.',
            keyPoint2: `A fun full-stack web application which helps people improve their typing skills.`,
            keyPoint3: `Uses Javascript to check for user's typing accuracy in real-time`,
            technologies: 'REACT | NODE | POSTGRESQL',
            liveSiteURL: 'https://www.keyboardhero.fun',
            codeURL: 'https://github.com/kspayne93/keyboard-hero',
            image1description: 'Typing challenge provides real-time feedback on accuracy',
            image2description: 'Once challenge is completed, user can see their typed Words Per Minute',
            image3description: 'Database keeps track of leaderboard',
         },
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
            mainPhoto: 'https://lh3.googleusercontent.com/R2ApV5YtZ6YVIC3iCDv9quhP-SxYYcctdYCmn_37DStLy5mCt0jd-_zbICaBC8fHzbAElCGv0i1oVwT3BET1Q-zRGIOZp3F1d036s9Dr1RjTwb7-22J5au-Exq4Ys-k79qSnHFauFEfikPELLu47X7DlwVGCJxxQ12EENwf05ji0K6y3uhqKSvdNrf8En-uJmZkjmddYaXsy8ViV4qVmxxQj5dqN5yEEQ-bS-RTfJcrSfVFBlk8GzPinPL6Tgm07tMWLbCCAjGmlzqst1TQUQh8FTGkJ1A96hZYdeyWaWaoLYC24ntid9z4MrBVFA2kI3QT_CShkcHuB-dhLbNmTYoFjB0js1V_sPD9iGaSgl9KRUU9AOKYjxuW_5QulVsd8nMfQNzb2icvYw6q1VgYqRkyUGzdKwzjOIBJVCswtJncy1SAUHkkKUf0DSIwIbVvVkUEL8e1NQ1UrvnLf0K6Dcinyf8FwczrQcQIBBDAQEnqPs5ID9V9tkb9Cgv6ax345hbQzrt4UWHG9x05fNSpJOiYQnDU9xBZxMrlncAefMI0nT46DL8i5RDKwmqvKaklQ22te7E70lzu_xAO7LT42hfbxEgabUKJws5cXmuPYcDiFnHz5Lxh6zPYn3RmXfYpZ4Lh2kyArAhkbKikvNab-ZQBxDk-YCkUDA8UDXLNMx1fWsPTwHbWEMzRJEq4Z5fQziPi6xvkdBIa9m528DWJ3NMNmfQ=w1917-h968-no',
            image1: 'https://lh3.googleusercontent.com/R2ApV5YtZ6YVIC3iCDv9quhP-SxYYcctdYCmn_37DStLy5mCt0jd-_zbICaBC8fHzbAElCGv0i1oVwT3BET1Q-zRGIOZp3F1d036s9Dr1RjTwb7-22J5au-Exq4Ys-k79qSnHFauFEfikPELLu47X7DlwVGCJxxQ12EENwf05ji0K6y3uhqKSvdNrf8En-uJmZkjmddYaXsy8ViV4qVmxxQj5dqN5yEEQ-bS-RTfJcrSfVFBlk8GzPinPL6Tgm07tMWLbCCAjGmlzqst1TQUQh8FTGkJ1A96hZYdeyWaWaoLYC24ntid9z4MrBVFA2kI3QT_CShkcHuB-dhLbNmTYoFjB0js1V_sPD9iGaSgl9KRUU9AOKYjxuW_5QulVsd8nMfQNzb2icvYw6q1VgYqRkyUGzdKwzjOIBJVCswtJncy1SAUHkkKUf0DSIwIbVvVkUEL8e1NQ1UrvnLf0K6Dcinyf8FwczrQcQIBBDAQEnqPs5ID9V9tkb9Cgv6ax345hbQzrt4UWHG9x05fNSpJOiYQnDU9xBZxMrlncAefMI0nT46DL8i5RDKwmqvKaklQ22te7E70lzu_xAO7LT42hfbxEgabUKJws5cXmuPYcDiFnHz5Lxh6zPYn3RmXfYpZ4Lh2kyArAhkbKikvNab-ZQBxDk-YCkUDA8UDXLNMx1fWsPTwHbWEMzRJEq4Z5fQziPi6xvkdBIa9m528DWJ3NMNmfQ=w1917-h968-no',
            image2: 'https://lh3.googleusercontent.com/aNdGVLqife_Adc5nnmnEiQJKrSgIlNRlcWtO9fVIgIqg7fNuxrlgbny0g0312YziKT4HOxmb5Pm6S-7kl0-KfFeFjDJNVhnVo75wo4suuhmEyAijPBFLXwPVDOfDCPGYgH3eFgdThKEu9bZcx6LWurb7CdwaI01bOXuEQzlI3EOiYBgIRuBwuTT6vvIVgtnhb9oiGJSnHr5n0j5Qbbf8hbcj_XToF7oaqNElyYMjTgDSvfGpwevbjchshdupRwAu3vjjuAJ81seorpz2kygoWE61DNcYPvb7q0AHsifdPlQzD-6vUH3AL199jaxMgjEK0zUygtO6JtbbEN6P9qOPLmh8XufVr_WieOiQkV4G-8WrDrH0axwOXUKd5yltUfI8MXHG-PkyRMrt5SUq8p43L_TPGVEWkwCapk_ltqdF7fpfTgMLAIQ6sNdWpPS4oqWA_KDTNIdvUjAyjC7_ZniFNfvZK99BlOO91uSBMLHhTvJUgRrM9kEkFwYDG3yMbE8gLNyeoLAXo9c36PSTCNYMqKAvl8PXydsgEioOWWO1c6xNdpPz4vB65vQ4Bm09e1PHMCa48VL_yN5bQbS-QKtjj4qpIl-tCvt7fY8q-SrOwwpoLl_KDg55VAiW11YrmYsUSeIT0qVGssmfYOMCKseiQO_9IAOOVRL5ArfT4ncIOQqF1nYgW-0zUMJoGLrKAsJkOuib6oXWQ2pvpcpFN0dfjXs8gA=w1920-h969-no',
            image3: 'https://lh3.googleusercontent.com/EiUiJtagkAMcHdRa56Y8Ez4yaK2yGWUumRTbSZayv1tGya-x-hLBMtv_Pth85qoijyyD0BXmUANGcm-aHPQtQUfBNKuMwpsN-C5deiywoh9nOVTgRM-eWfKwkeQsjCgpQs3VseDg6u25sDNeIN_8GaoVi32kI8NKRKvxXeoNOySAHtSqENkysIEKR-7N_429QuL9kQX2jlrMuv0Kl967dxnliR9zsr4Wks_0IwW8ZGOvSxPkltC7kXnLG2e08kMhZaRt6QEugh3z0X3Mwx_HnpYexj0VQAy4dKrFYLl2aH5Q0lk_Fv91sytj3QNcMkbJIG8bI8mC-08Y7c4JUFmhPx-9Odnd0pVAPCSiJOxGezyrjLVLQapxmg21HcWi59Rkbh_MYdc_n1XJm5BWNnjw2IQk4mYsyRovyYe2LVGUUm4yPp6R1q42u0DTpzDgjgUIYLM9Wzi54-HUqd0F6RujKBiVKdYcZWPOVp7f_IZeUb6mlIHpXuAz109AzA7JoIsRBNRASNxwtBP1zSLQshuo4iHZTXz0Hp8jwp9fI9EXQqQcVofXHqYxqlnanjJ7bZSYEsL6rlEPqGDXv_1zSx7Sx90xs9rzuPbgFlis8miATRZ-5USI-jZkKbyp1oJXVY7SDjUBWYaqtvRllS_XapPro57uUhuiiHxquup9-s9N8n42U-cKCoVj7Dvd7aDvXmhfjNnfgw9fn18WgbBhd2lF49z9qQ=w1920-h970-no',
            image4: 'https://lh3.googleusercontent.com/uti7y4JINVUO0uaFC5LBGXu41rNRnFtuZm7LEPAMF6_px943mhhBid4zO0Hum_efAmRrXzwXVTmMmuTcqafAJa7XBg_80ZhFzS-Fv6C0ZSoxN_yIntv9EwO4k1tengIEtwlxz70xhxEs4dT2DvRI4uCQuEDzMBg6l83oahMm9EOtPrLf-ImhV3oZGcjQekZBnGXp4pns7Ogqp0GiLat4bRojrVJAPmNNkSVRtfAHAUluBikaSxKF4trjVceP_8_-2x_Kyb9xAb1EXIiP9i45oNyOkLxz92qEvei0GXEeE8vk2zzVo_fR37eQDwH2Yyo_3tGf7hdZYk7NykvVBiLuRQWoYCbxaTYZe650pgZlRMhGLGanCvFJIqyG-zySDyrs5OcayU0gZmkwwnwlv_2Nst0qSRQZPcy2dc4MLha-HXuodcNaEDkp__qA9QyXPd3ce_wGD9AfLmnFGLI0nkufSugtIbgcJOc07C2PTO_nLdw3PZqbQXeAQnAHoS09LhS78ZXP8h6GSj8UjPjM-LgCRtwqsamjXr3Vplkhu9oBEeVz3F9cNoP3CUVSspVYZflsBzqPyjb_gqnyXyIj-BUvbkfgLX3jf9y7mwAsz-eegJXRKW1QjF-jKNtvvhEX87WMzoOODhDOA6SB7r7TWAE_DTSQ5zzzm-wxajWnL3WO0e408gFOHUjR_l32tC2tOYHoYbd0-197AcJyH_nuIgPxnDehAA=w1920-h971-no',
            image5: 'https://lh3.googleusercontent.com/4Lj8rXnkz8VVEZJEiM9HDBHvCdsWccnsrMSiW0YM07vcqlb-JC3jxNXKdgYPS2x67vWfK_7o7hkDCopMAr1lxtkKSYe5xbOW1HJ8t3X1G1AIreqNfTk3OUSs6MRrDBRmNztFX73EYrh66PTmGm3pPUCFR1xkcKiggIbXpgvPWARRoNSfhmLGdsUItSo79DzWMdzZUv0gT73oUiQSG0EsWcqEWVO4nN_N2XFT4jvkuW1ar2lw4Bz_HitlxooQ-SftjLZAaH1hhscIt0NCb5CHDVsvKbIGEwD14jE9kvhkY7Zakw6Tlp6W_0DdcUI2m3WsHeSd4Ovi16J7WBKSwHUyE81otfLVoLGYd-ScXAhaYfSf-2bf4c_RQoIeU8xwO4g6_t_de25B5M1FVq5mSdeEYT3kJrcYwxu8rJ-f9eTdHSzVx9uK3tt6DQ1x_k0iPDkNnJ5U9PkLdebbzDdyUKYQE4reEojTexeiNBeb0a9g3mbUI2zU574rc0DgwrtRnHEBTkByMKlt4u3ShDm5ZfrvXgFS_MvjqdM_3RohgTMfnUkDfSquxtvh_YOyNjMZcDzJ4cNqT88Q6QdpUrHhy8pL6XC6YP22ebbxBQQe5AD-Yhy0dHi76UPBvHJ6E7TUrYAPJ3c3f3FVN2sj16w7LY9xED4tbv8jj68KhcfSu5c4h7Nhy3-3aDp9afCGRQvJblBfax5c-N0pXORQUy_gy7ha5vukbw=w1920-h970-no',
            image1description: 'Landing Page with transitioning background image (React Slick)',
            image2description: 'Dashboard View displaying all public trips',
            image3description: 'My Trips view showing all user trips (user can search, and toggle between upcoming / completed trips)',
            image4description: 'Trip Details View (user can update budget, take notes (text editor made with Quill), add destinations, add activities, add travelers). All travelers who are assigned to this trip can edit and collaberate.',
            image5description: 'Bucket List View'
         },
      ],
      displayKeyboardHeroImages: false,
      displayKanooImages: false,
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
      
      //PROJECT CARDS
      //Keyboard Hero Project Card
      const keyboardHero = this.state.projects[0];
      const keyboardHeroProject = (
         <div
            className="project-card"
            style={{ backgroundImage: `url(${require('../../assets/images/keyboard-hero-landing.png')})`}}
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
                     {keyboardHero.keyPoint4 && <li>{keyboardHero.keyPoint4}</li>}
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

      //Kanoo Project Card
      const kanoo = this.state.projects[1];
      const kanooProject = (
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

      // MODALS
      //Keyboard Hero Modal
      let keyboardHeroImagesModal = (
         <div className='modal-wrapper' onClick={() => this.setState({ displayKeyboardHeroImages: false })}>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ displayKeyboardHeroImages: false })}></i>
            <div onClick={event => event.stopPropagation()}>
               <Slider {...settings} className='slider'>
                  <div>
                     <img src={require('../../assets/images/keyboard-hero-image-1.png')} alt="" className='screenshot' />
                     <p>{keyboardHero.image1description}</p>
                  </div>
                  <div>
                     <img src={require('../../assets/images/keyboard-hero-image-2.png')} alt="" className='screenshot' />
                     <p>{keyboardHero.image2description}</p>
                  </div>
                  <div>
                     <img src={require('../../assets/images/keyboard-hero-image-3.png')} alt="" className='screenshot' />
                     <p>{keyboardHero.image3description}</p>
                  </div>
               </Slider>
            </div>
         </div>
      )
      
      //Kanoo Modal
      let kanooImagesModal = (
         <div className='modal-wrapper' onClick={() => this.setState({ displayKanooImages: false })}>
            <i className="fas fa-times modal-back-button" onClick={() => this.setState({ displayKanooImages: false })}></i>
            <div onClick={e => e.stopPropagation()}>
               <Slider {...settings} className='slider'>
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
                  {keyboardHeroProject}
                  {kanooProject}
               </div>

               {
                  this.state.displayKeyboardHeroImages
                  && keyboardHeroImagesModal
               }

               {
                  this.state.displayKanooImages
                  &&
                  kanooImagesModal
               }
            </div>
         </div>
      )
   }
}
