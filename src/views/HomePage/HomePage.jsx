import React from 'react';
import "./HomePage.css";
import Header from '../../components/Header/Header.jsx'
import Search from '../../components/Search/Search.jsx';
import Joblist from '../../components/Joblist/Joblist.jsx';

export default function HomePage() {
  return(
    <div>
      <Header />
      <div className='home-container'>

        <div className='home-left-container'>
          <Search />
          <Joblist />
        </div>

        <div className='home-right-container'>
          
        </div>

      </div>
    </div>
  )
}
