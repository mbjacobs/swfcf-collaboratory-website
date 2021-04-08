import React from "react";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from "axios";

import { POSTS_API_URL } from "../constants";

class NewPostForm extends React.Component {
    state = {
        title: "",
        text: "",
        channel: "",
        user: "",
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createPost = e => {
        e.preventDefault();
        axios.post(POSTS_API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    render() {
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
                <Form.Field>
                    <label>Channel</label>
                    <input
                        type="text"
                        name="channel"
                        onChange={this.onChange}
                        placeholder='Enter the Channel ID.'
                    />
                </Form.Field>
                <Form.Field>
                    <label>User</label>
                    <input
                        type="text"
                        name="user"
                        onChange={this.onChange}
                        placeholder='Enter the User ID.'
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default NewPostForm;