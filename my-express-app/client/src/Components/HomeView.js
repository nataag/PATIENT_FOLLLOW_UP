import React, { useState } from "react";
import './HomeView.css';
import { Link } from 'react-router-dom';
import NewPatientForm from "./NewPatientForm";
import SearchPatient from "./SearchPatient";

function HomeView(props) {

    

    //Add a new patient (POST)
async function addPatient(patient) {
    // Define fetch() options
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patient)
        
    };
    
    try {
        let response = await fetch('/patients', options);
        if (response.ok) {
            let patients = await response.json();
            props.setPatients(patients);
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
}



    return (
        
        <div className="HomeView">
            <SearchPatient />
            <NewPatientForm addPatientCb={addPatient} patients={props.patients}/>
        </div>
            
    );
}

export default HomeView;