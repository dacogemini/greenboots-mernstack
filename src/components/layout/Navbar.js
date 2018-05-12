import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-dark bg-dark">
    <div className="container">
    <a className="navbar-brand" href="/">
    <img src="../../img/logo.png" className="d-inline-block align-top logo" width="100%" alt="Greenboots logo"></img>
    </a>  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="profiles.html"> Hiker Profiles
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-item nav-link" href="/trails">Popular Trails</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register.html">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">Login</a>
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