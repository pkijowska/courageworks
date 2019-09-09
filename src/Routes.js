import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Works from './components/works';
import Nav from './components/nav';
import WorkForm from './components/workForm';


const Routes = (
  <Router>
  <Nav/>
  <Switch>
  <Route path="/works/:id" component= { WorkForm } />
<Route path="/works" component= { Works } />
<Redirect exact from="/" to="/works" />

</Switch>
  </Router>
);




export default Routes;
