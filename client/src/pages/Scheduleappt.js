import React, { useState } from 'react'

const Scheduleappt = ({ appointments }) => {
  const [filter, setFilter] = useState('default');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // Apply sorting logic based on the new filter to your appointment data
    // Update the component state or make an API call to fetch sorted data
  };

  return (
    <>
    <div className='templateContainer'>
      <div className='searchInput_Container'>
        <input id="searchInput" type="text" placeholder='Search here...' />
      </div>
      <div className='sortContainer'>
      <label>Sort by:</label>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="relevant">Relevant</option>
        <option value="ratings">Ratings</option>
        <option value="experience">Experience</option>
      </select>
    </div>
  </div>

  <div className="auth-wrapper">
    <div className="auth-inner" style={{width: "auto"}}>
  <h1>Doctors</h1>
    <table style={{width: 200}}>
      <tr>
      <th>Name</th>
      <th>E-mail</th>
      </tr>
    </table>
  </div>
    </div>
    </>
  );
}


export default Scheduleappt;