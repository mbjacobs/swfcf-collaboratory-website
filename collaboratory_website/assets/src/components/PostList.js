import React, { Component } from "react";
import {
    Container,
  } from 'semantic-ui-react';
import axios from "axios";

import {POSTS_API_URL} from "../constants";

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

      componentDidMount() {
        this.resetState();
      }

      getPosts = () => {
        axios.get(POSTS_API_URL).then(res => this.setState({ posts: res.data }));
      };

      resetState = () => {
        this.getPosts();
      };

    render() {
        console.log(this.state.posts)
        return (
            <Container style={{ marginTop: "20px" }}>
            {!this.state.posts || this.state.posts.length <= 0 ? (<p>No posts yet!</p>) :
            (
                this.state.posts.map(post => (
                <Post
                    key={post.post_id}
                    title={post.title}
                    text={post.text}
                    channel_id={post.channel_id}
                    user_id={post.user_id}
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
        <div class="ui card fluid">
            <div class="content">
                <div class="header">{props.title}</div>
                <div class="description">{props.text}</div>
                <div class="meta">
                    <strong>Channel:</strong>{props.channel_id.name}
                    <strong> Posted by: </strong>{props.user_id.user.first_name + ' ' + props.user_id.user.last_name}
                </div>
            </div>
        </div>
    );
}