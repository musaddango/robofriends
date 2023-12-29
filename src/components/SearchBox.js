import React from 'react';

const SearchBox = ({ searchChange }) => {
  console.log('SearchBox')
  return (
    <div className='pa2'>
      <input
        name='searchBox'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;