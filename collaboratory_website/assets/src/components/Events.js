import React, { Fragment } from 'react';
import {
    Header,
    Segment,
    Container,
    Button
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
    // this.formatDates()
  }

  componentDidMount() {
    this.resetState();
  }

  logButtonVal = (e) => {
    this.setState({ buttonVal: e.target.value });
    console.log(e.target.value);
};

  getEvents= () => {
    axios.get(EVENTS_API_URL).then(res => this.setState({ events: res.data }));
  };

  resetState = () => {
    this.getEvents();
  };

  // formatDate = () => {
  //   const newEvents = [...this.state.events]
  //   // this.state.events.forEach(event => {
  //   //   this.setState({
      
  //   //   })
  //   // });
  // }

  // sortEvents = () => {
  //   console.log("in sortEvents")
  //   const newEvents = [...this.state.events];
  //   console.log(newEvents);
  //   newEvents.sort(function(a, b){return b.date - a.date});
  //   console.log("Sorted...");
  //   console.log(newEvents);

  //   this.setState({
  //     events: newEvents
  //   })
  // }

  // filterOnPastEvents = () => {
  //   const filteredEvents = [...this.state.events];
  //   filteredEvents.sort(function(a, b){return b.date - a.date});
  // }

  // filterOnUpcomingEvents = () => {

  // }

    render() {
        return (
              <Segment class="body-content">
                  <Header>
                      <h1>Socials and Events</h1>
                  </Header>
                  <Container id="event-filters-container">
                      <Button onClick={this.logButtonVal} size="medium" value="upcoming" className={(this.state.buttonVal == "upcoming") ? "ui black button" : "ui button"} >Upcoming</Button>
                      <Button onClick={this.logButtonVal} size="medium" value="past" className={(this.state.buttonVal != "upcoming") ? "ui black button" : "ui button"}>Past Events</Button>
                  </Container>
                  <NewEventModal
                        create={true}
                        resetState={this.resetState}
                      />
                  <Container style={{ marginTop: "20px" }}>
                    {!this.state.events || this.state.events.length <= 0 ? (<p>No events yet!</p>) :
                    (
                        this.state.events.map(event => (
                          <Event
                              key={event.event_id}
                              name={event.name}
                              date={event.date}
                              description={event.description}
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
        <div class="ui card fluid">
            <div class="content">
                <div class="header">{props.name}</div>
                <div class="meta">{props.date}</div>
                <div class="description">{props.description}</div>
            </div>
        </div>
    );
}