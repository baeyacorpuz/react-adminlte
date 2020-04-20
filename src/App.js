import React, { Component } from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './public/css/AdminLTE.css';
import './public/css/_all-skins.css';
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.min.css";
import "@fortawesome/fontawesome-free/css/all.css"

import Header from './content/wrapper/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './content/wrapper/sidebar';
import Profile from './content/profile/profile';
import Footer from './content/wrapper/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper" style={{ height: "auto", minHeight: 100 + "vh" }}>
          <Header></Header>
          <Sidebar></Sidebar>

          <Switch>
            <Route exact path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
