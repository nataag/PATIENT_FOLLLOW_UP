import { useEffect } from "react";
import React, { useState } from "react";
import './ExercisesView.css';
import { useParams, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddExerciseForm from "./AddExerciseForm";
import ExercisesList from "./ExercisesList";

function ExercisesView() {

    const [exercises, setExercises] = useState([]);
    const { programId } = useParams();
    console.log(useParams());
  
    useEffect(() => {
      getExercises();
    }, []);
  
  // Get All exercises from a program
  async function getExercises() {
  
    try {
      let response = await fetch(`/exercises/${programId}`);
      if (response.ok) {
          let exercises = await response.json();
          setExercises(exercises);
      } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
      }
  } catch (err) {
      console.log(`Server error: ${err.message}`);
  }
  }
  
  //POST a new exercise to the program
  async function addExercise (exercise) {
    console.log(exercise);
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(exercise)
    };
    try {
      let response = await fetch(`/exercises/${programId}`, options);
      if (response.ok) {
        let exercises = await response.json();
        setExercises(exercises);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server error: ${err.message}`);
    }
  }
    
    return (
        
        <div className="ExercisesView">
            <ExercisesList exercises={exercises} />
            <AddExerciseForm addExerciseCb={addExercise} />
        </div>
    );
}

export default ExercisesView;