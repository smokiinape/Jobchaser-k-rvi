import React from "react";
import { useState, useEffect } from 'react'
import SearchBar from '../Reusable/SearchBar';
import './GetJobData.css'

export default function GetJobData() {
    const [searchData, setSearchData] = useState({
        search: "",
        location: "",
        municipalitieLocation: ""
    });

    const [locationData, setLocationData] = useState([]);
    let locationArray = [];

    const [municipalities, setMunicipalities] = useState("");

    const [updateJobs, setUpdateJobs] = useState("")


    //Get location data
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
    //End location data

    //Get the municaplities after you choose region. 
    useEffect(() => {
        setMunicipalities(prevMunicipalities => {

            locationData.map(location => {
                if (location.region.props.value === searchData.location) {
                    setMunicipalities(location.municipalitie)
                }
            })
        })
    }, [searchData.location]);
    //End the municaplities after you choose region. 

    //Search 
    function handleSearchData(event) {


        const { name, value, type, checked } = event.target
        setSearchData(prevUserData => {

            return {
                ...prevUserData,
                [name]: type === "checkbox" ? checked : value
            }

        })
    };
    //End search

    function handleSubmit(event) {
        event.preventDefault()
        let url = `https://jobsearch.api.jobtechdev.se/search?q=${searchData.search}&offset=0&limit=100&municipality=${searchData.municipalitieLocation}&region=${searchData.location}`
        if (searchData.location == "" && searchData.municipalitieLocation == "") {
            url = `https://jobsearch.api.jobtechdev.se/search?q=${searchData.search}&offset=0&limit=100&`

        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let jobs
                if (data.hits.length < 1) {
                    jobs = <h1>Cant found what you searched for</h1>
                } else {
                    jobs = data.hits.map(element => {
                        return (
                            <div className="job-box" key={data.hits.indexOf(element)}>
                                <img src={element.logo_url ? element.logo_url : "public/images/no-image.jpg"} alt="LOGO" />
                                <h4>{element.headline}</h4>
                                <h5>{element.workplace_address.region}</h5>
                                <h6>{element.workplace_address.municipality}</h6>
                                <p>{element.description.text.substring(0, 200)}...</p>
                                <a href={element.webpage_url} target="_blank">Se annons</a>
                            </div>
                        )
                    })

                }

                setUpdateJobs(jobs)
                console.log(updateJobs)
            })
        setSearchData({
            search: "",
            location: "",
            municipalitieLocation: ""
        })
    };

    //Handle Taggs
    function handleTags(event) {
        setSearchData(prevSearchData => ({
            ...prevSearchData,
            search: event.target.value
        }))
    };
    //End tags
    console.log(searchData)

    return (

        <div className="container">
        
            <form onSubmit={handleSubmit}>
                <h3>Search job here.</h3>
                <input
                    onChange={handleSearchData}
                    type="text"
                    placeholder="Search job"
                    name="search"
                    value={searchData.search}
                />
                <label htmlFor="location">What is the location you looking for?</label>
                <select
                    id="location"
                    value={searchData.location}
                    onChange={handleSearchData}
                    name="location"
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
                    >
                        <option value="">Alla kommuner</option>
                        {municipalities}
                    </select>
                )}
                <button>Submit</button>
            </form >
            <div className="search-taggs">
                <button value="skola" onClick={handleTags}>Skola</button>
                <button value="bank" onClick={handleTags}>Bank</button>
                <button value="säkerhet" onClick={handleTags}>Säkerhet</button>
                <button value="utomlands" onClick={handleTags}>Utomlands</button>
            </div>
            <main>
                {updateJobs}
            </main>
            </div>

    );
};




