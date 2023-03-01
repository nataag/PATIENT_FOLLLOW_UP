import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './ExercisesList.css';
import UrlToShare from "./UrlToShare";

function ExercisesList(props) {
  
  // const { id } = useParams();
  // const program = programs.find((program) => +program.id === +id);
  

  //This code is to display eitable input fields:
  // const [data, setData] = useState();
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   props.modifyEx(data);
  //   setData('');
  // }
  // function handleChange(event) {
  //   let { name, value } = event.target;
  //       setData(data => ({
  //           ...data, 
  //           [name]: value
  //       }));
  //   }
       

  return (
    <div className="container px-1 py-5 mx-auto">
     <h1 className="text-info pt-3">Program File </h1>
     {/* <h3>Program: {props.programs.map(program => program.programTitle)}</h3> */}
     {
                props.exercises.map(ex => (
                    <div className="row card bg-light" key={ex.id}>
                        
                        <h5>{ex.exerciseName}</h5>
                       
                        <h6>Video: <Link to={ex.video}>{ex.video}</Link></h6>
                        <h6>Series: {ex.series}</h6>
                        <h6>Repetitions: {ex.repetitions} </h6>
                        <h6>Notes: {ex.notes} </h6>
                      
                            {/* <button onClick={(e) => props.modifyEx(ex.id)} title="modify" type="button">
                                <input type="text">...</input>
                                MODIFY
                            </button> */}

                        <div id="divButton" className="col-6 content-right">
                        <button className="col-6" onClick={(e) => props.deleteEx(ex.id)} title="delete" type="button">DELETE</button>
                        </div>
                    </div>
                ))
            }


           
    </div>
  );
}

export default ExercisesList;