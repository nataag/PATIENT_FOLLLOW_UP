import React, { useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import './ShowPrograms.css';

function ShowPrograms(props) {
  
// const { programId } = useParams();
// const program = props.programs.map((program) => +program.id === +patientId);


 
  return (
    <div className="ShowPrograms">
     
           <h3> Programs:
            
           {/* <div><Link 
                  to={`/exercises/${program.id}`}>{program.programTitle}
          </Link> */}


          {
                props.programs.map(p => (
                    <tr key={p.patientId}>
                        <td>
                        <Link 
                  to={`/programs/program/${p.id}`}>{p.programTitle}
          </Link>
                        </td>
                    </tr>
                ))
            }


      
           </h3>
    
    </div>

    
  );
}

export default ShowPrograms;