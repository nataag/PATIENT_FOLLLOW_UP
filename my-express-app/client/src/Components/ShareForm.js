import React, { useState } from "react";
import './ShareForm.css';
import { Link, useParams } from 'react-router-dom';

function ShareForm(props) {
    const [data, setData] = useState("");
    // const [patients, setPatients] = useState([])


    // function handleChange(event) {
    //     setSearch(event.target.value)
    // }

    // async function searchPatient(e){

    //     e.preventDefault()
    //     const response = await fetch("/patients/search?search="+search)
    //     const data = await response.json()
    //     setPatients(data)

    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     props.addProgramCb(newProgram);
    //     setNewProgram(EMPTY_PROGRAM);
    //   }
    
      function handleChange(event) {
        let { name, value } = event.target;
            setData(data => ({
                ...data, 
                [name]: value
            }));
        }

   const {programId} = useParams();
    return (
        <div class="container-fluid mx-auto">
        <div class="row d-flex justify-content-center">
            
        <div>
          
                <div>
                    <Link classsName="searchItem" 
                      to={`/exercises/${programId}`}>SEND
                    </Link>
                    
                </div>
                
                </div>    

        {/* <div class="col-xl-5 col-lg-8 col-md-9 col-11">
    
      <div className="card">
    
        <form className="form-card" onSubmit={searchPatient}>
                    
             <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                    <label className="form-control-label px-1">Find a Patient File</label>
                    <input type="text" id="ans" name="search" 
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
                <button type="submit" className="btn-block btn-primary col-sm-6">SEARCH A PATIENT</button> 
                </div>
            </div>
        </form>
        </div>
        </div> */}
        </div>
        </div>
    
    
    

    );

} 

export default ShareForm;