import React from 'react';
import { MDBRow, MDBCol, MDBDatePicker } from 'mdbreact';
import SelectLimit from './../Atoms/Select/SelectLimit';
import InputText from './../Atoms/InputText';

const Filters = props => {
  const onSelect = val => {
    props.filtersHandler({ 'limit': val, page: 1 });
  };

  const dateHandler = date => props.filtersHandler({ date: date.toISOString().substring(0, 10), page: 1 });

  return (
    <div className="table__filters">
      <MDBRow>
        <MDBCol xs="12" sm="6" md="3">
          <MDBDatePicker
            autoOk={true}
            getValue={dateHandler}
            placeholder="Date"
            valueDefault={new Date(props.values.date)}
          />
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
