import React from 'react';

interface ISearchProps {
  searchChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}

const SearchBox: React.FC<ISearchProps> = ({ searchChange }) => {
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