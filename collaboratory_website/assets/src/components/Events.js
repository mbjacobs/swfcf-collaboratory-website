import React from 'react';
import {
    Header,
    Segment,
    Container,
    Button,
    Card
  } from 'semantic-ui-react';
import "../styles/Page.css";
import axios from "axios";

import { EVENTS_API_URL } from "../constants";

class Events extends React.Component {
    state = {
        events: [],
      };
    
      componentDidMount() {
        this.resetState();
      }
    
      getEvents= () => {
        axios.get(EVENTS_API_URL).then(res => this.setState({ events: res.data }));
      };
    
      resetState = () => {
        this.getEvents();
      };

    render() {
        console.log(this.state.events)
        return (
              <Segment class="body-content">
                  <Header>
                      <h1>Events</h1>
                  </Header>
                  <Container>
                      <Button>Upcoming</Button>
                      <Button>Past Events</Button>
                  </Container>
                  <Container style={{ marginTop: "20px" }}>
                    {!this.state.events || this.state.events.length <= 0 ? (<p>No events yet!</p>) : 
                    (
                        this.state.events.map(event => (
                        <Event
                            key={event.pk}
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
        <div class="ui card">
            <div class="content">
                <div class="header">{props.name}</div>
                <div class="meta">{props.date}</div>
                <div class="description">{props.description}</div>
            </div>
        </div>
    );
}