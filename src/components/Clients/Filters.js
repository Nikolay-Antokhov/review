import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import SelectLimit from './../Atoms/Select/SelectLimit';
import InputText from './../Atoms/InputText';

const Filters = props => {
  const onSelect = val => {
    props.filtersHandler({ 'limit': val, page: 1 });
  };

  const inputHandler = event => props.filtersHandler({ [event.target.name]: event.target.value, page: 1 });

  return (
    <div className="table__filters">
      <MDBRow>
        <MDBCol xs="12" sm="6" md="3">
          <InputText label="Email" name="email" value={props.values.email} onChange={inputHandler} />
        </MDBCol>
        <MDBCol xs="12" sm="6" md="3">
        </MDBCol>
        <MDBCol xs="12" sm="6" md="3">
        </MDBCol>
        <MDBCol xs="12" sm="6" md="3">
          <SelectLimit selectedValue={props.values.limit} onSelect={onSelect} />
        </MDBCol>
      </MDBRow>
    </div>
  );
}

Filters.propTypes = {};

export default Filters;
