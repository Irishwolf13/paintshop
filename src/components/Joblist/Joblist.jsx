import React from 'react';
import './Joblist.css';
import { useJobs } from '../../context/JobsContext';

export default function Joblist() {
  const { jobs } = useJobs();

  const renderJobs = () => {
    if (!jobs) {return <div>No jobs to display</div>;}

    return jobs.map((job, index) => (
      <div key={index}> {job.title} </div>
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
