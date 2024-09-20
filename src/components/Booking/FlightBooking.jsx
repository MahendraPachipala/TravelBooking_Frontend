import React, { useState, useContext } from 'react'
import './FlightBooking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'

const FlightBooking = ({flight}) => {
   const { price,airline,departure,destination, } = flight
   const navigate = useNavigate()

   const { user } = useContext(AuthContext)

   const [booking, setBooking] = useState({
      userId: user && user._id,
      userEmail: user && user.email,
      airlines: airline,
      fullName: '',
      phone: '',
      NoOfpassengers: 1,
      bookAt: '',
      departure:departure,
      destination:destination,
      bill:0,
   })

   const handleChange = e => {
      setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const serviceFee = 10
   const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

   const handleClick = async e => {
      e.preventDefault()

      try {
         if (!user || user === undefined || user === null) {
            return alert('Please sign in')
         }
         const updatedBooking = { ...booking, bill: totalAmount };
         setBooking(updatedBooking);


         const res = await fetch(`${BASE_URL}/flightbooking`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(updatedBooking),
         })

         const result = await res.json()

         if(!res.ok) {
            return alert(result.message)
         }
         navigate('/flightthank-you')
      } catch (error) {
         alert(error.message)
      }   
   }

   return (
      <div className='booking'>
         <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour__rating d-flex align-items-center">
               <i class='ri-star-fill' style={{ 'color': 'var(--secondary-color)' }}></i>
            </span>
         </div>

         {/* =============== BOOKING FORM START ============== */}
         <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type="text" placeholder='Full Name' id='fullName' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type="tel" placeholder='Phone' id='phone' required
                     onChange={handleChange} />
               </FormGroup>
               <FormGroup className='d-flex align-items-center gap-3'>
                  <input type="date" placeholder='' id='bookAt' required
                     onChange={handleChange} />
                  <input type="number" placeholder='Guest' id='guestSize' required
                     onChange={handleChange} />
               </FormGroup>
            </Form>
         </div>
         {/* =============== BOOKING FORM END ================ */}


         {/* =============== BOOKING BOTTOM ================ */}
         <div className="booking__bottom">
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                  <h5 className='d-flex align-items-center gap-1'>${price} <i class='ri-close-line'></i> 1 person</h5>
                  <span> ${price}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                  <h5>Service charge</h5>
                  <span>${serviceFee}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0 total'>
                  <h5>Total</h5>
                  <span>${totalAmount}</span>
               </ListGroupItem>
            </ListGroup>
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
         </div>
      </div>
   )
}

export default FlightBooking;