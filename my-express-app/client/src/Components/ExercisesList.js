import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import './ExercisesList.css';

function ExercisesList({exercises}) {
  
//   const { patientId } = useParams();
//   const patient = patients.find((patient) => +patient.id === +patientId);
 
  return (
    <div className="PatientFile">
     PROGRAM xxxxXXX
     <h3>Exercises: {exercises.map(exercise => exercise.exerciseName)}</h3>


           
    </div>
  );
}

export default ExercisesList;