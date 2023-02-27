import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import './PatientData.css';

function PatientData({patients}) {
  
  
  


// const data =
//   {
//     firstName: `${patient.firstName}`,
//     lastName: `${patient.lastName}`,
//     birthDate: `${patient.birthDate}`,
//     email: `${patient.email}`
//   }

    const { patientId } = useParams();
    const patient = patients.find((patient) => +patient.id === +patientId);
  
  // const [newData, setNewData] = useState();

  // const onChangeInput = (e, id) => {
  //   const { name, value } = e.target

    
  //   const editData = newData.map((item) =>
  //     item.id === id && name ? { ...item, [name]: value } : item
  //   )
    

  //   setNewData(editData)
    
    
  // }
 
  return (
    <div>
    <h1>Patient's File </h1>
    <div className="card text-info">
           {/* <h2>{patient?.firstName}'s Homework Page</h2> */}
           <h5 className="text-info">First Name: {patient?.firstName}</h5>
           <h5 className="text-info">Last Name: {patient?.lastName}</h5>
           <h5 className="text-info">Birth Date: {patient?.birthDate}</h5>
           <h5 className="text-info mb-4">Email Address: {patient?.email}</h5>
        </div>
    </div>

    
    // <div className="container">
    //   <h1 className="title">Editable Table</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Birth Date</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {patient.map(({ firstName, lastName, birthDate, email }) => (
    //         <tr key={id}>
    //           <td>
    //             <input
    //               name="firstName"
    //               value={firstName}
    //               type="text"
    //               onChange={(e) => onChangeInput(e, id)}
    //               placeholder="Type Name"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               name="lastName"
    //               type="text"
    //               value={lastName}
    //               onChange={(e) => onChangeInput(e, id)}
    //               placeholder="Type Position"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               name="date"
    //               type="birthDate"
    //               value={birthDate}
    //               onChange={(e) => onChangeInput(e, id)}
    //               placeholder="Type Position"
    //             />
    //           </td>
    //           <td>
    //             <input
    //               name="email"
    //               value={email}
    //               type="text"
    //               onChange={(e) => onChangeInput(e, id)}
    //               placeholder="Type Email"
    //             />
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default PatientData;