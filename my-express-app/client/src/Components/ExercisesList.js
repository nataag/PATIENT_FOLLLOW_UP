import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import './ExercisesList.css';

function ExercisesList(props) {
  
  // const { id } = useParams();
  // const program = programs.find((program) => +program.id === +id);
  
  const [data, setData] = useState();
  
  function handleSubmit(event) {
    event.preventDefault();
    props.modifyEx(data);
    setData('');
  }
  function handleChange(event) {
    let { name, value } = event.target;
        setData(data => ({
            ...data, 
            [name]: value
        }));
    }
       

  return (
    <div className="PatientFile">
     <h1>Exercises</h1>
     {/* <h3>Program: {programs.map(program => program.programTitle)}</h3> */}
     {
                props.exercises.map(ex => (
                    <div key={ex.id}>
                        <div>
                            <button onClick={(e) => props.deleteEx(ex.id)} title="delete" type="button">x</button>
                            {' '}
                            Exercise: {ex.exerciseName}
                        </div>
                        <div>
                            Video: <Link to={ex.video}>{ex.video}</Link>
                            {' '}
                            
                            <form >
                                <label>
                                    MODIFY THIS Exercise
                                    <input
                                    type="text"
                                    name="exerciseName"
                                    value={ex.exerciseName}
                                    onChange={handleChange}
                                    />
                                </label>
                                <button onClick={(e) => props.modifyEx(ex.id)} title="modify" type="button">MODIFY</button>
                            </form>
                            {/* <button onClick={(e) => props.modifyEx(ex.id)} title="modify" type="button">
                                <input type="text">...</input>
                                MODIFY
                            </button> */}
                        </div>
                        <div>
                            Repetitions: {ex.repetitions}
                            {' '}
                            {/* <button onClick={(e) => props.addYearCb(d.id)} title="add year" type="button">+</button> */}
                        </div>
                    </div>
                ))
            }


           
    </div>
  );
}

export default ExercisesList;