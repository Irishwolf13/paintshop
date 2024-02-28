import React, { useState } from 'react';
import './Joblist.css';
import { useJobs } from '../../context/JobsContext';

export default function Joblist() {
  const { filteredJobs, setActiveJob } = useJobs();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index, jobNumber) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setActiveJob(jobNumber)
    }
  }

  const renderJobs = () => {
    if (!filteredJobs) {
      return <div>No jobs to display</div>;
    }
    return filteredJobs.map((job, index) => (
      <div 
        className={`joblist-container ${activeIndex === index ? 'active' : ''}`}
        key={index}
        onClick={() => handleToggle(index, job)}
      >
        <div>{`#${job.jobNumber}`}</div>
        <div>{job.title}</div>
        <div>{`Feb 2024`}</div>
      </div>
    ));
  };

  return (
    <div>
      <p>Job List</p>
      <div>Filters go here</div>
      <div>{renderJobs()}</div>
    </div>
  );
}
