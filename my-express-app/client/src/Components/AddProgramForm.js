import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import './AddProgramForm.css';

const EMPTY_PROGRAM = {
  programTitle: '',
  creationDate: ''
};

function AddProgramForm(props) {

  const [newProgram, setNewProgram] = useState(EMPTY_PROGRAM);  
  
  function handleSubmit(event) {
    event.preventDefault();
    props.addProgramCb(newProgram);
    setNewProgram(EMPTY_PROGRAM);
  }

  function handleChange(event) {
    let { name, value } = event.target;
        setNewProgram(data => ({
            ...data, 
            [name]: value
        }));
    }

  
return (
  <div className="AddProgramForm">
  <form onSubmit={handleSubmit}>
    
    <label>
        Program Title
        <input
            type="text"
            name="programTitle"
            value={newProgram.programTitle}
            onChange={handleChange}
        />
    </label>  
    <label>
            Today's Date
            <input
                type="date"
                name="creationDate"
                value={newProgram.creationDate}
                onChange={handleChange}
            />
        </label>
    <div className="buttondiv">
       <button 
        className="formbutton"
        type="submit">ADD A PROGRAM</button>
    </div>
  </form>
  </div>
);

} 

  export default AddProgramForm;