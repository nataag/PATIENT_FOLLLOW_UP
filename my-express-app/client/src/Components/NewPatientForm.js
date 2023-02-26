import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import './NewPatientForm.css';
import { link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EMPTY_FORM = {
    firstName: '',
    lastName: '',
    birthDate: '',
    email: ''
};

function NewPatientForm({patients, addPatient}) {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        addPatient(formData);
        console.log(formData);
        setFormData(EMPTY_FORM);
        navigate(`/patients/${patients[patients.length-1].id}`);
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

 
    return (
        <div class="container-fluid mx-auto">
    <div class="row d-flex justify-content-center">
    <div class="col-xl-5 col-lg-8 col-md-9 col-11">

  <div className="card">

    <form className="form-card" onSubmit={handleSubmit}>
                
        <div class="row justify-content-between text-left">
            <h2>Create a New Patient File</h2>
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">First Name</label>
                <input type="text" id="ans" name="firstName" 
                value={formData.firstName}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">Last Name</label>
                <input type="text" id="ans" name="lastName" 
                value={formData.lastName}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">Birth Date</label>
                <input type="text" id="ans" name="birthDate" 
                value={formData.birthDate}
                onChange={handleChange}/>     
            </div>
        </div>

        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">Email</label>
                <input type="text" id="ans" name="email" 
                value={formData.email}
                onChange={handleChange}/>     
            </div>
        </div>

        <div className="row justify-content-center text-center mb-4">
            <div className="form-group " id="formbutton"> 
            <button type="submit" className="btn-block btn-primary col-sm-6">ADD PATIENT</button> 
            </div>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>

    );

} 

export default NewPatientForm;