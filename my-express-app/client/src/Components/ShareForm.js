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

        // const templateParams = {
        //     name: 'James',
        //     notes: 'Check this out!'
        //   };
          
        //   emailjs.send(default_service, template_t7j1tya, templateParams)
        //     .then(function(response) {
        //        console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //        console.log('FAILED...', error);
        //     });

const {programId} = useParams();
    return (
        <div class="container-fluid mx-auto">
    <div class="row d-flex justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-9 col-11">

  <div className="card bg-info">

    <form className="form-card">
        <div className="row justify-content-between text-left">
            <h4>Share Program</h4>
            <div className="form-group col-sm-6 flex-column d-flex"> 
                  <label className="form-control-label px-1">Patient's Email<span className="text-danger"> *</span></label>
                  <input type="text" name="email" placeholder="Email Address"
               value={data.email}
               onChange={handleChange}/> 
            </div>

            <div className="form-group col-sm-6 flex-column d-flex"> 
            <label className="form-control-label px-1">Program Url</label>
            <input type="url" name="url" 
             value={data.url}
             onChange={handleChange}/>
            </div>
        </div>
        
        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">Message</label>
                <textarea type="text" name="message" 
                placeholder="Add a message to your patient here..."
                value={data.message}
                onChange={handleChange}/>     
            </div>
        </div>
        <div className="row justify-content-center text-center mb-4">
            <div className="form-group"> 
            <button type="submit" id="formbuttonex" className="btn-block col-sm-6">SEND EMAIL</button> 
            </div>
        <div>
        <Link classsName="searchItem" to={`/exercises/${programId}`}>Url To Share</Link>
        </div>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    );

} 

export default ShareForm;