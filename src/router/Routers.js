import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import HotelThankyou from '../pages/HotelThankyou'
import FlightThankyou  from '../pages/FlightThankyou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import HotelDetails from './../pages/HotelDetails'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import Flight from './../pages/Flight'
import Hotel from '../pages/Hotel'
import BookedHotels from '../pages/BookedHotels'
import Bookedtours from '../pages/BookedTours'
import FlightDetails from '../pages/FlightDetails'
import BookedFlights from '../pages/BookedFlights'
import About from '../pages/About'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/hotelthank-you' element ={<HotelThankyou/>}/>
         <Route path='/flightthank-you' element ={<FlightThankyou/>}/>
         <Route path='/tours/search' element={<SearchResultList/>} /> 
         <Route path='/hotel' element = {<Hotel/>}/>
         <Route path='/hotels/:id' element={<HotelDetails/>}/>
         <Route path ='/flight' element ={<Flight/>}/>
         <Route path ='/flights/:id' element ={<FlightDetails/>}/>
         <Route path = '/bookedhotels' element ={<BookedHotels/>}/>
         <Route path = '/bookedtours' element ={<Bookedtours/>}/>
         <Route path = '/bookedflights' element ={<BookedFlights/>}/>
         <Route path ='/About' element ={<About/>}/>
      </Routes>
   )
}

export default Routers