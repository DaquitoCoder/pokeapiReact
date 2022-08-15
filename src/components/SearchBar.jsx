import React from 'react';

const SearchBar = () => {
  return (
    <div className='search-bar mt-3'>
      <div class='input-group'>
        <input
          type='text'
          class='form-control search-input'
          placeholder="Enter the pokemon's name"
          aria-label="Enter the pokemon's name"
          aria-describedby='button-addon2'
        />
        <button
          class='btn btn-primary btn-search'
          type='button'
          id='button-addon2'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
