import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import PatientFile from "./Components/PatientFile";
import HomeView from "./Components/HomeView";
import ExercisesView from "./Components/ExercisesView";
import UrlToShare from "./Components/UrlToShare";
import ExercisesList from "./Components/ExercisesList";
// import Logo from "./LOGO.png";

function App() {
  
  const [patients, setPatients] = useState([]);
  //when the page loads, fetch the data from the server
  useEffect(() => {
    // fetch("/patients").then((response) => response.json())
    // .then((data) => setPatients(data))
    getPatients();
  }, []);

// Get All patients in a multi.. input
async function getPatients() {
  try {
    let response = await fetch('/patients');
    if (response.ok) {
        let patients = await response.json();
        setPatients(patients);
    } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
    }
} catch (err) {
    console.log(`Server error: ${err.message}`);
}
}

//Delete a patient
// async function deletePatient(id) {
//   // Define fetch() options
//   let options = {
//       method: 'DELETE'
//   };

//   try {
//       let response = await fetch(`/patients/${id}`, options);
//       if (response.ok) {
//           let patients = await response.json();
//           setPatients(patients);
//       } else {
//           console.log(`Server error: ${response.status} ${response.statusText}`);
//       }
//   } catch (err) {
//       console.log(`Server error: ${err.message}`);
//   }
// }

//PUT Modify patient's data
// async function modifyPatient(id) {
//   let patient = patients.find(p => p.id === id);

//   let options = {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(patient)
//   };

//   try {
//       let response = await fetch(`/patients/${id}`, options);
//       if (response.ok) {
//           let patients= await response.json();
//           setPatients(patients);
//       } else {
//           console.log(`Server error: ${response.status} ${response.statusText}`);
//       }
//   } catch (err) {
//       console.log(`Server error: ${err.message}`);
//   }
// }

  return (
    <div className="bg-info">
    
  
      <Routes className="center">
        <Route path="/" element= {<HomeView patients={patients}/>}  />
        <Route path="/patients/:patientId" element={<PatientFile patients={patients}/>} />
        <Route path="/programs/program/:programId" element={<ExercisesView />} />
        <Route path="/exercises/:programId" element={<UrlToShare />} />
      </Routes>
      
    
    </div>
  );
}

export default App;