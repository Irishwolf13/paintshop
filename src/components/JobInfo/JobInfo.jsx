import React from 'react'
import './JobInfo.css';
import { useJobs } from '../../context/JobsContext';

export default function JobInfo() {
  const { 
    activeJob, 
    handleActiveJobChange, 
    handleSaveToBackEnd, 
    setHasChanges 
  } = useJobs();

  const handleInputChange = (event, fieldName) => {
    handleActiveJobChange({ [fieldName]: event.target.value });
    setHasChanges(true);
  }

  const displayPainters = () => {
    return (
      <div>
        {activeJob.painters.map((painter, index) => (
          <div key={index}>
            <div id={`painter${index}`}>{painter}</div>
          </div>
        ))}
      </div>
    );
  }

  // Function to display clickable links with proper URL formatting
  const displayLinks = () => {
    return (
      <div>
        {activeJob.links.map((link, index) => (
          <div key={index}>
            <a 
              href={link.startsWith("http") ? link : `http://${link}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </div>
        ))}
      </div>
    );
  }

  const displayPaints = () => {
    return (
      <div>
        <h3>Paints</h3>
        {activeJob.paints.map((paint, index) => (
          <div className='info-paint-container' key={index}>     
            <div><label>Name:</label>{paint.name}</div>
            <div><label>Bran:</label>{paint.brand}</div>
            <div><label>Type:</label>{paint.type}</div>
            <div><label>Finish:</label>{paint.finish}</div>
            <div><label>Formula URL:</label>{paint.formulaURL}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='jobInfo-container'>
      <div className='jobInfo-container-left'>
        <div>
          <div><label>Job Name:</label>{activeJob.name}</div>
          <div><label>Job Number:</label>{activeJob.jobNumber}</div>
          <div><label>Job Date:</label>{activeJob.date}</div>
        </div>

        <div>
          <h4>Links</h4>
          {displayLinks()}
        </div>
        <div>
          <h4>Painters</h4>
          {displayPainters()}
        </div>
      </div>
      <div className='jobInfo-container-center'>
        {displayPaints()}
      </div>
      <div className='jobInfo-container-right'>
        Job Images
      </div>
    </div>
  )
}
