import React from 'react';
import {
    Header,
    Segment,
    Container,
  } from 'semantic-ui-react';
import "../styles/Profile.css";

//import { CURRENT_USER_API_URL } from "../constants";
//import axios from "axios";


class Profile extends React.Component {

  constructor (props) {
    super(props);
    //console.log(this.props)
    //console.log(this.props.data)
  //  this.state = {
  //   users: [],
  //  };
    // this.formatDates()
  }


  componentDidMount() {
    //this.resetState();
  }
  /*
  getCurrentUser= () => {
    //axios.get(CURRENT_USER_API_URL).then(res =>  {
    //  const users = res.data; 
    //  this.setState({ users });

    //});

    axios.get(CURRENT_USER_API_URL).then(res => this.setState({ users: res.data }));
  };

  resetState = () => {
    this.getCurrentUser();
  };
  */
    render() {
      return (
            <Segment className="body-content">
            <Header>
                <h1>User Profile</h1>
            </Header>

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