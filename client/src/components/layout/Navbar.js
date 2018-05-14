import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-dark bg-dark">
    <div className="container">
    <Link className="navbar-brand" to="/">
    
    <img src="/img/logo.png" className="d-inline-block align-top logo" width="100%" alt="Greenboots logo"></img>
    </Link>  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/profiles"> Hiker Profiles
            {' '}
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-item nav-link" href="/trails">Popular Trails</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
            Sign Up
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }
}

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-dark bg-dark">
//   <a className="navbar-brand" href="/">
//     <img src="/assets/img/logo.png" className="d-inline-block align-top logo" width="100%" alt="Greenboots logo"></img>
//   </a>  
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a className="nav-item nav-link" href="/">Home</a>
//       <a className="nav-item nav-link" href="/trails">Popular Trails</a>
//       <a className="nav-item nav-link" href="/">Contact</a>
//       <a className="nav-item nav-link" href="/">Login</a>
//       <a className="nav-item nav-link" href="/">Register</a>

//     </div>
//   </div>
// </nav>
// );

export default Navbar;