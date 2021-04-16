import React, { Component, Fragment } from "react";
import { Button, Icon, Modal } from 'semantic-ui-react';
import NewPostForm from "./NewPostForm";
import axios from "axios";
import { CURRENT_USER_API_URL, CHANNELS_API_URL } from "../constants";

class NewPostModal extends Component {
    // state = {
    //     open: false
    // };
    constructor(props) {
        super(props);
        this.state = {
            channels: [],
            user: [],
            open: false
        };
    }
    setOpen = () => {
        this.setState(previous => ({
            open: !previous.open
        }));
    };

    componentDidMount() {
        this.resetState();
    }
    getUser = () => {
        axios.get(CURRENT_USER_API_URL).then(res => {
            // console.log("in getUser")
            // console.log(res)
            // console.log(res.data)
            this.setState({ user: res.data });
            // console.log(this.state.user)
        });
    };
    getChannels = () => {
        axios.get(CHANNELS_API_URL).then(res => this.setState({ channels: res.data }));
    };
    resetState = () => {
        this.getUser();
        this.getChannels();
    };

    render() {
        // console.log(this.state)
        // console.log(this.props)
        console.log(this.state.user)
        const create = this.props.create;
        if (create) {
            var button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "150px", marginLeft: "61vw" }}
                >
                    Write a Post   <Icon name="plus circle"></Icon>
                </Button>
            );
        }

        return (
            <Fragment>
                <Modal
                    onClose={() => this.setOpen(false)}
                    onOpen={() => this.setOpen(true)}
                    open={this.state.open}
                    trigger={button}
                >
                <Modal.Header>Create a New Post</Modal.Header>
                <Modal.Content>
                    <NewPostForm
                        resetState={this.props.resetState}
                        toggle={this.setOpen}
                        user={this.state.user}
                        channels={this.state.channels}
                    />
                </Modal.Content>
                </Modal>
            </Fragment>
        );
    }
}

export default NewPostModal;