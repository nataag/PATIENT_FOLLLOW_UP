import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import './PatientData.css';

function PatientData({patients}) {
  
  const { patientId } = useParams();
  const patient = patients.find((patient) => +patient.id === +patientId);
 
  return (
    <div className="PatientFile">
     
           {/* <h2>{patient?.firstName}'s Homework Page</h2> */}
           <h3>First Name: {patient?.firstName}</h3>
           <h3>Last Name: {patient?.lastName}</h3>
           <h3>Birth Date: {patient?.birthDate}</h3>
           <h3>Email Address: {patient?.email}</h3>
        
    </div>
  );
}

export default PatientData;