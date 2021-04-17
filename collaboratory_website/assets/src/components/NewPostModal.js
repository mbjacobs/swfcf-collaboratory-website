import React, { Component, Fragment } from "react";
import { Button, Icon, Modal } from 'semantic-ui-react';
import NewPostForm from "./NewPostForm";

class NewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

            open: false
        };
    
        console.log("in NewPostModal constructor", this.props)
    }
    setOpen = () => {
        this.setState(previous => ({
            open: !previous.open
        }));
    };

    render() {

        const create = this.props.create;
        if (create) {
            var button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "150px", marginLeft: "61vw" }}
                >
                    Write a Post
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
                        user={this.props.user}
                        channels={this.props.channels}
                    />
                </Modal.Content>
                </Modal>
            </Fragment>
        );
    }
}

export default NewPostModal;