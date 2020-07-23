import React from 'react';
import PropTypes from 'prop-types';
import { MDBSelect } from 'mdbreact';

const Select = props => (
  <MDBSelect
    label={props.label}
    search={props.search}
    options={props.options}
    getValue={values => props.onSelect(values[0] || null)}
    className={props.className}
    required={props.required}
  />
);

Select.defaultProps = {
  search: false,
  required: false
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  search: PropTypes.bool
};

export default Select;
