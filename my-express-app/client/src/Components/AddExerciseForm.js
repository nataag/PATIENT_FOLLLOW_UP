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
    <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
    <div class="col-xl-7 col-lg-8 col-md-9 col-11">

  <div className="card">

    <form className="form-card" onSubmit={handleSubmit}>
        <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex"> 
                  <label className="form-control-label px-1">Name the exercise<span className="text-danger"> *</span></label>
                  <input type="text" id="fname" name="exerciseName"
                  placeholder="Enter your first name"
                  value={newExercise.exerciseName}
                  onChange={handleChange}/> 
            </div>

            <div className="form-group col-sm-6 flex-column d-flex"> 
            <label className="form-control-label px-1">Video Url</label>
            <input type="url" id="lname" name="video" placeholder="Enter your last name"
             value={newExercise.video}
             onChange={handleChange}/>
            </div>
        </div>

        <div className="row justify-content-between text-left">
            <div className="form-group col-sm-6 flex-column d-flex"> 
            <label className="form-control-label px-1">Series<span className="text-danger"> *</span></label>
            <input type="number" id="email" name="series"
            value={newExercise.series}
            onChange={handleChange}/>
            </div>
            
            <div className="form-group col-sm-6 flex-column d-flex">
                <label className="form-control-label px-1">Repetitions<span className="text-danger"> *</span></label>
                <input type="number" id="mob" name="repetitions"
                value={newExercise.repetitions}
                onChange={handleChange}/>
            </div>
        </div>
        
        <div class="row justify-content-between text-left">
            <div class="form-group col-12 flex-column d-flex">
                <label className="form-control-label px-1">Notes</label>
                <textarea type="text" id="ans" name="notes" 
                placeholder="Add more instructions here..."
                value={newExercise.notes}
                onChange={handleChange}/>     
            </div>
        </div>
        <div className="row justify-content-center text-center mb-4">
            <div className="form-group " id="formbutton"> 
            <button type="submit" className="btn-block btn-primary col-sm-6">Add a New Exercise</button> 
            </div>
        </div>
    </form>
    </div>
    </div>
    </div>
    </div>
);

} 

  export default AddExerciseForm;