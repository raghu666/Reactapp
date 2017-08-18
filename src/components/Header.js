import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="navbar navbar-toggleable-md">
     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <Link className="navbar-brand" to='/'><span className="curlies">{'{'}</span>Raghu<span className="curlies">{'}'}</span><small>User Interface - Front End - Web Developer</small></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><NavLink className="nav-link" activeStyle={{color: 'aqua'}} to='/Resume'>Resume</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" activeStyle={{color: 'aqua'}} to='/Projects'>Projects</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" activeStyle={{color: 'aqua'}} to='/Contact'>Contact</NavLink></li>
      </ul>
    </div>
    </nav>
  </header>
)

export default Header;