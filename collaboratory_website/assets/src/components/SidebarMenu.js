import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../styles/SidebarMenu.css'
// import Logo from '../collab-logo.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Channels from "./Channels";
import Events from "./Events";
import Directory from "./Directory";
import Profile from "./Profile";

export default class SidebarMenu extends Component {
  // state = { activeItem: 'dashboard' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    // const { activeItem } = this.state
    return (
      <Router basename='/dashboard'>
        <Menu inverted vertical menu>
          <Menu.Item
            id='site-title'
            name='site-title'
          >
            {/* <p>Website Title/Logo</p> */}
            {/* <img src={Logo} alt="Logo" /> */}
          </Menu.Item>
          <Link to="/profile">
            <Menu.Item
              id='user-profile'
              name='profile'
              // active={activeItem === 'profile'}
            >
              <i class="huge icons">
                <i className="big circle outline icon"></i>
                <i className="user icon"></i>
              </i>
              <p>Changey McChangemaker</p>
            </Menu.Item>
          </Link>
          <Link to="/channels">
            <Menu.Item
            name='channels'
            // active={activeItem === 'channels'}
            />
          </Link>
          <Link to="/events">
            <Menu.Item
              name='events'
              // active={activeItem === 'events'}
            />
          </Link>
          <Link to="/directory">
            <Menu.Item
              name='directory'
              // active={activeItem === 'directory'}
            />
          </Link>
        </Menu>
        <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/channels">
              <Channels />
            </Route>
            <Route path="/events">
              <Events/>
            </Route>
            <Route path="/directory">
              <Directory />
            </Route>
          </Switch>
      </Router>
    )
  }
}

