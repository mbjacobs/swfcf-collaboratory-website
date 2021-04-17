import React from "react";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from "axios";
import { EVENTS_API_URL } from "../constants";
// import CSRFToken from './CsrfToken';

class NewEventForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      location: "",
      RSVP: "",
      description: "",
      user: this.props.user['first name'] + " " + this.props.user['last name']
    };

    console.log(this.state);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createEvent = e => {
    e.preventDefault();
    // console.log("in createEvent", this.csrfCookie)
      axios.post(EVENTS_API_URL, this.state).then(() => {
        this.props.resetState();
        this.props.toggle();
      });
  };

  render() {
    return (
        <Form onSubmit={this.createEvent}>
            <Form.Field>
                <label>Event Name</label>
                <input 
                    type="text"
                    name="name"
                    onChange={this.onChange} 
                    placeholder='Enter the event name.'
                />
            </Form.Field>
            <Form.Field>
                <label>Event Date</label>
                <input 
                    type="datetime-local"
                    name="date"
                    onChange={this.onChange} 
                    placeholder='Enter the event date and time.'
                />
            </Form.Field>
            <Form.Field>
                <label>Event Location</label>
                <input 
                    type="text"
                    name="location"
                    onChange={this.onChange} 
                    placeholder='Enter meeting details or link to your event registration page (e.g. Eventbrite).'
                />
            </Form.Field>
            <Form.Field>
                <label>Event RSVP</label>
                <input 
                    type="text"
                    name="RSVP"
                    onChange={this.onChange} 
                    placeholder='Enter any contact or link for guests to RSVP.'
                />
            </Form.Field>
            <Form.Field>
                <label>Event Description</label>
                <input 
                    type="text"
                    name="description"
                    onChange={this.onChange} 
                    placeholder='Enter a description of the event.'
                />
            </Form.Field>
            <Form.Field>
                <label>Posted By</label>
                <input 
                    type="text"
                    name="user"
                    disabled
                    placeholder={this.state.user}
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
  }
}

export default NewEventForm;