import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const options = selectedValue => ([
  { text: '20', value: '20', checked: selectedValue === 20 },
  { text: '50', value: '50', checked: selectedValue === 50 },
  { text: '100', value: '100', checked: selectedValue === 100 },
  { text: '200', value: '200', checked: selectedValue === 200 }
]);

const SelectLimit = ({ label, selectedValue, onSelect }) => {
  const selectHandler = val => {
    val = Number(val);

    if ( val !== selectedValue ) onSelect(val);
  }

  return (
    <Select label={label} options={options(selectedValue)} onSelect={selectHandler} />
  );
};

SelectLimit.defaultProps = {
  label: 'Display Per Page',
  selectedValue: 20
};

SelectLimit.propTypes = {
  label: PropTypes.string,
  selectedValue: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

export default SelectLimit;
