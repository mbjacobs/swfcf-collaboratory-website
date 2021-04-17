import React, { Component, Fragment } from "react";
import { Button, Icon, Modal } from 'semantic-ui-react';
import NewEventForm from "./NewEventForm";

class NewEventModal extends Component {
    state = {
        open: false
    };

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
          Post an Event
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
        <Modal.Header>Post a New Event</Modal.Header>
        <Modal.Content>
            <NewEventForm
                resetState={this.props.resetState}
                toggle={this.setOpen}
                user={this.props.user}
            />
        </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

export default NewEventModal;