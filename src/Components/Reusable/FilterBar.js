/*
Denna komponent kan förse användare med filtrerings-alternativ för att hjälpa användare att förfina sin jobbsökning.
Vi kan inkludera filter för jobbkategorier, anställningsform, plats m.m.

*/
import React, { useState } from 'react';
/* Importera react och usestate*/

const FilterBar = ({ onFilter }) => {
    /* skapar filterbar  functiona komponenten som tar emot onFilter prop */
  const [jobType, setJobType] = useState('');
 /* skapar jobType sstate variabel och setJobType funktion för att uppdatera den */
  const handleChange = (event) => {
    setJobType(event.target.value);
    onFilter(event.target.value);
  };
  /* Definerar handleChange funktionen som uppdaterar JobTypr staten och callar onFilter funktionen med den valda jobtypen */

  return (
    <div className="filter-bar">
      <label htmlFor="job-type">Job Type:</label>
      <select id="job-type" value={jobType} onChange={handleChange}>
        <option value="">All</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
    </div>
  );
  /* Return the JSX for the FilterBar component, which includes a label and a select input for choosing job types */
};

export default FilterBar;
