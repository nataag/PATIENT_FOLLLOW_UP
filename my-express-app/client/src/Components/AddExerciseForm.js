import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import './AddExerciseForm.css';

const EMPTY_EXERCISE = {
  exerciseName: '',
  video: '',
  series: 0,
  repetitions: 0,
  notes: ''
};

function AddExerciseForm(props) {

  const [newExercise, setNewExercise] = useState(EMPTY_EXERCISE);  
  
  function handleSubmit(event) {
    event.preventDefault();
    props.addExerciseCb(newExercise);
    setNewExercise(EMPTY_EXERCISE);
  }

  function handleChange(event) {
    let { name, value } = event.target;
        setNewExercise(data => ({
            ...data, 
            [name]: value
        }));
    }
  

  
return (
  <div className="container-sm row d-flex justify-content-center">
  <form onSubmit={handleSubmit} className= "col-6 bg-light">
    
    <label className="col-6">
        Exercise Name
        <input
            type="text"
            className="form-control form-control-sm"
            name="exerciseName"
            value={newExercise.exerciseName}
            onChange={handleChange}
        />
    </label>
    <label className="col-6">
        Video
        <input
            className="form-control form-control-sm"
            type="text"
            name="video"
            value={newExercise.video}
            onChange={handleChange}
        />
    </label>  
    <label className="row">
        Series
        <input
            className="form-control form-control-sm"
            type="number"
            name="series"
            value={newExercise.series}
            onChange={handleChange}
        />
    </label>  
    <label className="row">
        Repetitions
        <input
            className="form-control form-control-sm"
            type="number"
            name="repetitions"
            value={newExercise.repetitions}
            onChange={handleChange}
        />
    </label>
    <label className="row">
        Notes
        <textarea
            className="form-control form-control-sm"
            type="text"
            id="textarea"
            name="notes"
            placeholder="Add more instructions here..."
            value={newExercise.notes}
            onChange={handleChange}
        />
    </label>   
    
    <div>
       <button 
        className="btn btn-primary"
        type="submit">ADD EXERCISE</button>
    </div>
  </form>
  </div>
);

} 

  export default AddExerciseForm;