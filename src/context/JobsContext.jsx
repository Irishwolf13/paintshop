import React, { createContext, useContext, useState, useEffect } from 'react';

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [backendJobs, setBackendJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null)

  useEffect(() => {
    // This is where we are going to get information from the backend.
    setBackendJobs([{ jobNumber: '13412', title: 'job1 frank', color:['blue', 'green'] }, { jobNumber: '27234', title: 'job2 frank', color:['blue', 'yellow']  }, { jobNumber: '30975', title: 'job3', color:['yellow', 'green']  }]);
    setFilteredJobs([{ jobNumber: '13412', title: 'job1 frank', color:['blue', 'green']  }, { jobNumber: '27234', title: 'job2 frank', color:['blue', 'yellow']  }, { jobNumber: '30975', title: 'job3', color:['yello', 'green']  }]);
  }, []);

  const filterJobs = (input, search, otherInput) => {
    if (search === 'title') {
      const filtered = backendJobs.filter(job => job.title.toLowerCase().trim().includes(input.toLowerCase().trim()) && job.color.some(color => color.toLowerCase().includes(otherInput.toLowerCase().trim())));
      setFilteredJobs(filtered);
    } else if (search === 'color') {
      const filtered = backendJobs.filter(job => job.color.some(color => color.toLowerCase().trim().includes(input.toLowerCase().trim()) && job.title.toLowerCase().includes(otherInput.toLowerCase().trim())));
      setFilteredJobs(filtered);
    }
  };

  const contextValue = {
    backendJobs,
    filteredJobs,
    filterJobs,
    activeJob,
    setActiveJob,
  };

  return <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>;
};

export const useJobs = () => {
  return useContext(JobsContext);
};