import React, { useState } from 'react';
import './Search.css';
import { useJobs } from '../../context/JobsContext';

export default function Search() {
  const { filterJobs } = useJobs();
  const [titleInput, setTitleInput] = useState('');
  const [colorInput, setColorInput] = useState('');

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
    filterJobs(e.target.value, 'title', colorInput);
  };

  const handleColorChange = (e) => {
    setColorInput(e.target.value);
    filterJobs(e.target.value, 'color', titleInput);
  };

  return (
    <div className='search-container'>
      <p className='search-title'>Search by Job Name</p>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        value={titleInput}
        onChange={handleTitleChange}
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
