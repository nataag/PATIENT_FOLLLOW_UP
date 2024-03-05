// import React, { useState, useEffect, useRef } from "react";
// // import { useParams } from "react-router-dom";
// import './NewPatientForm.css';
// import { link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const EMPTY_FORM = {
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     email: ''
// };

// function NewPatientForm({patients, addPatient}) {
//     const [formData, setFormData] = useState(EMPTY_FORM);
//     const navigate = useNavigate();

//     function handleChange(event) {
//         let { name, value } = event.target;
//         setFormData(data => ({
//             ...data,
//             [name]: value
//         }));
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         addPatient(formData);
//         console.log(formData);
//         setFormData(EMPTY_FORM);
//         navigate(`/patients/${patients[patients.length-1].id}`);
        
//     }

import React, { useState } from "react";
import './NewPatientForm.css';
import { useNavigate } from "react-router-dom";

const EMPTY_FORM = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: ''
};

function NewPatientForm({ addPatient }) {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // Add the new patient and get the response
            const newPatientResponse = await addPatient(formData);

            // Ensure the response is valid and contains an 'id' property
            if (newPatientResponse && newPatientResponse.id) {
                // Navigate to the last patient created
                navigate(`/patients/${newPatientResponse.id}`);
            } else {
                console.error("Invalid response from server:", newPatientResponse);
            }
        } catch (error) {
            console.error("Error while adding a new patient:", error);
        }
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }



    
    return (

  <div className="card">

    <form className="form-card mt-3" onSubmit={handleSubmit}>
                
        <div class="row justify-content-between text-left">
            <h5 className ="mb-2">Create a New Patient File</h5>
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1"></label>
                <input type="text" id="ans" name="firstName" placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1"></label>
                <input type="text" id="ans" name="lastName" placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1"></label>
                <input type="date" id="ans" name="birthDate" placeholder="Birth Date YYYY-MM-DD"
                value={formData.birthDate}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1"></label>
                <input type="text" id="ans" name="email" placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}/>     
            </div>
        </div>

        <div className="row justify-content-center text-center mb-4">
            <div className="form-group " id="formbutton"> 
            <button type="submit" id="buttonForm" className="btn-block btn-primary col-sm-6">ADD PATIENT</button> 
            </div>
        </div>
    </form>
    </div>
  

    );

} 

export default NewPatientForm;