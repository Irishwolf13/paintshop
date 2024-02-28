import React from 'react';
import "./HomePage.css";
import Header from '../../components/Header/Header.jsx'
import Search from '../../components/Search/Search.jsx';
import Joblist from '../../components/Joblist/Joblist.jsx';
import JobInfo from '../../components/JobInfo/JobInfo.jsx';
import { useJobs } from '../../context/JobsContext';

export default function HomePage() {
  const { activeJob } = useJobs();



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
            { activeJob && <JobInfo /> }
          </div>
          
      </div>
    </div>
  )
}
