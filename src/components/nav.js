import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
<li className="nav-item active">
  <Link className="nav-link" to="/">Buy art <span className="sr-only">(current)</span></Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/login">360 view</Link>
  </li>
<li className="nav-item">
  <Link className="nav-link" to="/login">Login</Link>
</li>

</ul>
</div>
</nav>
    );
  }

}

export default Nav;
