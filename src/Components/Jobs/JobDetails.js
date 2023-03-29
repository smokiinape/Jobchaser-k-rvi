/*
Denna komponent kan displaya detaljerad information om en specifik jobbannons när en användare klickar på JobCard.
Det kan inkludera en längre arbetsbeskrivning, krav, lön och ansökningsinstruktioner

*/

import React from 'react';
import { useSelector } from 'react-redux';
import store from "./store/store"

const JobDetails = () => {
  const selectedJob = useSelector((state) => state.job.selectedJob);

  if (!selectedJob) {
    return <div>Loading...</div>;
  }

  const { title, description, requirements, salary, applicationDetails } = selectedJob;

  return (
    <div className="job-details">
      <h2>{title}</h2>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Requirements</h3>
      <ul>
        {requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      <h3>Salary</h3>
      <p>{salary}</p>
      <h3>How to apply</h3>
      <p>{applicationDetails}</p>
    </div>
  );
};

console.log(store.getState());


/* 
Komponenten ovanför förväntar sig en 'job' prop med följande struktur:
{
  title: string,
  description: string,
  requirements: string[],
  salary: string,
  applicationDetails: string
}

Vi kan självklart ändra strukturen men då måste vi skriva om lite här ofc


lite mer kommentarer från chatgpt när jag bad om råd:

Now, let's say you want to display the JobDetails component when a user clicks on a JobCard. 
You could use React Router to handle the navigation and pass the selected job data as a prop to the JobDetails component. 
In the JobCard component, you can add a click event handler that navigates to the JobDetails page with the selected job ID as a parameter.


*/

export default JobDetails;
