import React from 'react';
import './Search.css';

export default function Search() {

  const runFilter = (input) => {
    // Your filter function logic goes here
    console.log("Filtering with input:", input);
  };

  return (
    <div className='search-container'>
      <p className='search-title'>Search by Job Name or Color</p>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        onChange={(e) => runFilter(e.target.value)}
      />
    </div>
  );
}
