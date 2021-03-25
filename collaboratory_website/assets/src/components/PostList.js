import React, { Component } from "react";
import {
    Container,
  } from 'semantic-ui-react';
import axios from "axios";

import {POSTS_API_URL} from "../constants";

class PostList extends Component {

    state = {
        posts: [],
      };
    
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
        return (
            <Container style={{ marginTop: "20px" }}>
            {!this.state.posts || this.state.posts.length <= 0 ? (<p>No posts yet!</p>) : 
            (
                this.state.posts.map(post => (
                <Post
                    key={post.post_id}
                    title={post.name}
                    text={post.text}
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
                <div class="meta"><strong>Channel:</strong>{props.channel_id} NAME <strong>Posted by:</strong>{props.user_id} USERNAME</div>
                <div class="description">{props.text}</div>
            </div>
        </div>
    );
}