import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdbreact';
import Modal from './../Atoms/Modal/Modal';
import Loader from './../Atoms/Loader';

const SelectModal = props => {
  const body = props.salonsLoading ? (<Loader />) : (
    <MDBListGroup>
      {props.salons.map(el => (
        <MDBListGroupItem className="pointer" hover key={el.salonId}
          color={props.salonCurrent === el.salonId ? 'primary' : null}
          onClick={() => props.selectHandler(el.salonId)}
        >
          <h5 className="mb-1">{el.title}</h5>
          <small>{el.address}</small>
        </MDBListGroupItem>
      ))}
    </MDBListGroup>
  );

  return (
    <Modal
      open={props.open}
      closeHandler={props.closeHandler}
      title="Select Salon"
      body={body}
      footer={
        <Fragment>
          <MDBBtn color="secondary" onClick={props.closeHandler} outline>Cancel</MDBBtn>
          <MDBBtn color="primary" onClick={props.createHandler}>Create</MDBBtn>
        </Fragment>
      }
    />
  );
}

SelectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  salons: PropTypes.array.isRequired,
  selectHandler: PropTypes.func.isRequired,
  closeHandler: PropTypes.func.isRequired,
  createHandler: PropTypes.func.isRequired,
  salonCurrent: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default SelectModal;
