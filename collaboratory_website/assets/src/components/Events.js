import React from 'react';
import {
    Header,
    Segment,
    Container,
    Card,
    Icon,
    Label
  } from 'semantic-ui-react';
import "../styles/Page.css";
import NewEventModal from "./NewEventModal";
import axios from "axios";

import { EVENTS_API_URL } from "../constants";

class Events extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      events: [],
      buttonVal: ""
    };
    this.logButtonVal = this.logButtonVal.bind(this)
  }

  componentDidMount() {
    this.resetState();
  }

  logButtonVal = (e) => {
    this.setState({ buttonVal: e.target.value });
};

  getEvents= () => {
    axios.get(EVENTS_API_URL).then(res => this.setState({ events: res.data }));
  };

  resetState = () => {
    this.getEvents();
  };

  render() {
      return (
            <Segment class="body-content">
                <Header>
                    <h1>Socials and Events</h1>
                </Header>
                <Container id="event-filters-container">
                    <h2>Find ways to interact with others at Collaboratory.</h2>
                </Container>
                <NewEventModal
                      create={true}
                      resetState={this.resetState}
                      user={this.props.data}
                    />
                <Container style={{ marginTop: "20px" }}>
                  {!this.state.events || this.state.events.length <= 0 ? (<p>No events yet!</p>) :
                  (
                      this.state.events.map(event => (
                        <Event
                            key={event.event_id}
                            eventId={event.event_id}
                            name={event.name}
                            date={event.date}
                            location={event.location}
                            RSVP={event.RSVP}
                            description={event.description}
                            user={event.user}
                          />
                      ))
                  )}
              </Container>
            </Segment>
        );
    }
  }

export default Events;

const Event = (props) => {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>Posted by: <Icon name='user' /> {props.user}</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Label size='large'>
            <Icon name='clock'/>When: {props.date}
          </Label>
          <Label size="large">
            <Icon name='map marker'/>Where: {props.location}
          </Label>
          <Label size="large">
            <Icon name='mail'/>RSVP: {props.RSVP}
          </Label>
          <Label attached='bottom right'>
              {props.eventId}
          </Label>
        </Card.Content>
    </Card>
    );
}