import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../../store/jobSlice';
import JobCard from './JobCard';

const JobListAPI = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://job-board-search-fastapply.p.rapidapi.com/us/snagajob/fetchjobs', {
          keyword: 'analyst',
          location: 'boston massachusetts',
          radius: 15,
          page_number: 1
        }, {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'a9ead00f06mshf124b808aca4f67p17cf5fjsn68d18abcaa31',
            'X-RapidAPI-Host': 'job-board-search-fastapply.p.rapidapi.com'
          }
        });
        dispatch(setJobs(response.data.jobs));
        console.log('Response data:', response.data);
setJobs(response.data.jobs);
console.log('Jobs:', jobs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.job_id} job={job} />
      ))}
    </div>
  );
};

export default JobListAPI;



/*
We import React and the necessary hooks from react-redux and the fetchJobs action creator from the jobSlice.js file.

In our functional component, we use the useDispatch and useSelector hooks from react-redux to get a reference to the dispatch function and the jobs state from the Redux store.

We use the useEffect hook to fetch the job listings data from an API endpoint when the component mounts. 
We call the fetchJobs action creator and pass the dispatch function as an argument to update the state in the Redux store.

In the return statement, we use the jobs array to map over each job and pass it as a prop to the JobCard component. 
The JobCard component is rendered for each job in the array.

Finally, we export the JobList component as the default export of the module.


*/