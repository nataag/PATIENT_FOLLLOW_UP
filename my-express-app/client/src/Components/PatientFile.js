import { useEffect } from "react";
import React, { useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './PatientFile.css';
import AddProgramForm from "./AddProgramForm";
import PatientData from "./PatientData";
import ShowPrograms from "./ShowPrograms";
import ExercisesView from "./ExercisesView";

function PatientFile({patients}) {
  const [programs, setPrograms] = useState([]);
  const { patientId } = useParams();
  console.log(useParams());

  useEffect(() => {
    getPrograms();
  }, []);

// Get All programs from that patient
async function getPrograms() {

  try {
    let response = await fetch(`/programs/${patientId}`);
    if (response.ok) {
        let programs = await response.json();
        setPrograms(programs);
    } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
    }
} catch (err) {
    console.log(`Server error: ${err.message}`);
}
}

//POST a new program
async function addProgram (program) {
  console.log(program);
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(program)
  };
  try {
    let response = await fetch(`/programs/${patientId}`, options);
    if (response.ok) {
      let programs = await response.json();
      setPrograms(programs);
    } else {
      console.log(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log(`Server error: ${err.message}`);
  }
}
 
  return (
    <div className="PatientFile">
     <PatientData patients={patients}/>

  
        <ShowPrograms programs={programs} />
        <AddProgramForm addProgramCb={addProgram} programs={programs}/>
    
        {/* <h3>Programs: {program?.programTitle}</h3> */}
    </div>
  );
}

export default PatientFile;