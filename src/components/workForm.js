import React from 'react';
import { getWorks } from "../services/worksServices";

const WorkForm = ({match}) => {
  return (
  <div>
   <h1> Movie form {match.params.id} </h1>

   </div>
 );
};

export default WorkForm;
