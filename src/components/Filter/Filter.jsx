import React from 'react';
import { FilterStyle } from './Styled';
import PropTypes from 'prop-types';

const Filter = ({ handleChange, filterStateData }) => {
  return (
    <FilterStyle>
      <span>Find contacts by name</span>
      <input
        onChange={handleChange}
        value={filterStateData}
        type="text"
        name="filter"
      />
    </FilterStyle>
  );
};
export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filterStateData: PropTypes.string.isRequired,
};
