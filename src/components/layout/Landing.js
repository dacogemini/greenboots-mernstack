import React, { Component } from 'react'

class Landing extends Component {
  render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">WELCOME
                </h1>
                <p className="lead"> Create a hiking profile/portfolio, share posts and connect with other hikers</p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">Sign Up</a>
                <a href="login.html" className="btn btn-lg btn-light">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Landing;