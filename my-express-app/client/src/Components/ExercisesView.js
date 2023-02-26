import { useEffect } from "react";
import React, { useState } from "react";
import './ExercisesView.css';
import { useParams, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddExerciseForm from "./AddExerciseForm";
import ExercisesList from "./ExercisesList";
import ShareForm from "./ShareForm";

function ExercisesView(props) {

    const [exercises, setExercises] = useState([]);
    const { programId } = useParams();
  
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
    
  // PUT: Modify exercise inputs
  async function modifyEx(id) {
    // Find exercise in state and increase age
    let exercise = exercises.find(e => e.id === id);

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exercise)
    };

    try {
        let response = await fetch(`/exercises/ex/${id}`, options);
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

// DELETE an exercise
async function deleteEx(id) {
  // Define fetch() options
  let options = {
      method: 'DELETE'
  };

  try {
      let response = await fetch(`/exercises/ex/${id}`, options);
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
          {/* <h3>Programs: {key={programs.id} {programs.programTitle}}</h3> */}
          {/* <Routes>
          <Route path="/exercises/:programId" element={<ExercisesList exercises={exercises} deleteEx={deleteEx} modifyE x={modifyEx}/>}  />
          
          </Routes>  */}
          
          <ExercisesList exercises={exercises} deleteEx={deleteEx} modifyEx={modifyEx} />
          <AddExerciseForm addExerciseCb={addExercise} />
          <ShareForm exercises={exercises}/>
        </div>
    );
}

export default ExercisesView;