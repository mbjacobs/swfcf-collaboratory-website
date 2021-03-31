import React from 'react';
import {
    Header,
    Segment,
    Container,
  } from 'semantic-ui-react';
import "../styles/Profile.css";

import { CURRENT_USER_API_URL } from "../constants";
import axios from "axios";


class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      users: [],
    };
    // this.formatDates()
  }

  componentDidMount() {
    this.resetState();
  }

  getUsers= () => {
    axios.get(CURRENT_USER_API_URL).then(res =>  {
      const users = res.data; 
      this.setState({ users });

    });

    //axios.get(USERS_API_URL).then(res => this.setState({ users: res.data }));
  };

  resetState = () => {
    this.getUsers();
  };

    render() {
      return (
            <Segment class="body-content">
              <ul>
              { this.state.users.map(user => <li>{user.first_name}</li>)}
              { this.state.users.map(user => <li>{user.last_name}</li>)}
              { this.state.users.map(user => <li>{user.email}</li>)}
              </ul>

              <Header>
                  <h1>User Profile</h1>
              </Header>

              <Container style={{ marginTop: "20px" }}>
                <h3>First Name: </h3>
                  {this.state.users.map(user => (
                        <User
                            key={user.user_id}
                            first_name={user.first_name}
                          />
                  ))}
              </Container>

              <Container style={{ marginTop: "20px" }}>
                <h3>Last Name: </h3>
                  {this.state.users.map(user => (
                        <User
                            key={user.user_id}
                            last_name={user.last_name}
                          />
                  ))}
              </Container>

              <Container style={{ marginTop: "20px" }}>
                <h3>Email: </h3>
                  {this.state.users.map(user => (
                        <User
                            key={user.user_id}
                            email={user.email}
                          />
                  ))}
              </Container>

            </Segment>

        );
    }
  }

export default Profile;

const User = (props) => {
  return (
      <div class="ui card fluid">
          <div class="content">
              <div>{props.first_name}</div>
              <div>{props.last_name}</div>
              <div>{props.email}</div>
          </div>
      </div>
  );
}