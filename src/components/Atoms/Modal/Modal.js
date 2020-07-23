import React from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import PropTypes from 'prop-types';

const Modal = ({ open, closeHandler, title, body, footer }) => (
  <MDBModal isOpen={open} toggle={closeHandler} cascading>
    <MDBModalHeader toggle={closeHandler} className="light-blue darken-3 white-text">
      {title}
    </MDBModalHeader>
    <MDBModalBody className="mb-0">
      {body}
    </MDBModalBody>
    <MDBModalFooter>
      {footer}
    </MDBModalFooter>
  </MDBModal>
);

Modal.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  footer: PropTypes.element.isRequired
};

export default Modal;
