import React from "react";
import { Form, Button } from 'semantic-ui-react';
import axios from "axios";
import { POSTS_API_URL } from "../constants";

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            user: this.props.user['first name'] + " " + this.props.user['last name'],
            channel: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onDropdownChange = (e, data) => {
        this.setState({ [data.name]: data.value });
    };

    createPost = e => {
        console.log(this.state)
        e.preventDefault();
        axios.post(POSTS_API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.createPost}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            placeholder='Enter the post title.'
                        />
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Channel'
                        placeholder='Select a channel'
                        onChange={this.onDropdownChange}
                        name="channel"
                        default="General"
                        options={this.props.channels.map(channel => ({
                            key: channel.channel_id,
                            value: channel.name,
                            text: channel.name
                        }))}>
                    </Form.Select>
                </Form.Group>
                <Form.TextArea
                    label="Text"
                    type="text"
                    name="text"
                    onChange={this.onChange}
                    placeholder='Enter the content of your post.'
                />
                <Form.Field>
                    <label>Posted by</label>
                    <input
                        type="text"
                        name="user"
                        value= {this.state.user}
                        disabled
                    />
                </Form.Field>
                <div className="form-button-container">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        );
    }
}

export default NewPostForm;