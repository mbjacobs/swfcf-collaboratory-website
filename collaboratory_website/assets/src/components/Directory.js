import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import UserList from "./UserList"
import NewUserModal from "./NewUserModal";

import {
  Header,
  Container,
  Segment,
} from 'semantic-ui-react';
import "../styles/Page.css";

import axios from "axios";

import { ORGANIZATIONS_API_URL, USERS_API_URL } from "../constants";

class Home extends Component {
  state = {
    organizations: [],
    users: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getOrganizations = () => {
    axios.get(ORGANIZATIONS_API_URL).then(res => this.setState({ organizations: res.data }));
  };

  getUsers = () => {
    axios.get(USERS_API_URL).then(res => this.setState({ users: res.data }));
  }

  resetState = () => {
    this.getOrganizations();
    this.getUsers();
  };

  render() {
    return (
      <Segment class="body-content">
        <Header>
          <h1>Directory</h1>
        </Header>
        <h2>Enter the name of the organization or person you’d like to find.</h2>
        <Container>
          <p>Search Bar will go here</p>
          <p>OR</p>
          <p>Check a few boxes, and we’ll help you find what you’re looking for:</p>
          <Container>
            <p>Filters</p>
          </Container>
        </Container>
        <h2>Search Results</h2>
        <h3>Organizations List</h3>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <OrganizationList
                organizations={this.state.organizations}
                resetState={this.resetState}
              />
            </Col>
          </Row>
        </Container>
        <h3>User List</h3>
        <Container style={{ marginTop: "20px" }}>
          <Row>
          <Col>
            <UserList
              users={this.state.users}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
            <Col>
              <NewUserModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
    </Segment>
    );
  }
}

export default Home;