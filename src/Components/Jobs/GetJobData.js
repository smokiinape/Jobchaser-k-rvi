import React from "react";
import { useState, useEffect } from 'react'
import SearchBar from '../Reusable/SearchBar';
import './GetJobData.css'
import ErrorMessage from './ErrorMessage';



export default function GetJobData() {
    const [searchData, setSearchData] = useState({
        search: "",
        location: "",
        municipalitieLocation: "",
        tag: "" // Add tag to the initial state
    });

    const [locationData, setLocationData] = useState([]);
    let locationArray = [];

    const [municipalities, setMunicipalities] = useState("");

    const [updateJobs, setUpdateJobs] = useState("")

    const [showJobs, setShowJobs] = useState(false);
    
    const [submitted, setSubmitted] = useState(false);

    // Get location data
    useEffect(() => {
        fetch("https://taxonomy.api.jobtechdev.se/v1/taxonomy/graphql?query=query%20SwedishMunicipalities%20%7B%20%20%20concepts%28id%3A%20%22i46j_HmG_v64%22%29%20%7B%20%20%20%20%20id%20%20%20%20%20preferred_label%20%20%20%20%20regions%3A%20narrower%20%7B%20%20%20%20%20%20%20id%20%20%20%20%20%20%20type%20%20%20%20%20%20%20preferred_label%20%20%20%20%20%20%20municipalities%3A%20narrower%20%7B%20%20%20%20%20%20%20%20%20id%20%20%20%20%20%20%20%20%20type%20%20%20%20%20%20%20%20%20preferred_label%20%20%20%20%20%20%20%7D%20%20%20%20%20%7D%20%20%20%7D%20%7D")
            .then(response => response.json())
            .then(data => {
                let regionData = data.data.concepts[0].regions
                regionData.map(region => {
                    let regions = <option key={regionData.indexOf(region)} value={region.id} >{region.preferred_label}</option>
                    let municipalities = region.municipalities.map(municipalitie => <option key={region.municipalities.indexOf(municipalitie)} value={municipalitie.id} >{municipalitie.preferred_label}</option>)
                    locationArray.push({ region: regions, municipalitie: municipalities })
                })
                setLocationData(locationArray)
            })
    }, []);
    // End location data

    // Get the municipalities after you choose region
    useEffect(() => {
        setMunicipalities(prevMunicipalities => {
            locationData.map(location => {
                if (location.region.props.value === searchData.location) {
                    setMunicipalities(location.municipalitie)
                }
            })
        })
    }, [searchData.location]);
    // End the municipalities after you choose region

    // Search
    function handleSearchData(event) {
        const { name, value, type, checked } = event.target
        setSearchData(prevUserData => {
            return {
                ...prevUserData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    function toggleJobs() {
        setShowJobs(prevShowJobs => !prevShowJobs);
    }
    


    // End search

    // Handle Tags
    function handleTags(event) {
        const tagValue = event.target.value;
        setSearchData(prevSearchData => ({
          ...prevSearchData,
          search: tagValue,
          tag: tagValue // Set the tag value in the state
        }));
      };
      
      useEffect(() => {
        if (submitted) {
        handleSubmit({preventDefault: () => {}});
        }
    }, [searchData, submitted]);
      
    function getTags(job) {
        const tags = [];
        const description = job.description.text.toLowerCase();
    
        if (description.includes("heltid")) {
            tags.push("Heltid");
        }
    
        if (description.includes("deltid")) {
            tags.push("Deltid");
        }
    
        if (description.includes("skola")) {
            tags.push("Skola");
        }
    
        if (description.includes("bank")) {
            tags.push("Bank");
        }
    
        if (description.includes("säkerhet")) {
            tags.push("Säkerhet");
        }
    
        if (description.includes("utomlands")) {
            tags.push("Utomlands");
        }

        if (description.includes("lia")) {
            tags.push("LIA");
        }

        if (description.includes("programmering")) {
            tags.push("Programmering");
        }
    
    
        return tags;
    }
    
    function handleTagClick(tag) {
        setSearchData(prevSearchData => ({
            ...prevSearchData,
            search: tag
        }));
    }
    
    function handleImageError(event) {
        event.target.src = "../images/kiwi.png";
    }
    


    function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    setSubmitted(true);
    setShowJobs(true);
    let url = `https://jobsearch.api.jobtechdev.se/search?q=${searchData.search}&offset=0&limit=100&municipality=${searchData.municipalitieLocation}&region=${searchData.location}`
    if (searchData.location === "" && searchData.municipalitieLocation === "") {
        url = `https://jobsearch.api.jobtechdev.se/search?q=${searchData.search}&offset=0&limit=100&`
    }
    if (searchData.tag) {
        url += `&tags=${searchData.tag}`;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let jobs
            if (data.hits.length < 1) {
                jobs = <h1>Cant find what you searched for</h1>
            } else {
                jobs = data.hits.map(element => {
                    const tags = getTags(element);
                    return (
                        <div className="job-box" key={data.hits.indexOf(element)}>
                            <img src={element.logo_url ? element.logo_url : "../images/kiwi.png"} alt="LOGO" />
                            <h4>{element.headline}</h4>
                            <h5>{element.workplace_address.region}</h5>
                            <h6>{element.workplace_address.municipality}</h6>
                            <p>{element.description.text.substring(0, 200)}...</p>
                            <a href={element.webpage_url} target="_blank" rel="noreferrer">Se annons</a>
                            <div clssName="tags-container">
                                {tags.map(tag => (
                                    <span
                                        className="tag"
                                        key={tag}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                });
            }
            setUpdateJobs(jobs)
            setShowJobs(true);
            console.log(updateJobs)
        })
        .catch(error => {
            console.error('error fetching data:', error);
            setUpdateJobs(<ErrorMessage message="Error fetching data. Please try again." />);
        })
}

return (
    <section className="getJob-container">
        <form onSubmit={handleSubmit}>
            <h3>Find internships, part-time and full-time jobs.</h3>
            <input
                onChange={handleSearchData}
                type="text"
                placeholder="Search job"
                name="search"
                value={searchData.search}
                aria-label="Search job"
            />
            <label htmlFor="location"></label>
            <select
                id="location"
                value={searchData.location}
                onChange={handleSearchData}
                name="location"
                aria-label="Select region"
            >
                <option value="">Hela Sverige</option>
                {locationData.map(location => location.region)}
            </select>
            {searchData.location && (
                <select
                    id="location"
                    value={searchData.municipalitieLocation}
                    onChange={handleSearchData}
                    name="municipalitieLocation"
                    aria-label="Select municipality"
                >
                    <option value="">Alla kommuner</option>
                    {municipalities}
                </select>
            )}
            <button className="buttons" type="submit" onClick={handleSubmit} aria-label="Submit search">Submit</button>
        </form>
        <div className="getJob-search-taggs">
            <button className="buttons" type="button" value="skola" onClick={handleTags} aria-label="Search for Skola">Skola</button>
            <button className="buttons" type="button" value="bank" onClick={handleTags} aria-label="Search for Bank">Bank</button>
            <button className="buttons" type="button" value="säkerhet" onClick={handleTags} aria-label="Search for Säkerhet">Säkerhet</button>
            <button className="buttons" type="button" value="utomlands" onClick={handleTags} aria-label="Search for Utomlands">Utomlands</button>
        </div>
        
        {showJobs && (
        <main className="searched-jobs-main">
            {updateJobs}
        </main>
        )}
    </section>
);
};

