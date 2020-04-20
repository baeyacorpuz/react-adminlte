import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="" className="user-image" alt="User Image" />
            <span className="hidden-xs">
              FirstName LastName
            </span>
          </a>

          {/*Dropdown upper right corner*/}
          <ul className="dropdown-menu">
            <li className="user-header">
              <img src="" className="img-circle" alt="User Icon" />
              <p>FirstName LastName</p>
            </li>

            <li className="user-footer">
              <div className="pull-left">
                {/*Change link to profile component*/}
                <Link to="/profile">
                  <button className="btn btn-success btn-flat">Profile</button>
                </Link>
              </div>
              <div className="pull-right">
                <button
                  className="btn btn-danger">
                  Sign out
                </button>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default NavHeader;