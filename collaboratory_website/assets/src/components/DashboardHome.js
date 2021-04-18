import React, { Component, Fragment } from "react";

import {
  Header,
  Container,
  Segment,
  List,
  Divider,
  Message,
} from 'semantic-ui-react';
import "../styles/Page.css";

class DashboardHome extends Component {

  render() {

    return (
    <Segment class="body-content">
      <Header>
        <h1>Welcome back to Collaboratory Online!</h1>
      </Header>
        <h2>Value Statements</h2>
        <Message warning>
          <Message.Header>Below is the placeholder for value statements.</Message.Header>
          <p>Placeholder content excerpted from The Shark Pledge in Finding Nemo.</p>
        </Message>
        <h3>"I am a nice shark, not a mindless eating machine. If I am to change this image, I must first change myself. Fish are friends, not food."</h3>
        <p>- The Shark Pledge in Finding Nemo</p>
      <Divider></Divider>
        <h2>Rules of Engagement</h2>
        <Message warning>
          <Message.Header>Below is the placeholder for rules of engagement.</Message.Header>
          <p>Placeholder content excerpted from The Shark Pledge in Finding Nemo.</p>
        </Message>
        <h4>Fish are friends, not food. Though we have long sharp teeth, we're nice sharks underneath. We know that fish are friends, not food.</h4>
        <h4>Well, sometimes you know. Sure we could eat ya whole, but we have self-control. We know that fish are friends, not food.</h4>
        <h4>The stress of life in the ocean will lead to emotional eating.</h4>
        <h4>When you need help gettin' through it and kelp just won't do it. Don't start feeding!</h4>
        <h4>Swim to our meeting. Oh yes, we've seen the light. Each day we fight the fight to curb our appetite and change our attitude.</h4>
        <p>- The Shark Pledge in Finding Nemo</p>
    </Segment>
    );
  }
}

export default DashboardHome;

