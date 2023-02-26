import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import PatientFile from "./Components/PatientFile";
import HomeView from "./Components/HomeView";
import ExercisesView from "./Components/ExercisesView";
import Header from "./Components/Header";
import UrlToShare from "./Components/UrlToShare";
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




  return (
    <div className="bg-info">
      
      <Header />
      <Routes className="center">
        <Route path="/" element= {<HomeView patients={patients}/>}  />
        <Route path="/patients/:patientId" element={<PatientFile patients={patients}/>} />
        {/* <Route path="/programs/:patientId" element={<ShowPrograms />}  /> */}
        <Route path="/programs/program/:programId" element={<ExercisesView />}  />
        <Route path="/exercises/:programId" element={<UrlToShare />} />
      </Routes>
      
    </div>
  );
}

export default App;