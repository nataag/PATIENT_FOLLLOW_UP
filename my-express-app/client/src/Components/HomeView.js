import React, { useState } from "react";
import './HomeView.css';
import { Link } from 'react-router-dom';
import NewPatientForm from "./NewPatientForm";
import SearchPatient from "./SearchPatient";
import Header from "./Header";

function HomeView({patients, setPatients}) {

    //POST a new patient
async function addPatient(patient) {
    // Define fetch() options
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patient)
        
    };
    
    try {
        let response = await fetch('/patients/', options);
        if (response.ok) {
            let patients = await response.json();
            setPatients(patients);
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
}

    return (
        
        <div className="HomeView">
            <Header />
            <SearchPatient />
            <NewPatientForm patients={patients} addPatient={addPatient}/>
        </div>
            
    );
}

export default HomeView;