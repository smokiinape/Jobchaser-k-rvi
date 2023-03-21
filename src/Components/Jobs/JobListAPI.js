// Den här filen ska ladda in  en lista jobb fetchad från en API eller en databas. 
// Det kan vara en reusable component  som tar en array av jobb som en prop och renders varje jobb som en JobCard component
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
//Importerar nödvändinga dependencies och komponenter



const JobList = () => {
    const url = "https://jobsearch.api.jobtechdev.se/search?q=";
/* Skapade joblist functional komponent*/

    const [jobs, setJobs] = useState([]);
  /* deklarerar jobs state variabel med useState hooken */
    useEffect(() => {
      fetchJobs();
    }, []);
    /* Använder useEffect hooken för att fetcha job listings */
  
    const fetchJobs = async () => {
      try {
        // Replace this URL with the API URL for Arbetsförmedlingen
        const response = await fetch('https://api.example.com/joblistings');
        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };
    /* Definerar 'fetchJobs' funktionen för att fetcha jobannonser från API och uppdatera 'jobs' variabeln */
  
    return (
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
    /* render fetched job listing med JobCard komponenten*/
  };
  

  export default JobList

  //Kom ihåg att byta ut API url