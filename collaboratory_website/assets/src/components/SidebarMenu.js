import axios from "axios";
import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import '../styles/SidebarMenu.css'
// import Logo from '../collab-logo.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DashboardHome from "./DashboardHome";
import Channels from "./Channels";
import Events from "./Events";
import Directory from "./Directory";
import Profile from "./Profile";
import { CURRENT_USER_API_URL } from "../constants";

export default class SidebarMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    this.resetState();
  }

  getUser = () => {
    axios.get(CURRENT_USER_API_URL).then(res =>  {
      this.setState({ user: res.data });
    });
  };


  resetState = () => {
    this.getUser();
  };
  
  render() {
    return (
      <Router basename='/dashboard'>
        <Menu inverted vertical menu>
        <Link to="/home">
          <Menu.Item as='h2'
            id='site-title'
            name='Collaboratory Online'
            >
          </Menu.Item>
          </Link>

          <Link to="/profile">
            <Menu.Item
              id='user-profile'
              name='profile'
            >
              <h3>{this.state.user['first name']} {this.state.user['last name']}</h3>
              <Button color='blue'>View Profile</Button>
            </Menu.Item>
          </Link>
          <Link to="/channels">
            <Menu.Item
            name='Discussions'
            />
          </Link>
          <Link to="/events">
            <Menu.Item
              name='Socials and Events'
            />
          </Link>
          <Link to="/directory">
            <Menu.Item
              name='Directory'
            />
          </Link>
        </Menu>
        <Switch>
            <Route path="/home">
              <DashboardHome />
            </Route>
            <Route path="/profile">
              <Profile 
                data={this.state.user}
              />
            </Route>
            <Route path="/channels">
              <Channels 
                data={this.state.user}
              />
            </Route>
            <Route path="/events">
              <Events
                data={this.state.user}
              />
            </Route>
            <Route path="/directory">
              <Directory />
            </Route>
          </Switch>
      </Router>
    )
  }
}

