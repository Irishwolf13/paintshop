import React, { createContext, useContext, useState, useEffect } from 'react';

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // This is where we are going to get information from the backend.
    setJobs([{ title: 'job1' }, { title: 'job2' }, { title: 'job3' }]);
  }, []);

  const frank = () => {
    console.log('Frank is here to test');
  };

  const contextValue = {
    jobs,
    frank,
  };

  return <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>;
};

export const useJobs = () => {
  return useContext(JobsContext);
};