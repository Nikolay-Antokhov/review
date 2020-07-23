import React from 'react';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBIcon } from 'mdbreact';

const Card = ({ title, actions, body }) => (
  <MDBCard narrow>
    <MDBCardHeader className="custom-card-header">
      <h2>{title}</h2>
      <div>
        {actions.map((el, i) => (
          <MDBBtn
            color={el.color || 'primary'}
            type={el.type || 'button'}
            form={el.form || null}
            onClick={el.onClick || null}
            size="md"
            outline
            rounded
            key={i}
          >
            {el.icon ? (<MDBIcon className="mr-2" icon={el.icon} />) : null}
            {el.title}
          </MDBBtn>
        ))}
      </div>
    </MDBCardHeader>
    <MDBCardBody>
      {body}
    </MDBCardBody>
  </MDBCard>
);

Card.defaultProps = {
  actions: []
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired,
  actions: PropTypes.array
};

export default Card;
