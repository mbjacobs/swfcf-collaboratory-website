import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPostForm from "./NewPostForm";

class NewPostModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Write Your Post";
        var button = <Button onClick={this.toggle}>Create New Post</Button>;

        if (create) {
            title = "Write Your Post";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px" }}
                >
                    Create Post
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewPostForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            post={this.props.post}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewPostModal;