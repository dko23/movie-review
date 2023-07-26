import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [searchMovie, setSearchMovie] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchMovie(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movie"
        value={searchMovie}
        onChange={handleInputChange}
        className='search-movie'
      />
    </div>
  );
}
