import React, { useState } from "react";
import './SearchPatient.css';
import { Link } from 'react-router-dom';

function SearchPatient(props) {
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
      <div className="container-md">
      <form onSubmit={searchPatient}>
      <label className="row">
            
            <input
                className="form-control form-control-sm"
                type="text"
                name="search"
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
        </label>

       
        <div className="buttondiv">
           <button className="formbutton "type="submit" >SEARCH A PATIENT</button>
        </div>
      </form>

      <div>
        
      </div>
      </div>
    );

} 

export default SearchPatient;