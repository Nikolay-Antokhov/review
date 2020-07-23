import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from 'mdbreact';
import Modal from './Modal';

const ModalCreateItem = props => {
  const [ disabled, setDisabled ] = useState(false);

  const Form = props.Form;

  const closeHandler = () => {
    props.closeHandler();
    setDisabled(false);
  }

  const submitHandler = data => {
    setDisabled(true);
    props.submitHandler(data)
      .then(data => {
        props.onSuccess(data);
        return data;
      })
      .finally(() => setDisabled(false));
  }

  return (
    <Modal
      open={props.open}
      closeHandler={closeHandler}
      title={props.title}
      body={
        <Form formId={props.formId} initialValues={props.values} submitHandler={submitHandler} />
      }
      footer={
        <Fragment>
          <MDBBtn color="secondary" onClick={closeHandler} outline disabled={disabled}>Cancel</MDBBtn>
          <MDBBtn type="submit" form={props.formId} color="primary" disabled={disabled}>Create</MDBBtn>
        </Fragment>
      }
    />
  );
}

ModalCreateItem.defaultProps = {
  onSuccess: () => {}
};

ModalCreateItem.propTypes = {
  onSuccess: PropTypes.func,
  submitHandler: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  open: PropTypes.bool.isRequired
};

export default ModalCreateItem;
