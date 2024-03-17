import React, { useState } from 'react';
import axios from 'axios';


const Locateme = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const [nearbyLocation, setNearbyLocation] = useState("");

    const handleCurrentLocationChange = (e) => {
        setCurrentLocation(e.target.value);
    };

    const handleNearbyLocationChange = (e) => {
        setNearbyLocation(e.target.value);
    };

    const handleSearch = () => {
        // Handle search logic here, like fetching nearby locations
        // You can use axios or any other HTTP client library
        console.log("Search current location:", currentLocation);
        console.log("Search nearby location:", nearbyLocation);
    };
    return (
        <div>

            <div>
                <div className="input-container">
                    <input
                        type="text"
                        value={currentLocation}
                        onChange={handleCurrentLocationChange}
                        placeholder="Enter current location"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={nearbyLocation}
                        onChange={handleNearbyLocationChange}
                        placeholder="Search nearby locations"
                    />
                </div>
                <div className="button-container">
                    <button className="button" onClick={handleSearch}>Search</button>
                </div>
            </div>




            
            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.95458808731!2d94.2460318744347!3d26.74582521724442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746dd4324e1ba9d%3A0x139c2038ed77e4da!2sJorhat%20Engineering%20College!5e0!3m2!1sen!2sin!4v1707399978795!5m2!1sen!2sin"
                    width="1350" height="550"
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Responsive Google Map">
                </iframe>
            </div>

        </div>
    );
};

export default Locateme;