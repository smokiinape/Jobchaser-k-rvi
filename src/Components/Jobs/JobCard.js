/*
Denna komponent representerar en individuell jobbannons
den kan displaya relevanta job information som titel, company, location och en kort beskrivining.
Vi kan designa det på sett sätt så det är enkelt för Users att scanna igenom flera jobbannonser

*/

import React from "react";
import { useDispatch } from 'react-redux';
import { selectJob } from '.../store/jobSlice';

export default function JobCard(props) {
    const dispatch = useDispatch(); /* Hookar jobcard komponenten för att få en referens till dispatch funktionen*/

    const handleClick = () => {
        dispatch(selecJob(props));

    };

    return (
        <div className="JobCard--job" onClick={handleClick}>
            <div className="JobCard--job--header">
                <img src={props.imageUrl} alt="Logo"/>
                <h2>{props.title}</h2>
            </div>
            <div className="JobCard--job--main">
                <p>{props.description.substring(0, 200)}</p>
                <a href={props.linkUrl}>Gå till annonsen</a>
            </div>
        </div>
    )
};

/* 
We import React and the useDispatch hook from react-redux, as well as the selectJob action creator from our jobSlice.js file.

We define a function component called JobCard that takes in a props object.

We call the useDispatch hook to get a reference to the dispatch function, which we will use later to dispatch an action when the user clicks on the JobCard.

We define a handleClick function that will be called when the user clicks on the JobCard. Inside the handleClick function, we dispatch the selectJob action creator with the props as the payload.

We return a JSX element that represents the JobCard component. The JSX element has a div container with the className "JobCard--job". We also pass in an onClick event handler that calls the handleClick function when the user clicks on the JobCard.

Inside the JobCard div, we have two more div elements: one with the className "JobCard--job--header" and one with the className "JobCard--job--main".

In the JobCard--job--header div, we have an image tag that displays the company logo and an h2 tag that displays the job title.

In the JobCard--job--main div, we have a p tag that displays the job description and an anchor tag that links to the job posting.

Finally, we export the JobCard component as the default export of the module.
*/