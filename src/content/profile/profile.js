import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

class Profile extends Component {
  render() {
    return (
      <div className="content-wrapper" style={{ height: "auto", minHeight: 100 + "vh" }}>
        <section className="content-header">
          <h1>Profile</h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/">
                <FaHome className="m-r-5" /> Home 
            </Link>
            </li>
            <li className="active">Profile</li>
          </ol>
        </section>
        <section className="content">

        </section>
      </div>
    )
  }
}

export default Profile;