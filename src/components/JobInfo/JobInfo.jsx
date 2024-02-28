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

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    handleActiveJobChange({date: selectedDate});
    setHasChanges(true)
  }

  const handlePainterChange = (index, event) => {
    const updatedPainters = [...activeJob.painters]; // Create a copy of the painters array
    updatedPainters[index] = event.target.value; // Update the value of the painter at the specified index
  
    handleActiveJobChange({ painters: updatedPainters }); // Update the active job with the updated painters array
    setHasChanges(true); // Indicate that changes have been made
  }

  const displayPainters = () => {
    return (
      <div>
        {activeJob.painters.map((painter, index) => (
          <div key={index}>
            <input type="text" id={`painter${index}`} value={painter} onChange={e => handlePainterChange(index, e)} />
          </div>
        ))}
      </div>
    );
  }

  // Function to handle link changes
  const handleLinkChange = (index, event) => {
    const updatedLinks = [...activeJob.links]; // Create a copy of the links array
    updatedLinks[index] = event.target.value; // Update the value of the link at the specified index

    handleActiveJobChange({ links: updatedLinks }); // Update the active job with the updated links array
    setHasChanges(true); // Indicate that changes have been made
  }

  // Function to display links
  const displayLinks = () => {
    return (
      <div>
        {activeJob.links.map((link, index) => (
          <div key={index}>
            <input type="text" id={`link${index}`} value={link} onChange={e => handleLinkChange(index, e)} />
          </div>
        ))}
      </div>
    );
  }
  
  const displayPaints = () => {
    const handleInputChange = (index, field, value) => {
      handleActiveJobChange({
        paints: activeJob.paints.map((paint, idx) => {
          if (idx === index) {
            return {
              ...paint,
              [field]: value
            };
          }
          return paint;
        })
      });
      setHasChanges(true);
    };
  
    return (
      <div>
        <h3>Paints</h3>
        {activeJob.paints.map((paint, index) => (
          <div className='info-paint-container' key={index}>
            <label>Name:</label>
            <input type="text" value={paint.name} onChange={(e) => handleInputChange(index, 'name', e.target.value)} />
            <br />
            <label>Brand:</label>
            <input type="text" value={paint.brand} onChange={(e) => handleInputChange(index, 'brand', e.target.value)} />
            <br />
            <label>Type:</label>
            <input type="text" value={paint.type} onChange={(e) => handleInputChange(index, 'type', e.target.value)} />
            <br />
            <label>Finish:</label>
            <input type="text" value={paint.finish} onChange={(e) => handleInputChange(index, 'finish', e.target.value)} />
            <br />
            <label>Formula URL:</label>
            <input type="text" value={paint.formulaURL} onChange={(e) => handleInputChange(index, 'formulaURL', e.target.value)} />
            <br />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='jobInfo-container'>
      <div className='jobInfo-container-left'>
        <button onClick={e => handleSaveToBackEnd()}>Save Job to Backend</button>
        <div>
          <label htmlFor="inputName">Job Name: </label>
          <input type="text" id="inputName" value={activeJob.name} onChange={e => handleInputChange(e, 'name')} />
          <br />
          <label htmlFor="inputJobNumber">Job Number:</label>
          <input type="text" id="inputJobNumber" value={activeJob.jobNumber} onChange={e => handleInputChange(e, 'jobNumber' )} />
          <br />
          <label htmlFor="datePicker">Job Date:</label>
          <input type="date" id="datePicker" onChange={handleDateChange} />
          <br />
          <label htmlFor="inputNotes">Notes:</label>
          <textarea id='inputNotes'className='jobInfo-textArea' onChange={e => handleInputChange(e, 'note' )} value={activeJob.note}></textarea>
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
