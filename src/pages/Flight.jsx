import React, { useState, useEffect } from 'react';
import '../styles/flight.css';
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import FlightCard from '../shared/FlightCard';

const Flight = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const { data: flights, error, loading } = useFetch(`${BASE_URL}/flights`);

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  // Get the current day of the week dynamically
  const currentDay = new Date(currentDate).toLocaleDateString('en-US', { weekday: 'long' });

  // Filter flights based on selected filters
  const filteredFlights = flights.filter(
    (flight) =>
      flight.departure.includes(departure.toUpperCase()) &&
      flight.destination.includes(destination.toUpperCase()) &&
      (currentDate === '' || flight.weekday === currentDay)
  );

  return ( 
    <>
      <div className="flights">
        {/* Flight Filters */}
        <div className="flight-filters">
          <input
            type="text"
            id="departureAirport"
            value={departure}
            placeholder="Enter your departure location  🛫"
            onChange={handleDepartureChange}
          />
          <input
            type="text"
            id="destinationAirport"
            value={destination}
            placeholder="Enter your destination location  📍"
            onChange={handleDestinationChange}
          />
          <input
            type="date"
            id="date"
            value={currentDate}
            onChange={handleDateChange}
          />
        </div>

        {/* Display Flights */}
        <div className="flight-list">
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching flights: {error}</p>}
          {!loading && !error && (
            <>
              {filteredFlights.slice(0, 4).map((flight) => (
                <FlightCard flight={flight}/>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Flight;
