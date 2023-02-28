import { useEffect } from "react";
import React, { useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './PatientFile.css';
import AddProgramForm from "./AddProgramForm";
import PatientData from "./PatientData";
import ShowPrograms from "./ShowPrograms";

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

//Delete a program
async function deleteProgram(id) {
  // Define fetch() options
  let options = {
      method: 'DELETE'
  };

  try {
      let response = await fetch(`/programs/${patientId}/${id}`, options);
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
      <div className="container-fluid px-1 py-5 mx-auto" id="headerCard">
    <div className="row d-flex justify-content-center">
    <div className="col-xl-6 col-lg-8 col-md-9 col-11">
    <div className="row justify-content-center text-left pt-3"></div>
     <PatientData patients={patients}/>

  
        <ShowPrograms programs={programs} deleteProgramCb={deleteProgram}/>
        <AddProgramForm addProgramCb={addProgram} programs={programs}/>
    
        {/* <h3>Programs: {program?.programTitle}</h3> */}
    </div>
    </div>
        </div>
    </div>
  );
}

export default PatientFile;