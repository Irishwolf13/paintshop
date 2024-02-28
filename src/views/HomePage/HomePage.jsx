import React from 'react';
import "./HomePage.css";
import Header from '../../components/Header/Header.jsx'
import Search from '../../components/Search/Search.jsx';
import Joblist from '../../components/Joblist/Joblist.jsx';
import JobInfo from '../../components/JobInfo/JobInfo.jsx';
import JobPaints from '../../components/JobPaints/JobPaints.jsx';
import JobImages from '../../components/JobImages/JobImages.jsx';

export default function HomePage() {
  return(
    <div>
      <Header />
      <div className='home-container'>

        <div className='home-left-container'>
          <Search />
          <Joblist />
          {/* need <Create New Job /> here */}
        </div>
        <div className='home-right-container'>
          <JobInfo />
          <JobPaints />
          <JobImages />
        </div>

      </div>
    </div>
  )
}
