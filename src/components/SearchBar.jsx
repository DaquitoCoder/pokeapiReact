import React from 'react';

const SearchBar = ({onChange}) => {
  return (
    <div className='search-bar mt-3'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control search-input'
          placeholder="Enter the pokemon's name"
          aria-label="Enter the pokemon's name"
          aria-describedby='button-addon2'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
