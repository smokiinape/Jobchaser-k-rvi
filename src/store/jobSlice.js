//Denna fil kommer innehålla slicen för job-relaterade states och actions

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs:[],
    selectedJob: null,
};

const jobSlice = createSlice ({
    name: 'job',
    initialState: {
        jobs: [],
        selectedJob: null
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        selectJob: (state, action) => {
            state.selectedJob = action.payload;
        },
        //Lägg till andra reducers efter behov
    },
});

export const fetchJobs = () => async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/joblistings');
      const data = await response.json();
      dispatch(setJobs(data.jobs));
    } catch (error) {
      console.error('Error fetching job data:', error);
    }
  };
  

export const { setJobs, selectJob } = jobSlice.actions;
export default jobSlice.reducer;



/*
In this step, we create a job slice that contains the job-related state and actions. 
We import createSlice from @reduxjs/toolkit. We define the initial state with jobs and selectedJob properties. 
Then we create the job slice by calling createSlice with an object that includes the name, initialState, and reducers.

The reducers property is an object containing reducer functions that can update the state. 
In our example, we have two reducers: setJobs and selectJob. 
These reducers are automatically converted into actions that can be dispatched in the components.

We export the actions by destructuring them from jobSlice.actions, 
and we also export the reducer function as the default export.
*/