import React from 'react';
import {
    Header,
    Segment,
  } from 'semantic-ui-react';
import "../styles/Page.css";

class Events extends React.Component {
    render() {
        return (
              <Segment class="body-content">
                  <Header>
                      <h1>Events</h1>
                  </Header>
              </Segment>
          );
      }
  }

export default Events;