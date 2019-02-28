import milestoneLanding from '../assets/images/milestone-landing-screenshot.png';
import kanooLanding from '../assets/images/kanoo-landing-screenshot.png';

const data = {
   "projects": [
      {
         "name": "Milestone",
         "keyPoints": [
            "Full CRUD web app that allows users to keep track of significant events in their life",
            "Won Best Design / Styling out of 18 projects",
            "AWS S3 Integration allows users to upload photos & videos",
            "Responsive design works on Mobile"
         ],
         "technologies": "REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | AMAZON S3 | SESSIONS",
         "liveSiteURL": "https://www.milestone.page/#/",
         "username": "milo",
         "password": "milo",
         "codeURL": "https://github.com/kspayne93/milestone",
         "mainPhoto": `${milestoneLanding}`,
         "images": [
            {
               "description": "Landing Page",
               "image": `${milestoneLanding}`
            }
         ]
      },
      {
         "name": "Kanoo",
         "keyPoints": [
            "An all-in-one travel planning app that enables users to collaborate with friends to plan upcoming trips. Developed as a group project",
            "Keeps track of destinations, budget, activities, travelers (friends), and trip notes, as well as as a user's bucket list",
            "Built with a focus on design, the end result is a simple yet intuitive user experience that displays a user's travel details all in one place."
         ],
         "technologies": "REACT | REDUX | NODE | EXPRESS | MASSIVE | AXIOS | SASS | POSTGRESQL | BCRYPT | SESSIONS | QUILL",
         "liveSiteURL": "https://kanoo.fun/#/",
         "username": "k",
         "password": "k",
         "codeURL": "https://github.com/wpr-45-studentdevs/travel-app",
         "mainPhoto": `${kanooLanding}`,
         "images": [
            {
               "description": "Landing Page",
               "image": `${milestoneLanding}`
            }
         ]
      }
   ],
}

export default data;