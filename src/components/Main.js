import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Resume' component={Resume}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Projects' component={Projects}/>
    </Switch>
  </main>
)

export default Main;