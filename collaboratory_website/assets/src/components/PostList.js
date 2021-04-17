import React, { Component } from "react";
import {
    Container,
    Icon,
    Label,
    Card
  } from 'semantic-ui-react';

  class PostList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.posts)
        return (
            <Container style={{ marginTop: "20px" }}>
            {!this.props.posts || this.props.posts.length <= 0 ? (<p>No posts yet!</p>) :
            (
                this.props.posts.map(post => (
                <Post
                    key={post.post_id}
                    title={post.title}
                    text={post.text}
                    channel={post.channel}
                    user={post.user}
                  />
                ))
            )}
        </Container>
        );
    }
}

export default PostList;

const Post = (props) => {
    return (
        <Card fluid>
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>Posted by: <Icon name='user' /> {props.user}</Card.Meta>
            <Card.Description>{props.text}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Label size="medium">
              Channel: {props.channel}
            </Label>
        </Card.Content>
      </Card>
    );
}