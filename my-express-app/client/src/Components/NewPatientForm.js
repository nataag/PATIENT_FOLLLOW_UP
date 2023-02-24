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

function NewPatientForm(props) {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        props.addPatientCb(formData);
        console.log(formData);
        setFormData(EMPTY_FORM);
        navigate(`/patients/${props.patients[props.patients.length-1].id}`);
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

 
    return (
      <div className="container-sm row d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="col-6 bg-light m-5">
        <label className="row">
            First Name
            <input
                className="form-control form-control-sm"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
        </label>

        <label className="row">
            Last Name
            <input
                className="form-control form-control-sm"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
        </label>

        <label className="row">
            Birth Date
            <input
                className="form-control form-control-sm"
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
            />
        </label>

        <label className="row">
            Email
            <input
                className="form-control form-control-sm"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </label>  
        <div className="buttondiv">
           <button 
            className="btn btn-primary"
            type="submit">ADD A PATIENT
           </button>
        </div>
      </form>
      </div>
    );

} 

export default NewPatientForm;