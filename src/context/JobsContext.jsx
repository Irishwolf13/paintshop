import React, { createContext, useContext, useState, useEffect } from 'react';

const JobsContext = createContext(); 

export const JobsProvider = ({ children }) => {
  const [backendJobs, setBackendJobs] = useState([
    { jobNumber: '13412', 
      name: 'job1', 
      paints: [{name:'Blue', brand:'Growers', type:'Outdoor', finish:'Eggshell', formulaURL:''},
                {name:'Green', brand:'Growers', type:'Outdoor', finish:'Matt', formulaURL:''},],
      date: '', 
      links:['www.frank.com', 'www.test.com'],  
      painters:['Mara', 'Evan'], 
      note:'This is my note job1',
      images: ['']
    }, 
    { jobNumber: '27234', 
      name: 'job2', 
      paints: [{name:'Yellow', brand:'Something', type:'Indoor', finish:'satin', formulaURL:''},],
      date: '', 
      links:['www.frank.com', 'www.test.com'],  
      painters:['Mara', 'Julia'], 
      note:'This is my note for job2',
      images: ['']
    }, 
    { jobNumber: '30975', 
      name: 'job3', 
      paints: [{name:'Pink', brand:'Barbie', type:'Ken', finish:'Party', formulaURL:''},],
      date: '', 
      links:['www.frank.com', 'www.test.com'],  
      painters:['Evan', 'Frank'], 
      note:'This is my note JOB3',
      images: [''] 
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    // This is where we are going to get information from the backend. and after we can use a .then to load setFilteredJobs
    setFilteredJobs(backendJobs);
  }, []);

  const filterJobs = (input, search, otherInput) => {
    if (search === 'name') {
      const filtered = backendJobs.filter(job => 
        job.name.toLowerCase().trim().includes(input.toLowerCase().trim()) && 
        job.paints.some(paint => paint.name.toLowerCase().trim().includes(otherInput.toLowerCase().trim()))
      );
      setFilteredJobs(filtered);
    } else if (search === 'color') {
      const filtered = backendJobs.filter(job => 
        job.paints.some(paint => paint.name.toLowerCase().trim().includes(input.toLowerCase().trim()) && 
        job.name.toLowerCase().includes(otherInput.toLowerCase().trim()))
      );
      setFilteredJobs(filtered);
    }
  };

  const handleActiveJobChange = (newValues) => {
    setActiveJob((prevActiveJob) => {
      return { ...prevActiveJob, ...newValues };
    });
  }

  const handleSaveToBackEnd = () => {
    console.log(activeJob)
    console.log(hasChanges)
  }

  const contextValue = {
    backendJobs,
    filteredJobs,
    filterJobs,
    activeJob,
    setActiveJob,
    handleActiveJobChange,
    handleSaveToBackEnd,
    setHasChanges,
  };

  return <JobsContext.Provider value={contextValue}>{children}</JobsContext.Provider>;
};

export const useJobs = () => {
  return useContext(JobsContext);
};