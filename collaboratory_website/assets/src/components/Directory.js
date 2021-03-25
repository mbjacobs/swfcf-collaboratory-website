import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import UserList from "./UserList"
import NewUserModal from "./NewUserModal";
import SearchOrg from "./SearchOrg";

import {
  Header,
  Container,
  Segment,
  Button,
  Item,
} from 'semantic-ui-react';
import "../styles/Page.css";
import "../styles/Directory.css";

class Home extends Component {
  render() {
    return (
    <Segment class="body-content">
      <Header>
        <h1>Directory</h1>
      </Header>
      <h2>Select a directory to search in.</h2>
          <Container>
              <Button>Organizations</Button>
              <Button>People</Button>
          </Container>
            <h3>Enter the name of the organization you’d like to find.</h3>
          <Container>
              <SearchOrg />
          </Container>
          <h3>OR</h3>
          <p>Check a few boxes, and we’ll help you find what you’re looking for:</p>
            <Container>
              <p>Filters</p>
            </Container>
    </Segment>
    );
  }
}

export default Home;

