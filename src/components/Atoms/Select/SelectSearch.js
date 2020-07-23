// MDBootstrap doesn't have a handler for text input in select search.
// That's why I select input and add on search handler.

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import usersOptions from './usersOptions';

const SelectSearch = props => {
  const [ options, setOptions ] = useState([]);

  const inputHandler = event => props.getData(event.target.value).then(data => setOptions(usersOptions(data.list)));

  useEffect(() => {
    const inputSelector = '.'+ props.className +' #selectSearchInput';
    const el = document.querySelector(inputSelector);

    el.addEventListener('input', inputHandler);

    return () => el.removeEventListener('input', inputHandler);
  }, []);

  return (
    <Select
      className={props.className}
      label={props.label}
      options={options}
      onSelect={props.onSelect}
      search
    />
  );
};

SelectSearch.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectSearch;
