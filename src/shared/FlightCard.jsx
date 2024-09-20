import React from 'react'
import { Link } from 'react-router-dom'

const FlightCard = ({ flight }) => {

   const {_id,departure,destination, weekday, price, airline, duration } = flight

   return (
  <>
    <div key={flight.id} className="flight-item">
                  <div>
                    <p>
                      {departure} 🛫 to {destination} 📍
                    </p>
                  </div>
                  <div>
                    <p>Weekday: {weekday} 📅</p>
                  </div>
                  <div>
                    <p>Airline: {airline} ✈️</p>
                  </div>
                  <div>
                    <p>Duration: {duration} 🕛</p>
                  </div>
                  <div>
                  <Link to={`/flights/${_id}`}>
                  <button className="bg-[#a70885] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#900368] transition-all">
                  Book Now
                  </button>                  
                  </Link>
                  </div>
                </div>
  </>
      
   )
}

export default FlightCard