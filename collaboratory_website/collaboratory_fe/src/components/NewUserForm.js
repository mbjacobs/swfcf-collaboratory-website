import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { USERS_API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    user_id: 0,
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    registration_date: "",
    preferred_pronouns: "",
    role_id: 0,
    organization_id: 0,

  };
/*
  componentDidMount() {
    if (this.props.student) {
      const { pk, name, document, email, phone } = this.props.student;
      this.setState({ pk, name, document, email, phone });
    }
  }
*/
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  createUser = e => {
    e.preventDefault();
    axios.post(USERS_API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
/*
  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
*/
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.createUser}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.last_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Create a Password</Label>
          <Input
            type="text"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        <Button>Create Account</Button>
      </Form>
    );
  }
}

export default NewUserForm;