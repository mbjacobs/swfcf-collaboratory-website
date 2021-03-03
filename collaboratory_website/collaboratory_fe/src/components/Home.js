import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import NewOrganizationModal from "./NewOrganizationModal";
import ChangemakerList from "./ChangemakerList";
import UserList from "./UserList"

import {
  Header,
  Container,
  Segment,
} from 'semantic-ui-react';
import "../styles/Home.css";

import axios from "axios";

import { ORGANIZATIONS_API_URL, CHANGEMAKERS_API_URL, USERS_API_URL } from "../constants";

class Home extends Component {
  state = {
    organizations: [],
    changemakers: [],
    users: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getOrganizations = () => {
    axios.get(ORGANIZATIONS_API_URL).then(res => this.setState({ organizations: res.data }));
  };

  getChangemakers = () => {
    axios.get(CHANGEMAKERS_API_URL).then(res => this.setState({ changemakers: res.data }));
  }

  getUsers = () => {
    axios.get(USERS_API_URL).then(res => this.setState({ users: res.data }));
  }

  resetState = () => {
    this.getOrganizations();
    this.getChangemakers();
    this.getUsers();
  };

  render() {
    return (
      <Segment>
        <Header>
          <h1>Page Title</h1>
        </Header>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <OrganizationList
                organizations={this.state.organizations}
                resetState={this.resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewOrganizationModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "20px" }}>
          <h2>Changemaker Directory</h2>
        <Row>
          <Col>
            <ChangemakerList
              changemakers={this.state.changemakers}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        </Container>
        <Container style={{ marginTop: "20px" }}>
          <h2>User Profile</h2>
        <Row>
          <Col>
            <UserList
              users={this.state.users}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        </Container>

    </Segment>
    );
  }
}

export default Home;