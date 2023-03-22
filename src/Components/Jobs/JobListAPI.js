import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../store/jobSlice';
import JobCard from './JobCard';

const JobListAPI = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
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