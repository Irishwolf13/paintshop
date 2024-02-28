import React, { useState } from 'react';
import './Search.css';
import { useJobs } from '../../context/JobsContext';

export default function Search() {
  const { filterJobs } = useJobs();
  const [nameInput, setNameInput] = useState('');
  const [colorInput, setColorInput] = useState('');

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    filterJobs(e.target.value, 'name', colorInput);
  };

  const handleColorChange = (e) => {
    setColorInput(e.target.value);
    filterJobs(e.target.value, 'color', nameInput);
  };

  return (
    <div className='search-container'>
      <p className='search-title'>Search by Job Name</p>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        value={nameInput}
        onChange={handleNameChange}
      />
      <p className='search-title'>Search by Color</p>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        value={colorInput}
        onChange={handleColorChange}
      />
    </div>
  );
}
