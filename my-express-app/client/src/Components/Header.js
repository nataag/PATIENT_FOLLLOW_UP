import React from "react";
import './Header.css';

function Header() {
  
//   const { patientId } = useParams();
//   const program = programs.map((program) => +program.patientId === +patientId);


 
  return (
    <div class="container-fluid px-1 py-5 mx-auto" id="headerCard">
    <div class="row d-flex justify-content-center">
    <div class="col-xl-6 col-lg-8 col-md-9 col-11">
    <div className="row justify-content-center text-left pt-5">
        <div className="col-sm-6">
      <h1>#properRecovery</h1>
      <h2>Create Homework for Patients Instantly</h2> 
        </div>   
    </div>
    </div>
    </div>
    </div>
    


    
  );
}

export default Header;