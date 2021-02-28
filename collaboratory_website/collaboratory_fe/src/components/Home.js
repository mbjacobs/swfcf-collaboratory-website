import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import NewOrganizationModal from "./NewOrganizationModal";
import ChangemakerList from "./ChangemakerList";
import {
  Header,
  Container,
  Segment,
} from 'semantic-ui-react';
import "../styles/Home.css";

import axios from "axios";

import { ORGANIZATIONS_API_URL, CHANGEMAKERS_API_URL } from "../constants";

class Home extends Component {
  state = {
    organizations: [],
    changemakers: []
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

  resetState = () => {
    this.getOrganizations();
    this.getChangemakers();
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
    </Segment>
    );
  }
}

export default Home;