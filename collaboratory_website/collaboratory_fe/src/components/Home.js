import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import OrganizationList from "./OrganizationList";
import NewOrganizationModal from "./NewOrganizationModal";

import axios from "axios";

import { ORGANIZATIONS_API_URL } from "../constants";

class Home extends Component {
  state = {
    organizations: []
  };

  componentDidMount() {
    this.resetState();
  }

  getOrganizations = () => {
    axios.get(ORGANIZATIONS_API_URL).then(res => this.setState({ organizations: res.data }));
  };

  resetState = () => {
    this.getOrganizations();
  };

  render() {
    return (
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
    );
  }
}

export default Home;