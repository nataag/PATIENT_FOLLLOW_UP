import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ShowPrograms.css';

function ShowPrograms({programs}) {
  
//   const { patientId } = useParams();
//   const program = programs.map((program) => +program.patientId === +patientId);


 
  return (
    <div className="ShowPrograms">
     
           <h3> Programs:
            {programs.map(program => 
           <div><Link 
                  to={`/programs/${program.id}`}>{program.programTitle}
          </Link>
          </div>)
           }
           </h3>
    
    </div>

    
  );
}

export default ShowPrograms;