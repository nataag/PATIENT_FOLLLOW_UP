import React, { useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import './ShowPrograms.css';

function ShowPrograms(props) {
  
// const { programId } = useParams();
// const program = props.programs.map((program) => +program.id === +patientId);


 
  return (
    <div className="ShowPrograms">
     
           
            
           {/* <div><Link 
                  to={`/exercises/${program.id}`}>{program.programTitle}
          </Link> */}

          <div className="card">
          <h4>Program Files </h4>
          {
                props.programs.map(p => (
                    <div key={p.id}>
                        <div>
                        <button id="deleteButton" onClick={(e) => props.deleteProgramCb(p.id)} title="delete" type="button"> DELETE </button>
                        {`          `}<Link className="text-info h5 text-decoration-none"
                  to={`/programs/program/${p.id}`}>{p.programTitle}
                        </Link>
                        
                        </div>
                    </div>
                ))
                }
    </div>
    </div>

    
  );
}

export default ShowPrograms;