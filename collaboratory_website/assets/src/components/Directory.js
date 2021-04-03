import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import UserList from "./UserList"
import NewUserModal from "./NewUserModal";
import SearchOrg from "./SearchOrg";
import SearchPerson from "./SearchPerson";
import FilterOrg from "./FilterOrg";
import FilterPerson from "./FilterPerson";

import {
  Header,
  Container,
  Segment,
  Button,
  Item,
} from 'semantic-ui-react';
import "../styles/Page.css";
import "../styles/Directory.css";

// Should these contain a resetState method? My guess is probably. Need to add button states for active toggles so user can actually see what's happening
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
              <Button onClick={this.handleOrgClick} className={(this.state.isOrgDir == true) ? "ui black button" : "ui button"} >Organizations</Button>
              <Button onClick={this.handlePersonClick} className={(this.state.isOrgDir == true) ? "ui button" : "ui black button"}>People</Button>
          </Container>
      <h3>Enter the name of the {this.state.isOrgDir ? "organization" : "person" } you want to find.</h3>
      <Container>
          {this.state.isOrgDir ? <SearchOrg /> : <SearchPerson />}
      </Container>
      <h3>Or check a few boxes, and we’ll help you find what you’re looking for:</h3>
        <Container>
        {this.state.isOrgDir ? <FilterOrg /> : <FilterPerson />}

        </Container>
    </Segment>
    );
  }
}

export default Home;

