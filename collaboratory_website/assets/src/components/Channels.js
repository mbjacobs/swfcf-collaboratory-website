import React from 'react';
import {
    Header,
    Segment,
  } from 'semantic-ui-react';
import "../styles/Page.css";

class Channels extends React.Component {
    render() {
        return (
              <Segment class="body-content">
                  <Header>
                      <h1>Channels</h1>
                  </Header>
              </Segment>
          );
      }
  }

export default Channels;