import React from 'react';
import PropTypes from 'prop-types';
import { MDBTable } from 'mdbreact';

const Table = ({ head, body }) => {
  return (
    <MDBTable small striped responsive hover>
      <thead>
        {head}
      </thead>
      <tbody>
        {body}
      </tbody>
    </MDBTable>
  );
}

Table.propTypes = {
  head: PropTypes.any.isRequired,
  body: PropTypes.any.isRequired
};

export default Table;
