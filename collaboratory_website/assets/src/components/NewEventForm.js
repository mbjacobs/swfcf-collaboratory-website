import React from "react";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from "axios";

import { EVENTS_API_URL } from "../constants";

class NewEventForm extends React.Component {
  state = {
    name: "",
    date: "",
    description: "",
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEvent = e => {
    e.preventDefault();
    axios.post(EVENTS_API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  render() {
    return (
        <Form onSubmit={this.createEvent}>
            <Form.Field>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    onChange={this.onChange} 
                    placeholder='Enter the event name.'
                />
            </Form.Field>
            <Form.Field>
                <label>Date</label>
                <input 
                    type="datetime-local"
                    name="date"
                    onChange={this.onChange} 
                    placeholder='Enter the event date and time.'
                />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    onChange={this.onChange} 
                    placeholder='Enter the event details.'
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
  }
}

export default NewEventForm;