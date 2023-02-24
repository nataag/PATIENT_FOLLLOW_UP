import React from "react";
import { useParams } from "react-router-dom";

export default function UserView({patients}) {
  const { id } = useParams();

  //   const user = users.find((user) => Number(user.id) === Number(id));
  // shorter syntax for converting to a number
  const patient = patients.find((patient) => +patient.id === +id);

  return (
    <div>
      <h2>{patient?.firstName}'s page</h2>
    </div>
  );
}