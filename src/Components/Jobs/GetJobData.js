import React from "react";
import { useState, useEffect } from 'react'


export default function GetJobData() {
    const url = `https://jobsearch.api.jobtechdev.se/search?q=bank&offset=0&limit=100`
    const [search, setSearch] = useState('');
    const [submitSearch, setSubmitSearch] = useState(search);
    const [update, setUpdate] = useState("");

    let jobs;


    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchBtn = () => {
        setSubmitSearch(search);
    };


    useEffect(() => {
        fetch(`https://jobsearch.api.jobtechdev.se/search?q=${submitSearch}&offset=0&limit=100`)
            .then(response => response.json())
            .then(data => {
                if (submitSearch != "") {
                    console.log(data)
                    jobs = data.hits.map(element => {
                        return (
                            <div className="job-box" key={data.hits.indexOf(element)}>

                                <img src={element.logo_url ? element.logo_url : "public/images/no-image.jpg"} alt="LOGO" />
                                <h4>{element.headline}</h4>
                                <p>{element.description.text.substring(0, 200)}...</p>
                                <a href={element.webpage_url} target="_blank">Se annons</a>
                            </div>
                        )
                    })
                }
                setUpdate(jobs)
            })
    }, [submitSearch])


    return (
        <>
            <main>
                <h2>SEARCH JOB</h2>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleSearchBtn}
                >
                    Search
                </button>
                <div>
                    {update}
                </div>
            </main>
        </>
    )
};