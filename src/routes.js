import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


export default (
   <Switch>
      <Route component={LandingPage} exact path='/' ></Route>
      <Route component={About} path='/about' ></Route>
      <Route component={Contact} path='/contact' ></Route>
      <Route component={Projects} path='/projects' ></Route>
      <Route component={Skills} path='/skills' ></Route>
   </Switch>
)