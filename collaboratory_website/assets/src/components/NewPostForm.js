import React from "react";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from "axios";

import { POSTS_API_URL } from "../constants";
// import Profile from "./Profile";
import { CURRENT_USER_API_URL } from "../constants";
import { CHANNELS_API_URL } from "../constants";

class NewPostForm extends React.Component {
    // state = {
    //     title: "",
    //     text: "",
    //     channel: "",
    //     user: "",
    // };

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            // channels: [],
            // user: [],
            channel_id: this.props.channels,
            user_id: this.props.user.id,
        };
    }
    // componentDidMount() {
    //     this.resetState();
    // }

    // getUser = () => {
    //     axios.get(CURRENT_USER_API_URL).then(res => {
    //         // console.log("in getUser")
    //         // console.log(res)
    //         // console.log(res.data)
    //         this.setState({ user: res.data });
    //         // console.log(this.state.user)
    //     });
    // };
    // getChannels = () => {
    //     axios.get(CHANNELS_API_URL).then(res => this.setState({ channels: res.data }));
    // };

    // resetState = () => {
    //     this.getUser();
    //     this.getChannels();
    // };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // onChangeSelect = e =>{
    //     this.setState({[e.target.name]: e.target.key});
    // }

    createPost = e => {
        e.preventDefault();
        // console.log(this.state)
        // console.log(this.props)
        axios.post(POSTS_API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    render() {
        console.log('state')
        console.log(this.state)
        console.log('props')
        console.log(this.props)
        // console.log(this.state.user)
        // console.log(this.state.channels)
        // console.log(this.state.channels.map(channel =>{{channel['name']}}))
        return (
            <Form onSubmit={this.createPost}>
                <Form.Field>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        placeholder='Enter the post title.'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Text</label>
                    <input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        placeholder='Enter the content for your post.'
                    />
                </Form.Field>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Channel'
                        onChange={this.onChange}
                        options={this.props.channels.map(channel => ({
                            name: 'channel_id',
                            key: channel.channel_id,
                            value: channel.channel_id,
                            text: channel.name
                        }))}>
                    </Form.Select>
                    {/* <Form.Field>
                        <label>Channel</label>
                        <input
                            type="int"
                            name="channel"
                            onChange={this.onChange}
                            placeholder='Enter the Channel ID.'
                        />
                    </Form.Field> */}
                    <Form.Field>
                        <label>User</label>
                        <input
                            type="text"
                            name="user_id"
                            onChange={this.onChange}
                            value= {this.props.user.id}
                        />
                    </Form.Field>

                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default NewPostForm;

const Channel = (props) => {
    return (
        props.name
    );
}