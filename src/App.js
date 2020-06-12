import React, { Component } from 'react';
import './App.scss';
import routes from './routes';

const keyboardHeroLanding = require('./assets/images/keyboardHero/keyboard-hero-landing.png');
const keyboardHeroImg2 = require('./assets/images/keyboardHero/keyboard-hero-image-2.png');
const keyboardHeroImg3 = require('./assets/images/keyboardHero/keyboard-hero-image-3.png');
const keyboardHeroImg4 = require('./assets/images/keyboardHero/keyboard-hero-image-4.png');

const kanooLanding = require('./assets/images/kanoo/kanoo-landing.png');
const kanooImg2 = require('./assets/images/kanoo/kanoo-image-2.png');
const kanooImg3 = require('./assets/images/kanoo/kanoo-image-3.png');
const kanooImg4 = require('./assets/images/kanoo/kanoo-image-4.png');
const kanooImg5 = require('./assets/images/kanoo/kanoo-image-5.png');

const nimbleLanding = require('./assets/images/nimble/nimble-landing.png');
const nimbleLogin = require('./assets/images/nimble/nimble-login.png');
const nimbleDashboardOverview = require('./assets/images/nimble/nimble-dashboard-overview.png');
const nimbleMyTasks = require('./assets/images/nimble/nimble-my-tasks.png');
const nimbleUnassignedTasks = require('./assets/images/nimble/nimble-unassigned-tasks.png');
const nimblePeople = require('./assets/images/nimble/nimble-people.png');
const nimbleProjectSettings = require('./assets/images/nimble/nimble-project-settings.png');
const nimbleSearch = require('./assets/images/nimble/nimble-search.png');
const nimbleAddTask = require('./assets/images/nimble/nimble-add-task.png');
const nimbleDragNDrop = require('./assets/images/nimble/nimble-dragndrop.png');
const nimbleEditList = require('./assets/images/nimble/nimble-edit-list.png');
const nimbleProfile = require('./assets/images/nimble/nimble-profile.png');

class App extends Component {
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
      <div className="App">
        { routes }
      </div>
    );
  }
}

export default App;
