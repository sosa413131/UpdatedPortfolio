import './modal.css';
import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: props.show
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog >
                    <Modal.Header>
                        <Modal.Title>Feedback<strong> NOT</strong> Received </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <span className='.modalText'>Hi Name, <br /> The feedback feature on my page is currently under development.<br /> In the meantime, reach out to me via email or through one of my social media accounts (See on the top right-hand corner of this page)<br /> <br /> Come back soon as I am actively working on this page and <br /> Thanks!</span></Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.handleClose} >Close</Button>
                    </Modal.Footer >
                </Modal.Dialog>


            </div>
        )
    }


}

export default ModalComponent;