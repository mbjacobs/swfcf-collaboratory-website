import React, { Component } from "react";
import {
    Header,
    Segment,
    Container,
    Button,
} from 'semantic-ui-react';
import "../styles/Page.css";
import NewPostModal from "./NewPostModal";
import axios from "axios";
import { CHANNELS_API_URL, POSTS_API_URL, POSTS_FILTER_API_URL } from "../constants";
import PostList from "./PostList";

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            posts: [],
            activeIndex: 0,
            channelVal: "",
        };
    this.logChannelVal = this.logChannelVal.bind(this);
    }

    componentDidMount() {
        this.resetState();
    }

    getChannels = () => {
        axios.get(CHANNELS_API_URL).then(res => this.setState({ channels: res.data }));
    };

    getPosts = () => {
        axios.get(POSTS_API_URL).then(res => this.setState({ posts: res.data }));
    }

    logChannelVal = (v) => {
        this.setState({ channelVal: v });
        // console.log("log channel val run", v);
    };

    handleSearch = () => {
        this.makeApiCall(this.state.channelVal);
    };

    makeApiCall = (channelVal) => {
        let url = POSTS_FILTER_API_URL + `?channel=${channelVal}`;
        axios.get(url).then(res => this.setState({ posts: res.data }));
    };

    resetState = () => {
        this.getChannels();
        this.getPosts();
    };

    render() {
        return (
            <Segment class="body-content">
                <Header>
                    <h1>Discussions</h1>
                </Header>
                <Container style={{ marginTop: "20px", borderColor:"grey", borderWeight:"2px"}}>
                    <Segment inverted>
                        <p>Filter by Discussion Board:</p>
                        <Container style={{display:"flex"}}>
                            {!this.state.channels || this.state.channels.length <= 0 ? (<p>No channels yet!</p>) :
                                (
                                    this.state.channels.map(channel => (
                                        <Channel
                                            key={channel.channel_id}
                                            name={channel.name}
                                            handler = {this.logChannelVal}
                                        />
                                    ))
                                )
                            }
                            <Button onClick={this.handleSearch} floated='right' size ='large' inverted color='standard'>Apply</Button>
                        </Container>
                    </Segment>
                </Container>
                <h3>Posts</h3>
                <NewPostModal
                    create={true}
                    resetState={this.resetState}
                    user={this.props.data}
                    channels={this.state.channels}
                />
                <PostList posts={this.state.posts}></PostList>
            </Segment>
        );
    }
}

export default Channels;


const Channel = (props) => {
    return (
        <Button color="teal" onClick={() => {props.handler(props.name)}} value={props.name}>{props.name}</Button>
    );
}