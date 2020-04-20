import React, { Component } from 'react';
import logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa'

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="index2.html" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>

        <nav className="navbar navbar-static-top" role="navigation">
          <a className="sidebar-toggle" data-toggle="push-menu" role="button">
            <FaBars />
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* <li className="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src={logo} class="user-image" alt="User Image" />
                  <span class="hidden-xs">Alexander Pierce</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    <img src={logo} class="img-circle" alt="User Image" />

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;