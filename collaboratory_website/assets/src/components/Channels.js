import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import PostList from "./PostList"
import NewPostModal from "./NewPostModal";
// import NewPostModal from "./NewPostModal";

import {
    Header,
    Segment,
    Container
} from 'semantic-ui-react';
import "../styles/Page.css";

import axios from "axios";

import { CHANNELS_API_URL, POSTS_API_URL} from "../constants";

class Channels extends Component {
    state = {
        channels: [],
        posts: [],
    };

    componentDidMount() {
        this.resetState();
    }

    getChannels = () => {
        axios.get(CHANNELS_API_URL).then(res => this.setState({ channels: res.data }));
    };

    getPosts = () => {
        axios.get(POSTS_API_URL).then(res => this.setState({ posts: res.data }));
    }

    resetState = () => {
        this.getChannels();
        this.getPosts();
    };
    render() {
        console.log(this.state.channels)
        return (
            <Segment class="body-content">
                <Header>
                    <h1>Channels</h1>
                </Header>
                <Container style={{ marginTop: "20px" }}>
                    {!this.state.channels || this.state.channels.length <= 0 ? (<p>No channels yet!</p>) :
                        (
                            this.state.channels.map(channel => (
                                <Channel
                                    key={channel.pk}
                                    name={channel.name}
                                    description={channel.description}
                                />
                            ))
                        )
                    }
                </Container>
                <h3>Post List</h3>
                <Container style={{ marginTop: "20px" }}>
                    <Row>
                        <Col>
                            <PostList
                                posts={this.state.posts}
                                resetState={this.resetState}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewPostModal create={true} resetState={this.resetState} />
                        </Col>
                    </Row>
                </Container>
            </Segment>
        );
    }
}

export default Channels;

const Channel = (props) => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">{props.name}</div>
                <div class="description">{props.description}</div>
            </div>
        </div>
    )
};