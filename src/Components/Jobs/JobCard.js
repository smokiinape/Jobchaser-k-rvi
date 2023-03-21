/*
Denna komponent representerar en individuell jobbannons
den kan displaya relevanta job information som titel, company, location och en kort beskrivining.
Vi kan designa det på sett sätt så det är enkelt för Users att scanna igenom flera jobbannonser

*/

import React from "react";

export default function JobCard(props) {

    return (
        <div className="JobCard--job">
            <div className="JobCard--job--header">
                <img src={props.imageUrl} alt="Logo"/>
                <h2>{props.title}</h2>
            </div>
            <div className="JobCard--job--main">
                <p>{props.descreption.substring(0, 200)}</p>
                <a href={props.linkUrl}>Gå till annonsen</a>
            </div>
        </div>
    )
};