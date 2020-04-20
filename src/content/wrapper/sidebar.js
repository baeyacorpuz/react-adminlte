import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">

        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">HEADER</li>
          {/* <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Link</span></a></li>
          <li><a href="#"><i className="fa fa-link"></i> <span>Another Link</span></a></li>
          <li className="treeview">
            <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul className="treeview-menu">
              <li><a href="#">Link in level 2</a></li>
              <li><a href="#">Link in level 2</a></li>
            </ul>
          </li> */}
          <li>
            <Link to="/profile">
              <FaUser className="m-r-15" />
              <span>Profile</span></Link>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar;