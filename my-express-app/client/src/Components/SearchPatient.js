import React, { useState } from "react";
import './SearchPatient.css';
import { Link } from 'react-router-dom';

function SearchPatient() {
    const [search, setSearch] = useState("");
    const [patients, setPatients] = useState([])


    function handleChange(event) {
        setSearch(event.target.value)
    }

    async function searchPatient(e){

        e.preventDefault()
        const response = await fetch("/patients/search?search="+search)
        const data = await response.json()
        setPatients(data)

    }

 
    return (
    
      <div className="card">
    
        <form className="form-card mt-3" onSubmit={searchPatient}>
                    
             <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                    <h5 className="mb-2">Find a Patient File</h5>
                    <label className="form-control-label px-1"></label>
                    <input type="text" id="ans" name="search" placeholder="Search by Last Name"
                    value={search}
                    onChange={handleChange}
                />
                <div className="dropDown">{
                patients.map(patient => 
                <div>
                    <Link classsName="searchItem" 
                      to={`/patients/${patient.id}`}>{patient.firstName}
                    </Link>
                    
                </div>)
                }
                </div>    
                </div>
            </div>
    
            <div className="row justify-content-center text-center mb-4">
                <div className="form-group " id="formbutton"> 
                <button type="submit" className="btn-block btn-primary col-sm-6">SEARCH PATIENT</button> 
                </div>
            </div>
        </form>
        </div>
          

    );

} 

export default SearchPatient;