import React from 'react';
import PropTypes from 'prop-types';
import { MDBInput } from 'mdbreact';

const InputText = props => {
  const { name, label, value, error, onChange } = props;

  return (
    <MDBInput
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      className={error ? 'is-invalid' : ''}
    >
      { ! error ? null : (
        <div className="invalid-feedback">{error}</div>
      )}
    </MDBInput>
  );
};

InputText.defaultProps = {
  value: ''
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default InputText;
