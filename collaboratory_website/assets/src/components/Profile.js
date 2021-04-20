import React from 'react';
import {
    Header,
    Segment,
    Container,
    Button,
  } from 'semantic-ui-react';
import "../styles/Profile.css";
import ConnectToOrg from "./ConnectToOrg";

import { CURRENT_USER_API_URL } from "../constants";
import { USERS_API_URL } from "../constants";
import axios from "axios";

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.handleConnectClick = this.handleConnectClick.bind(this);
    this.state = {isConnected: false,
                  user: [],
                  usersList: [],
                  pull: []
                };
    // console.log(this.props)
    // console.log(this.props.data)
  };
  
  componentDidMount() {
    this.resetState();
  };

  getUsersList= () => {
    axios.get(USERS_API_URL).then(res => this.setState({ usersList: res.data }));
  };

  getUser = () => {
    axios.get(CURRENT_USER_API_URL).then(res =>  {
        this.setState({ user: res.data });
        console.log("in get user", this.state.user)
    });
};

  resetState = () => {
    this.getUsersList();
    this.getUser();
  };

  FormatUser = (auth_user, user_list) => {

    for (let userObj of user_list) {
      if ((auth_user != []) && user_list != []) {
        if (auth_user.username == userObj.user.username) {
            console.log("found the match")
            return userObj
        };
      }
    }
  };

  setOrganization = (theUser, theList) => {
    let status = []
      if ( typeof this.FormatUser(theUser, theList) == 'undefined' ) {
        status.push('Not connected')
    }
    else {
        if ( this.FormatUser(theUser, theList).organization_id != null){
          status.push(this.FormatUser(theUser, theList).organization_id.name)
      }
        else {
          status.push('Not connected')
        }
    }
    console.log(status)
    return status
  };

  handleConnectClick() {
    this.setState({isConnected: true});
    console.log("connecting to org")
  };

    render() {
      return (
            <Segment className="body-content">
            <Header>
                <h1>Your Profile</h1>
            </Header>
            <h4>If you haven't already done so, please connect to your organization so others can find you in our directory. Once you hit submit, refresh the page to see your organization. </h4>
            <Container style={{ marginTop: "20px" }}>
              <h3>First Name: </h3>
              <ProfileCard data={this.props.data['first name']}/>
            </Container>

            <Container style={{ marginTop: "20px" }}>
              <h3>Last Name: </h3>
              <ProfileCard data={this.props.data['last name']}/>
            </Container>

            <Container style={{ marginTop: "20px" }}>
              <h3>Email: </h3>
              <ProfileCard data={this.props.data.email}/>
            </Container>

            <Container style={{ marginTop: "20px" }}>
              <h3>Username: </h3>
              <ProfileCard data={this.props.data.username}/>
            </Container>
            <Container style={{ marginTop: "20px" }}>
              <h3>Organization: </h3>
              <ProfileCard data={this.setOrganization(this.state.user, this.state.usersList)}/>
              {/* <ProfileCard data={typeof this.FormatUser(this.state.user, this.state.usersList) == 'undefined' ?
                                  'Not connected' : // if unrendered
                                  this.FormatUser(this.state.user, this.state.usersList).organization_id.name}/> */}
            </Container>
            <Container>
                <Button onClick={this.handleConnectClick} attached='bottom' color='blue' >Connect to Organization</Button>
            </Container>
            <Container>
              {this.state.isConnected ? <ConnectToOrg /> : null}
            </Container>
          </Segment>

        );
    }
  }

export default Profile;

class ProfileCard extends React.Component {
  constructor (props) {
    super(props);
    }

  render () {
    return (
      <div class="ui card fluid">
          <div class="content">
              <div>{this.props.data}</div>
          </div>
      </div>
  );
  }
}