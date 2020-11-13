import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import LandingPage from './views/LandingPage/LandingPage';
import Projects from './views/Projects/Projects';
import Skills from './views/Skills/Skills';

export default (
  <Switch>
    <Route component={LandingPage} exact path='/'></Route>
    <Route component={About} path='/about'></Route>
    <Route component={Contact} path='/contact'></Route>
    <Route component={Projects} path='/projects'></Route>
    <Route component={Skills} path='/skills'></Route>
  </Switch>
);
