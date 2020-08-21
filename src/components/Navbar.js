import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light py-3 font-weight-bolder">
        <div className="container">
          <a href="/" className="navbar-brand">
            React Course
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
