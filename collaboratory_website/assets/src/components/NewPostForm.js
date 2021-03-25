import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { POSTS_API_URL } from "../constants";

class NewPostForm extends React.Component {
    state = {
        post_id: 0,
        title: "",
        text: "",
        channel_id: 0,
        user_id: 0,
    };
    /*
      componentDidMount() {
        if (this.props.student) {
          const { pk, name, document, email, phone } = this.props.student;
          this.setState({ pk, name, document, email, phone });
        }
      }
    */
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
    /*
      editStudent = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
          this.props.resetState();
          this.props.toggle();
        });
      };
    */
    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.createPost}>
                <FormGroup>
                    <Label for="title">Post Title</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="text">Post Text</Label>
                    <Input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.text)}
                    />
                </FormGroup>
                <Button>Create Post</Button>
            </Form>
        );
    }
}

export default NewPostForm;