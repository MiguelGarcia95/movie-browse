import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
  render () {
    return(
      <header id="navbar">
          <nav>
            <span className="logo">
              <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWordPress-Logo-Free-Download-PNG.png&f=1" alt=""/>
            </span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/discover">Discover</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/login" className="button">Login/Register</Link></li>
            </ul>
            <hr/>
          </nav>
      </header>
    )
  }
}

export default Navbar;
