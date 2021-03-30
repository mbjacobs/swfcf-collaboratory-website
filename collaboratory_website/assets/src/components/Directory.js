import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import UserList from "./UserList"
import NewUserModal from "./NewUserModal";
import SearchOrg from "./SearchOrg";
import SearchPerson from "./SearchPerson";
import FilterOrg from "./FilterOrg";

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

  constructor(props) {
    super(props);
    this.handleOrgClick = this.handleOrgClick.bind(this);
    this.handlePersonClick = this.handlePersonClick.bind(this);
    this.state = {isOrgDir: true};
  }

  handleOrgClick() {
    this.setState({isOrgDir: true});
    console.log("in the org directory")
  }

  handlePersonClick() {
    this.setState({isOrgDir: false});
    console.log("in the person directory")
  }

  render() {

    const isOrgDir = this.state.isOrgDir;

    return (
    <Segment class="body-content">
      <Header>
        <h1>Directory</h1>
      </Header>
      <h2>Select a directory to search in.</h2>
          <Container>
              <Button onClick={this.handleOrgClick}>Organizations</Button>
              <Button onClick={this.handlePersonClick}>People</Button>
          </Container>
      <h3>Enter the name of the {this.state.isOrgDir ? "organization" : "person" } you’d like to find.</h3>
      <Container>
          {this.state.isOrgDir ? <SearchOrg /> : <SearchPerson />}
      </Container>
      <h3>OR</h3>
      <h4>Check a few boxes, and we’ll help you find what you’re looking for:</h4>
        <Container>
          <FilterOrg />

        </Container>
      </Segment>
    );
  }
}

export default Home;

