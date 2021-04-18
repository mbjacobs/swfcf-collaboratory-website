import React, { Component } from "react";
import {
    Header,
    Segment,
    Container,
    Button,
    Accordion,
    Icon,
} from 'semantic-ui-react';
import "../styles/Page.css";
import NewPostModal from "./NewPostModal";
import axios from "axios";
import { CHANNELS_API_URL, POSTS_API_URL } from "../constants";
import PostList from "./PostList";

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            posts: [],
            activeIndex: 0
        };
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
    
    handleClick = (titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    resetState = () => {
        this.getChannels();
        this.getPosts();
    };
    render() {
        const { activeIndex } = this.state;
        return (
            <Segment class="body-content">
                <Header>
                    <h1>Discussions</h1>
                </Header>
                <Container style={{ marginTop: "20px", borderColor:"grey", borderWeight:"2px"}}>
                    <Segment inverted>
                        <Accordion inverted>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Icon size="huge" name='dropdown'/>Channels
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Container style={{display:"flex"}}>
                                {!this.state.channels || this.state.channels.length <= 0 ? (<p>No channels yet!</p>) :
                                    (
                                        this.state.channels.map(channel => (
                                            <Channel
                                                key={channel.channel_id}
                                                name={channel.name}
                                            />
                                        ))
                                    )
                                }
                            </Container>
                        </Accordion.Content>
                        </Accordion>
                        <Segment inverted>
                            <Button onClick={this.handleSearch} floated='right' size ='large' inverted color='standard'>Apply</Button>
                            <h2></h2>
                        </Segment>
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
        <Button>{props.name}</Button>
    );
}