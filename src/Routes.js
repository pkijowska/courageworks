import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Works from './components/works';
import Nav from './components/nav';
import WorkForm from './components/workForm';
import LandingPage from './components/landingPage'


const Routes = (
  <Router>
  <Nav/>
  <Switch>
  <Route path="/works/:id" component= { WorkForm } />
<Route path="/works" component= { Works } />
<Route path="/main" component= { LandingPage } />
<Redirect exact from="/" to="/works" />

</Switch>
  </Router>
);




export default Routes;
